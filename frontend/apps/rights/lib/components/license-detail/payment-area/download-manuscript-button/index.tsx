'use client';

import {
  downloadFileFromUrl,
  getBookLicenseManuscriptUrlClientAction,
} from '@pw-fe-monorepo/configs';
import { Button } from '@pw-fe-monorepo/ui';
import { forwardRef, useContext, useState } from 'react';
import { toast } from 'sonner';
import { LicenseDetailContext } from '../../provider/license-detail.provider';

export const DownloadManuscriptButton = forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Button>
>((props, ref) => {
  const { license } = useContext(LicenseDetailContext);

  const [isDownloading, setIsDownloading] = useState(false);

  return (
    <Button
      variant="primary"
      {...props}
      ref={ref}
      loading={isDownloading}
      onClick={async () => {
        try {
          setIsDownloading(true);

          const manuscriptUrl = await getBookLicenseManuscriptUrlClientAction(
            license.id,
          );

          await downloadFileFromUrl(manuscriptUrl, license.title);
        } catch (error) {
          const err = error as Error;
          toast.error(
            err.message ||
              'Failed to download manuscript. Please reach out to support for assistance.',
          );
        } finally {
          setIsDownloading(false);
        }
      }}
    >
      Download manuscript
    </Button>
  );
});
