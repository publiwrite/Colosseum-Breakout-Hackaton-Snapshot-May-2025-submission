import {
  CognitoService,
  GetUserByWalletResponseDto,
  WalletService,
} from '@lib/common';
import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import {
  SolanaSignInInput,
  SolanaSignInOutput,
} from '@solana/wallet-standard-features';
import { verifySignIn } from '@solana/wallet-standard-util';
import { IdentifierArray } from '@wallet-standard/base/src/identifier';
import bs58 from 'bs58';
import * as nacl from 'tweetnacl';
import { WalletSignInLegacyInput } from './dto/wallet-sign-in-legacy.input';
import { WalletSignInInput } from './dto/wallet-sign-in.input';
import { WalletRefreshTokenEntity } from './entities/wallet-refresh-token.entity';
import { WalletSignInEntity } from './entities/wallet-sign-in.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class WalletSignInService {
  private readonly logger = new Logger(WalletSignInService.name);

  constructor(
    private readonly walletService: WalletService,
    private readonly cognitoService: CognitoService,
    private readonly usersService: UsersService,
  ) {}

  async getUserByWallet(
    address: string,
  ): Promise<GetUserByWalletResponseDto> | null {
    try {
      return this.usersService.findUserByWalletAddress(address);
    } catch (error) {
      this.logger.error(error);

      return null;
    }
  }

  async signInLegacy(
    walletSignInInput: WalletSignInLegacyInput,
    nonceFromCookies: string | undefined,
  ): Promise<WalletSignInEntity> {
    const isValid = this.checkedLegacySignedMessage(
      walletSignInInput,
      nonceFromCookies,
    );

    return await this.generatedTokensForExistingOrNewUser(
      isValid,
      walletSignInInput.publicKey,
    );
  }

  async signIn(
    walletSignInInput: WalletSignInInput,
    nonceFromCookies: string | undefined,
  ): Promise<WalletSignInEntity> {
    this.logger.log(`Wallet sign in input: ${walletSignInInput}`);
    const isValid = this.checkNewStandardSignedMessage(
      walletSignInInput,
      nonceFromCookies,
    );
    this.logger.log(`Is valid: ${isValid}`);

    return await this.generatedTokensForExistingOrNewUser(
      isValid,
      walletSignInInput.publicKey,
    );
  }

  async refreshToken(refreshToken: string): Promise<WalletRefreshTokenEntity> {
    const { AuthenticationResult } =
      await this.cognitoService.refreshToken(refreshToken);

    return {
      access_token: AuthenticationResult.AccessToken,
      id_token: AuthenticationResult.IdToken,
      expires_at: AuthenticationResult.ExpiresIn,
    };
  }

  private async generatedTokensForExistingOrNewUser(
    isValid: boolean,
    publicKey: string,
  ): Promise<WalletSignInEntity> {
    this.logger.log(`Is valid: ${isValid}, public key: ${publicKey}`);
    if (!isValid) {
      this.logger.error(`Invalid signature`);
      throw new HttpException(`Invalid signature`, HttpStatus.BAD_REQUEST);
    }

    const user = await this.getUserByWallet(publicKey);

    if (!user) {
      await this.cognitoService.createUser(publicKey);
    }

    return await this.cognitoService.generateTokensForUser(publicKey);
  }

  private checkNewStandardSignedMessage(
    {
      features = [],
      chains = [],
      publicKey,
      serializedSignedMessage,
      serializedSignature,
      domain,
    }: WalletSignInInput,
    nonce: string,
  ): boolean {
    const input: SolanaSignInInput = {
      address: publicKey,
      statement: this.walletService.getStatement(),
      // Use nonce from the cookie, not the one from the UI
      nonce,
      domain,
    };

    const output: SolanaSignInOutput = {
      account: {
        address: publicKey,
        publicKey: bs58.decode(publicKey),
        chains: chains as IdentifierArray,
        features: features as IdentifierArray,
      },
      signature: bs58.decode(serializedSignature),
      signedMessage: bs58.decode(serializedSignedMessage),
    };

    return verifySignIn(input, output);
  }

  private checkedLegacySignedMessage(
    { publicKey, serializedSignedMessage }: WalletSignInLegacyInput,
    nonce: string,
  ): boolean {
    const derivedMessageBytes = this.walletService.encodeText(
      this.walletService.buildMessage(this.walletService.getStatement(), nonce),
    );

    const publicKeyBytes = bs58.decode(publicKey);
    const signedMessageBytes = bs58.decode(serializedSignedMessage);

    return nacl.sign.detached.verify(
      derivedMessageBytes,
      signedMessageBytes,
      publicKeyBytes,
    );
  }
}
