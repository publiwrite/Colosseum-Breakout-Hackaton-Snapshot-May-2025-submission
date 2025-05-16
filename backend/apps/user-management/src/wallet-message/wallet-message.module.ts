import { Module } from '@nestjs/common';
import { WalletMessageResolver } from './wallet-message.resolver';
import { WalletMessageService } from './wallet-message.service';
import { CognitoModule, WalletModule } from '@lib/common';

@Module({
  imports: [CognitoModule, WalletModule],
  providers: [WalletMessageResolver, WalletMessageService],
})
export class WalletMessageModule {}
