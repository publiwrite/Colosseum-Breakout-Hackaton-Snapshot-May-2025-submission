const SOLANA_ADDRESS_REGEX = '[1-9A-HJ-NP-Za-km-z]{32,44}';
const regex = new RegExp(SOLANA_ADDRESS_REGEX);

export const isSolanaAddress = (text?: string): boolean =>
  !!text && regex.test(text);
