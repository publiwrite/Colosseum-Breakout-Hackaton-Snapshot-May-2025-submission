'use client';

import { useLazyQuery } from '@apollo/client';
import { GET_BOOK_GENRES, GetBookGenresQuery } from '@pw-fe-monorepo/configs';
import { createContext } from 'react';

export const BookGenresContext = createContext<{
  genres: GetBookGenresQuery['getBookGenres'];
  loading: boolean;
  fetchGenres: () => Promise<void>;
}>(null as any);

export function BookGenresProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [getBookGenres, { data, refetch, called, loading }] =
    useLazyQuery(GET_BOOK_GENRES);

  const genres = data?.getBookGenres || [];

  async function fetchGenres() {
    if (genres.length) return;

    if (called) {
      refetch();
      return;
    }

    getBookGenres();
  }

  const value = {
    genres,
    loading,
    fetchGenres,
  };

  return (
    <BookGenresContext.Provider value={value}>
      {children}
    </BookGenresContext.Provider>
  );
}
