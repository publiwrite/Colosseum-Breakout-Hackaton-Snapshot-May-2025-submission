'use client';

import { useApolloClient, useMutation } from '@apollo/client';
import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  useWishlistBookIds,
} from '@pw-fe-monorepo/configs';
import { CurrentUserContext } from '@pw-fe-monorepo/ui';
import { useSession } from 'next-auth/react';
import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'sonner';

export const WishlistContext = createContext<{
  wishlistBookIds?: string[] | undefined;
  addToWishlistLoading?: boolean;
  removeFromWishlistLoading?: boolean;
  refetch: () => Promise<void>;
  addToWishlist: (bookId: string) => Promise<void>;
  removeFromWishlist: (wishlistItemId: string) => Promise<void>;
}>(null as any);

export const WishlistProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { status, data: session } = useSession();
  const client = useApolloClient();
  const { user } = useContext(CurrentUserContext);

  const [add, { loading: addToWishlistLoading }] = useMutation(ADD_TO_WISHLIST);
  const [remove, { loading: removeFromWishlistLoading }] =
    useMutation(REMOVE_FROM_WISHLIST);

  const { data, refetch: getWishlistBookIds } = useWishlistBookIds({
    shouldFetch: !!user,
  });

  const mapped = data?.getWishlistBooks.map((book) => book.id);

  const [wishlistBookIds, setWishlistBookIds] = useState<string[] | undefined>(
    mapped,
  );

  useEffect(() => {
    if (status === 'authenticated' && !wishlistBookIds) {
      client.defaultContext.accessToken = session.access_token;
      refetch();
    }

    if (status === 'unauthenticated') {
      setWishlistBookIds(undefined);
    }
  }, [status]);

  async function refetch() {
    const { data } = await getWishlistBookIds();

    const mapped = data?.getWishlistBooks.map((book) => book.id);
    setWishlistBookIds(mapped);
  }

  async function addToWishlist(bookId: string) {
    await add({ variables: { input: bookId } });
    await refetch();
    toast.success('Added to wishlist');
  }

  async function removeFromWishlist(bookId: string) {
    await remove({ variables: { input: bookId } });
    await refetch();
    toast.success('Removed from wishlist');
  }

  const value = {
    wishlistBookIds,
    addToWishlistLoading,
    removeFromWishlistLoading,
    refetch,
    addToWishlist,
    removeFromWishlist,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};
