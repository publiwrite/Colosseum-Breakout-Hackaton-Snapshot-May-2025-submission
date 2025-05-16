'use client';

import { AuthModalContext, NavLink } from '@pw-fe-monorepo/ui';
import { useSession } from 'next-auth/react';
import { useContext } from 'react';

export const SellRights = () => {
  const { data: session } = useSession();
  const { setIsSignInModalOpen } = useContext(AuthModalContext);

  if (!session) {
    return (
      <NavLink
        href="#"
        onClick={() =>
          setIsSignInModalOpen(
            true,
            `${process.env.NEXT_PUBLIC_RIGHTS_PROJECT_URL}/register`,
          )
        }
      >
        Sell Rights
      </NavLink>
    );
  }

  return <NavLink href="/register">Sell Rights</NavLink>;
};
