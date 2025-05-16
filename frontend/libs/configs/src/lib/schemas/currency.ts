import { z } from 'zod';
import { DEFAULT_MIN_PRICE_IN_CENTS } from '../constants';
import { convertCentsToPriceTag } from '../utils';

export const currencySchema = z
  .string()
  // transform with decimal regex
  .transform((value) => {
    if (!value) return 0;
    const priceInCents = Number(
      (Number(value.replace(/[^0-9.]/g, '')) * 100).toFixed(0),
    );
    return priceInCents;
  })
  .refine((value) => value > 0, { message: 'Please enter a valid price' });

export const generatePriceInCentsSchema = ({
  minPriceInCents = DEFAULT_MIN_PRICE_IN_CENTS,
  maxPriceInCents,
}: {
  minPriceInCents?: number;
  maxPriceInCents?: number;
} = {}) =>
  z
    .string()
    .optional()
    .refine(
      (value) => {
        if (!value) return true;

        const parsedPrice = Number(value?.replace(/[^0-9.]/g, ''));
        const min = minPriceInCents / 100;
        const max = maxPriceInCents ? maxPriceInCents / 100 : undefined;

        if (min !== undefined) {
          if (parsedPrice < min) {
            return false;
          }
        }

        if (max !== undefined) {
          if (parsedPrice > max) {
            return false;
          }
        }

        return true;
      },
      {
        message: maxPriceInCents
          ? `Price must be less than ${convertCentsToPriceTag(maxPriceInCents)}`
          : `Price must be greater than ${convertCentsToPriceTag(minPriceInCents)}`,
      },
    )
    .transform((value) => {
      if (!value) return 0;
      const priceInCents = Number(
        (Number(value.replace(/[^0-9.]/g, '')) * 100).toFixed(0),
      );
      return priceInCents;
    });

export const priceInCentsSchema = generatePriceInCentsSchema();
