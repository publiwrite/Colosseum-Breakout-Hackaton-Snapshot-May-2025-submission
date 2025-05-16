'use client';

import { getSession } from 'next-auth/react';
import { GET_BOOK_LICENSE_BY_ID } from '../../api';
import { getApolloClientClient } from '../../apollo';
import { handlePublicationBlurHashUrl } from '../../utils';

export type GetBookLicenseByIdClientActionType = Awaited<
  ReturnType<typeof getBookLicenseByIdClientAction>
>;

export async function getBookLicenseByIdClientAction(id: string) {
  const session = await getSession();
  const apolloClient = getApolloClientClient();
  apolloClient.defaultContext.accessToken = session?.access_token;

  try {
    const { data, error } = await apolloClient.query({
      query: GET_BOOK_LICENSE_BY_ID,
      variables: { id },
    });

    if (error) {
      throw new Error(error.message);
    }

    const blurHashedData = await handlePublicationBlurHashUrl(
      data.getBookLicenseById,
    );

    return blurHashedData;
  } catch (error) {
    const err = error as Error;
    throw new Error(err.message);
  }
}
