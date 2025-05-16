'use client';

import { ApolloLink, HttpLink, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import {
  ApolloClient,
  InMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support';

/**
 * This function will be used on the client side wrapper only.
 * Do not import anywhere in the code, as you'll have the hooks for the regular client-side usage.
 * https://www.apollographql.com/docs/react/api/react/hooks/
 */
export const getApolloClientClient = () => {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_GATEWAY_API_URL}/graphql`,
    credentials: 'include',
  });

  // Log any GraphQL errors or network error that occurred
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.error(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );
    }

    if (networkError) {
      console.error(`[Network error]: ${networkError}`);
    }
  });

  const authLink = setContext(async (_, { headers, ...rest }) => {
    const accessToken = rest.accessToken;

    const modifiedHeader = {
      headers: {
        ...headers,
        ...(accessToken && { authorization: `Bearer ${accessToken}` }),
      },
    };

    return modifiedHeader;
  });

  const link = from([errorLink, authLink, httpLink]);

  return new ApolloClient({
    cache: new InMemoryCache(),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([new SSRMultipartLink({ stripDefer: true }), link])
        : link,
    defaultOptions: {
      query: {
        fetchPolicy: 'no-cache',
      },
    },
  });
};
