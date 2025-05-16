'use client';

import { ThemeProvider as TP } from 'next-themes';
import { ThemeSyncWithCookie } from './theme-sync-with-cookie';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <TP enableSystem={true} attribute="class">
      {children}
      <ThemeSyncWithCookie />
    </TP>
  );
};
