'use client';

import { useApolloClient } from '@apollo/client';
import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support';
import { getApolloClientClient } from '@pw-fe-monorepo/configs';
import { Session } from 'next-auth';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

function UpdateAuth({
  children,
  initialSession,
}: {
  children: React.ReactNode;
  initialSession: Session | null;
}) {
  const { data: session, status } = useSession();
  const apolloClient = useApolloClient();

  apolloClient.defaultContext.accessToken =
    session?.access_token || initialSession?.access_token;

  useEffect(() => {
    if (status === 'authenticated') {
      apolloClient.defaultContext.accessToken = session.access_token;
    }

    if (status === 'unauthenticated') {
      apolloClient.defaultContext.accessToken = undefined;
    }
  }, [status]);

  return <>{children}</>;
}

export function ApolloProvider({
  initialSession,
  children,
}: {
  initialSession: Session | null;
  children: React.ReactNode;
}) {
  return (
    <ApolloNextAppProvider makeClient={() => getApolloClientClient()}>
      <UpdateAuth initialSession={initialSession}>{children}</UpdateAuth>
    </ApolloNextAppProvider>
  );
}
