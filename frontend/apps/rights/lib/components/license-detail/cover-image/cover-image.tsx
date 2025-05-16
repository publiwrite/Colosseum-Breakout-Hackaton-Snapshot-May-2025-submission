'use client';

import { getAsset, getDynamicCdnUrl } from '@pw-fe-monorepo/configs';
import { PwImage } from '@pw-fe-monorepo/ui';
import { useContext } from 'react';
import { LicenseDetailContext } from '../provider/license-detail.provider';

export const CoverImage = () => {
  const { license } = useContext(LicenseDetailContext);

  if (!license?.blurHashedCoverUrl) return null;

  const asset = getAsset('cover', license.assets);

  return (
    <PwImage
      priority
      fill
      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
      className="max-w-full max-h-full !w-auto !h-auto m-auto shadow-2xl object-contain"
      placeholder="blur"
      blurDataURL={license.blurHashedCoverUrl}
      src={getDynamicCdnUrl(asset?.key)!}
      alt={license.title}
    />
  );
};
