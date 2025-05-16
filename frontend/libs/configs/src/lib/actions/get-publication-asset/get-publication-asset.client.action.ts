'use client';

import {
  GET_PUBLICATION_ASSET,
  getApolloClientClient,
  GetPublicationAssetInput,
} from '@pw-fe-monorepo/configs';
import { getSession } from 'next-auth/react';

export type GetPublicationAssetClientActionType = Awaited<
  ReturnType<typeof getPublicationAssetClientAction>
>;

export async function getPublicationAssetClientAction({
  publicationId,
  format,
}: GetPublicationAssetInput) {
  const session = await getSession();
  const apolloClient = getApolloClientClient();
  apolloClient.defaultContext.accessToken = session?.access_token;

  const { data } = await apolloClient.query({
    query: GET_PUBLICATION_ASSET,
    variables: { input: { publicationId, format } },
  });

  return data.getPublicationAsset;
}
