'server-only';

import { cache } from 'react';
import { GET_PEN_BOOK_AUTHORS } from '../../api';
import { getApolloServerClient } from '../../apollo/server';

export type GetPenBookAuthorsServerActionType = Awaited<
  ReturnType<typeof getPenBookAuthorsServerAction>
>;

export const getPenBookAuthorsServerAction = cache(async () => {
  const apolloClient = getApolloServerClient();

  const { data } = await apolloClient.query({
    query: GET_PEN_BOOK_AUTHORS,
  });

  return data?.getPenBookAuthors;
});
