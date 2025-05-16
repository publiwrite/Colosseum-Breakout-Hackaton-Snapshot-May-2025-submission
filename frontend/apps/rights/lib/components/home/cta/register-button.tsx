'use client';

import { AuthModalContext, buttonVariants, PwLink } from '@pw-fe-monorepo/ui';
import { useSession } from 'next-auth/react';
import { useContext } from 'react';

export const RegisterButton = () => {
  const { data: session } = useSession();
  const { setIsSignInModalOpen } = useContext(AuthModalContext);

  if (!session) {
    return (
      <PwLink
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setIsSignInModalOpen(true, '/register');
        }}
        className={buttonVariants({ variant: 'primary' })}
      >
        Register Book
      </PwLink>
    );
  }

  return (
    <PwLink href="/register" className={buttonVariants({ variant: 'primary' })}>
      Register Book
    </PwLink>
  );
};
