import { formatNumber } from './number';

type ConvertOptions = {
  currency?: string;
  useFreeLabel?: boolean;
};

/**
 * Converts an integer price (in cents) to a decimal price (in dollars).
 * @param {number} priceInCents - The price in cents (e.g., 700 for $7.00).
 * @param options - The options for the conversion.
 * @return {string} The price in dollars (e.g., $7.00).
 */
export function convertCentsToPriceTag(
  priceInCents: number,
  options?: ConvertOptions,
): string {
  const { currency = '$', useFreeLabel } = options || {};

  if (priceInCents === 0 && useFreeLabel) {
    return 'Free';
  }

  if (priceInCents !== 0 && !priceInCents) {
    return '';
  }

  const priceInDollars = priceInCents / 100;
  const priceInDecimal = formatNumber(priceInDollars);

  if (currency === 'USDC') {
    return `${priceInDecimal} ${getCurrencySymbolFromText(currency)}`;
  }
  return `${getCurrencySymbolFromText(currency)}${priceInDecimal}`;
}

const currencySymbols: Record<string, string> = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  JPY: '¥',
  AUD: 'A$',
  CAD: 'C$',
  CHF: 'CHF',
  CNY: '¥',
  SEK: 'kr',
  NZD: 'NZ$',
  MXN: 'MX$',
  SGD: 'S$',
  HKD: 'HK$',
  NOK: 'kr',
  KRW: '₩',
  TRY: '₺',
  RUB: '₽',
  INR: '₹',
  BRL: 'R$',
  ZAR: 'R',
  DKK: 'kr',
  PLN: 'zł',
  TWD: 'NT$',
  THB: '฿',
  IDR: 'Rp',
  HUF: 'Ft',
  CZK: 'Kč',
  ILS: '₪',
  CLP: 'CLP$',
  PHP: '₱',
  AED: 'د.إ',
  COP: 'COL$',
  SAR: 'ر.س',
  MYR: 'RM',
  RON: 'lei',
  USDC: 'USDC',
};

export function getCurrencySymbolFromText(currency: string): string {
  return currencySymbols[currency.toLocaleUpperCase()] || currency;
}
