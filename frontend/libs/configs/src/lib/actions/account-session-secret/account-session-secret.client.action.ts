'use client';

import { getSession } from 'next-auth/react';
import { ACCOUNT_SESSION_SECRET } from '../../api/create-order.query';
import { getApolloClientClient } from '../../apollo';

export type AccountSessionSecretActionType = Awaited<
  ReturnType<typeof accountSessionSecretAction>
>;

export async function accountSessionSecretAction() {
  const session = await getSession();
  const apolloClient = getApolloClientClient();
  apolloClient.defaultContext.accessToken = session?.access_token;

  const { data } = await apolloClient.query({
    query: ACCOUNT_SESSION_SECRET,
  });

  if (!data) {
    throw new Error('Failed to fetch account session secret');
  }

  return data?.accountSessionSecret;
}
