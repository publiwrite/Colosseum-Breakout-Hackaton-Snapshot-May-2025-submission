'use client';

import { Button } from '@pw-fe-monorepo/ui';
import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { FormEvent, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export const StripeCheckoutForm = ({
  onPaymentSuccess,
  onPaymentStarted,
}: {
  onPaymentSuccess: () => void;
  onPaymentStarted: () => void;
}) => {
  const [error, setError] = useState('');
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setError('');
    setIsLoading(true);

    onPaymentStarted();

    const result = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
      confirmParams: {
        return_url: `${process.env.NEXT_PUBLIC_MARKETPLACE_PROJECT_URL}/checkout/success`,
      },
    });

    /**
     * Error handling
     * This won't redirect anywhere or open success modal
     */
    if (result.error) {
      setError(result.error.message || 'An error occurred please contact us');
      setIsLoading(false);
      return;
    }

    /**
     * Handle the result if success only
     * This will intercept route and open success modal
     */
    if (result.paymentIntent.status === 'succeeded') {
      setIsLoading(false);
      onPaymentSuccess();
      return;
    }

    // Your customer will be redirected to your `return_url`. For some payment
    // methods like iDEAL, your customer will be redirected to an intermediate
    // site first to authorize the payment, then redirected to the `return_url`.
    setIsLoading(false);
  };

  return (
    <form
      className={twMerge(
        'flex flex-col gap-4',
        'transition-opacity',
        isLoading && 'pointer-events-none opacity-50',
      )}
      onSubmit={handleSubmit}
    >
      <PaymentElement
        onLoaderStart={() => setIsReady(false)}
        onReady={() => setIsReady(true)}
        options={{
          layout: { type: 'tabs', radios: false },
        }}
      />

      {error && <p className="text-red-500">{error}</p>}

      <Button disabled={!stripe || isLoading || !isReady} loading={isLoading}>
        Pay Now
      </Button>
    </form>
  );
};
