'use client';

import { usePathname } from 'next/navigation';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { PwLink } from '../pw-link';

type HeaderRouteButtonProps = React.ComponentPropsWithoutRef<typeof PwLink> & {
  strict?: boolean | { except: string[] };
};

export const HeaderRouteButton = forwardRef<
  HTMLAnchorElement,
  HeaderRouteButtonProps
>(({ children, strict, ...restProps }, ref) => {
  const pathname = usePathname();

  const isActive = !!strict
    ? typeof strict === 'boolean'
      ? pathname === restProps.href
      : strict.except.every((path) => !pathname.includes(path))
    : pathname.includes(restProps.href.toString());

  return (
    <PwLink
      ref={ref}
      {...restProps}
      className={twMerge(
        'px-4 py-2 rounded-lg',
        'text-gray-600 dark:text-gray-dark-300',
        isActive && 'text-black dark:text-white',
        isActive && 'bg-gray-200 dark:bg-gray-dark-700',
        'stroke-gray-600 dark:stroke-gray-dark-300',
        isActive && 'stroke-black dark:stroke-white',
        restProps.href !== '#' &&
          'hover:bg-gray-300 dark:hover:bg-gray-dark-600',
        restProps.href === '#' && 'cursor-not-allowed opacity-50',
      )}
    >
      {children}
    </PwLink>
  );
});
