'use client';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import { InputContext } from '../shared';

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, disabled, ...props }, ref) => {
  const { setDisabled } = React.useContext(InputContext);

  React.useEffect(() => {
    if (!setDisabled) return;
    setDisabled(!!disabled);
  }, [disabled, setDisabled]);

  return (
    <RadioGroupPrimitive.Root
      className={twMerge('grid gap-2', className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, disabled, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      {...props}
      disabled={disabled}
      className="outline-none"
    >
      <span
        className={twMerge(
          'peer w-5 h-5 shrink-0 rounded-full transition-all',
          'flex items-center justify-center',
          'border-2 border-gray-400 dark:border-gray-dark-500',
          'focus-visible:outline-none focus-visible:ring focus:ring-blue-200 dark:focus:ring-blue-400',
          'data-[state=checked]:border-purple-500 dark:data-[state=checked]:border-purple-300',
          'data-[state=checked]:text-purple-500 dark:data-[state=checked]:text-purple-300',
          'aria-[invalid=true]:border-red-500',
          disabled && 'cursor-not-allowed opacity-50 pointer-events-none',
          className,
        )}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <span className="w-2 h-2 ring-[5px] ring-purple-500 dark:ring-purple-300 rounded-full transition-all duration-300"></span>
        </RadioGroupPrimitive.Indicator>
      </span>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
