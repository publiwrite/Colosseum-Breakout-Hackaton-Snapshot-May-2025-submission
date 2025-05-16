'use client';

import { forwardRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';

type SegmentedSelectorProps = React.ComponentPropsWithoutRef<'input'> & {
  Media: React.ReactNode;
};

export const SegmentedSelector = forwardRef<
  HTMLInputElement,
  SegmentedSelectorProps
>(({ className, children, Media, ...props }, ref) => {
  const id = useId();

  return (
    <div className={twMerge(className)}>
      <input
        ref={ref}
        type="radio"
        {...props}
        id={id}
        className="peer sr-only"
      />

      <label
        htmlFor={id}
        className={twMerge(
          'group w-full flex-1 h-full p-3 rounded-xl cursor-pointer',
          'flex flex-col items-center justify-start gap-3',
          'text-center',
          'border border-gray-300 dark:border-gray-dark-600',
          'peer-checked:ring-2 peer-checked:ring-purple-500 peer-checked:dark:ring-purple-300',
          'peer-focus-within:border-blue-500 peer-focus-within:dark:border-blue-300',
          'peer-checked:bg-white peer-checked:dark:bg-gray-dark-800 shadow-base',
          'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        )}
      >
        <span
          className={twMerge(
            'w-full h-32 p-3 rounded-lg',
            'flex items-center justify-center',
            'bg-gray-100 dark:bg-gray-dark-800',
            'group-hover:shadow-md group-hover:scale-95 transition-all duration-300',
          )}
        >
          {Media}
        </span>

        <span className="flex-1 flex items-center flex-col justify-center text-lg font-medium">
          {children}
        </span>
      </label>
    </div>
  );
});
