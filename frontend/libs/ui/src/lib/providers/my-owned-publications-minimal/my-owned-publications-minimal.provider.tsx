'use client';

import { useGetMyOwnedPublicationsMinimal } from '@pw-fe-monorepo/configs';
import type { GetMyOwnedPublicationsMinimalServerActionType } from '@pw-fe-monorepo/configs/server';
import { CurrentUserContext } from '@pw-fe-monorepo/ui';
import { createContext, useContext, useMemo, useState } from 'react';

export const MyOwnedPublicationsMinimalContext = createContext<{
  myOwnedPublications?:
    | GetMyOwnedPublicationsMinimalServerActionType
    | undefined;
  myOwnedPublicationsIds?: string[] | undefined;
  refetch: () => Promise<void>;
}>(null as any);

export const MyOwnedPublicationsMinimalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { user } = useContext(CurrentUserContext);

  const { data, refetch: getMyOwnedPublicationsMinimal } =
    useGetMyOwnedPublicationsMinimal({
      shouldFetch: !!user,
    });

  const [myOwnedPublications, setMyOwnedPublications] = useState<
    GetMyOwnedPublicationsMinimalServerActionType | undefined
  >(data?.getMyOwnedPublications);

  const myOwnedPublicationsIds = useMemo(
    () => myOwnedPublications?.map((publication) => publication.publicationId!),
    [myOwnedPublications],
  );

  async function refetch() {
    const { data: fetchedData } = await getMyOwnedPublicationsMinimal();

    fetchedData?.getMyOwnedPublications?.length &&
      setMyOwnedPublications(fetchedData.getMyOwnedPublications);
  }

  const value = {
    myOwnedPublications,
    myOwnedPublicationsIds,
    refetch,
  };

  return (
    <MyOwnedPublicationsMinimalContext.Provider value={value}>
      {children}
    </MyOwnedPublicationsMinimalContext.Provider>
  );
};
