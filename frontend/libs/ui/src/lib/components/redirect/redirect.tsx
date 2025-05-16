'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const Redirect = ({ url }: { url: string }) => {
  const router = useRouter();

  useEffect(() => {
    // if url is local, use next router
    if (url.startsWith('/')) {
      router.push(url);
      return;
    }

    window.location.replace(url);
  }, []);

  return null;
};
