'use client';

import { VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import { InputContext } from '../shared';

export const inputVariants = cva(``, {
  variants: {
    variant: {
      box: twMerge(
        'h-11',
        'rounded-lg px-4 py-3',
        'placeholder:text-gray-600 dark:placeholder:text-gray-dark-300',
        'transition-all',
        'bg-white dark:bg-gray-dark-800',
        'border border-gray-300 dark:border-gray-dark-600 outline-none',
        'hover:border-gray-400 dark:hover:border-gray-dark-500',
        'focus-visible:ring-4 focus-visible:ring-blue-500/30 focus-visible:border focus-visible:border-blue-500',
        'dark:focus-visible:ring-blue-300/30 dark:focus-visible:border-blue-300',
        'focus-visible:aria-[invalid=true]:ring-4 focus-visible:aria-[invalid=true]:ring-red-100',
        'dark:focus-visible:aria-[invalid=true]:ring-red-300/30',
        'aria-[invalid=true]:border aria-[invalid=true]:border-red-500 dark:aria-[invalid=true]:border-red-300',
        'file:border-0 file:bg-transparent file:text-sm file:font-medium',
        'disabled:cursor-not-allowed disabled:opacity-50',
      ),
      line: ``,
    },
  },
  defaultVariants: {
    variant: 'box',
  },
});

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, disabled, ...props }, ref) => {
    const { setDisabled } = React.useContext(InputContext);

    React.useEffect(() => {
      setDisabled && setDisabled(!!disabled);
    }, [disabled, setDisabled]);

    return (
      <input
        className={twMerge(inputVariants({ variant }), className)}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';
