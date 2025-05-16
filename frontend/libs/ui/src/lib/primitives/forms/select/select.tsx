'use client';

import * as SelectPrimitive from '@radix-ui/react-select';
import * as React from 'react';
import {
  RxCaretSort,
  RxCheck,
  RxChevronDown,
  RxChevronUp,
} from 'react-icons/rx';
import { twMerge } from 'tailwind-merge';

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectItemText = SelectPrimitive.ItemText;

const SelectItemIndicator = SelectPrimitive.ItemIndicator;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={twMerge(
      'h-11',
      'w-full flex items-center justify-between gap-2',
      'rounded-lg py-3 px-4 outline-none',
      'text-black dark:text-white',
      'transition-all',
      'data-[placeholder]:text-gray-600 dark:data-[placeholder]:text-gray-dark-300',
      // 'bg-gray-100 dark:bg-gray-dark-700',
      'bg-white dark:bg-gray-dark-800',
      'border border-gray-300 dark:border-gray-dark-600',
      'hover:border-gray-400 dark:hover:border-gray-dark-500',
      'ring-inset focus-visible:ring-4 focus-visible:ring-blue-500/30 focus-visible:border focus-visible:border-blue-500',
      'dark:focus-visible:ring-blue-300/30 dark:focus-visible:border-blue-300',
      'focus-visible:aria-[invalid=true]:ring-4 focus-visible:aria-[invalid=true]:ring-red-100',
      'dark:focus-visible:aria-[invalid=true]:ring-red-300/30',
      'aria-[invalid=true]:border aria-[invalid=true]:border-red-500 dark:aria-[invalid=true]:border-red-500',
      'whitespace-nowrap disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <RxCaretSort className="h-4 w-4 opacity-50 flex-shrink-0" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={twMerge(
      'flex cursor-default items-center justify-center py-1',
      className,
    )}
    {...props}
  >
    <RxChevronUp />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={twMerge(
      'flex cursor-default items-center justify-center py-1',
      className,
    )}
    {...props}
  >
    <RxChevronDown />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={twMerge(
        'rounded-lg shadow-xl p-1',
        'border border-gray-200 dark:border-gray-dark-600',
        'bg-white dark:bg-gray-dark-700',
        'relative z-50 max-h-96 min-w-[8rem] overflow-hidden',
        'transform-gpu',
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        position === 'popper' &&
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        className,
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={twMerge(
          'p-1',
          position === 'popper' &&
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={twMerge('px-2 py-1.5 text-sm font-semibold', className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={twMerge(
      'relative w-full flex items-center',
      'rounded-lg py-2 px-3 data-[state=checked]:pr-6',
      'text-gray-600 dark:text-gray-dark-300 focus:text-black focus:dark:text-white',
      'cursor-default select-none outline-none focus:bg-gray-200 dark:focus:bg-gray-dark-600 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    {...props}
  >
    {props.asChild ? (
      children
    ) : (
      <>
        <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
          <SelectPrimitive.ItemIndicator>
            <RxCheck className="h-4 w-4" />
          </SelectPrimitive.ItemIndicator>
        </span>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      </>
    )}
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={twMerge('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
