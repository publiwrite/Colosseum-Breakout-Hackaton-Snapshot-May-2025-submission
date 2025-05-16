'use client';

import { skipToken, useSuspenseQuery } from '@apollo/client';
import { GET_WISHLIST_BOOK_IDS } from '../../api/wishlist.query';

export const useWishlistBookIds = ({
  shouldFetch,
}: {
  shouldFetch: boolean;
}) => {
  const response = useSuspenseQuery(
    GET_WISHLIST_BOOK_IDS,
    shouldFetch ? {} : skipToken,
  );

  return response;
};
