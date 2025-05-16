'use client';

import { convertCentsToPriceTag } from '@pw-fe-monorepo/configs';
import {
  DocumentTextIcon,
  DottedHorizontalList,
  RadioGroup,
  RadioGroupItem,
} from '@pw-fe-monorepo/ui';
import { useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { LicenseDetailContext } from '../../provider/license-detail.provider';

export const ProductVariants = () => {
  const { license } = useContext(LicenseDetailContext);

  return (
    <RadioGroup value={license.id} className="flex flex-col gap-3">
      <label
        htmlFor={license.id}
        className={twMerge(
          'flex items-center justify-between shadow-sm',
          'p-3 rounded-lg cursor-pointer',
          'border border-gray-300 dark:border-gray-dark-600',
          'ring-2 ring-purple-500 dark:ring-purple-300',
          'bg-white dark:bg-gray-dark-800',
        )}
      >
        <span className={twMerge('flex items-center gap-3')}>
          <span
            className={twMerge(
              'w-12 h-12 rounded-full',
              'flex items-center justify-center',
              'bg-gray-100 dark:bg-gray-dark-700',
            )}
          >
            <DocumentTextIcon
              variant="bulk"
              className={twMerge(
                'w-6 h-6',
                'fill-purple-500 dark:fill-purple-200',
              )}
            />
          </span>

          <span className="flex flex-col items-start">
            <DottedHorizontalList>
              <label
                htmlFor={license.id}
                className={twMerge(
                  'cursor-pointer',
                  'text-gray-700 dark:text-gray-dark-300',
                  'peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
                  'text-black dark:text-white',
                )}
              >
                AI License
              </label>
            </DottedHorizontalList>

            <label htmlFor={license.id} className={twMerge('cursor-pointer')}>
              <span
                className={twMerge(
                  'text-lg font-medium',
                  'text-black dark:text-white',
                )}
              >
                {convertCentsToPriceTag(license.priceInCents || 0, {
                  useFreeLabel: true,
                })}
              </span>
            </label>
          </span>
        </span>

        <RadioGroupItem value={license.id} id={license.id} />
      </label>
    </RadioGroup>
  );
};
