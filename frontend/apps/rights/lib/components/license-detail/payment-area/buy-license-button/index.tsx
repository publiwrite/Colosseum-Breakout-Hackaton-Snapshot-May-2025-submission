'use client';

import { createHelioLicensePaymentClientAction } from '@pw-fe-monorepo/configs';
import { AuthModalContext, Button, Helio, PwModal } from '@pw-fe-monorepo/ui';
import {
  MyBookLicensesContext,
  PurchasedBookLicensesContext,
} from '@rights/lib/providers';
import { useSession } from 'next-auth/react';
import { useContext, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { LicenseDetailContext } from '../../provider/license-detail.provider';

export const BuyLicenseButton = () => {
  const { data: session } = useSession();
  const { license, setIsSuccessModalOpen } = useContext(LicenseDetailContext);
  const { fetchPurchasedBookLicenses } = useContext(
    PurchasedBookLicensesContext,
  );
  const { fetchMyBookLicenses } = useContext(MyBookLicensesContext);
  const { setIsSignInModalOpen } = useContext(AuthModalContext);

  const [isLoading, setIsLoading] = useState(false);
  const [isBuyLicenseModalOpen, setIsBuyLicenseModalOpen] = useState(false);

  const [paylinkId, setPaylinkId] = useState<string | null>(null);
  const publicationListingId = license.id;

  if (!publicationListingId) {
    return null;
  }

  return (
    <>
      <Button
        variant="primary"
        className="flex-1"
        loading={isLoading}
        onClick={async () => {
          if (!session) {
            setIsSignInModalOpen(true, window.location.href);
            return;
          }

          setIsLoading(true);

          const paylinkId = await createHelioLicensePaymentClientAction(
            license.id,
          );

          if (!paylinkId) {
            return;
          }

          setPaylinkId(paylinkId);
          setIsBuyLicenseModalOpen(true);
        }}
      >
        Buy license
      </Button>

      <PwModal
        open={isBuyLicenseModalOpen}
        onOpenChange={(open) => {
          if (!open) {
            setIsLoading(false);
          }

          setIsBuyLicenseModalOpen(open);
        }}
        dialogContentClassName="w-full max-w-sm"
      >
        <div className="relative min-h-24 py-10">
          <div
            className={twMerge(
              'p-10 flex items-center justify-center',
              'absolute inset-0 z-0',
            )}
          ></div>

          {paylinkId && (
            <div className="relative z-10 bg-white dark:bg-gray-dark-900">
              <Helio
                paylinkId={paylinkId}
                onPaymentStarted={() => null}
                onPaymentSuccess={() => {
                  setIsBuyLicenseModalOpen(false);
                  setIsSuccessModalOpen(true);
                  setTimeout(() => {
                    fetchPurchasedBookLicenses();
                    fetchMyBookLicenses();
                  }, 400);
                }}
              />
            </div>
          )}
        </div>
      </PwModal>
    </>
  );
};
