'use client';

import { useLazyQuery } from '@apollo/client';
import {
  GET_PRINT_LAMINATION,
  GetPrintLaminationQuery,
} from '@pw-fe-monorepo/configs';
import { createContext } from 'react';

export const PrintLaminationContext = createContext<{
  printLaminations: GetPrintLaminationQuery['getPrintLamination'];
  loading: boolean;
  fetchPrintLaminations: () => Promise<
    GetPrintLaminationQuery['getPrintLamination']
  >;
}>(null as any);

export function PrintLaminationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [getPrintLamination, { data, refetch, called, loading }] =
    useLazyQuery(GET_PRINT_LAMINATION);

  const printLaminations = data?.getPrintLamination || [];

  async function fetchPrintLaminations() {
    if (printLaminations.length) return printLaminations;

    if (called) {
      const { data: d } = await refetch();
      return d.getPrintLamination;
    }

    const { data: d, error } = await getPrintLamination();

    if (error) {
      throw new Error(error.message);
    }

    return d?.getPrintLamination || [];
  }

  const value = {
    printLaminations,
    loading,
    fetchPrintLaminations,
  };

  return (
    <PrintLaminationContext.Provider value={value}>
      {children}
    </PrintLaminationContext.Provider>
  );
}
