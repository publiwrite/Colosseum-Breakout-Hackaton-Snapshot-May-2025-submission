'use client';

import { userSignOut } from '@pw-fe-monorepo/configs';
import { useWallet } from '@solana/wallet-adapter-react';
import { useEffect } from 'react';
import { SolanaProvider } from '../../providers/solana/solana.provider';

/**
 * This component will be used on server components to sign out the user
 * and redirect them to the auth page.
 */
const SignOutComponent = () => {
  const wallet = useWallet();

  useEffect(() => {
    userSignOut(wallet);
  }, []);

  return null;
};

export const SignOut = () => {
  return (
    <SolanaProvider>
      <SignOutComponent />
    </SolanaProvider>
  );
};
