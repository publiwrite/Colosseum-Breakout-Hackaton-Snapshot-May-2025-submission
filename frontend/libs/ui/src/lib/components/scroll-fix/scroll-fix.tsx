'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export const ScrollFix = () => {
  const firstTimeRef = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    if (firstTimeRef.current) {
      window.scrollTo(0, 0);
    } else {
      firstTimeRef.current = true;
    }
  }, [pathname]);

  return <></>;
};
