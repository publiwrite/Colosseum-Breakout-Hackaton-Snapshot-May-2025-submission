'use client';

import { SHOW_CART_SEARCH_PARAM } from '@pw-fe-monorepo/configs';
import { AuthModalContext, Button, CartContext } from '@pw-fe-monorepo/ui';
import { useSession } from 'next-auth/react';
import { useContext } from 'react';

export const CheckoutButton = () => {
  const { data: session } = useSession();
  const { cartItems, setCartStep } = useContext(CartContext);
  const { setIsSignInModalOpen } = useContext(AuthModalContext);

  return (
    <Button
      variant="primary"
      className="w-full"
      onClick={() => {
        if (!session) {
          setIsSignInModalOpen(
            true,
            window.location.href + `?${SHOW_CART_SEARCH_PARAM}=true`,
          );
          return;
        }

        setCartStep(2);
      }}
      disabled={!cartItems?.length}
    >
      Checkout
    </Button>
  );
};
