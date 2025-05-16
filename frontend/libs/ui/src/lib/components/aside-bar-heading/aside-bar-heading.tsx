import React from 'react';
import { twMerge } from 'tailwind-merge';

export const AsideBarHeading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={twMerge(
        'flex items-center gap-4',
        'text-xl font-medium text-black dark:text-white',
        className,
      )}
    >
      {children}
    </p>
  );
};
