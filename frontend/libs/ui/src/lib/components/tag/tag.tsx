import React, { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

export const Tag = ({
  children,
  color,
  className,
  size = 'regular',
}: {
  children: React.ReactNode;
  color: 'green' | 'blue' | 'orange' | 'red' | 'neutral';
  className?: string;
  size?: 'small' | 'regular';
}) => {
  const tags = useMemo(
    () => ({
      green: 'border-green-500 bg-green-100 dark:bg-green-200 text-green-900',
      blue: 'border-blue-500 bg-blue-100 dark:bg-blue-200 text-blue-900',
      orange:
        'border-orange-500 bg-orange-100 dark:bg-orange-200 text-orange-900',
      red: 'border-red-500 bg-red-100 dark:bg-red-200 text-red-900',
      neutral:
        'border-gray-300 bg-gray-100 dark:bg-gray-dark-700 text-gray-900 dark:text-gray-dark-300',
    }),
    [],
  );

  return (
    <span
      className={twMerge(
        'rounded-md',
        'border dark:border-transparent',
        size === 'small'
          ? 'text-[0.8rem] px-1 py-0.5'
          : 'text-xs lg:text-base px-2 py-1',
        tags[color],
        className,
      )}
    >
      {children}
    </span>
  );
};
