'use client';

import { convertCentsToPriceTag, pluralise } from '@pw-fe-monorepo/configs';
import { useContext } from 'react';
import { CartContext } from '../../../providers/cart';

export const CartSummary = () => {
  const { cartItems } = useContext(CartContext);

  if (!cartItems?.length) {
    return null;
  }

  const subTotalInCents =
    cartItems?.reduce(
      (acc, item) =>
        acc + item.publicationsListing.priceInCents * item.quantity,
      0,
    ) || 0;

  return (
    <div className="flex flex-col gap-5">
      <p className="text-xl font-bold">Summary</p>

      <div className="flex items-center justify-between">
        <span className="text-gray-600 dark:text-gray-dark-300">
          {/* Subtotal  */} {pluralise(cartItems?.length || 0, 'item', 'items')}
        </span>

        <span className="font-bold">
          {convertCentsToPriceTag(subTotalInCents, { useFreeLabel: true })}
        </span>
      </div>
    </div>
  );
};
