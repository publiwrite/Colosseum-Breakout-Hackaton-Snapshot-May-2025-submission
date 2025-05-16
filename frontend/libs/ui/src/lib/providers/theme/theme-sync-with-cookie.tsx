'use client';

import {
  NON_SECURE_COOKIE_OPTIONS,
  THEME_COOKIE_NAME,
} from '@pw-fe-monorepo/configs';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import { useCookie } from '../../hooks';

export const ThemeSyncWithCookie = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const { value: themeCookie, updateCookie } = useCookie(THEME_COOKIE_NAME);

  useEffect(() => {
    if (!resolvedTheme && themeCookie) {
      setTheme(themeCookie);
      return;
    }

    if (!themeCookie && resolvedTheme) {
      updateCookie(resolvedTheme, NON_SECURE_COOKIE_OPTIONS);
      return;
    }

    if (!themeCookie) {
      return;
    }

    if (themeCookie !== resolvedTheme) {
      setTheme(themeCookie);
    }
  }, []);

  return null;
};
