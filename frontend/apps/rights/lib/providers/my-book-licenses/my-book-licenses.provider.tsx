'use client';

import { ApolloError, useLazyQuery } from '@apollo/client';
import {
  GET_MY_BOOK_LICENSES,
  GetMyBookLicensesQuery,
} from '@pw-fe-monorepo/configs';
import { createContext } from 'react';

export const MyBookLicensesContext = createContext<{
  licenses: GetMyBookLicensesQuery['getMyBookLicenses'];
  loading: boolean;
  error?: ApolloError;
  fetchMyBookLicenses: () => Promise<
    GetMyBookLicensesQuery['getMyBookLicenses']
  >;
}>(null as any);

export function MyBookLicensesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [getBookLicenses, { data, refetch, called, loading, error }] =
    useLazyQuery(GET_MY_BOOK_LICENSES);

  const licenses = data?.getMyBookLicenses || [];

  async function fetchMyBookLicenses() {
    if (called) {
      const { data: d } = await refetch();
      return d.getMyBookLicenses;
    }

    const { data: d, error } = await getBookLicenses();

    if (error) {
      throw new Error(error.message);
    }

    return d?.getMyBookLicenses || [];
  }

  const value = {
    licenses,
    loading,
    error,
    fetchMyBookLicenses,
  };

  return (
    <MyBookLicensesContext.Provider value={value}>
      {children}
    </MyBookLicensesContext.Provider>
  );
}
