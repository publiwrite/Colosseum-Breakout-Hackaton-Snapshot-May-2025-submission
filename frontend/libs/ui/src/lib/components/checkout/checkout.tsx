'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  CryptoCurrencyIcon,
  RadioGroup,
  RadioGroupItem,
} from '@pw-fe-monorepo/ui';
import dynamic from 'next/dynamic';
import { forwardRef, useState } from 'react';
import { BsCreditCard2Back } from 'react-icons/bs';
import { twMerge } from 'tailwind-merge';

const Stripe = dynamic(() => import('./stripe/stripe').then((a) => a.Stripe), {
  ssr: false,
});
const Helio = dynamic(() => import('./helio/helio').then((a) => a.Helio), {
  ssr: false,
});

const CheckoutAccordionItem = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof AccordionItem> & {
    trigger: React.ReactNode;
  }
>(({ children, trigger, className, value, ...props }, ref) => {
  return (
    <AccordionItem
      ref={ref}
      value={value}
      {...props}
      className={twMerge(
        'rounded-lg',
        'border border-gray-400 dark:border-gray-dark-600',
        'data-[state=open]:border-purple-500 dark:data-[state=open]:border-purple-300',
        className,
      )}
    >
      <AccordionTrigger
        noIcon
        className={twMerge(
          'rounded-lg p-3 text-base font-medium',
          'text-gray-600 data-[state=open]:text-black',
          'dark:text-gray-dark-300 dark:data-[state=open]:text-white',
          'data-[state=open]:border-b data-[state=open]:border-purple-500',
        )}
      >
        <span className="flex items-center gap-3">{trigger}</span>

        <RadioGroupItem asChild value={value} />
      </AccordionTrigger>
      <AccordionContent className="p-4">{children}</AccordionContent>
    </AccordionItem>
  );
});

export const Checkout = ({
  stripeClientSecret,
  helioPaylinkId,
  onOptionChange,
  onPaymentStarted,
  onPaymentSuccess,
}: {
  stripeClientSecret?: string;
  helioPaylinkId?: string;
  onOptionChange?: (option: 'stripe' | 'helio') => void;
  onPaymentStarted?: (option: 'stripe' | 'helio') => void;
  onPaymentSuccess: (option: 'stripe' | 'helio') => void;
}) => {
  const [selectedOption, setSelectedOption] = useState<string>();

  return (
    <RadioGroup
      name="payment-options"
      value={selectedOption}
      onValueChange={(val) => setSelectedOption(val)}
    >
      <Accordion
        type="single"
        collapsible={false}
        className="flex flex-col gap-3 max-w-full w-full overflow-hidden"
        value={selectedOption}
        onValueChange={(val) => {
          setSelectedOption(val);
          onOptionChange?.(val as 'stripe' | 'helio');
        }}
      >
        <CheckoutAccordionItem
          value="stripe"
          trigger={
            <>
              <BsCreditCard2Back className="w-6 h-6 fill-black dark:fill-white" />
              Credit Card
            </>
          }
        >
          {!stripeClientSecret ? (
            <div className="h-24 skeleton-loader rounded-lg"></div>
          ) : (
            <Stripe
              stripeClientSecret={stripeClientSecret!}
              onPaymentStarted={() => onPaymentStarted?.('stripe')}
              onPaymentSuccess={() => onPaymentSuccess('stripe')}
            />
          )}
        </CheckoutAccordionItem>

        <CheckoutAccordionItem
          value="helio"
          trigger={
            <>
              <CryptoCurrencyIcon className="w-6 h-6 fill-black dark:fill-white" />
              Cryptocurrency
            </>
          }
        >
          {!helioPaylinkId ? (
            <div className="h-24 skeleton-loader rounded-lg"></div>
          ) : (
            <Helio
              paylinkId={helioPaylinkId!}
              onPaymentStarted={() => onPaymentStarted?.('helio')}
              onPaymentSuccess={() => onPaymentSuccess('helio')}
            />
          )}
        </CheckoutAccordionItem>
      </Accordion>
    </RadioGroup>
  );
};
