import { isProdEnvironment, PHYSICAL_FORMATS, Transaction } from '@lib/common';
import { PrismaService } from '@libs/core';
import { InjectQueue } from '@nestjs/bullmq';
import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  PublicationFormat,
  HelioTransactionStatus,
  PrismaClient,
  UserOwnedPublicationSource,
  UserOwnedPublicationStatus,
  PaymentType,
  OrderStatus,
  OrderItemStatus,
  R_BookLicenseOrderStatus,
} from '@prisma-clients/main';
import { Queue } from 'bullmq';
import {
  BalanceType,
  CalculateBalancesJobInput,
} from '../processors/dto/calculate-balances-job.input';
import { SolanaNftService } from '../solana-nft/solana-nft.service';
import { PaylinkEventPayload } from './dto/webhooks.dto';
import { HelioClient } from './helio.client';
import { QueueNames } from '@lib/common/entities/queues';
import { CreateBookVaultOrderJobInput } from '../processors/create-book-vault-order.processor';

@Injectable()
export class HelioService {
  private readonly logger = new Logger(HelioService.name);

  constructor(
    private readonly helioClient: HelioClient,
    private readonly configService: ConfigService,
    @InjectQueue(QueueNames.BookLicensePostPayment)
    private postPaymentQueue: Queue,
    @InjectQueue(QueueNames.GenerateBookLicenseCertificateQueue)
    private generateLicenseCertificateQueue: Queue,
  ) {}

  async createPayLink(
    amount: bigint,
    orderName: string,
    orderDescription: string,
    solWalletId: string,
    pricingCurrency: 'USD' | 'USDC' = 'USD',
  ) {
    const isProduction = isProdEnvironment(this.configService.get('NODE_ENV'));
    const usdCurrencyId = this.configService.get<string>(
      'HELIO_US_DOLLAR_CURRENCY_ID',
    );
    const usdcCurrencyId = this.configService.get<string>(
      'HELIO_SOL_USDC_CURRENCY_ID',
    );

    const response = await this.helioClient.createPayLink({
      name: orderName,
      price: amount.toString(),
      pricingCurrency:
        pricingCurrency === 'USD' ? usdCurrencyId : usdcCurrencyId,
      description: orderDescription,
      recipients: [
        {
          currencyId: usdcCurrencyId,
          walletId: solWalletId,
        },
      ],
      features: {
        canSwapTokens: isProduction && pricingCurrency === 'USD',
      },
    });
    return response.data;
  }

  async createPaymentLinkWebHook(paymentLinkId: string) {
    const targetUrl = this.configService.get<string>('HELIO_WEBHOOK_URL');
    const events = ['CREATED'];

    const response = await this.helioClient.createPaymentLinkWebHook(
      paymentLinkId,
      events,
      targetUrl,
    );
    return response.data;
  }

  async getPaymentLinkWebhookToken(paymentLinkId: string) {
    const helioOrder = await this.prismaService.helioOrder.findUnique({
      where: {
        paymentLinkId: paymentLinkId,
      },
    });

    return helioOrder.webhookSecret;
  }

  @Transaction()
  async processBookLicenseHelioTransaction(
    payload: PaylinkEventPayload,
    tx?: PrismaService | PrismaClient,
  ) {
    const licenseOrder = await tx.r_BookLicenseOrder.findFirst({
      where: {
        helioOrder: {
          paymentLinkId: payload.transactionObject.paylinkId,
        },
      },
      include: {
        helioOrder: true,
      },
    });

    if (!licenseOrder) {
      throw new BadRequestException('LicenseOrder not found');
    }

    const { transactionObject } = payload;

    await tx.r_HelioTransaction.create({
      data: {
        helioOrderId: licenseOrder.helioOrder.id,
        fee: BigInt(transactionObject.fee),
        receiver: transactionObject.meta.recipientPK,
        sender: transactionObject.meta.senderPK,
        status: transactionObject.meta.transactionStatus,
        tokenSymbol: transactionObject.meta.tokenQuote.to,
        signature: transactionObject.meta.transactionSignature,
        currencyId: transactionObject.meta.currency.id,
      },
    });

    if (
      payload.transactionObject.meta.transactionStatus ===
      HelioTransactionStatus.SUCCESS
    ) {
      await tx.r_BookLicenseOrder.update({
        where: {
          id: licenseOrder.id,
        },
        data: {
          status: 'PAID',
        },
      });

      await this.postPaymentQueue.add(
        `Process payment for book license order id  ${licenseOrder.id}`,
        {
          bookLicenseOrderId: licenseOrder.id,
        },
      );

      await this.generateLicenseCertificateQueue.add(
        `Generate signed agreement for book license order id ${licenseOrder.id}`,
        {
          bookLicenseOrderId: licenseOrder.id,
        },
      );

      // Add any additional processing logic here
    } else if (
      payload.transactionObject.meta.transactionStatus ===
      HelioTransactionStatus.FAILED
    ) {
      await tx.r_BookLicenseOrder.update({
        where: {
          id: licenseOrder.id,
        },
        data: {
          status: 'PAYMENT_FAILED',
        },
      });
    }
  }

  async getBookLicensePaymentLinkWebhookToken(paymentLinkId: string) {
    const helioOrder = await this.prismaService.r_HelioOrder.findUnique({
      where: {
        paymentLinkId,
      },
    });

    return helioOrder.webhookSecret;
  }

  async createHelioLicensePayment(userId: string, licenseId: string) {
    const license = await this.prismaService.r_BookLicense.findUnique({
      where: { id: licenseId },
    });

    if (!license) {
      throw new NotFoundException('License not found');
    }

    const isProduction = isProdEnvironment(this.configService.get('NODE_ENV'));
    const payLink = await this.createPayLink(
      BigInt(license.priceInCents) * BigInt(10000),
      `License for ${license.title}`,
      `Purchase of license for ${license.id}`,
      this.configService.get<string>('HELIO_BOOK_LICENSES_WALLET_ID'),
      'USDC',
    );

    const webhook = await this.createBookLicensePaymentLinkWebHook(payLink.id);

    await this.prismaService.r_BookLicenseOrder.create({
      data: {
        bookLicenseId: licenseId,
        buyerUserId: userId,
        status: R_BookLicenseOrderStatus.PENDING_TRANSACTION,
        helioOrder: {
          create: {
            paymentLinkId: payLink.id,
            webhookId: webhook.id,
            webhookSecret: webhook.sharedToken,
          },
        },
      },
    });

    return payLink.id;
  }

  async createBookLicensePaymentLinkWebHook(paymentLinkId: string) {
    const targetUrl = this.configService.get<string>(
      'RIGHTS_HELIO_WEBHOOK_URL',
    );
    const events = ['CREATED'];

    const response = await this.helioClient.createPaymentLinkWebHook(
      paymentLinkId,
      events,
      targetUrl,
    );
    return response.data;
  }
}
