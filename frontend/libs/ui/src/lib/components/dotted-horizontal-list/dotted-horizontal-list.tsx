import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export const DottedHorizontalList = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={twMerge('flex flex-wrap items-center gap-x-2', className)}
      {...props}
    >
      {React.Children.map(children, (child, index) => {
        const isLast = index === React.Children.count(children) - 1;
        return (
          <>
            {child}
            {!isLast && <span className="text-[currentColor] text-sm">●</span>}
          </>
        );
      })}
    </div>
  );
});
