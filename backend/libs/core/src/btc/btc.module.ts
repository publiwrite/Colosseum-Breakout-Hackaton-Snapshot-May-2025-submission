import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BtcService } from '@libs/core/btc/btc.service';
import { UnisatService } from '@libs/core/btc/unisat.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [ConfigService, BtcService, UnisatService],
  exports: [BtcService, UnisatService],
})
export class BtcModule {}
