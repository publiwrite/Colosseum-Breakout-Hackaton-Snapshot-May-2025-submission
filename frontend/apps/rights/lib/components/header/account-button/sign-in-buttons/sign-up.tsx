'use client';

import { AuthModalContext, Button, gtmEvent } from '@pw-fe-monorepo/ui';
import { useContext } from 'react';

const SIGN_UP_TEXT = 'Sign up';

export const SignUp = () => {
  const { setIsSignUpModalOpen } = useContext(AuthModalContext);

  return (
    <Button
      onClick={() => {
        setIsSignUpModalOpen(true);

        gtmEvent('sign_up_clicked', {
          button_location: 'header',
          button_text: SIGN_UP_TEXT,
        });
      }}
    >
      {SIGN_UP_TEXT}
    </Button>
  );
};
