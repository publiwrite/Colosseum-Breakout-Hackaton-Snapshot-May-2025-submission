import { GetBooksWithSearchCriteriaClientActionType } from '../../actions';
import { ProductCardItem } from '../../types';

export function bookSearchResultToProductCardItem(
  bookSearchResult: GetBooksWithSearchCriteriaClientActionType['getBooksWithSearchCriteria']['items'][number],
): ProductCardItem {
  return {
    bookEditionId: bookSearchResult.bookEditionId,
    title: bookSearchResult.title,
    assets: bookSearchResult.assets ?? [],
    blurHashedCoverUrl: bookSearchResult.blurHashedCoverUrl,
    authors: bookSearchResult.authors,
    ...((bookSearchResult.minPrice || bookSearchResult.minPrice === 0) && {
      minPrice: bookSearchResult.minPrice,
    }),
    ...((bookSearchResult.maxPrice || bookSearchResult.maxPrice === 0) && {
      maxPrice: bookSearchResult.maxPrice,
    }),
  };
}
