'use client';

import { createContext, useState } from 'react';

export const HeaderMenuContext = createContext<{
  isTopMenuOpen: boolean;
  setIsTopMenuOpen: (isOpen: boolean) => void;
}>(null as any);

export function HeaderMenuProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isTopMenuOpen, setIsTopMenuOpen] = useState(false);

  const value = {
    isTopMenuOpen,
    setIsTopMenuOpen,
  };

  return (
    <HeaderMenuContext.Provider value={value}>
      {children}
    </HeaderMenuContext.Provider>
  );
}
