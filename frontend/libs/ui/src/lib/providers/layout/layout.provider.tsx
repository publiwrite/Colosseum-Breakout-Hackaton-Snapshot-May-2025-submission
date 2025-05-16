'use client';

import {
  LAYOUT_COOKIE_NAME,
  NON_SECURE_COOKIE_OPTIONS,
} from '@pw-fe-monorepo/configs';
import { useCookie } from '@pw-fe-monorepo/ui';
import { createContext, useEffect, useState } from 'react';

export const LayoutContext = createContext<{
  layout: 'vertical' | 'horizontal';
  setLayout: (layout: 'vertical' | 'horizontal') => void;
}>(null as any);

export const LayoutProvider = ({
  children,
  layoutCookie,
}: {
  children: React.ReactNode;
  layoutCookie?: string;
}) => {
  const { updateCookie } = useCookie(LAYOUT_COOKIE_NAME);

  const [layout, setLayout] = useState<'vertical' | 'horizontal'>(
    (layoutCookie as 'vertical' | 'horizontal') || 'vertical',
  );

  useEffect(() => {
    updateCookie(layout, NON_SECURE_COOKIE_OPTIONS);
  }, [layout]);

  const value = {
    layout,
    setLayout,
  };

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
};
