'use client';

import { AuthHeading, SIGN_UP_TITLE, SignUp } from '@pw-fe-monorepo/ui';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { AuthModalContext } from '../auth-modal.provider';
import { SignInLink } from './sign-in-link';

export const SignUpModal = () => {
  const router = useRouter();
  const { redirectUrl, setIsSignUpModalOpen, setVerifyAccountModalOpen } =
    useContext(AuthModalContext);

  return (
    <div className="w-full flex flex-col items-center lg:justify-center gap-7">
      <AuthHeading
        heading={SIGN_UP_TITLE}
        description="Enter details and create an account"
      />

      <SignUp
        source="modal"
        callbackUrl={redirectUrl}
        onSignUpComplete={() => {
          setIsSignUpModalOpen(false);

          if (redirectUrl) {
            router.push(redirectUrl);
            return;
          }

          setVerifyAccountModalOpen(true);
          router.refresh();
        }}
      />

      <SignInLink />
    </div>
  );
};
