import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import {
  generateSigner,
  keypairIdentity,
  percentAmount,
  publicKey,
  PublicKey,
  transactionBuilder,
  Umi,
} from '@metaplex-foundation/umi';
import { Keypair } from '@solana/web3.js';
import bs58 from 'bs58';
import { fromWeb3JsKeypair } from '@metaplex-foundation/umi-web3js-adapters';
import {
  HeliusService,
  toWeb3JsInstructions,
  toWeb3JsKeypairs,
} from '@libs/core';
import { isProdEnvironment } from '@lib/common';
import {
  createMint,
  createTokenIfMissing,
  findAssociatedTokenPda,
  mplToolbox,
  transferTokens,
} from '@metaplex-foundation/mpl-toolbox';
import {
  createProgrammableNft,
  mplTokenMetadata,
  TokenStandard,
} from '@metaplex-foundation/mpl-token-metadata';
import { createAmount } from '@metaplex-foundation/umi/src/Amount';

@Injectable()
export class SolanaBookLicensesService {
  private readonly logger = new Logger(SolanaBookLicensesService.name);
  private readonly umi: Umi;
  private readonly bookLicensesWalletAddressUmiPubKey: PublicKey;
  private readonly bookLicensesWalletKeypair: Keypair;

  constructor(
    private readonly configService: ConfigService,
    private readonly heliusService: HeliusService,
  ) {
    const privateKey = this.configService.get<string>(
      'BOOK_LICENSES_WALLET_PRIVATE_KEY',
    );

    this.bookLicensesWalletKeypair = Keypair.fromSecretKey(
      bs58.decode(privateKey),
    );

    this.bookLicensesWalletAddressUmiPubKey = publicKey(
      this.bookLicensesWalletKeypair.publicKey,
    );

    this.umi = createUmi(this.heliusService.helius.connection)
      .use(keypairIdentity(fromWeb3JsKeypair(this.bookLicensesWalletKeypair)))
      .use(mplToolbox())
      .use(mplTokenMetadata());
  }

  async createPnft(
    buyerAddress: string,
    authorAddress: string,
    metadataUri: string,
    name: string,
    symbol: string,
    sellerFeeBasisPoints: number,
  ): Promise<{ mintAddress: string; signature: string }> {
    this.logger.log(`🚀 Minting pNFT to ${buyerAddress}, uri=${metadataUri}`);

    const mint = generateSigner(this.umi);

    const builder = createProgrammableNft(this.umi, {
      mint,
      name,
      symbol,
      uri: metadataUri,
      sellerFeeBasisPoints: percentAmount(sellerFeeBasisPoints / 100),
      creators: [
        {
          address: publicKey(authorAddress),
          verified: false,
          share: 100,
        },
      ],
      tokenOwner: publicKey(buyerAddress),
      ruleSet: null,
      isMutable: false,
    });

    const instructions = toWeb3JsInstructions(builder.getInstructions());
    const signers = toWeb3JsKeypairs(builder.getSigners(this.umi));

    const signature = await this.heliusService.sendSmartTransaction(
      instructions,
      signers,
    );

    this.logger.log(
      `✅ pNFT minted: mint=${mint.publicKey.toString()} sig=${signature}`,
    );

    return {
      mintAddress: mint.publicKey.toString(),
      signature,
    };
  }

  async transferUSDC(
    recipientAddress: string,
    amountInCents: number,
  ): Promise<string> {
    this.logger.log(
      `Initiating USDC transfer of ${amountInCents} cents to ${recipientAddress}`,
    );

    try {
      const isProduction = isProdEnvironment(
        this.configService.get('NODE_ENV'),
      );
      const usdcMintAddress = isProduction
        ? this.configService.get<string>(
            'USDC_MINT_MAINNET',
            'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
          )
        : this.configService.get<string>(
            'USDC_MINT_DEVNET',
            '4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU',
          );

      const mint = publicKey(usdcMintAddress);
      const recipient = publicKey(recipientAddress);

      const [senderAta] = findAssociatedTokenPda(this.umi, {
        mint,
        owner: this.bookLicensesWalletAddressUmiPubKey,
      });

      const [recipientAta] = findAssociatedTokenPda(this.umi, {
        mint,
        owner: recipient,
      });

      const builder = transactionBuilder()
        .add(
          createTokenIfMissing(this.umi, {
            mint,
            owner: this.bookLicensesWalletAddressUmiPubKey,
          }),
        )
        .add(
          createTokenIfMissing(this.umi, {
            mint,
            owner: recipient,
          }),
        )
        .add(
          transferTokens(this.umi, {
            source: senderAta,
            destination: recipientAta,
            amount: BigInt(amountInCents) * 10_000n,
          }),
        );

      const instructions = toWeb3JsInstructions(builder.getInstructions());
      const signers = toWeb3JsKeypairs(builder.getSigners(this.umi));

      const signature = await this.heliusService.sendSmartTransaction(
        instructions,
        signers,
      );

      this.logger.log(`✅ USDC transfer confirmed: signature ${signature}`);
      return signature;
    } catch (error) {
      this.logger.error(
        `Failed to transfer USDC: ${error.message}`,
        error.stack,
      );
      throw new Error(`USDC transfer failed: ${error.message}`);
    }
  }
}
