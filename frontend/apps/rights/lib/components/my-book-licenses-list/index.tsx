'use client';

import {
  buttonVariants,
  EmptyListState,
  PwLink,
  useMounted,
} from '@pw-fe-monorepo/ui';
import { MyBookLicensesContext } from '@rights/lib/providers';
import { useContext, useEffect } from 'react';
import { LicenseCard, LicenseCardLoading } from '../shared/license-card';

export const MyBookLicensesList = () => {
  const mounted = useMounted();
  const { licenses, loading, error, fetchMyBookLicenses } = useContext(
    MyBookLicensesContext,
  );

  const fullLoading = loading || !mounted;

  useEffect(() => {
    fetchMyBookLicenses();
  }, []);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(284px,1fr))] gap-x-4 gap-y-6 lg:gap-y-8">
        {licenses.map((license) => (
          <LicenseCard key={license.id} license={license} />
        ))}

        {fullLoading && <LicenseCardLoading />}
      </div>

      {!fullLoading && licenses.length === 0 && (
        <EmptyListState
          heading="No book licenses found"
          description="You haven't created any licenses yet. Create a license to start selling your book rights!"
        >
          <PwLink
            href={`${process.env.NEXT_PUBLIC_RIGHTS_PROJECT_URL}/register`}
            className={buttonVariants({ variant: 'primary' })}
          >
            Create license
          </PwLink>
        </EmptyListState>
      )}
    </>
  );
};
