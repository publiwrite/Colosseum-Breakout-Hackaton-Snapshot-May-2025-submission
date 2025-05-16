import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Request } from 'express';
import { WalletSignInLegacyInput } from './dto/wallet-sign-in-legacy.input';
import { WalletSignInInput } from './dto/wallet-sign-in.input';
import { WalletRefreshTokenEntity } from './entities/wallet-refresh-token.entity';
import { WalletSignInEntity } from './entities/wallet-sign-in.entity';
import { WalletSignInService } from './wallet-sign-in.service';
import { AUTH_NONCE_COOKIE_NAME, PWCookies } from '@lib/common';

@Resolver(() => WalletSignInEntity)
export class WalletSignInResolver {
  constructor(private readonly walletSignInService: WalletSignInService) {}

  @Mutation(() => WalletSignInEntity)
  signInLegacyWithWallet(
    @Args('walletSignInInput') walletSignInInput: WalletSignInLegacyInput,
    @Context('req') req: Request,
  ) {
    return this.walletSignInService.signInLegacy(
      walletSignInInput,
      (req.cookies as PWCookies)?.[AUTH_NONCE_COOKIE_NAME],
    );
  }

  @Mutation(() => WalletSignInEntity)
  signInWithWallet(
    @Args('walletSignInInput') walletSignInInput: WalletSignInInput,
    @Context('req') req: Request,
  ) {
    return this.walletSignInService.signIn(
      walletSignInInput,
      (req.cookies as PWCookies)?.[AUTH_NONCE_COOKIE_NAME],
    );
  }

  @Query(() => WalletRefreshTokenEntity)
  walletRefreshToken(
    @Args('walletRefreshTokenInput') walletRefreshTokenInput: string,
  ) {
    return this.walletSignInService.refreshToken(walletRefreshTokenInput);
  }
}
