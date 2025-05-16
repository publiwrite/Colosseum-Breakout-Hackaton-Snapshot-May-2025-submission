'use client';

import { getSession } from 'next-auth/react';
import { GET_BOOK_LICENSE_ORDER_BY_ID } from '../../api';
import { getApolloClientClient } from '../../apollo';

export type GetBookLicenseOrderByIdClientActionType = Awaited<
  ReturnType<typeof getBookLicenseOrderByIdClientAction>
>;

export async function getBookLicenseOrderByIdClientAction(orderId: string) {
  const session = await getSession();
  const apolloClient = getApolloClientClient();
  apolloClient.defaultContext.accessToken = session?.access_token;

  try {
    const { data, error } = await apolloClient.query({
      query: GET_BOOK_LICENSE_ORDER_BY_ID,
      variables: { orderId },
    });

    if (error) {
      throw new Error(error.message);
    }

    return data.getBookLicenseOrderById;
  } catch (error) {
    const err = error as Error;
    throw new Error(err.message);
  }
}
