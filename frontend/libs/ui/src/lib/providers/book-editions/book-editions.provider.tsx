'use client';

import { useLazyQuery } from '@apollo/client';
import { GET_EDITIONS, GetEditionsQuery } from '@pw-fe-monorepo/configs';
import { createContext } from 'react';

export const BookEditionsContext = createContext<{
  editions: GetEditionsQuery['getEditions'];
  loading: boolean;
  fetchEditions: () => Promise<GetEditionsQuery['getEditions']>;
}>(null as any);

export function BookEditionsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [getBookEditions, { data, refetch, called, loading }] =
    useLazyQuery(GET_EDITIONS);

  const editions = data?.getEditions || [];

  async function fetchEditions() {
    if (editions.length) return editions;

    if (called) {
      const { data: d } = await refetch();
      return d.getEditions;
    }

    const { data: d, error } = await getBookEditions();

    if (error) {
      throw new Error(error.message);
    }

    return d?.getEditions || [];
  }

  const value = {
    editions,
    loading,
    fetchEditions,
  };

  return (
    <BookEditionsContext.Provider value={value}>
      {children}
    </BookEditionsContext.Provider>
  );
}
