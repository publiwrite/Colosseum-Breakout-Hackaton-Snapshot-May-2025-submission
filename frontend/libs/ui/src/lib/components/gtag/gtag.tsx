'use client';

import { GoogleTagManager } from '@next/third-parties/google';
import { IS_PRODUCTION } from '@pw-fe-monorepo/configs';
import { useSession } from 'next-auth/react';

export const Gtag = () => {
  const { data: session } = useSession();

  const userId = session?.user.id;

  if (!IS_PRODUCTION) return null;

  return (
    <GoogleTagManager
      gtmId="GTM-W3543W96"
      dataLayer={{ ...(userId && { user_id: userId }) }}
    />
  );
};
