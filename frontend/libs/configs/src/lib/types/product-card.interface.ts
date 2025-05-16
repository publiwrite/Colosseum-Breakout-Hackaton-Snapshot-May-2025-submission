import { Asset, BookAuthor, PublicationFormat } from '../apollo';

export type ProductCardItem = {
  bookEditionId: string;
  title: string;
  bookEditionDescription?: string;
  format?: PublicationFormat;
  minPrice?: number;
  maxPrice?: number;
  blurHashedCoverUrl: string;
  assets: Pick<Asset, 'key' | 'type' | 'id'>[];
  authors: Pick<BookAuthor, 'name' | 'slug'>[];
};
