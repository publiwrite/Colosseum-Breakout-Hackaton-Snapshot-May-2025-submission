import { GetBookLicensesQuery } from '../../apollo';
import { ProductCardItem } from '../../types';

export function licenseToProductCardItem(
  licenseItem: NonNullable<GetBookLicensesQuery>['getBookLicenses']['items'][0],
): ProductCardItem {
  return {
    bookEditionId: licenseItem.id,
    title: licenseItem.title,
    assets: licenseItem.assets ?? [],
    blurHashedCoverUrl: licenseItem.coverAssetKey,
    authors: (licenseItem.authors || []).map((author) => ({
      name: author.name,
      slug: { id: 'random-id', name: author.name },
    })),
  };
}
