const ECPair = ECPairFactory(ecc);
bitcoin.initEccLib(ecc);

interface IUTXO {
  txid: string;
  vout: number;
  value: number;
}

type FeeResponse = {
  [key in
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | '13'
    | '14'
    | '15'
    | '16'
    | '17'
    | '18'
    | '19'
    | '20'
    | '21'
    | '22'
    | '23'
    | '24'
    | '25'
    | '144'
    | '504'
    | '1008']: number;
};

/// Detect address type
enum AddressType {
  NATIVE_SEGWIT_P2WPKH = 'Native Segwit P2WPKH',
  NESTED_SEGWIT_P2SH_P2PKH = 'Nested Segwit P2SH_P2PKH',
  TAPROOT_P2TR = 'Taproot P2TR',
  LEGACY_P2PKH = 'Legacy P2PKH',
}

@Injectable()
export class BtcService {
  private readonly logger = new Logger(BtcService.name);

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  get network(): bitcoin.Network {
    if (this.configService.get('BTC_NETWORK') === 'mainnet')
      return bitcoin.networks.bitcoin;
    else return bitcoin.networks.testnet;
  }

  get blockStreamApi(): string {
    // Official docs: https://github.com/Blockstream/esplora/blob/master/API.md
    return this.configService.get('BTC_NETWORK_URL_API');
  }

  async getUTXO(address: string): Promise<IUTXO[]> {
    const restURL = `${this.blockStreamApi}/address/${address}/utxo`;
    const res = await this.httpService.axiosRef.get(restURL);
    return res.data;
  }

  async getTxHex(txId: string): Promise<string> {
    const restURL = `${this.blockStreamApi}/tx/${txId}/hex`;
    const res = await this.httpService.axiosRef.get(restURL);
    return res.data;
  }

  async broadcast(txHex: string) {
    try {
      this.logger.log('Broadcasting tx: %s', txHex);
      const res = await this.httpService.axiosRef.post(
        `${this.blockStreamApi}/tx`,
        txHex,
      );
      return res.data;
    } catch (e) {
      this.logger.error('Broadcast tx error:' + e.response?.data);
      throw new Error(e.response?.data || e.message);
    }
  }

  detectAddressType(address: string): AddressType {
    if (address.startsWith('tb1q') || address.startsWith('bc1q'))
      return AddressType.NATIVE_SEGWIT_P2WPKH;
    if (address.startsWith('tb1p') || address.startsWith('bc1p'))
      return AddressType.TAPROOT_P2TR;
    if (address.length > 34) return AddressType.NESTED_SEGWIT_P2SH_P2PKH;
    return AddressType.LEGACY_P2PKH;
  }

  _estimateFee(
    signer,
    psbt,
    sender,
    remainBal,
    feeRate /* satoshis per byte */,
  ) {
    const tPsbt = psbt.clone();
    tPsbt.addOutput({ address: sender, value: remainBal });
    tPsbt.signAllInputs(signer);
    tPsbt.finalizeAllInputs();
    const estTx = tPsbt.extractTransaction(true);
    const bytes = estTx.byteLength();
    const vBytes = estTx.virtualSize();
    const finalFee = vBytes * feeRate + 1; // Add 1 satoshi to pass min relay fee not met
    return { bytes, vBytes, finalFee };
  }

