'use client';

import * as RadixAvatar from '@radix-ui/react-avatar';
import { VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const avatarVariants = cva('', {
  variants: {
    size: {
      large: 'w-10 h-10',
      medium: 'w-9 h-9',
      small: 'w-7 h-7',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

const Avatar = React.forwardRef<
  React.ElementRef<typeof RadixAvatar.Root>,
  React.ComponentPropsWithoutRef<typeof RadixAvatar.Root> &
    VariantProps<typeof avatarVariants>
>(({ className, size, ...props }, ref) => {
  return (
    <RadixAvatar.Root
      className={twMerge(
        'relative flex shrink-0 overflow-hidden rounded-full',
        avatarVariants({ size }),
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Avatar.displayName = RadixAvatar.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof RadixAvatar.Image>,
  React.ComponentPropsWithoutRef<typeof RadixAvatar.Image>
>(({ className, ...props }, ref) => {
  return (
    <RadixAvatar.Image
      className={twMerge('aspect-square w-full h-full object-cover', className)}
      ref={ref}
      {...props}
    />
  );
});
AvatarImage.displayName = RadixAvatar.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof RadixAvatar.Fallback>,
  React.ComponentPropsWithoutRef<typeof RadixAvatar.Fallback>
>(({ className, ...props }, ref) => {
  return (
    <RadixAvatar.Fallback
      className={twMerge(
        'aspect-square w-full h-full rounded-full',
        'flex items-center justify-center',
        'text-sm font-medium text-black dark:text-white',
        'border-2 border-gray-500 dark:border-gray-dark-400',
        'bg-white dark:bg-gray-dark-800',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
AvatarFallback.displayName = RadixAvatar.Fallback.displayName;

export { Avatar, AvatarFallback, AvatarImage, avatarVariants };
