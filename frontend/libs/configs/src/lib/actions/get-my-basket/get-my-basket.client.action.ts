'use client';

import {
  BasketItemInput,
  CART_ITEMS_COOKIE_NAME,
  GET_MY_BASKET,
  getApolloClientClient,
  getBooksByListingIdsClientAction,
  getCookieValue,
  handlePublicationBlurHashUrl,
} from '@pw-fe-monorepo/configs';
import { getSession } from 'next-auth/react';
import { BasketItemWithBlurHashedCoverUrl } from './interfaces';

export type GetMyBasketClientActionType = BasketItemWithBlurHashedCoverUrl[];

export async function getMyBasketClientAction() {
  const session = await getSession();

  if (!session) {
    try {
      const cartItemsCookie = getCookieValue(CART_ITEMS_COOKIE_NAME);

      const cookieBasketItems: BasketItemInput[] =
        JSON.parse(cartItemsCookie || '') || [];

      const books = await getBooksByListingIdsClientAction(
        cookieBasketItems.map((item) => item.publicationListingId),
      );

      const data: BasketItemWithBlurHashedCoverUrl[] = cookieBasketItems.map(
        (cookieBasketItem) => {
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
        },
      );

      return data;
    } catch (error) {
      return [];
    }
  }

  const apolloClient = getApolloClientClient();
  apolloClient.defaultContext.accessToken = session?.access_token;

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
}
