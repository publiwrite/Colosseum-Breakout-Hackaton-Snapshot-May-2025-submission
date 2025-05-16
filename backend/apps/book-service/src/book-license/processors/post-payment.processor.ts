import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Injectable, Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { QueueNames } from '@lib/common/entities/queues';
import { SolanaBookLicensesService } from '../book-license-solana.service';
import { BookLicensePostPaymentJobInput } from './dto/book-licence-post-payment-job.input';
import { PrismaService } from '@libs/core';

@Injectable()
@Processor(QueueNames.BookLicensePostPayment)
export class PostPaymentProcessor extends WorkerHost {
  private readonly logger = new Logger(PostPaymentProcessor.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly solanaBookLicensesService: SolanaBookLicensesService,
  ) {
    super();
  }

  async process(
    job: Job<BookLicensePostPaymentJobInput, any, string>,
  ): Promise<any> {
    try {
      this.logger.debug(`Processing post-payment actions for job ${job.id}`);

      const { bookLicenseOrderId } = job.data;

      const { bookLicense } = await this.prisma.r_BookLicenseOrder.findUnique({
        where: {
          id: bookLicenseOrderId,
        },
        include: {
          bookLicense: true,
        },
      });

      const { priceInCents, ownerWalletAddress } = bookLicense;

      const platformFee = 0.1;
      const totalPriceInCents = Number(priceInCents);

      const platformRoyaltyInCents = Math.floor(
        platformFee * totalPriceInCents,
      );

      const amountToTransferToUserInCents =
        totalPriceInCents - platformRoyaltyInCents;

      this.logger.log(
        `Transferring ${amountToTransferToUserInCents} cents to wallet ${ownerWalletAddress}`,
      );

      const postPaymentTxSignature =
        await this.solanaBookLicensesService.transferUSDC(
          ownerWalletAddress,
          amountToTransferToUserInCents,
        );

      await this.prisma.r_BookLicenseOrder.update({
        where: {
          id: bookLicenseOrderId,
        },
        data: {
          postPaymentTxSignature,
        },
      });

      return { success: true };
    } catch (error) {
      this.logger.error(
        `Error processing post-payment actions: ${error.message}`,
      );
      throw error;
    }
  }
}
