'use client';

import { useMounted } from '@pw-fe-monorepo/ui';
import { useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { LicenseDetailContext } from '../provider/license-detail.provider';
import { BuyLicenseButton } from './buy-license-button';
import { DownloadManuscriptButton } from './download-manuscript-button';
import { ProductVariants } from './product-variants';
import { SignedAgreementButton } from './signed-agreement-button';

export const PaymentArea = () => {
  const mounted = useMounted();
  const { isUserAlreadyPurchased, loading, isUserOwnsThisLicense } =
    useContext(LicenseDetailContext);

  if (!mounted) {
    return null;
  }

  if (isUserOwnsThisLicense) {
    return null;
  }

  if (loading) {
    return null;
  }

  return (
    <>
      <div
        className={twMerge(
          'rounded-2xl p-5',
          'border border-gray-300 dark:border-gray-dark-600',
          'flex flex-col gap-5',
        )}
      >
        {isUserAlreadyPurchased && (
          <>
            <DownloadManuscriptButton />
            <SignedAgreementButton />
          </>
        )}

        {!isUserAlreadyPurchased && (
          <>
            <ProductVariants />
            <BuyLicenseButton />
          </>
        )}
      </div>
    </>
  );
};
