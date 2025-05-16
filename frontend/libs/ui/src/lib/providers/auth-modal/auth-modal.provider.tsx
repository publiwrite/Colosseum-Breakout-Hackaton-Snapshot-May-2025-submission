'use client';

import { PwModal } from '@pw-fe-monorepo/ui';
import { useSession } from 'next-auth/react';
import { createContext, useEffect, useState } from 'react';
import { SignInModal } from './sign-in-modal/sign-in-modal';
import { SignUpModal } from './sign-up-modal/sign-up-modal';
import { VerifyAccount } from './verify-account/verify-account';

export const AuthModalContext = createContext<{
  redirectUrl?: string;
  isSignInModalOpen: boolean;
  isSignUpModalOpen: boolean;
  verifyAccountModalOpen: boolean;
  setIsSignInModalOpen: (isOpen: boolean, redirectUrl?: string) => void;
  setIsSignUpModalOpen: (isOpen: boolean, redirectUrl?: string) => void;
  setVerifyAccountModalOpen: (isOpen: boolean) => void;
}>(null as any);

export const AuthModalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data: session } = useSession();

  const [redirectUrl, setRedirectUrl] = useState<string>();
  const [isSignInModalOpen, _setIsSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, _setIsSignUpModalOpen] = useState(false);
  const [verifyAccountModalOpen, setVerifyAccountModalOpen] = useState(false);

  function setIsSignInModalOpen(isOpen: boolean, redirectUrl?: string) {
    _setIsSignInModalOpen(isOpen);
    setRedirectUrl(redirectUrl);
  }

  function setIsSignUpModalOpen(isOpen: boolean, redirectUrl?: string) {
    _setIsSignUpModalOpen(isOpen);
    setRedirectUrl(redirectUrl);
  }

  useEffect(() => {
    if (!isSignInModalOpen && !isSignUpModalOpen) {
      setRedirectUrl(undefined);
    }
  }, [isSignInModalOpen, isSignUpModalOpen]);

  // Close modals after successful sign in
  useEffect(() => {
    if (session) {
      setIsSignInModalOpen(false);
      setIsSignUpModalOpen(false);
    }
  }, [session]);

  const value = {
    redirectUrl,
    isSignInModalOpen,
    isSignUpModalOpen,
    verifyAccountModalOpen,
    setIsSignInModalOpen,
    setIsSignUpModalOpen,
    setVerifyAccountModalOpen,
  };

  return (
    <AuthModalContext.Provider value={value}>
      {children}

      <PwModal open={isSignInModalOpen} onOpenChange={setIsSignInModalOpen}>
        <SignInModal />
      </PwModal>

      <PwModal open={isSignUpModalOpen} onOpenChange={setIsSignUpModalOpen}>
        <SignUpModal />
      </PwModal>

      <PwModal
        open={verifyAccountModalOpen}
        onOpenChange={setVerifyAccountModalOpen}
      >
        <VerifyAccount />
      </PwModal>
    </AuthModalContext.Provider>
  );
};
