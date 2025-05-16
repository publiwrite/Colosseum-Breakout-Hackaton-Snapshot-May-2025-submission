'use client';

import { useLazyQuery } from '@apollo/client';
import {
  GET_MANUSCRIPT_TEXT_STOCKS,
  GetManuscriptTextStocksQuery,
} from '@pw-fe-monorepo/configs';
import { createContext } from 'react';

export const ManuscriptTextStocksContext = createContext<{
  manuscriptTextStocks: GetManuscriptTextStocksQuery['getManuscriptTextStocks'];
  loading: boolean;
  fetchManuscriptTextStocks: () => Promise<
    GetManuscriptTextStocksQuery['getManuscriptTextStocks']
  >;
}>(null as any);

export function ManuscriptTextStocksProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [getManuscriptTextStocks, { data, refetch, called, loading }] =
    useLazyQuery(GET_MANUSCRIPT_TEXT_STOCKS);

  const manuscriptTextStocks = data?.getManuscriptTextStocks || [];

  async function fetchManuscriptTextStocks() {
    if (manuscriptTextStocks.length) return manuscriptTextStocks;

    if (called) {
      const { data: d } = await refetch();
      return d.getManuscriptTextStocks;
    }

    const { data: d, error } = await getManuscriptTextStocks();

    if (error) {
      throw new Error(error.message);
    }

    return d?.getManuscriptTextStocks || [];
  }

  const value = {
    manuscriptTextStocks,
    loading,
    fetchManuscriptTextStocks,
  };

  return (
    <ManuscriptTextStocksContext.Provider value={value}>
      {children}
    </ManuscriptTextStocksContext.Provider>
  );
}
