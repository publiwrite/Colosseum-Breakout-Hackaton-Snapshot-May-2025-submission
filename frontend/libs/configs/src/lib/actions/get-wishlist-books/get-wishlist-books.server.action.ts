'server-only';

import { cache } from 'react';
import { GET_WISHLIST_BOOKS } from '../../api';
import { getApolloServerClient } from '../../apollo/server';
import { getAsset, getPlaceholderImage } from '../../utils';

export type GetWishlistBooksServerActionType = Awaited<
  ReturnType<typeof getWishlistBooksServerAction>
>;

export const getWishlistBooksServerAction = cache(async () => {
  const apolloClient = getApolloServerClient();

  try {
    const { data } = await apolloClient.query({
      query: GET_WISHLIST_BOOKS,
    });

    const blurhashedData = await Promise.all(
      data.getWishlistBooks.map(async (book) => ({
        ...book,
        blurHashedCoverUrl: await getPlaceholderImage(
          getAsset('cover', book.assets)?.key!,
        ),
      })),
    );

    return blurhashedData;
  } catch (error) {}
});
