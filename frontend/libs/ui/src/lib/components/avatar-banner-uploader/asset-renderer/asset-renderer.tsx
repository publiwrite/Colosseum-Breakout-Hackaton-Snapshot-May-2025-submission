'use client';

import { GalleryIcon, PwImage } from '@pw-fe-monorepo/ui';

export const AssetRenderer = ({
  existingFileUrl,
}: {
  existingFileUrl?: string;
}) => {
  return existingFileUrl ? (
    <PwImage
      fill
      className="object-cover"
      src={existingFileUrl}
      alt="Banner Image"
    />
  ) : (
    <GalleryIcon className="w-10 h-10 stroke-gray-600 dark:stroke-gray-dark-300" />
  );
};
