'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';
import { InputContext } from '../shared';

export type FormGroupProps = React.HTMLAttributes<HTMLDivElement>;

export const FormGroup = React.forwardRef<HTMLDivElement, FormGroupProps>(
  ({ className, children, ...props }, ref) => {
    const [disabled, setDisabled] = React.useState(false);

    return (
      <InputContext.Provider value={{ disabled, setDisabled }}>
        <div
          ref={ref}
          className={twMerge('flex flex-col gap-2', className)}
          {...props}
        >
          {children}
        </div>
      </InputContext.Provider>
    );
  }
);
FormGroup.displayName = 'FormGroup';
