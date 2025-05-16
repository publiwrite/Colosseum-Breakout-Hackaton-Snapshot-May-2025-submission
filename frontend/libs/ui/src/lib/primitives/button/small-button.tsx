import { Slot } from '@radix-ui/react-slot';
import { cva, VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const smallButtonVariants = cva(
  `w-8 h-8 rounded-md transition-all
  flex items-center justify-center
  focus:outline-none ring-inset focus:ring focus:ring-blue-200 dark:focus:ring-blue-400
  disabled:pointer-events-none disabled:opacity-50`,
  {
    variants: {
      variant: {
        primary: twMerge(
          'border border-gray-400 dark:border-gray-dark-500',
          'hover:border-gray-500 dark:hover:border-gray-dark-400',
          'hover:bg-gray-300 dark:hover:bg-gray-600',
          'active:border-gray-500 dark:active:border-gray-dark-400',
          'active:bg-gray-300 dark:active:bg-gray-dark-600',
        ),
        secondary: twMerge(
          'hover:bg-gray-300 dark:hover:bg-gray-600',
          'active:bg-gray-300 dark:active:bg-gray-dark-600',
        ),
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

export type SmallButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof smallButtonVariants> & {
    asChild?: boolean;
  };

const SmallButton = React.forwardRef<HTMLButtonElement, SmallButtonProps>(
  (
    { className, variant, disabled, asChild = false, children, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={twMerge(smallButtonVariants({ variant, className }))}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);
SmallButton.displayName = 'Button';

export { SmallButton, smallButtonVariants };
