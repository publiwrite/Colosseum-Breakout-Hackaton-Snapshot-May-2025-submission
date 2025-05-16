'server-only';

import { cache } from 'react';
import { GET_CURRENT_USER } from '../../api';
import { GetCurrentUserQuery } from '../../apollo';
import { getApolloServerClient } from '../../apollo/get-apollo-server-client';

export type GetCurrentUserServerActionType = Awaited<
  ReturnType<typeof getCurrentUserServerAction>
>;

export const getCurrentUserServerAction = cache(async () => {
  const apolloClient = getApolloServerClient();
  let user: GetCurrentUserQuery['currentUser'] | undefined;

  try {
    const { data, error } = await apolloClient.query({
      query: GET_CURRENT_USER,
    });

    if (error) {
      throw new Error(error.message);
    }

    user = data.currentUser;
  } catch (error) {
    user = undefined;
  }

  return user;
});
