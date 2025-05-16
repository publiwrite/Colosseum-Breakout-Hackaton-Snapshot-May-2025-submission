'use client';

import { useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { CloseIcon } from '../../icons/close';
import { MenuIcon } from '../../icons/menu';
import { SmallButton } from '../../primitives/button';
import {
  Sheet,
  SheetContent,
  SheetOverlay,
  SheetPortal,
  SheetTrigger,
} from '../../primitives/sheet';
import { HeaderMenuContext } from '../../providers';

export const HeaderMenuButton = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const { isTopMenuOpen, setIsTopMenuOpen } = useContext(HeaderMenuContext);

  return (
    <Sheet open={isTopMenuOpen} onOpenChange={(open) => setIsTopMenuOpen(open)}>
      <SheetTrigger className="!pointer-events-auto">
        <MenuIcon className="w-5 h-5 stroke-black dark:stroke-white" />
      </SheetTrigger>

      <SheetPortal>
        <SheetOverlay />
        <SheetContent
          side="left"
          onOpenAutoFocus={(e) => e.preventDefault()}
          className={twMerge(
            'bg-white dark:bg-gray-dark-800',
            'flex flex-col text-center items-stretch justify-center gap-4',
          )}
        >
          <div className="flex flex-col w-full h-full relative space-y-4">
            <div className={twMerge('flex items-center justify-between')}>
              <span className="text-sm font-semibold">Menu</span>
              <SmallButton
                variant="secondary"
                onClick={() => setIsTopMenuOpen(false)}
              >
                <CloseIcon className="w-5 h-5 fill-black dark:fill-white" />
              </SmallButton>
            </div>

            <hr />

            {children}
          </div>
        </SheetContent>
      </SheetPortal>
    </Sheet>
  );
};
