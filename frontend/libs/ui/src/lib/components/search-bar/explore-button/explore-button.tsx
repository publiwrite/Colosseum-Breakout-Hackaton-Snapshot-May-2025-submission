'use client';

import {
  AngleUpIcon,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  ExploreButtonContext,
  PwLink,
} from '@pw-fe-monorepo/ui';
import { useContext, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import './explore-button.scss';

export const ExploreButton = () => {
  const { isDropdownOpen, menuItems, setIsDropdownOpen } =
    useContext(ExploreButtonContext);
  const [container, setContainer] = useState<HTMLElement>();

  useEffect(() => {
    setContainer(document.getElementById('inner-header')!);
  }, []);

  return (
    <DropdownMenu
      open={isDropdownOpen}
      onOpenChange={(open) => setIsDropdownOpen(open)}
    >
      <DropdownMenuTrigger asChild onClick={(e) => e.preventDefault()}>
        <button
          className={twMerge(
            'py-2 px-4',
            'group flex-shrink-0',
            'rounded-l-lg flex items-center gap-2',
            'bg-gray-150 dark:bg-gray-800',
            'hover:opacity-80 dark:hover:opacity-80',
            'focus-visible:outline-none focus-visible:ring-inset focus-visible:ring focus:ring-purple-200 dark:focus:ring-purple-400',
          )}
        >
          Explore
          <AngleUpIcon
            className={twMerge(
              'w-4 h-4 fill-black dark:fill-white',
              'transition-transform rotate-90 group-data-[state=open]:rotate-180',
            )}
          />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        loop
        container={container}
        className={twMerge(
          'container flex',
          'divide-x divide-gray-300 dark:divide-gray-dark-600',
        )}
      >
        {Object.entries(menuItems).map(([key, value]) => (
          <div key={key} className="min-w-[30%] flex flex-col gap-4 p-4">
            <DropdownMenuLabel className="text-base font-medium text-nowrap">
              {value.label}
            </DropdownMenuLabel>

            <div className="min-h-0 w-full flex flex-wrap gap-1">
              {value.loading &&
                Array.from({ length: 4 }).map((_, index) => (
                  <DropdownMenuItem key={index} disabled>
                    <span className="skeleton-loader rounded-lg">
                      LONG TEXT LOADING
                    </span>
                  </DropdownMenuItem>
                ))}

              {value.errorMessage && (
                <DropdownMenuItem disabled>
                  Something went wrong. Please try again later.
                </DropdownMenuItem>
              )}

              {!value.data?.length && !value.loading && (
                <DropdownMenuItem disabled>Stay tuned!</DropdownMenuItem>
              )}

              {value.data?.map((child, index) => (
                <DropdownMenuItem key={index} asChild>
                  <PwLink
                    href={child.href}
                    className="text-sm font-normal rounded-lg cursor-pointer w-max"
                  >
                    {child.label}
                  </PwLink>
                </DropdownMenuItem>
              ))}
            </div>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
