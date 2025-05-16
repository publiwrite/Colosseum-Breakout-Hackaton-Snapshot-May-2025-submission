'use server';

import { getApolloServerClient } from '@pw-fe-monorepo/configs/server';
import { CREATE_HELIO_LICENSE_PAYMENT } from '../../api';

export async function createHelioLicensePaymentClientAction(licenseId: string) {
  const apolloClient = getApolloServerClient();

  const { data } = await apolloClient.mutate({
    mutation: CREATE_HELIO_LICENSE_PAYMENT,
    variables: {
      licenseId,
    },
  });

  return data?.createHelioLicensePayment;
}
