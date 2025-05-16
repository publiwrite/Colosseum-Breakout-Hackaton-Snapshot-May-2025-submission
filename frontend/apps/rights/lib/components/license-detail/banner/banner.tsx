'use client';

import { PwImage } from '@pw-fe-monorepo/ui';
import { useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { LicenseDetailContext } from '../provider/license-detail.provider';

export const Banner = () => {
  const { license } = useContext(LicenseDetailContext);

  if (!license?.blurHashedCoverUrl) return null;

  return (
    <div
      className={twMerge(
        'relative w-full h-full',
        'flex items-center justify-center',
      )}
    >
      <PwImage
        fill
        priority
        sizes="100vw"
        src={license.blurHashedCoverUrl}
        alt="book-banner"
        className="z-10 animate-in fade-in-0 object-cover transform-gpu"
      />
    </div>
  );
};
