import { GetMyOwnedPublicationsServerActionType } from '../../actions/server';
import { ProductCardItem } from '../../types';

export function userOwnedPublicationToProductCardItem(
  userOwnedPublication: NonNullable<GetMyOwnedPublicationsServerActionType>[0],
): ProductCardItem {
  return {
    bookEditionId: userOwnedPublication.publication.id,
    title: userOwnedPublication.publication.bookEdition.book.title,
    bookEditionDescription:
      userOwnedPublication.publication.bookEdition.description,
    assets: userOwnedPublication.publication.assets ?? [],
    blurHashedCoverUrl:
      userOwnedPublication.publication.blurHashedCoverUrl ?? '',
    authors: userOwnedPublication.publication.bookEdition.authors,
  };
}
