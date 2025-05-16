'use client';

import { useApolloClient } from '@apollo/client';
import { useCurrentUser } from '@pw-fe-monorepo/configs';
import { GetCurrentUserServerActionType } from '@pw-fe-monorepo/configs/server';
import * as Sentry from '@sentry/nextjs';
import { useSession } from 'next-auth/react';
import { createContext, useEffect, useState } from 'react';
import { gtmEvent } from '../../components';

export const CurrentUserContext = createContext<{
  user?: GetCurrentUserServerActionType;
  setUser: (user: GetCurrentUserServerActionType) => void;
  refetchUser: () => void;
}>(null as any);

export const CurrentUserProvider = ({
  children,
  initialUser,
}: {
  children: React.ReactNode;
  initialUser?: GetCurrentUserServerActionType;
}) => {
  const client = useApolloClient();
  const { data: session, status } = useSession();
  const [fetchCurrentuser] = useCurrentUser();
  const [user, setUser] = useState(initialUser);

  useEffect(() => {
    if (status === 'authenticated' && !user) {
      refetchUser();
    }

    if (status === 'unauthenticated') {
      setUser(undefined);
      Sentry.setUser(null);
    }
  }, [user, status]);

  useEffect(() => {
    // Sentry user context
    if (user) {
      Sentry.setUser({ id: user.id });
    }

    // GTM event for new user sign up
    if (user && user.profile) {
      const FIVE_MINUTES_IN_MS = 5 * 60 * 1000;
      const accountAge = new Date().getTime() - +user.profile.createdAt;
      if (accountAge > FIVE_MINUTES_IN_MS) {
        return;
      }

      // we don't track email_password here as it's being handled on verification screen.
      // this should only have google and solana_wallet
      const provider = user.oauthProviders?.[0];

      if (!provider) {
        return;
      }

      const method = provider.name === 'google' ? 'google' : 'solana_wallet';

      gtmEvent('sign_up_confirmed', {
        method,
        // ...(user.walletAddress && { wallet_name: 'Phantom' }), // You might want to make this dynamic based on actual wallet used
      });
    }
  }, [user]);

  async function refetchUser() {
    client.defaultContext.accessToken = session?.access_token;
    const { data } = await fetchCurrentuser();

    setUser(data?.currentUser || undefined);
    Sentry.setUser({ id: data?.currentUser.id });
  }

  const value = {
    user,
    setUser,
    refetchUser,
  };

  return (
    <CurrentUserContext.Provider value={value}>
      {children}
    </CurrentUserContext.Provider>
  );
};
