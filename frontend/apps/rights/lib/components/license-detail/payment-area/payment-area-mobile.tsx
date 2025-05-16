'use client';

import {
  Button,
  Sheet,
  SheetClose,
  SheetContent,
  SheetOverlay,
  SheetPortal,
  SheetTrigger,
} from '@pw-fe-monorepo/ui';
import { useContext, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { LicenseDetailContext } from '../provider/license-detail.provider';
import { BuyLicenseButton } from './buy-license-button';
import { DownloadManuscriptButton } from './download-manuscript-button';
import { ProductVariants } from './product-variants';
import { SignedAgreementButton } from './signed-agreement-button';

export const PaymentAreaMobile = () => {
  const { isUserOwnsThisLicense, isUserAlreadyPurchased } =
    useContext(LicenseDetailContext);

  const title = useMemo(
    () => (isUserAlreadyPurchased ? 'Download options' : 'Show buying options'),
    [isUserAlreadyPurchased],
  );

  if (isUserOwnsThisLicense) {
    return null;
  }

  return (
    <div
      className={twMerge(
        'py-4 px-5 h-[var(--payment-bottom-bar-height)]',
        'flex items-center gap-4',
        'bg-white dark:bg-gray-dark-800',
        'border-t border-gray-300 dark:border-gray-dark-700',
      )}
    >
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="secondary" className="flex-1">
            {title}
          </Button>
        </SheetTrigger>

        <SheetPortal>
          <SheetOverlay />
          <SheetContent
            side="bottom"
            className="bg-white dark:bg-gray-dark-800 shadow-none"
          >
            <div className="flex flex-col gap-6 mb-2">
              <p className="text-xl font-bold lg:text-lg lg:font-medium">
                {title}
              </p>

              {isUserAlreadyPurchased && (
                <>
                  <DownloadManuscriptButton />
                  <hr />
                  <SignedAgreementButton />
                </>
              )}

              {!isUserAlreadyPurchased && (
                <>
                  <ProductVariants />
                  <hr />
                  <BuyLicenseButton />
                </>
              )}
            </div>

            <SheetClose />
          </SheetContent>
        </SheetPortal>
      </Sheet>
    </div>
  );
};
