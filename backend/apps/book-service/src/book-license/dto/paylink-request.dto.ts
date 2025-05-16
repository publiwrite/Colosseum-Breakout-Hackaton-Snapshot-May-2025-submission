export interface PayLinkRequestBody {
  name: string;

  features: {
    requireEmail?: boolean;
    requireDiscordUsername?: boolean;
    requireDiscordLogin?: boolean;
    requireFullName?: boolean;
    requireTwitterUsername?: boolean;
    requireCountry?: boolean;
    requireDeliveryAddress?: boolean;
    requirePhoneNumber?: boolean;
    requireProductDetails?: boolean;
    requireMaxTransactions?: boolean;
    requireNftGate?: boolean;
    requireDiscordAuth?: boolean;
    requireAccessCode?: boolean;
    requireFixedCurrency?: boolean;
    canSwapTokens?: boolean;
    isHelioPlay?: boolean;
    isTransparentWallet?: boolean;
    nftDropEnabled?: boolean;
    requireTradingViewUsername?: boolean;
    allowAffiliate?: boolean;
    enableCountdown?: boolean;
    isEventEnabled?: boolean;
    splitRevenue?: boolean;
    splitEqually?: boolean;
    canChangeQuantity?: boolean;
    requireQuantityLimits?: boolean;
    canChangePrice?: boolean;
    isEscrowed?: boolean;
    showDiscountCode?: boolean;
    requireDiscordQuantityLimit?: boolean;
    requireAllowlist?: boolean;
    requireAirdrop?: boolean;
  };

  price?: string;

  pricingCurrency?: string;

  recipients?: {
    currencyId: string;
    walletId: string;
  }[];

  description?: string;

  template?:
    | 'PRODUCT'
    | 'SUBSCRIPTION'
    | 'PRE_SALE'
    | 'SINGLE_NFT'
    | 'VIDEO'
    | 'DISCORD_MEMBERSHIP'
    | 'INVOICE'
    | 'EMBEDDED'
    | 'LINK_OR_FILE'
    | 'TRADING_VIEW'
    | 'EVENT'
    | 'OTHER'
    | 'LEGACY';

  normalizedPrice?: string;

  notifySenderByEmail?: boolean;

  notifyReceiverByEmail?: boolean;

  addDiscordRole?: boolean;

  discordRoleIds?: string[];

  disabled?: boolean;

  dynamic?: boolean;

  content?: {
    text?: string;
    mediaUrl?: string;
    mediaAttachmentId?: string;
  };

  maxTransactions?: number;

  product?: {
    name: string;
    description: string;
    type: 'TEXT' | 'SELECTOR';
  };

  nftCollectionAddress?: string;

  discordAuthDetails?: {
    serverId: string;
    roleId: string;
  }[];

  nftDrop?: {
    mintAddresses: string[];
  };

  accessCodeAuthProperties?: {
    accessCode: string;
  };

  fixedCurrency?: {
    currency: string;
    price: number;
  };

  tradingViewIndicators?: {
    id: string;
    url: string;
    name: string;
  }[];

  affiliateDetails?: {
    bps: number;
  };

  eventDetails?: {
    datetime: Date;
    location?: string;
  };

  countdownDetails?: {
    startDatetime: Date;
    endDatetime?: Date;
  };

  splitWallets?: {
    address: string;
    percent?: number;
    sharePercent?: number;
  }[];

  discountCodes?: {
    percent: number;
    token: string;
    prId?: string;
    id?: string;
    tokenType: 'CODE' | 'NFT_COLLECTION';
  }[];

  limitSaleType?: 'TRANSACTION' | 'DISCORD_ID';

  minQuantity?: number;

  maxQuantity?: number;

  helioPlayProperties?: {
    durationSec?: number;
    previewAttachmentId?: string;
    media: {
      type: 'VIDEO';
      hosted: boolean;
    };
  };
}
