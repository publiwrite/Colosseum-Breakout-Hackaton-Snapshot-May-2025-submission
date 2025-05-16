'use client';

import { useMounted } from '@pw-fe-monorepo/ui';
import { useSession } from 'next-auth/react';
import { twMerge } from 'tailwind-merge';
import { ProfileButton } from './profile-button';
import { SignIn } from './sign-in-buttons/sign-in';
import { SignUp } from './sign-in-buttons/sign-up';

export const AccountButton = () => {
  const mounted = useMounted();
  const { data: session, status } = useSession();

  if (!mounted || status === 'loading') {
    return null;
  }

  if (session?.user.id) {
    return (
      <div className="animate-in duration-700 fade-in-15 text-start">
        <ProfileButton />
      </div>
    );
  }

  return (
    <div
      className={twMerge(
        'animate-in duration-700 fade-in-15',
        'flex flex-col lg:flex-row gap-3 lg:gap-6',
      )}
    >
      <div className={twMerge('contents', 'hidden lg:block')}>
        <SignIn />
      </div>

      <SignUp />
    </div>
  );
};
