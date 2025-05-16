'server-only';

import { getApolloServerClient } from '@pw-fe-monorepo/configs/server';
import { cache } from 'react';
import { GET_BOOK_LICENSE_BY_ID } from '../../api';
import { handlePublicationBlurHashUrl } from '../../utils';

export type GetBookLicenseByIdServerActionType = Awaited<
  ReturnType<typeof getBookLicenseByIdServerAction>
>;

export const getBookLicenseByIdServerAction = cache(async (id: string) => {
  const apolloClient = getApolloServerClient();

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
});
