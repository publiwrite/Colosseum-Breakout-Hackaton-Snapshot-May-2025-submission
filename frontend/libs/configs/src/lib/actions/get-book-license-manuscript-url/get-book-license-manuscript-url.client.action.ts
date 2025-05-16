'use client';

import { getSession } from 'next-auth/react';
import { GET_BOOK_LICENSE_MANUSCRIPT_URL } from '../../api';
import { getApolloClientClient } from '../../apollo';

export type GetBookLicenseManuscriptUrlClientActionType = Awaited<
  ReturnType<typeof getBookLicenseManuscriptUrlClientAction>
>;

export async function getBookLicenseManuscriptUrlClientAction(
  bookLicenseId: string,
) {
  const session = await getSession();
  const apolloClient = getApolloClientClient();
  apolloClient.defaultContext.accessToken = session?.access_token;

  try {
    const { data, error } = await apolloClient.query({
      query: GET_BOOK_LICENSE_MANUSCRIPT_URL,
      variables: { bookLicenseId },
    });

    if (error) {
      throw new Error(error.message);
    }

    return data.getBookLicenseManuscriptUrl;
  } catch (error) {
    const err = error as Error;
    throw new Error(err.message);
  }
}
