'use client';

import Link from 'next/link';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { useScreenSize } from '../../hooks';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../primitives/dropdown-menu';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetOverlay,
  SheetPortal,
  SheetTrigger,
} from '../../primitives/sheet';

export const PwDropdown = ({
  trigger,
  triggerClassName,
  menuItems,
}: {
  trigger: React.ReactNode;
  triggerClassName?: string;
  menuItems: {
    label?: React.ReactNode;
    type: 'label' | 'item' | 'separator' | 'link';
    onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
    disabled?: boolean;
    href?: string;
  }[];
}) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const isLgOrAbove = useScreenSize('lg');

  if (isLgOrAbove) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className={twMerge('group', triggerClassName)}>
          {trigger}
        </DropdownMenuTrigger>
        <DropdownMenuContent loop className="w-64">
          {menuItems.map((item, index) => {
            switch (item.type) {
              case 'label':
                return (
                  <DropdownMenuLabel
                    key={index}
                    className="px-4 pt-3 text-sm text-gray-600 dark:text-gray-dark-300 break-all"
                  >
                    {item.label}
                  </DropdownMenuLabel>
                );

              case 'separator':
                return <DropdownMenuSeparator key={index} />;

              case 'link':
                return (
                  <DropdownMenuItem asChild key={index}>
                    <Link href={item.href || ''}>{item.label}</Link>
                  </DropdownMenuItem>
                );

              case 'item':
                return (
                  <DropdownMenuItem
                    key={index}
                    disabled={item.disabled}
                    onClick={(e) => {
                      item?.onClick?.(e);
                      setIsSheetOpen(false);
                    }}
                  >
                    {item.label}
                  </DropdownMenuItem>
                );
            }
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger className={twMerge('group', triggerClassName)}>
        {trigger}
      </SheetTrigger>

      <SheetPortal>
        <SheetOverlay />
        <SheetContent side="bottom">
          <div className="flex flex-col items-start gap-2 mt-2">
            {menuItems.map((item, index) => {
              switch (item.type) {
                case 'label':
                  return (
                    <span
                      key={index}
                      className="text-sm text-gray-600 dark:text-gray-dark-300 break-all mr-10"
                    >
                      {item.label}
                    </span>
                  );

                case 'separator':
                  return (
                    <hr
                      key={index}
                      className="w-full my-0 border-gray-300 dark:border-gray-dark-700"
                    />
                  );

                case 'item':
                  return (
                    <button
                      key={index}
                      type="button"
                      disabled={item.disabled}
                      className={twMerge(
                        'w-full text-left rounded-lg py-2 px-3',
                        'text-black dark:text-white',
                        'active:bg-gray-300 dark:active:bg-gray-dark-700',
                        'disabled:opacity-50 disabled:cursor-not-allowed',
                      )}
                      onClick={(e) => {
                        item?.onClick?.(e);
                        setIsSheetOpen(false);
                      }}
                    >
                      {item.label}
                    </button>
                  );
              }
            })}
          </div>

          <SheetClose />
        </SheetContent>
      </SheetPortal>
    </Sheet>
  );
};
