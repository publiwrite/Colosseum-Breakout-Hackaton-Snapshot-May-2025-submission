'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import { createContext, useMemo } from 'react';
import { UseFormReturn, useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  search: z.string().min(3),
});
export type Schema = z.infer<typeof schema>;

export const SearchBarContext = createContext<{
  register: UseFormReturn<Schema>['register'];
  handleSubmit: UseFormReturn<Schema>['handleSubmit'];
  watch: UseFormReturn<Schema>['watch'];
}>(null as any);

export function SearchBarProvider({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();

  const q = useMemo(() => {
    return searchParams.get('q');
  }, [searchParams.get('q')]);

  const { register, handleSubmit, watch } = useForm<
    z.input<typeof schema>,
    object,
    z.output<typeof schema>
  >({
    resolver: zodResolver(schema),
    values: { search: q || '' },
  });

  const value = {
    register,
    handleSubmit,
    watch,
  };

  return (
    <SearchBarContext.Provider value={value}>
      {children}
    </SearchBarContext.Provider>
  );
}
