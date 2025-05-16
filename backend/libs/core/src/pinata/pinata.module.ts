import { Module } from '@nestjs/common';
import { PinataService } from './pinata.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [ConfigService, PinataService],
  exports: [PinataService],
})
export class PinataModule {}
