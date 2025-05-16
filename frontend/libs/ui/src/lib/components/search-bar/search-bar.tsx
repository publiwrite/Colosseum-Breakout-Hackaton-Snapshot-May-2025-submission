'use client';

import { Popover, PopoverAnchor, PopoverContent } from '@pw-fe-monorepo/ui';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { ExploreButton } from './explore-button/explore-button';
import { SearchBarProvider } from './provider/provider';
import './search-bar.scss';
import { SearchContent } from './search-content/search-content';
import { SearchInput } from './search-input/search-input';

export const SearchBar = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  return (
    <div className="search-bar-wrapper">
      <ExploreButton />
      <SearchBarProvider>
        <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
          <PopoverAnchor className="search-bar-anchor">
            <SearchInput
              onFocus={() => setPopoverOpen(true)}
              onSubmit={() => setPopoverOpen(false)}
            />
          </PopoverAnchor>
          <PopoverContent
            onOpenAutoFocus={(e) => e.preventDefault()}
            className={twMerge(
              'w-[max(var(--radix-popper-anchor-width),400px)] rounded-lg',
              'max-h-[50dvh] overflow-y-auto',
              'mt-2 p-4',
              'bg-white dark:bg-gray-dark-700',
              'border border-gray-300 dark:border-gray-dark-600',
            )}
          >
            <SearchContent onClick={() => setPopoverOpen(false)} />
          </PopoverContent>
        </Popover>
      </SearchBarProvider>
    </div>
  );
};
