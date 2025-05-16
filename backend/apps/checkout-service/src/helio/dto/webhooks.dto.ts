export class PaylinkEventPayload {
  event: PaylinkEvents; // e.g. 'CREATED'
  transaction: string; // JSON string value of the transactionObject
  transactionObject: Transaction;
}

class Transaction {
  id: string;
  paylinkId: string;
  quantity: number;
  fee?: string;
  createdAt: string;
  paymentType: PaymentRequestType;
  claimDetails: {
    tradingView?: {
      username: string;
    };
    discord?: {
      username: string;
    };
  };
  meta: TransactionMeta;
}

enum TransactionStatus {
  INITIATED = 'INITIATED',
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
  CANCELED = 'CANCELED',
  SETTLED = 'SETTLED',
}

class TransactionMeta {
  id: string;
  transactionSignature: string; // transaction hash on the blockchain
  amount: string;
  recipientPK: string; // merchant's public key (wallet address)
  senderPK: string; // customer's public key (wallet address)
  customerDetails: {
    email?: string;
    discordUsername?: string;
    discordUser?: {
      id: string;
      username: string;
    };
    twitterUsername?: string;
    fullName?: string;
    country?: string;
    deliveryAddress?: string;
    phoneNumber?: string;
    street?: string;
    streetNumber?: string;
    city?: string;
    state?: string;
    areaCode?: string;
    additionalJSON?: string;
  };
  productDetails: {
    // From 'advanced options' (step 3 of paylink creation) -> additional information
    name?: string;
    value?: string;
  };
  splitRevenue: boolean;
  remainingAccounts: {
    amount: string;
    recipient: string;
  }[];
  totalAmount: string;
  affiliateAmount: string;
  affiliateCode?: string;
  affiliatePublicKey?: string;
  currency: {
    id: string;
    blockchain?: { engine: BlockchainEngine } | null;
  };
  transactionType?: TransactionType;
  tokenQuote?: TokenQuoteMeta;
  transactionStatus: TransactionStatus; // e.g. 'SUCCESS'
}

// used for converting between pricing currency (from) and what they paid with (to)
// note: from could be a crypto currency (e.g. (0.1 ETH), or fiat currency (e.g. $5)
// to is always going to be a crypto currency.
// This is useful when using swaps, to see what they paid
class TokenQuoteMeta {
  from: string;
  fromAmountDecimal: string;
  to: string;
  toAmountMinimal: string;
}

class BlockchainEngine {
  id: string;
  type: BlockchainEngineType;
}

enum PaymentRequestType {
  PAYLINK = 'PAYLINK',
  PAYSTREAM = 'PAYSTREAM',
}

enum PaylinkEvents {
  CREATED = 'CREATED',
}

enum TransactionType {
  REFUND = 'REFUND',
  PAYLINK = 'PAYLINK',
}

enum BlockchainEngineType {
  EVM = 'EVM',
  SOL = 'SOL',
  BTC = 'BTC',
}
