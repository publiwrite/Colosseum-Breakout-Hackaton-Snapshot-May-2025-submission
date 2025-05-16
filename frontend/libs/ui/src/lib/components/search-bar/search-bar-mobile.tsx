'use client';

import {
  Button,
  HeaderMenuContext,
  SearchIcon,
  Sheet,
  SheetClose,
  SheetContent,
  SheetOverlay,
  SheetPortal,
  SheetTrigger,
  SmallButton,
} from '@pw-fe-monorepo/ui';
import { useContext, useState } from 'react';
import { SearchBarProvider } from './provider/provider';
import { SearchContent } from './search-content/search-content';
import { SearchInput } from './search-input/search-input';

export const SearchBarMobile = ({
  showButtonText,
}: {
  showButtonText?: boolean;
}) => {
  const { setIsTopMenuOpen } = useContext(HeaderMenuContext);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <SearchBarProvider>
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          {showButtonText ? (
            <Button variant="secondary" className="w-full">
              <SearchIcon className="w-6 h-6 stroke-black dark:stroke-white" />
              Search
            </Button>
          ) : (
            <SmallButton variant={'secondary'}>
              <SearchIcon className="w-6 h-6 stroke-black dark:stroke-white" />
            </SmallButton>
          )}
        </SheetTrigger>

        <SheetPortal>
          <SheetOverlay />
          <SheetContent
            side="bottom"
            className="flex flex-col gap-6 max-h-[60dvh] h-full"
          >
            <p className="text-xl font-bold">Search Books</p>

            <div className="flex flex-col gap-6 overflow-auto">
              <div className="search-bar-wrapper">
                <SearchInput
                  onFocus={() => setIsSheetOpen(true)}
                  onSubmit={() => {
                    setIsSheetOpen(false);
                    setIsTopMenuOpen(false);
                  }}
                />
              </div>

              <SearchContent
                onClick={() => {
                  setIsSheetOpen(false);
                  setIsTopMenuOpen(false);
                }}
              />
            </div>

            <SheetClose />
          </SheetContent>
        </SheetPortal>
      </Sheet>
    </SearchBarProvider>
  );
};
