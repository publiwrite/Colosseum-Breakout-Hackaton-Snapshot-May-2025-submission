import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support';
import { cookies } from 'next/headers';
import { getServerSession } from '../next-auth/server';

/**
 * This function will only be used on the server components.
 * Neither client side nor server functions.
 */
export const { getClient: getApolloServerClient } = registerApolloClient(() => {
  const cookiesString = cookies().toString();

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

  const authLink = setContext(async (_, { headers }) => {
    const session = await getServerSession();

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

  const link = from([errorLink, authLink, httpLink]);

  return new ApolloClient({
    cache: new InMemoryCache(),
    link,
    headers: {
      cookie: cookiesString,
    },
    defaultOptions: {
      query: {
        fetchPolicy: 'no-cache',
      },
    },
  });
});
