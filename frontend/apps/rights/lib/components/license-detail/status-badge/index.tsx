'use client';

import { AiIcon, Tag, TickCircleIcon, useMounted } from '@pw-fe-monorepo/ui';
import { useContext } from 'react';
import { LicenseDetailContext } from '../provider/license-detail.provider';

export const StatusBadge = () => {
  const mounted = useMounted();
  const { isUserAlreadyPurchased, isUserOwnsThisLicense, loading } =
    useContext(LicenseDetailContext);

  if (!mounted) {
    return null;
  }

  if (loading) {
    return null;
  }

  if (isUserOwnsThisLicense) {
    return null;
  }

  if (isUserAlreadyPurchased) {
    return (
      <Tag color="green" size="small" className="flex items-center gap-1">
        <TickCircleIcon className="w-4 h-4 fill-[currentColor]" />
        AI license purchased
      </Tag>
    );
  }

  return (
    <Tag color="blue" size="small" className="flex items-center gap-1">
      <AiIcon className="w-4 h-4 fill-[currentColor]" />
      AI license not purchased
    </Tag>
  );
};
