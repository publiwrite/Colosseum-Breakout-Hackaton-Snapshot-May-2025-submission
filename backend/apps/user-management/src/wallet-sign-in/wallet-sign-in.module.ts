import { Module } from '@nestjs/common';
import { WalletSignInResolver } from './wallet-sign-in.resolver';
import { WalletSignInService } from './wallet-sign-in.service';
import {
  CognitoModule,
  InternalHttpClientModule,
  WalletModule,
} from '@lib/common';
import { ConfigService } from '@nestjs/config';
import { InternalHttpClients } from '@lib/common/enum';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    CognitoModule,
    WalletModule,
    UsersModule,
  ],
  providers: [WalletSignInResolver, WalletSignInService],
})
export class WalletSignInModule {}
