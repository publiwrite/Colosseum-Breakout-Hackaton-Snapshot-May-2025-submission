import { Context, Query, Resolver } from '@nestjs/graphql';
import { WalletMessageService } from './wallet-message.service';
import { WalletMessageEntity } from './entities/wallet-message.entity';
import { CookieOptions, Request } from 'express';
import { Logger } from '@nestjs/common';
import { AUTH_NONCE_COOKIE_NAME, getCookieDomain } from '@lib/common';

@Resolver(() => WalletMessageEntity)
export class WalletMessageResolver {
  private readonly logger = new Logger(WalletMessageResolver.name);
  constructor(private readonly walletMessageService: WalletMessageService) {}

  @Query(() => WalletMessageEntity)
  walletMessage(@Context('req') req: Request) {
    const options: CookieOptions = {
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      domain: getCookieDomain(process.env.NODE_ENV),
    };

    const message = this.walletMessageService.getMessage();
    req.res.setHeader('Cache-Control', 'private');
    req.res.cookie(AUTH_NONCE_COOKIE_NAME, message.nonce, options);
    return message;
  }
}
