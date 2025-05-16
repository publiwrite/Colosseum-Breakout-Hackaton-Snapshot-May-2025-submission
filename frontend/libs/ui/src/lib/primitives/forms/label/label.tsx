'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';
import { InputContext } from '../shared';

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export const InputLabel = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, children, ...props }, ref) => {
    const { disabled } = React.useContext(InputContext);

    return (
      <label
        ref={ref}
        className={twMerge(
          'text-sm lg:text-lg font-medium',
          'text-black dark:text-white',
          disabled ? 'text-gray-400' : 'text-gray-900',
          className,
        )}
        {...props}
      >
        {children}
      </label>
    );
  },
);
InputLabel.displayName = 'InputLabel';
