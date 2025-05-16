'use client';

import { HeaderMenuContext } from '@pw-fe-monorepo/ui';
import Link from 'next/link';
import { forwardRef, useContext } from 'react';
import { twMerge } from 'tailwind-merge';

export const NavLink = forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, onClick, children, ...props }, ref) => {
  const { setIsTopMenuOpen } = useContext(HeaderMenuContext);

  return (
    <Link
      ref={ref}
      {...props}
      className={twMerge(
        'text-gray-900 dark:text-white text-sm lg:text-lg font-medium',
        'lg:p-3',
        'hover:underline',
        className,
      )}
      onClick={(e) => {
        setIsTopMenuOpen(false);
        onClick?.(e);
      }}
    >
      {children}
    </Link>
  );
});
