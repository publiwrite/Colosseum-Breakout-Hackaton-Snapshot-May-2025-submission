import { PublicationFormat } from '../../apollo';

export function getListingByPublicationFormat<T extends { format: string }>(
  listings: T[],
  intentedType: PublicationFormat,
): T | undefined {
  return listings.find((item) => item.format === intentedType);
}
