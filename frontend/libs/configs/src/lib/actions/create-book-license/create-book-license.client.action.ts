'use client';

import { getSession } from 'next-auth/react';
import { CREATE_BOOK_LICENSE } from '../../api/book-license.query';
import { CreateBookLicenseInput, getApolloClientClient } from '../../apollo';

export async function createBookLicenseClientAction(
  input: CreateBookLicenseInput,
) {
  const session = await getSession();
  const apolloClient = getApolloClientClient();
  apolloClient.defaultContext.accessToken = session?.access_token;

  const { data, errors } = await apolloClient.mutate({
    mutation: CREATE_BOOK_LICENSE,
    variables: { input },
  });

  if (errors?.length) {
    throw new Error(errors[0].message);
  }

  return data?.createBookLicense;
}
