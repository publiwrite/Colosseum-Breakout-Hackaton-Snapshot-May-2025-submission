import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getSession } from 'next-auth/react';

/**
 * This function will only be used on the server functions.
 * Neither client side nor server components.
 */
export const getApolloFunctionClient = (cookie: string) => {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_GATEWAY_API_URL}/graphql`,
    credentials: 'include',
    headers: {
      cookie,
    },
  });

  const authLink = setContext(async (_, { headers }) => {
    const session = await getSession();

    const modifiedHeader = {
      headers: {
        ...headers,
        authorization: session?.access_token
          ? `Bearer ${session.access_token}`
          : '',
      },
    };
    return modifiedHeader;
  });

  const link = authLink.concat(httpLink);

  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });
};
