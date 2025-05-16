'use client';

import { twMerge } from 'tailwind-merge';
import { useMounted } from '../../hooks';

export const DateRenderer = ({ children }: { children: React.ReactNode }) => {
  const mounted = useMounted();

  return (
    <span
      suppressHydrationWarning
      className={twMerge(!mounted && 'skeleton-loader rounded-lg')}
    >
      {children}
    </span>
  );
};
