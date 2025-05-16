'use client';

import * as SheetPrimitive from '@radix-ui/react-dialog';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import { useScreenSize } from '../../hooks';
import { CloseIcon } from '../../icons';
import { SmallButton } from '../button';

const sheetVariants = cva(
  `
  transform-gpu
  transition ease-in-out 
  fixed p-4 z-[50] shadow-lg 
  bg-gray-100 dark:bg-gray-dark-800
  overflow-auto max-h-[100dvh]
  data-[state=open]:animate-in data-[state=open]:duration-300
  data-[state=closed]:animate-out data-[state=closed]:duration-75 data-[state=closed]:fade-out-80
 `,
  {
    variants: {
      side: {
        top: `inset-x-0 top-0 data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top`,
        bottom: `inset-x-0 bottom-0 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom`,
        left: `inset-y-0 left-0 h-full w-3/4 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm`,
        right: `inset-y-0 right-0 h-full w-3/4 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm`,
      },
    },
    defaultVariants: {
      side: 'left',
    },
  },
);

export const Sheet = SheetPrimitive.Root;

export const SheetTrigger = SheetPrimitive.Trigger;

export const SheetPortal = SheetPrimitive.Portal;

export const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={twMerge(
      'transform-gpu',
      'fixed z-[50] inset-0 bg-black/80',
      'data-[state=open]:animate-in data-[state=open]:fade-in-0',
      'data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
      className,
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

export const SheetClose = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Close>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Close
    ref={ref}
    asChild
    className={twMerge('absolute right-4 top-4', className)}
    {...props}
  >
    <SmallButton variant="primary">
      <CloseIcon className="w-6 h-6 fill-black dark:fill-white" />
      <span className="sr-only">Close</span>
    </SmallButton>
  </SheetPrimitive.Close>
));

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

export const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(
  (
    { side = 'left', className, onPointerDownOutside, children, ...props },
    ref,
  ) => {
    const isLgOrAbove = useScreenSize('lg');

    return (
      <SheetPrimitive.Content
        ref={ref}
        className={twMerge(sheetVariants({ side }), className)}
        onOpenAutoFocus={(e) => {
          // prevent focus on open for focusable elements to prevent keyboard overlapping the element
          if (!isLgOrAbove) {
            e.preventDefault();
          }
        }}
        onPointerDownOutside={(e) => {
          // don't dismiss sheet when clicking inside the toast
          if (
            e.target instanceof Element &&
            e.target.closest('[data-sonner-toast]')
          ) {
            e.preventDefault();
          }

          onPointerDownOutside?.(e);
        }}
        {...props}
      >
        {children}
      </SheetPrimitive.Content>
    );
  },
);
SheetContent.displayName = SheetPrimitive.Content.displayName;
