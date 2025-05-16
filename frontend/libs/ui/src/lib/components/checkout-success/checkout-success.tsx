'use client';

import { SuccessFireworks } from '@pw-fe-monorepo/ui';

export const CheckoutSuccess = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <SuccessFireworks>
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl lg:text-4xl font-bold text-center">Woohoo!</h1>
        <p className="text-lg text-gray-700 dark:text-gray-dark-300 text-center">
          Your payment went through smoothly. Your new book is waiting for you
          in the library—happy reading!
        </p>
      </div>

      {children}
    </SuccessFireworks>
  );
};
