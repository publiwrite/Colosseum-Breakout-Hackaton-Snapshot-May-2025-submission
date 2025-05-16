import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { BookLicenseMetadataExtractorProcessor } from './processors/book-license-metadata-extractor.processor';
import { PostPaymentProcessor } from './processors/post-payment.processor';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { QueueNames } from '@lib/common/entities/queues';
import {
  DatabaseModule,
  HeliusModule,
  PinataModule,
  S3Module,
} from '@libs/core';
import { BookLicenseService } from './book-license.service';
import { BookLicenseResolver } from './book-license.resolver';
import { GenerateLicenseCertificateProcessor } from './processors/generate-license-certificate.processor';
import { BookLicenseCreationProcessor } from './processors/book-license-creation.processor';
import { SolanaBookLicensesService } from './book-license-solana.service';
import { GenerateLicenseSolanaPnftProcessor } from './processors/generate-license-solana-pnft.processor';

@Module({
  imports: [
    DatabaseModule,
    S3Module,
    ConfigModule,
    BullModule.registerQueue(
      {
        name: QueueNames.BookLicenseMetadata,
      },
      {
        name: QueueNames.BookLicensePostPayment,
      },
      {
        name: QueueNames.GenerateBookLicenseCertificateQueue,
      },
      {
        name: QueueNames.GenerateBookLicenseSolanaPNftQueue,
      },
      {
        name: QueueNames.InscribeBtcQueue,
      },
      {
        name: QueueNames.BookLicenseCreation,
      },
    ),

    BullModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        connection: {
          host: configService.get<string>('REDIS_HOST'),
          port: configService.get<number>('REDIS_PORT'),
        },
        defaultJobOptions: {
          attempts: 3,
          backoff: {
            type: 'exponential',
            delay: 3000,
          },
        },
      }),
      inject: [ConfigService],
    }),
    HeliusModule,
    PinataModule,
  ],
  providers: [
    BookLicenseService,
    BookLicenseResolver,
    SolanaBookLicensesService,
    BookLicenseMetadataExtractorProcessor,
    PostPaymentProcessor,
    GenerateLicenseCertificateProcessor,
    BookLicenseCreationProcessor,
    GenerateLicenseSolanaPnftProcessor,
  ],
  controllers: [],
})
export class BookLicenseModule {}
