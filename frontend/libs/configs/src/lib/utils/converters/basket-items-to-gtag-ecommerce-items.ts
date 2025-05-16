import { PublicationFormat } from '@pw-fe-monorepo/configs';
import { GetMyBasketServerActionType } from '@pw-fe-monorepo/configs/server';
import { EcommerceItem } from '@pw-fe-monorepo/ui';

export const basketItemsToGtagEcommerceItems = (
  items: GetMyBasketServerActionType,
): EcommerceItem[] => {
  return items.map(
    (item) =>
      ({
        item_id: item.publicationsListing.publication.bookEdition.id,
        item_sub_id: item.publicationsListing.publication.id,
        item_name: item.publicationsListing.publication.bookEdition.book.title,
        item_author:
          item.publicationsListing.publication.bookEdition.authors[0].name,
        ...item.publicationsListing.publication.bookEdition.authors
          ?.slice(1)
          .reduce(
            (acc, author, index) => ({
              ...acc,
              [`item_author${index + 1}`]: author.name,
            }),
            {},
          ),
        item_variant:
          item.publicationsListing.publication?.format ||
          PublicationFormat.Ebook,
        item_language: 'English',
        price: item.publicationsListing.priceInCents / 100,
        ...(!!item?.quantity && { quantity: item.quantity }),
        // item_category: item.bookListing.book.genres?.[0]?.name || '',
        // ...item.bookListing.book.genres?.slice(1).reduce(
        //   (acc, genre, index) => ({
        //     ...acc,
        //     [`item_category${index + 1}`]: genre.name,
        //   }),
        //   {},
        // ),
        // item_publication_date: format(
        //   new Date(item.bookListing.book.publishedAt),
        //   'yyyy-MM-dd',
        // ),
        // item_edition: item.bookListing.book.edition?.name || '',
      }) satisfies EcommerceItem,
  );
};
