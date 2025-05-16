'server-only';

import {
  CART_ITEMS_COOKIE_NAME,
  handlePublicationBlurHashUrl,
} from '@pw-fe-monorepo/configs';
import {
  BasketItemInput,
  GET_MY_BASKET,
  getApolloServerClient,
  getBooksByListingIdsServerAction,
} from '@pw-fe-monorepo/configs/server';
import { getServerSession } from 'next-auth';
import { cookies } from 'next/headers';
import { cache } from 'react';
import { BasketItemWithBlurHashedCoverUrl } from './interfaces';

export type GetMyBasketServerActionType = BasketItemWithBlurHashedCoverUrl[];

export const getMyBasketServerAction = cache(async () => {
  const session = await getServerSession();

  if (!session) {
    try {
      const cookieBasketItems: BasketItemInput[] =
        JSON.parse(cookies().get(CART_ITEMS_COOKIE_NAME)?.value || '') || [];

      const books = await getBooksByListingIdsServerAction(
        cookieBasketItems.map((item) => item.publicationListingId),
      );

      const data = cookieBasketItems.map((cookieBasketItem) => {
        const book = books.find((b) =>
          b.editions?.some((e) =>
            e.publications?.some((p) =>
              p.listings?.some(
                (l) => l.id === cookieBasketItem.publicationListingId,
              ),
            ),
          ),
        )!;

        const edition = book?.editions.find((e) =>
          e.publications?.some((p) =>
            p.listings?.some(
              (l) => l.id === cookieBasketItem.publicationListingId,
            ),
          ),
        );

        const publication = edition?.publications?.find((p) =>
          p.listings?.some(
            (l) => l.id === cookieBasketItem.publicationListingId,
          ),
        );

        const listing = publication?.listings?.find(
          (l) => l.id === cookieBasketItem.publicationListingId,
        );

        return {
          publicationListingId: cookieBasketItem.publicationListingId,
          quantity: cookieBasketItem.quantity,
          publicationsListing: {
            priceInCents: listing?.priceInCents || 0,
            publication: {
              ...publication!,
              bookEdition: {
                ...edition!,
                book: {
                  ...book!,
                },
              },
            },
          },
        } satisfies BasketItemWithBlurHashedCoverUrl;
      });

      return data;
    } catch (error) {
      return [];
    }
  }

  const apolloClient = getApolloServerClient();

  try {
    const { data, error } = await apolloClient.query({
      query: GET_MY_BASKET,
    });

    if (error) {
      throw new Error(error.message);
    }

    const blurhashedData: BasketItemWithBlurHashedCoverUrl[] =
      await Promise.all(
        data.getMyBasket.items.map(async (item) => ({
          ...item,
          publicationsListing: {
            ...item.publicationsListing,
            publication: await handlePublicationBlurHashUrl(
              item.publicationsListing.publication,
            ),
          },
        })),
      );

    return blurhashedData;
  } catch (error) {
    return [];
  }
});
