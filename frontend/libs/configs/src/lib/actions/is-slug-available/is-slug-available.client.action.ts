'use client';

import { getSession } from 'next-auth/react';
import { IS_SLUG_AVAILABLE } from '../../api';
import { getApolloClientClient } from '../../apollo';

export type IsSlugAvailableClientActionType = Awaited<
  ReturnType<typeof isSlugAvailableClientAction>
>;

export async function isSlugAvailableClientAction(slug: string) {
  const session = await getSession();
  const apolloClient = getApolloClientClient();
  apolloClient.defaultContext.accessToken = session?.access_token;

  try {
    const { data } = await apolloClient.query({
      query: IS_SLUG_AVAILABLE,
      variables: { input: slug },
    });

    return data?.isSlugAvailable;
  } catch (error) {
    return false;
  }
}
