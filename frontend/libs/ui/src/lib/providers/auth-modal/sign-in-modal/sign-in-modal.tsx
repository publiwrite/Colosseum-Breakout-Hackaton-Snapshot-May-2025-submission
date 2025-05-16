'use client';

import {
  AuthHeading,
  EmailSignIn,
  SIGN_IN_TITLE,
  Tabs,
  TabsContent,
  TabsList,
  UnderlinedTabsTrigger,
  WalletSignIn,
} from '@pw-fe-monorepo/ui';
import { useContext } from 'react';
import { AuthModalContext } from '../auth-modal.provider';
import { SignUpLink } from './sign-up-link';

export const SignInModal = () => {
  const { redirectUrl } = useContext(AuthModalContext);

  return (
    <div className="w-full flex flex-col items-center lg:justify-center gap-7">
      <AuthHeading
        heading={SIGN_IN_TITLE}
        description="Enter details and sign in your account"
      />

      <Tabs defaultValue="email" className="w-full flex flex-col gap-7">
        <TabsList className="flex items-center justify-start">
          <UnderlinedTabsTrigger value="email">
            Sign in via Email
          </UnderlinedTabsTrigger>
          <UnderlinedTabsTrigger value="wallet">
            Sign in via Wallet
          </UnderlinedTabsTrigger>
        </TabsList>
        <TabsContent value="email">
          <EmailSignIn callbackUrl={redirectUrl} />
        </TabsContent>
        <TabsContent value="wallet">
          <WalletSignIn callbackUrl={redirectUrl} />
        </TabsContent>
      </Tabs>

      <SignUpLink />
    </div>
  );
};
