import { Module } from '@nestjs/common';
import { HeliusService } from './helius.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [ConfigService, HeliusService],
  exports: [HeliusService],
})
export class HeliusModule {}
