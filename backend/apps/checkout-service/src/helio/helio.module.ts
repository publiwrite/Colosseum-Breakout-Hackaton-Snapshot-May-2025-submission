import { Module } from '@nestjs/common';
import { HelioClient } from './helio.client';
import { HelioService } from './helio.service';
import { HelioWebhookController } from './helio-webhook.controller';
import { DatabaseModule } from '@libs/core';
import { SolanaNftModule } from '../solana-nft/solana-nft.module';
import { BullModule } from '@nestjs/bullmq';
import { QueueNames } from '@lib/common/entities/queues';

@Module({
  imports: [
    DatabaseModule,
    SolanaNftModule,
    BullModule.registerQueue(
      {
        name: QueueNames.BookLicensePostPayment,
      },
      {
        name: QueueNames.GenerateBookLicenseCertificateQueue,
      },
      {
        name: QueueNames.GenerateBookLicenseSolanaPNftQueue,
      },
    ),
  ],
  providers: [HelioClient, HelioService],
  exports: [HelioClient, HelioService],
  controllers: [HelioWebhookController],
})
export class HelioModule {}
