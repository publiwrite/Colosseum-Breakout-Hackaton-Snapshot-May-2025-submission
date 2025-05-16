'use client';

import { StarIcon } from '@pw-fe-monorepo/ui';
import { twMerge } from 'tailwind-merge';

export const ReviewStars = ({ overall }: { overall: number }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon
          key={i}
          variant={i + 1 <= overall ? 'bulk' : 'twotone'}
          className={twMerge(
            'w-5 h-5 lg:w-6 lg:h-6',
            i + 1 > overall && 'fill-gray-300 dark:fill-gray-dark-600',
          )}
        />
      ))}
    </div>
  );
};
