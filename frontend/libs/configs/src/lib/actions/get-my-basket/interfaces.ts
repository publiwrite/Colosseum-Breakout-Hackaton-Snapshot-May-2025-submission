import { GetMyBasketQuery } from '@pw-fe-monorepo/configs';

export type BasketItemWithBlurHashedCoverUrl =
  GetMyBasketQuery['getMyBasket']['items'][number] & {
    publicationsListing: GetMyBasketQuery['getMyBasket']['items'][number]['publicationsListing'] & {
      publication: GetMyBasketQuery['getMyBasket']['items'][number]['publicationsListing']['publication'] & {
        blurHashedCoverUrl?: string;
      };
    };
  };
