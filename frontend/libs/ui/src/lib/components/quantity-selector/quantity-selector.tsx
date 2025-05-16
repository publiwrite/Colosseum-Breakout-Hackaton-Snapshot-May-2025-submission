'use client';

import { AddIcon } from '@pw-fe-monorepo/ui';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { LuMinus } from 'react-icons/lu';
import { twMerge } from 'tailwind-merge';

type InputProps = React.ComponentProps<'input'>;

const MIN_QUANTITY = 1;
const MAX_QUANTITY = 999;

export const QuantitySelector = forwardRef<HTMLInputElement, InputProps>(
  ({ className, onChange, ...props }, ref) => {
    const innerRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => innerRef.current!);

    const handleValueChange = (value: number) => {
      const quantity = Number(innerRef.current!.value);

      if (quantity + value < 1) {
        return;
      }

      const newValue = String(quantity + value);
      innerRef.current!.value = newValue;

      onChange?.({
        target: { ...innerRef.current, value: newValue.toString() },
        currentTarget: innerRef.current,
      } as React.ChangeEvent<HTMLInputElement>);
    };

    return (
      <div
        className={twMerge(
          'flex items-center gap-3',
          'rounded-lg p-[9px]',
          'border border-gray-400 dark:border-gray-dark-500',
        )}
      >
        <button type="button" onClick={() => handleValueChange(-1)}>
          <LuMinus className="w-6 h-6 stroke-black dark:stroke-white" />
        </button>

        <input
          ref={innerRef}
          type="number"
          onChange={(e) => {
            if (
              +e.target.value >= MIN_QUANTITY &&
              +e.target.value <= MAX_QUANTITY
            ) {
              onChange?.(e);
            }
          }}
          min={MIN_QUANTITY}
          max={MAX_QUANTITY}
          {...props}
          className={twMerge(
            'w-10 text-center',
            '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
            className,
          )}
        />

        <button type="button" onClick={() => handleValueChange(+1)}>
          <AddIcon className="w-6 h-6 stroke-black dark:stroke-white" />
        </button>
      </div>
    );
  },
);
