'use client';

import { ApolloError, useLazyQuery } from '@apollo/client';
import {
  GET_PURCHASED_BOOK_LICENSES,
  GetPurchasedBookLicensesQuery,
} from '@pw-fe-monorepo/configs';
import { createContext } from 'react';

export const PurchasedBookLicensesContext = createContext<{
  licenses: GetPurchasedBookLicensesQuery['getPurchasedBookLicenses'];
  loading: boolean;
  error?: ApolloError;
  fetchPurchasedBookLicenses: () => Promise<
    GetPurchasedBookLicensesQuery['getPurchasedBookLicenses']
  >;
}>(null as any);

export function PurchasedBookLicensesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [getPurchasedBookLicenses, { data, refetch, called, loading, error }] =
    useLazyQuery(GET_PURCHASED_BOOK_LICENSES);

  const licenses = data?.getPurchasedBookLicenses || [];

  async function fetchPurchasedBookLicenses() {
    if (called) {
      const { data: d } = await refetch();
      return d.getPurchasedBookLicenses;
    }

    const { data: d, error } = await getPurchasedBookLicenses();

    if (error) {
      throw new Error(error.message);
    }

    return d?.getPurchasedBookLicenses || [];
  }

  const value = {
    licenses,
    loading,
    error,
    fetchPurchasedBookLicenses,
  };

  return (
    <PurchasedBookLicensesContext.Provider value={value}>
      {children}
    </PurchasedBookLicensesContext.Provider>
  );
}
