import { Injectable, Logger } from '@nestjs/common';
import { Helius, HeliusCluster } from 'helius-sdk';
import { ConfigService } from '@nestjs/config';
import {
  AddressLookupTableAccount,
  Keypair,
  sendAndConfirmTransaction,
  SendOptions,
  Signer,
  Transaction,
  TransactionInstruction,
  TransactionSignature,
} from '@solana/web3.js';
import { BackOffPolicy, Retryable } from 'typescript-retry-decorator';
import bs58 from 'bs58';

@Injectable()
export class HeliusService {
  private readonly logger = new Logger(HeliusService.name);
  public readonly helius: Helius;
  private readonly cluster: HeliusCluster;

  constructor(private readonly configService: ConfigService) {
    const apiKey = this.configService.get<string>('HELIUS_API_KEY');
    this.cluster = this.configService.get<HeliusCluster>('SOLANA_CLUSTER');
    this.helius = new Helius(apiKey, this.cluster);
  }

  async sendSmartTransaction(
    instructions: TransactionInstruction[],
    signers: Signer[],
    lookupTables?: AddressLookupTableAccount[],
    sendOptions?: SendOptions & {
      feePayer?: Signer;
      lastValidBlockHeightOffset: number;
    },
  ): Promise<TransactionSignature> {
    let txSignature = '';

    if (this.cluster === 'devnet') {
      // Unfortunately sendSmartTransaction is not supported yet on devnet by helius, hence we need to do this workaround for now
      txSignature = await sendAndConfirmTransaction(
        this.helius.connection,
        new Transaction().add(...instructions),
        signers,
        sendOptions,
      );
    } else {
      txSignature = await this.helius.rpc.sendSmartTransaction(
        instructions,
        signers,
        lookupTables,
        sendOptions,
      );
    }

    return txSignature;
  }
}
