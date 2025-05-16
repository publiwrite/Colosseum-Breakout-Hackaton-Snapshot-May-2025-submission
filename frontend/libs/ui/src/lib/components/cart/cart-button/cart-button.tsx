'use client';

import {
  CartContext,
  CartIcon,
  Sheet,
  SheetClose,
  SheetContent,
  SheetOverlay,
  SheetPortal,
  SheetTrigger,
  SmallButton,
} from '@pw-fe-monorepo/ui';
import { forwardRef, useContext } from 'react';
import { twMerge } from 'tailwind-merge';

type TriggerProps = React.ComponentPropsWithoutRef<typeof SmallButton>;

const Trigger = forwardRef<HTMLButtonElement, TriggerProps>(
  ({ className, ...props }, ref) => {
    const { cartItems } = useContext(CartContext);

    return (
      <SmallButton
        ref={ref}
        {...props}
        className={twMerge(className, 'relative')}
        variant="secondary"
      >
        <CartIcon className="w-8 h-8 stroke-black dark:stroke-white" />
        {!!cartItems?.length && (
          <span
            className={twMerge(
              'absolute -right-1 -top-1',
              'text-[10px] text-white bg-purple-400 dark:bg-purple-300 rounded-full',
              'flex items-center justify-center',
              'min-w-4 min-h-4',
            )}
          >
            {cartItems.length}
          </span>
        )}
      </SmallButton>
    );
  },
);

export const CartButton = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, setIsOpen } = useContext(CartContext);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Trigger />
      </SheetTrigger>
      <SheetPortal>
        <SheetOverlay />
        <SheetContent
          side="right"
          className="!w-full !max-w-[420px] bg-white dark:bg-gray-dark-800 p-0 overflow-auto"
        >
          {children}

          <SheetClose />
        </SheetContent>
      </SheetPortal>
    </Sheet>
  );
};
