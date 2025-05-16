'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import {
  editorNavbarTabsTriggerStyle,
  editorSubTabsTriggerStyle,
} from './tab-trigger-style';

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={twMerge(
      'w-full inline-flex items-center justify-center',
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={twMerge(
      'inline-flex items-center justify-center',
      'whitespace-nowrap rounded-md ',
      'data-[state=active]:shadow-sm',
      'disabled:pointer-events-none disabled:opacity-50',
      'transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      'px-4 py-2 rounded-lg',
      'text-sm font-medium',
      'text-gray-600 dark:text-gray-dark-300',
      'data-[state=active]:text-black data-[state=active]:dark:text-white',
      'data-[state=active]:bg-gray-200 data-[state=active]:dark:bg-gray-dark-600',
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const UnderlinedTabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={twMerge(editorSubTabsTriggerStyle, className)}
    {...props}
  />
));
UnderlinedTabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsTriggerWithIcon = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    icon: React.ReactNode;
    buttonText: string;
  }
>(({ className, icon, buttonText, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={twMerge(editorNavbarTabsTriggerStyle, className)}
    {...props}
  >
    {icon}
    <span
      className={twMerge(
        'text-sm text-gray-600  dark:text-gray-dark-300',
        'group-data-[state=active]:text-black dark:group-data-[state=active]:text-white group-data-[state=active]:font-medium',
      )}
    >
      {buttonText}
    </span>
  </TabsPrimitive.Trigger>
));
TabsTriggerWithIcon.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    tabIndex={-1}
    className={twMerge(className)}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TabsTriggerWithIcon,
  UnderlinedTabsTrigger,
};
