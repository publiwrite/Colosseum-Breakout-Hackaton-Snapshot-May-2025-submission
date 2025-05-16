'use client';

import { useEffect, useMemo, useState } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../../../tailwind.config.base';

const fullConfig = resolveConfig(tailwindConfig);
const {
  theme: { screens },
} = fullConfig;
export const useScreenSize = (
  query: keyof typeof screens,
): boolean | undefined => {
  const [isMatch, setMatch] = useState<boolean>();

  const memoisedIsMatch = useMemo(() => isMatch, [isMatch]);

  const onChange = (e: MediaQueryListEvent) => setMatch(e.matches);

  useEffect(() => {
    const mediaQuery = `(min-width: ${screens[query]})`;
    const matchQueryList = window.matchMedia(mediaQuery);

    setMatch(matchQueryList.matches);
    matchQueryList.addEventListener('change', onChange);
    return () => matchQueryList.removeEventListener('change', onChange);
  }, [query]);

  return memoisedIsMatch;
};
