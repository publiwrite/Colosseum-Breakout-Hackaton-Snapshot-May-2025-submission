'use client';

import { useQuery } from '@apollo/client';
import { GET_BOOK_LICENSES } from '@pw-fe-monorepo/configs';
import {
  AuthModalContext,
  buttonVariants,
  EmptyListState,
  PwLink,
  useInView,
} from '@pw-fe-monorepo/ui';
import { useSession } from 'next-auth/react';
import { useContext, useEffect } from 'react';
import { LicenseCard, LicenseCardLoading } from '../shared/license-card';

export const LicenseList = () => {
  const { data: session } = useSession();
  const { setIsSignInModalOpen } = useContext(AuthModalContext);
  const { data, loading, error, fetchMore } = useQuery(GET_BOOK_LICENSES, {
    variables: { pagination: { offset: 0, limit: 10 } },
  });
  const { ref: inviewRef, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      fetchMore({
        variables: {
          input: {
            offset: data?.getBookLicenses.items.length,
          },
        },
      });
    }
  }, [inView]);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(284px,1fr))] gap-x-4 gap-y-6 lg:gap-y-8">
        {data?.getBookLicenses.items.map((license) => (
          <LicenseCard key={license.id} license={license} />
        ))}

        {loading && <LicenseCardLoading />}

        <div ref={inviewRef}></div>
      </div>

      {!loading && data?.getBookLicenses.count === 0 && (
        <EmptyListState
          heading="No licenses found"
          description="No one has created any licenses yet. You could be the first one to create a license and start selling your book rights!"
        >
          <PwLink
            href={
              session?.user.id
                ? `${process.env.NEXT_PUBLIC_RIGHTS_PROJECT_URL}/register`
                : '#'
            }
            className={buttonVariants({ variant: 'primary' })}
            onClick={() => {
              if (!session?.user.id) {
                setIsSignInModalOpen(true, '/register');
              }
            }}
          >
            Create license
          </PwLink>
        </EmptyListState>
      )}
    </>
  );
};
