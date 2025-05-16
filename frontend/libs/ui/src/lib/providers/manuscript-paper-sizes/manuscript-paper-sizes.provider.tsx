'use client';

import { useLazyQuery } from '@apollo/client';
import {
  GET_MANUSCRIPT_PAPER_SIZES,
  GetManuscriptPaperSizesQuery,
} from '@pw-fe-monorepo/configs';
import { createContext } from 'react';

export const ManuscriptPaperSizesContext = createContext<{
  paperSizes: GetManuscriptPaperSizesQuery['getManuscriptPaperSizes'];
  loading: boolean;
  fetchPaperSizes: () => Promise<void>;
}>(null as any);

export function ManuscriptPaperSizesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [getManuscriptPaperSizes, { data, refetch, called, loading }] =
    useLazyQuery(GET_MANUSCRIPT_PAPER_SIZES);

  const paperSizes = data?.getManuscriptPaperSizes || [];

  async function fetchPaperSizes() {
    if (paperSizes.length) return;

    if (called) {
      refetch();
      return;
    }

    getManuscriptPaperSizes();
  }

  const value = {
    paperSizes,
    loading,
    fetchPaperSizes,
  };

  return (
    <ManuscriptPaperSizesContext.Provider value={value}>
      {children}
    </ManuscriptPaperSizesContext.Provider>
  );
}
