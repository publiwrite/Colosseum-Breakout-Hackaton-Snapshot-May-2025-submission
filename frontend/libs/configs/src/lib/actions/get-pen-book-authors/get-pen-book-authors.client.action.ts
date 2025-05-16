'use client';

import { getSession } from 'next-auth/react';
import { GET_PEN_BOOK_AUTHORS } from '../../api';
import { getApolloClientClient } from '../../apollo';

export type GetPenBookAuthorsClientActionType = Awaited<
  ReturnType<typeof getPenBookAuthorsClientAction>
>;

export async function getPenBookAuthorsClientAction() {
  const session = await getSession();
  const apolloClient = getApolloClientClient();
  apolloClient.defaultContext.accessToken = session?.access_token;

  const { data } = await apolloClient.query({
    query: GET_PEN_BOOK_AUTHORS,
  });

  return data?.getPenBookAuthors;
}
