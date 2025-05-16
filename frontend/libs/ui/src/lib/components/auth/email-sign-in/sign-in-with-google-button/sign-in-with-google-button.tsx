'use client';

import { NextAuthProviders } from '@pw-fe-monorepo/configs';
import { Button } from '@pw-fe-monorepo/ui';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

export const SignInWithGoogleButton = ({
  callbackUrl,
}: {
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
      }}
    >
      <FcGoogle size={20} />
      Continue with Google
    </Button>
  );
};
