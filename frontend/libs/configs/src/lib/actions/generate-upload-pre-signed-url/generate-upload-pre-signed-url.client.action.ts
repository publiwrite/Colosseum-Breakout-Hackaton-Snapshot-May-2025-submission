'use client';

import {
  GENERATE_UPLOAD_PRESIGNED_URL,
  GenerateUploadPresignedUrlQueryVariables,
  getApolloClientClient,
} from '@pw-fe-monorepo/configs';
import { getSession } from 'next-auth/react';

export async function generateUploadPreSignedUrlClientAction(
  variables?: GenerateUploadPresignedUrlQueryVariables,
) {
  const session = await getSession();
  const apolloClient = getApolloClientClient();
  apolloClient.defaultContext.accessToken = session?.access_token;

  const { data, error } = await apolloClient.query({
    query: GENERATE_UPLOAD_PRESIGNED_URL,
    variables,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data?.generateUploadPresignedUrl;
}
