'use client';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as React from 'react';
import { LuX } from 'react-icons/lu';
import { twMerge } from 'tailwind-merge';
import { useScreenSize } from '../../hooks';
import { SmallButton } from '../button';

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={twMerge(
      'transform-gpu',
      'fixed inset-0 z-50',
      'bg-black/80 backdrop-blur-sm',
      'data-[state=open]:animate-in data-[state=open]:fade-in-0',
      'data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

export const Dialog = DialogPrimitive.Root;

export const DialogTrigger = DialogPrimitive.Trigger;

export const DialogClose = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Close
    ref={ref}
    asChild
    className="absolute right-4 top-4 z-40"
    {...props}
  >
    <SmallButton variant="primary">
      <LuX className="h-4 w-4" />
      <span className="sr-only">Close</span>
    </SmallButton>
  </DialogPrimitive.Close>
));

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, onPointerDownOutside, ...props }, ref) => {
  const isLgOrAbove = useScreenSize('lg');

  return (
    <DialogPrimitive.Portal>
      <DialogOverlay className="overflow-auto flex items-center justify-center lg:py-8">
        <DialogPrimitive.Content
          ref={ref}
          className={twMerge(
            'transform-gpu',
            'w-full max-w-lg',
            'my-auto px-8 py-6',
            'bg-white dark:bg-gray-dark-800',
            'drop-shadow-2xl duration-500 sm:rounded-lg',
            'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
            'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
            className,
          )}
          onOpenAutoFocus={(e) => {
            // prevent focus on open for focusable elements to prevent keyboard overlapping the element
            if (!isLgOrAbove) {
              e.preventDefault();
            }
          }}
          onPointerDownOutside={(e) => {
            // don't dismiss dialog when clicking inside the toast
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
        </DialogPrimitive.Content>
      </DialogOverlay>
    </DialogPrimitive.Portal>
  );
});
DialogContent.displayName = DialogPrimitive.Content.displayName;
