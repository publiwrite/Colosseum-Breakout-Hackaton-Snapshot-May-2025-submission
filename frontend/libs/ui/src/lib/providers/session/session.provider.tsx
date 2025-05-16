'use client';

import { userSignOut } from '@pw-fe-monorepo/configs';
import { useWallet } from '@solana/wallet-adapter-react';
import { Session } from 'next-auth';
import { SessionProvider as SP, useSession } from 'next-auth/react';
import { Suspense, useEffect } from 'react';
import { useMounted } from '../../hooks';

const SessionProviderWrapper = () => {
  const { data: session } = useSession();
  const wallet = useWallet();

  useEffect(() => {
    if (session?.error) {
      userSignOut(wallet);
      window.location.reload();
    }
  }, [session]);

  return null;
};

// This is for pre-render to work properly
// As it's throwing usePathname error while building if we don't mock it
const MockSessionProvider = ({ children }: { children: React.ReactNode }) => {
  const mockSession: Session | null = null;

  return <SP session={mockSession}>{children}</SP>;
};

const ActualSessionProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SP>
      {children}
      <SessionProviderWrapper />
    </SP>
  );
};

export const SessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const mounted = useMounted();

  if (!mounted) {
    return (
      <Suspense>
        <MockSessionProvider>{children}</MockSessionProvider>
      </Suspense>
    );
  }

  return <ActualSessionProvider>{children}</ActualSessionProvider>;
};
