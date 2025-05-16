'use client';

import { Button, CartContext, CartIcon } from '@pw-fe-monorepo/ui';
import { useContext } from 'react';
import { CartItem } from './cart-item';

export const CartList = () => {
  const { cartItems, setIsOpen } = useContext(CartContext);

  if (!cartItems?.length) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center gap-4">
        <CartIcon className="w-10 h-10 stroke-black dark:stroke-white" />

        <p className="text-xl font-bold text-center">Your Cart is Empty</p>
        <p className="text-gray-600 text-center">
          Looks like you haven’t added any books yet! Start exploring and add
          your favorites to your cart.
        </p>
        <Button
          variant="secondary"
          className="w-full"
          onClick={() => setIsOpen(false)}
        >
          Continue Shopping
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {cartItems?.map((item) => (
        <CartItem item={item} key={item.publicationListingId} />
      ))}
    </div>
  );
};
