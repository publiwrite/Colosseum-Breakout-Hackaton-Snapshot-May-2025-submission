'use client';

import { Button } from '@pw-fe-monorepo/ui';
import { useContext } from 'react';
import { AuthModalContext } from '../auth-modal.provider';

export const SignUpLink = () => {
  const { setIsSignUpModalOpen, setIsSignInModalOpen } =
    useContext(AuthModalContext);

  return (
    <p className="text-gray-700 dark:text-gray-dark-300 flex items-center">
      {`Don't`} have an account?&nbsp;
      <Button
        variant="tertiary"
        onClick={() => {
          setIsSignInModalOpen(false);
          setIsSignUpModalOpen(true);
        }}
      >
        Sign up
      </Button>
    </p>
  );
};
