'use client';

import { Button, CartContext } from '@pw-fe-monorepo/ui';
import { useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { CartSummary } from '../cart-summary/cart-summary';
import { CartList } from './cart-list/cart-list';
import { CheckoutButton } from './checkout-button/checkout-button';

export const Step1 = () => {
  const { setIsOpen } = useContext(CartContext);

  return (
    <div className="flex-1 flex flex-col justify-between gap-4">
      <CartList />

      <div className="flex flex-col gap-4">
        <CartSummary />

        <div>
          <div className="absolute left-0 right-0 h-px bg-gray-200 dark:bg-gray-dark-600" />
        </div>

        <div
          className={twMerge(
            'flex flex-col gap-3',
            'bg-white dark:bg-gray-dark-800',
          )}
        >
          <CheckoutButton />
          <Button
            variant="secondary"
            className="w-full"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Keep Shopping
          </Button>
        </div>
      </div>
    </div>
  );
};