  sendBitcoin = async (
    payerPrivateKeyEnvVarName: string,
    to: string,
    amount = 1000,
    feeRate = 1,
    maxFeeRate = 100,
    job?: Job<any, any, any>,
  ): Promise<string> => {
    const { keyPair, publicKey } = this.initKeyPair(payerPrivateKeyEnvVarName);
    const from = this.getNativeSegwitP2WPKH(publicKey).address;

    // This config will be set based on address type
    let signer: bitcoin.Signer,
      payment: bitcoin.Payment,
      sender: string | undefined;

    const addressType = this.detectAddressType(from);
    switch (addressType) {
      case AddressType.TAPROOT_P2TR: {
        const taprootP2TR = this.getTaprootP2TR(keyPair);
        signer = taprootP2TR.signer;
        payment = taprootP2TR.payment;
        sender = payment.address;
        break;
      }
      default:
        throw new Error('Invalid address type');
    }
    if (sender?.toLowerCase() !== from.toLowerCase()) {
      throw new Error(
        `The signer does not match with sender address type. Decoded address is ${sender} while input is ${from}`,
      );
    }

    const fromToMessage = `From ${sender} (${addressType}) to ${to} amount ${(
      amount / 1e8
    ).toFixed(8)} BTC `;
    if (job) {
      await job.log(fromToMessage);
    } else {
      this.logger.log(fromToMessage);
    }

    const utxos = await this.getUTXO(sender);
    if (!utxos.length) throw new Error('No UTXO found');

    const totalUnspent = utxos
      .filter((utxo) => utxo.value > 5000)
      .reduce((sum, { value }) => sum + value, 0);

    // Build transaction

    const psbt = new bitcoin.Psbt({
      network: this.network,
      maximumFeeRate: maxFeeRate,
    });
    const inputs: any[] = [];
    for (const utxo of utxos) {
      const input = { hash: utxo.txid, index: utxo.vout };
      if (addressType != AddressType.LEGACY_P2PKH) {
        // Add witnessUtxo data
        input['witnessUtxo'] = { script: payment.output!, value: utxo.value };
        if (addressType == AddressType.TAPROOT_P2TR) {
          input['tapInternalKey'] = toXOnly(keyPair.publicKey);
        }
        if (addressType == AddressType.NESTED_SEGWIT_P2SH_P2PKH) {
          input['redeemScript'] = payment.redeem!.output;
        }
      } else {
        const hex = await this.getTxHex(utxo.txid);
        input['nonWitnessUtxo'] = Buffer.from(hex, 'hex');
      }
      inputs.push(input);
    }
    psbt.addInputs(inputs);
    psbt.addOutput({ address: to, value: amount });
    // Validate final output with fee
    const remainBal = totalUnspent - amount;
    const { bytes, vBytes, finalFee } = this._estimateFee(
      signer,
      psbt,
      sender,
      remainBal,
      feeRate,
    );

    const sizeFeeMessage = `Size ${bytes}, vSize ${vBytes}. Total unspent ${totalUnspent}, FeeRate ${feeRate}, MaxFeeRate ${maxFeeRate}, Fee ${finalFee}`;
    if (job) {
      await job.log(sizeFeeMessage);
    } else {
      this.logger.log(sizeFeeMessage);
    }

    const DUST_THRESHOLD = 546;
    if (totalUnspent < finalFee + amount + DUST_THRESHOLD) {
      this.logger.error(
        `Total less than fee + amount + DUST_THRESHOLD: ${totalUnspent} < ${finalFee} + ${amount} + ${DUST_THRESHOLD}`,
      );
      throw Error(
        `Total less than fee + amount + DUST_THRESHOLD: ${totalUnspent} < ${finalFee} + ${amount} + ${DUST_THRESHOLD}`,
      );
    }
    psbt.addOutput({ address: sender, value: remainBal - finalFee });

    // Broadcast transaction
    const tx = psbt.extractTransaction();
    return await this.broadcast(tx.toHex());
  };

  initKeyPair(payerPrivateKeyEnvVarName: string) {
    const WIF = this.configService.get(payerPrivateKeyEnvVarName);
    if (!WIF) throw new Error(`${payerPrivateKeyEnvVarName} is not set`);
    // Decode WIF private key
    const keyPair = ECPair.fromWIF(WIF, this.network);
    return {
      keyPair,
      publicKey: keyPair.publicKey,
    };
  }

  getLegacyP2PKH(publicKeyBuffer: Buffer) {
    return bitcoin.payments.p2pkh({
      pubkey: publicKeyBuffer,
      network: this.network,
    });
  }

  // Taproot P2TR with 62 chars. Start with tb1p or bc1p
  // Ex: tb1pmamsssqlv0j7dda8g04phcsn0qzndy6kff4hq293e85drju0f7sq5uzedx
  getTaprootP2TR(keyPair: bitcoin.Signer): { payment; signer } {
    function tweakSigner(
      signer: bitcoin.Signer,
      opts: any = {},
    ): bitcoin.Signer {
      // @ts-expect-error
      let privateKey: Uint8Array | undefined = signer.privateKey!;
      if (!privateKey)
        throw new Error('Private key is required for tweaking signer!');

      if (signer.publicKey[0] === 3) privateKey = ecc.privateNegate(privateKey);

      const tweakedPrivateKey = ecc.privateAdd(
        privateKey,
        tapTweakHash(toXOnly(signer.publicKey), opts.tweakHash),
      );
      if (!tweakedPrivateKey) throw new Error('Invalid tweaked private key!');

      return ECPair.fromPrivateKey(Buffer.from(tweakedPrivateKey), {
        network: opts.network,
      });
    }
    // Tweak the original keypair
    const signer = tweakSigner(keyPair, { network: this.network });
    // Generate an address from the tweaked public key
    return {
      payment: bitcoin.payments.p2tr({
        pubkey: toXOnly(signer.publicKey),
        network: this.network,
      }),
      signer,
    };
  }

  async getFeeEstimate(): Promise<FeeResponse> {
    // https://blockstream.info/api/fee-estimates
    const restURL = `${this.blockStreamApi}/fee-estimates`;
    const res = await this.httpService.axiosRef.get(restURL);
    return res.data;
  }
}
