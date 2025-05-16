'use client';

import { useLazyQuery } from '@apollo/client';
import { GET_BOOK_TAGS, GetBookTagsQuery } from '@pw-fe-monorepo/configs';
import { createContext } from 'react';

export const BookTagsContext = createContext<{
  tags: GetBookTagsQuery['getBookTags'];
  loading: boolean;
  fetchTags: () => Promise<void>;
}>(null as any);

export function BookTagsProvider({ children }: { children: React.ReactNode }) {
  const [getBookTags, { data, refetch, called, loading }] =
    useLazyQuery(GET_BOOK_TAGS);

  const tags = data?.getBookTags || [];

  async function fetchTags() {
    if (tags.length) return;

    if (called) {
      refetch();
      return;
    }

    getBookTags();
  }

  const value = {
    tags,
    loading,
    fetchTags,
  };

  return (
    <BookTagsContext.Provider value={value}>
      {children}
    </BookTagsContext.Provider>
  );
}
