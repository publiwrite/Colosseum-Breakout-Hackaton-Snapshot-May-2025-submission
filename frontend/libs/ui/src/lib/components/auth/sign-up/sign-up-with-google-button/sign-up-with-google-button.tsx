'use client';

import { NextAuthProviders } from '@pw-fe-monorepo/configs';
import { Button, gtmEvent } from '@pw-fe-monorepo/ui';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

export const SignUpWithGoogleButton = ({
  source,
  callbackUrl,
}: {
  source: 'modal' | 'page';
  callbackUrl?: string;
}) => {
  const [loading, setLoading] = useState(false);

  return (
    <Button
      type="button"
      variant="secondary"
      loading={loading}
      onClick={() => {
        setLoading(true);

        signIn(NextAuthProviders.GOOGLE, { redirect: true, callbackUrl });

        gtmEvent('sign_up_method_selected', {
          method: 'google',
          source,
        });
      }}
    >
      <FcGoogle size={20} />
      Sign up with Google
    </Button>
  );
};
