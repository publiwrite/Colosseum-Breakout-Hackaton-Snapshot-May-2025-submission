import { GetWishlistBooksServerActionType } from '../../actions/server';
import { ProductCardItem } from '../../types';

export function wishListBookToProductCardItem(
  wishlistItem: NonNullable<GetWishlistBooksServerActionType>[0],
): ProductCardItem {
  return {
    bookEditionId: wishlistItem.bookEditionId,
    title: wishlistItem.title,
    assets: wishlistItem.assets ?? [],
    blurHashedCoverUrl: wishlistItem.blurHashedCoverUrl,
    authors: wishlistItem.authors,
  };
}
