'use client';

import { PublicationFormat } from '@pw-fe-monorepo/configs';
import {
  DocumentTextIcon,
  HardcoverIcon,
  PaperbackIcon,
  TableDocumentIcon,
} from '@pw-fe-monorepo/ui';
import { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

export const IconByPublicationFormat = ({
  publicationFormat,
  isSelected,
  iconClassName,
}: {
  publicationFormat: PublicationFormat;
  isSelected: boolean;
  iconClassName: string;
}) => {
  const map = useMemo(() => {
    return {
      [PublicationFormat.Ebook]: (
        <DocumentTextIcon
          variant={isSelected ? 'bulk' : 'twotone'}
          className={twMerge(
            iconClassName,
            isSelected
              ? 'fill-purple-500 dark:fill-purple-200'
              : 'stroke-black dark:stroke-white',
          )}
        />
      ),
      [PublicationFormat.Hardcover]: (
        <HardcoverIcon
          variant={isSelected ? 'bulk' : 'twotone'}
          className={twMerge(
            iconClassName,
            isSelected
              ? 'fill-purple-500 dark:fill-purple-200'
              : 'stroke-black dark:stroke-white',
          )}
        />
      ),
      [PublicationFormat.Paperback]: (
        <PaperbackIcon
          variant={isSelected ? 'bulk' : 'twotone'}
          className={twMerge(
            iconClassName,
            isSelected
              ? 'fill-purple-500 dark:fill-purple-200'
              : 'stroke-black dark:stroke-white',
          )}
        />
      ),
      [PublicationFormat.Pdf]: (
        <TableDocumentIcon
          variant={isSelected ? 'bulk' : 'twotone'}
          className={twMerge(
            iconClassName,
            isSelected
              ? 'fill-purple-500 dark:fill-purple-200'
              : 'stroke-black dark:stroke-white',
          )}
        />
      ),
    };
  }, [isSelected, iconClassName, publicationFormat]);

  return map[publicationFormat] || null;
};
