'use client';

import {
  NON_SECURE_COOKIE_OPTIONS,
  THEME_COOKIE_NAME,
} from '@pw-fe-monorepo/configs';
import { useTheme } from 'next-themes';
import { useCookie } from './use-cookie';

export const usePwTheme = () => {
  const { updateCookie } = useCookie(THEME_COOKIE_NAME);
  const { resolvedTheme, setTheme } = useTheme();

  const setThemeAndCookie = (theme: string) => {
    setTheme(theme);
    updateCookie(theme, NON_SECURE_COOKIE_OPTIONS);
  };

  {
    return { theme: resolvedTheme, setTheme: setThemeAndCookie };
  }
};
