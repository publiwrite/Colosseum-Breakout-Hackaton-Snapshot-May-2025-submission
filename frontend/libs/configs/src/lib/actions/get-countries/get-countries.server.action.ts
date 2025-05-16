'server-only';

import { cache } from 'react';
import { GET_COUNTRIES } from '../../api';
import { getApolloServerClient } from '../../apollo/server';

export type GetCountriesServerActionType = Awaited<
  ReturnType<typeof getCountriesServerAction>
>;

export const getCountriesServerAction = cache(
  async ({
    isStripeConnectedAccountSupported = false,
  }: {
    isStripeConnectedAccountSupported?: boolean;
  } = {}) => {
    const apolloClient = getApolloServerClient();

    const { data } = await apolloClient.query({
      query: GET_COUNTRIES,
      variables: { input: isStripeConnectedAccountSupported },
    });

    return data?.countries;
  },
);
