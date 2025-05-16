'use client';

import { useQuery } from '@apollo/client';
import { GET_BOOK_LICENSE_BY_IDS } from '@pw-fe-monorepo/configs';
import {
  buttonVariants,
  PwLink,
  SectionHeader,
  useMounted,
} from '@pw-fe-monorepo/ui';
import { twMerge } from 'tailwind-merge';
import { LicenseCard, LicenseCardLoading } from '../../shared/license-card';

export const List = () => {
  const mounted = useMounted();
  const { data, loading, error } = useQuery(GET_BOOK_LICENSE_BY_IDS, {
    variables: {
      ids: [
        '4cc069b3-3967-4e2b-bd78-aa86e3ef2372',
        'f75ed7cb-d927-41cb-b387-f23517905534',
        '25c03cdf-aeaa-47b5-9443-a24895894121',
        '90af0731-cc93-4386-ad7c-ae10a7e7fdc6',
      ],
    },
  });

  const fullLoading = loading || !mounted;

  return (
    <div className="bg-white dark:bg-transparent">
      <div className="max-w-screen-xl container flex flex-col items-center gap-6 lg:gap-14 py-4 lg:py-8">
        <div className="flex flex-col gap-2">
          <SectionHeader className="text-center">
            AI license library
          </SectionHeader>
          <p className="text-center text-gray-700 dark:text-gray-400">
            Explore popular books available for AI training
          </p>
          <PwLink
            href={`${process.env.NEXT_PUBLIC_RIGHTS_PROJECT_URL}/explore/licenses`}
            className={twMerge(
              buttonVariants({ variant: 'primary' }),
              'lg:self-center',
            )}
          >
            Explore licences
          </PwLink>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(284px,1fr))] gap-x-4 gap-y-6 lg:gap-y-8">
          {data?.getBookLicenseByIds.map((item) => (
            <LicenseCard key={item.id} license={item} />
          ))}

          {fullLoading && <LicenseCardLoading count={4} />}

          {!fullLoading && error && <div>Error: {error.message}</div>}
        </div>
      </div>
    </div>
  );
};
