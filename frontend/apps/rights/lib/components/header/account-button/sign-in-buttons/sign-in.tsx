'use client';

import { AuthModalContext, Button } from '@pw-fe-monorepo/ui';
import { useContext } from 'react';

export const SignIn = () => {
  const { setIsSignInModalOpen } = useContext(AuthModalContext);

  return (
    <Button variant="secondary" onClick={() => setIsSignInModalOpen(true)}>
      Sign in
    </Button>
  );
};
