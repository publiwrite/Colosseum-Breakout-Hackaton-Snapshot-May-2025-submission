'use client';

import { useMounted } from '@pw-fe-monorepo/ui';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export const Glow = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'>
>(({ className, style, ...props }, ref) => {
  const mounted = useMounted();

  if (!mounted) return null;

  return (
    <div
      ref={ref}
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_STATIC_ASSETS_URL}/static/collaborative-editor/images/noise.svg)`,
        ...style,
      }}
      className={twMerge(
        'z-[-1] fixed bottom-[-169px] left-[-59px]',
        'w-[374px] h-[374px] rounded-full',
        'bg-[#eddbfd] dark:bg-[#3A274A] blur-[52px] transform-gpu',
        className,
      )}
      {...props}
    ></div>
  );
});
