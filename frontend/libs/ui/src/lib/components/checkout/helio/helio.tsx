'use client';

import { HelioCheckout } from '@heliofi/checkout-react';
import { IS_NON_PRODUCTION } from '@pw-fe-monorepo/configs';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import './helio.scss';

type HelioConfig = React.ComponentProps<typeof HelioCheckout>['config'];

export const Helio = ({
  paylinkId,
  onPaymentStarted,
  onPaymentSuccess,
}: {
  paylinkId: string;
  onPaymentStarted: () => void;
  onPaymentSuccess: () => void;
}) => {
  const { resolvedTheme } = useTheme();
  const [error, setError] = useState('');

  const helioConfig: HelioConfig = {
    paylinkId,
    network: IS_NON_PRODUCTION ? 'test' : 'main',
    theme: {
      themeMode: resolvedTheme === 'dark' ? 'dark' : 'light',
      colors: {},
    },
    onStartPayment: () => {
      setError('');
      onPaymentStarted();
    },
    onSuccess: () => {
      onPaymentSuccess();
    },
    onError: (error) => {
      setError(error.errorMessage || '');
    },
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="helio-temporary-fix">
        <HelioCheckout config={helioConfig} />
      </div>

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};
