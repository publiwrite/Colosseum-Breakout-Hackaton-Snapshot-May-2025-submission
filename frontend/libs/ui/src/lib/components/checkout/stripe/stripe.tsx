'use client';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';
import { useTheme } from 'next-themes';
import { useMemo } from 'react';
import { StripeCheckoutForm } from './stripe-checkout-form';

const stripePromise = loadStripe(
  `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`,
);

export const Stripe = ({
  stripeClientSecret,
  onPaymentStarted,
  onPaymentSuccess,
}: {
  stripeClientSecret: string;
  onPaymentStarted: () => void;
  onPaymentSuccess: () => void;
}) => {
  const { resolvedTheme } = useTheme();

  const options: StripeElementsOptions = useMemo(() => {
    return {
      clientSecret: stripeClientSecret,
      appearance: {
        theme: resolvedTheme === 'light' ? 'stripe' : 'night',
      },
    };
  }, []);

  return (
    <Elements stripe={stripePromise} options={options}>
      <StripeCheckoutForm
        onPaymentSuccess={onPaymentSuccess}
        onPaymentStarted={onPaymentStarted}
      />
    </Elements>
  );
};
