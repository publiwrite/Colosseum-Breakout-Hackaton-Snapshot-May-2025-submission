'use client';

import {
  downloadFileFromUrl,
  getBookLicenseOrderByIdClientAction,
} from '@pw-fe-monorepo/configs';
import { Button } from '@pw-fe-monorepo/ui';
import { IPFS_URL } from '@rights/lib/constants/urls';
import { forwardRef, useContext, useState } from 'react';
import { toast } from 'sonner';
import { LicenseDetailContext } from '../../provider/license-detail.provider';

export const SignedAgreementButton = forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Button>
>((props, ref) => {
  const { license, orderId } = useContext(LicenseDetailContext);

  const [isDownloading, setIsDownloading] = useState(false);

  return (
    <Button
      variant="tertiary"
      {...props}
      ref={ref}
      loading={isDownloading}
      onClick={async () => {
        if (!orderId) {
          return;
        }

        try {
          setIsDownloading(true);

          const { signedTemplateIpfsCid } =
            await getBookLicenseOrderByIdClientAction(orderId);

          const signedAgreementUrl = `${IPFS_URL}${signedTemplateIpfsCid}`;

          await downloadFileFromUrl(signedAgreementUrl, license.title);
        } catch (error) {
          const err = error as Error;
          toast.error(
            err.message ||
              'Failed to download signed agreement. Please reach out to support for assistance.',
          );
        } finally {
          setIsDownloading(false);
        }
      }}
    >
      Signed agreement
    </Button>
  );
});
