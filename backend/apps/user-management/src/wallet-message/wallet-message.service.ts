import { WalletService } from '@lib/common';
import { Injectable } from '@nestjs/common';
import { randomBytes } from 'crypto';
import { WalletMessageEntity } from './entities/wallet-message.entity';

@Injectable()
export class WalletMessageService {
  constructor(private readonly walletService: WalletService) {}

  getMessage(): WalletMessageEntity {
    const nonce = randomBytes(10).toString('hex');
    const statement = this.walletService.getStatement();
    const message = this.walletService.buildMessage(statement, nonce);

    return {
      nonce,
      statement,
      message,
    };
  }
}
