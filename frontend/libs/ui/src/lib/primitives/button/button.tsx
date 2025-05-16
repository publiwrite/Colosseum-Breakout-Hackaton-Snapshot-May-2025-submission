import { Slot } from '@radix-ui/react-slot';
import { cva, VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
  `inline-flex items-center justify-center gap-2 rounded-lg
  lg:text-lg font-medium
  transition-colors focus-visible:outline-none focus-visible:ring-inset focus-visible:ring focus:ring-blue-200 dark:focus:ring-blue-400
  disabled:pointer-events-none disabled:opacity-50`,
  {
    variants: {
      variant: {
        primary: twMerge(
          'shadow-sm dark:shadow-none',
          'py-2.5 lg:py-2 px-5 lg:px-6',
          'bg-black dark:bg-white text-white dark:text-black',
          'hover:bg-gray-dark-700 dark:hover:bg-gray-100',
          'active:bg-black/80 active:bg-gradient-to-t active:from-[rgba(0,0,0,0.80)] active:to-[rgba(0,0,0,0.80)]',
          'dark:active:from-[rgba(12,12,12,0.12)] dark:active:to-[rgba(12,12,12,0.12)]',
        ),
        secondary: twMerge(
          'shadow-sm dark:shadow-none',
          'py-[9px] lg:py-2 px-5 lg:px-6',
          'bg-white dark:bg-transparent text-black dark:text-white',
          'border border-gray-400 dark:border-gray-dark-500',
          'hover:bg-gray-100 dark:hover:bg-gray-dark-700',
          'active:bg-black active:bg-[rgba(12,12,12,0.12)] dark:active:bg-black',
        ),
        tertiary: twMerge(
          'hover:underline !text-base',
          'text-blue-600 dark:text-blue-200',
          'hover:text-blue-500 dark:hover:text-blue-100',
          'active:text-blue-700 dark:active:text-blue-300',
        ),
        glassy: twMerge(
          'p-4',
          `backdrop-blur-[18px] transform-gpu border border-white dark:border-white/10`,
          'bg-gradient-to-b from-[rgba(255,255,255,0.90)] to-[rgba(255,255,255,0.36)] dark:from-[rgba(255,255,255,0.10)] dark:to-[rgba(255,255,255,0.04)]',
          'hover:to-[rgba(255,255,255,0.72)] dark:hover:to-[rgba(255,255,255,0.08)]',
          'active:to-[rgba(255,255,255,0.90)] dark:active:from-[rgba(255,255,255,0.04) dark:active:to-[rgba(255,255,255,0.10)]',
        ),
      },
      size: {
        regular: '',
        icon: twMerge('w-11 h-11 !p-2.5 lg:!p-3 rounded-full'),
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'regular',
    },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    loading?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      disabled,
      loading,
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={twMerge(buttonVariants({ variant, className, size }))}
        ref={ref}
        disabled={loading || disabled}
        {...props}
      >
        {children}

        {loading && (
          <span className="animate-in slide-in-from-right-1 transform-gpu">
            <AiOutlineLoading3Quarters className="animate-spin" />
          </span>
        )}
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
