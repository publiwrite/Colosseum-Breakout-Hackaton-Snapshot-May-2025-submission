'use client';

import { getSession } from 'next-auth/react';
import { GET_BOOK_LICENSE_SALES } from '../../api';
import { getApolloClientClient } from '../../apollo';

export type GetBookLicenseSalesClientActionType = Awaited<
  ReturnType<typeof getBookLicenseSalesClientAction>
>;

export async function getBookLicenseSalesClientAction(bookLicenseId: string) {
  const session = await getSession();
  const apolloClient = getApolloClientClient();
  apolloClient.defaultContext.accessToken = session?.access_token;

  try {
    const { data, error } = await apolloClient.query({
      query: GET_BOOK_LICENSE_SALES,
      variables: { bookLicenseId },
    });

    if (error) {
      throw new Error(error.message);
    }

    return data.getBookLicenseSales;
  } catch (error) {
    const err = error as Error;
    throw new Error(err.message);
  }
}
