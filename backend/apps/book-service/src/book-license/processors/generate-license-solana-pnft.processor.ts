import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Injectable, Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { QueueNames } from '@lib/common/entities/queues';
import { SolanaBookLicensesService } from '../book-license-solana.service';
import { PinataService, PrismaService } from '@libs/core';
import { BookLicenceSolanaPnftJobInput } from './dto/book-licence-solana-pnft-job.input';
import { generateSolanaPnftMetadataContent } from '../book-license.utils';
import { BookLicenseOrder } from '../entities/book-license-order.entity';
import { lookup } from 'mime-types';

@Injectable()
@Processor(QueueNames.GenerateBookLicenseSolanaPNftQueue)
export class GenerateLicenseSolanaPnftProcessor extends WorkerHost {
  private readonly logger = new Logger(GenerateLicenseSolanaPnftProcessor.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly solanaBookLicensesService: SolanaBookLicensesService,
    private readonly pinataService: PinataService,
  ) {
    super();
  }

  async process(
    job: Job<BookLicenceSolanaPnftJobInput, any, string>,
  ): Promise<any> {
    try {
      this.logger.debug(`Generating pnft for job ${job.id}`);

      const { bookLicenseOrderId } = job.data;

      const bookLicenseOrder = await this.prisma.r_BookLicenseOrder.findUnique({
        where: {
          id: bookLicenseOrderId,
        },
        include: {
          helioOrder: {
            include: {
              helioTransaction: true,
            },
          },
          bookLicense: {
            include: {
              metadata: true,
            },
          },
        },
      });

      const { bookLicense } = bookLicenseOrder;

      const symbol = 'PWLICENSE';
      const sellerFeeBasisPoints = 1000; // 10%

      const buyerAddress = bookLicenseOrder.helioOrder.helioTransaction.sender;
      const authorAddress = bookLicense.ownerWalletAddress;

      const metadataContent = generateSolanaPnftMetadataContent(
        bookLicense,
        bookLicense.metadata,
        bookLicenseOrder as unknown as BookLicenseOrder,
        authorAddress,
        bookLicense.coverAssetCid,
        lookup(bookLicense.coverAssetKey) || 'unknown',
        symbol,
        sellerFeeBasisPoints,
      );

      await job.log(
        `Solana inscription content: ${JSON.stringify(metadataContent)}`,
      );

      const metadataIpfsCid =
        await this.pinataService.uploadJson(metadataContent);

      const {
        mintAddress: solanaPNftAddress,
        signature: solanaPNftTxSignature,
      } = await this.solanaBookLicensesService.createPnft(
        buyerAddress,
        authorAddress,
        `ipfs://${metadataIpfsCid}`,
        metadataContent.name,
        symbol,
        sellerFeeBasisPoints,
      );

      await this.prisma.r_BookLicenseOrder.update({
        where: {
          id: bookLicenseOrderId,
        },
        data: {
          solanaPNftAddress,
          solanaPNftTxSignature,
        },
      });

      return { success: true };
    } catch (error) {
      this.logger.error(
        `Error generating solana inscription: ${error.message}`,
      );
      throw error;
    }
  }
}
