'use client';

import type { GetMyBasketClientActionType } from '@pw-fe-monorepo/configs';
import { CartContext, CartItemBase } from '@pw-fe-monorepo/ui';
import { useContext, useState } from 'react';

export const CartItem = ({
  item,
}: {
  item: GetMyBasketClientActionType[number];
}) => {
  const [loading, setLoading] = useState(false);
  const { removeFromCart, updateCountOnCart } = useContext(CartContext);

  return (
    <CartItemBase
      item={item}
      loading={loading}
      onQuantityChange={async (quantity) => {
        setLoading(true);
        await updateCountOnCart(item.publicationListingId, quantity);
        setLoading(false);
      }}
      onRemoveClick={async () => {
        setLoading(true);
        await removeFromCart(item.publicationListingId);
        setLoading(false);
      }}
    />
  );
};
