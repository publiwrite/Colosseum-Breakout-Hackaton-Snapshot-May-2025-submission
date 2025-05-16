'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as React from 'react';
import { LuCheck } from 'react-icons/lu';
import { twMerge } from 'tailwind-merge';
import { InputContext } from '../shared';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, disabled, ...props }, ref) => {
  const { setDisabled } = React.useContext(InputContext);

  React.useEffect(() => {
    if (!setDisabled) return;
    setDisabled(!!disabled);
  }, [disabled, setDisabled]);

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={twMerge(
        'peer w-5 h-5 shrink-0 rounded-[4px] transition-all',
        'border-2 border-gray-400 dark:border-gray-dark-500',
        'focus-visible:outline-none focus-visible:ring focus:ring-blue-200 dark:focus:ring-blue-400',
        'data-[state=checked]:border-purple-500 dark:data-[state=checked]:border-purple-300',
        'data-[state=checked]:text-purple-500 dark:data-[state=checked]:text-purple-300',
        'aria-[invalid=true]:border-red-500',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      disabled={disabled}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={twMerge('flex items-center justify-center text-current')}
      >
        <LuCheck className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
