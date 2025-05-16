'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as React from 'react';

import { LuChevronDown } from 'react-icons/lu';
import { twMerge } from 'tailwind-merge';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={className} {...props} />
));
AccordionItem.displayName = 'AccordionItem';

type AccordionTriggerProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Trigger
> & { noIcon?: boolean };
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ className, noIcon, children, asChild, ...props }, ref) => (
  <AccordionPrimitive.Header className={twMerge('flex', asChild && 'group')}>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={twMerge(
        'group flex flex-1 items-center justify-between transition-all',
        className,
      )}
      asChild={asChild}
      {...props}
    >
      <>
        {children}
        {!noIcon && (
          <LuChevronDown className="h-4 w-4 mr-2 shrink-0 transition-transform duration-200 -rotate-90 group-data-[state=open]:rotate-0" />
        )}
      </>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={twMerge(
      'overflow-hidden transition-all fill-mode-forwards data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      className,
    )}
    {...props}
  >
    {children}
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
