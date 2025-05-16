import { PublicationFormat } from '../apollo';

export const BOOK_MIME_TYPES: Record<PublicationFormat, string[]> = {
  [PublicationFormat.Hardcover]: ['application/pdf'],
  [PublicationFormat.Paperback]: ['application/pdf'],
  [PublicationFormat.Pdf]: ['application/pdf'],
  [PublicationFormat.Ebook]: ['application/epub+zip'],
};

export const SUPPORTED_BOOK_FILE_EXTENSIONS: Record<
  PublicationFormat,
  string[]
> = {
  [PublicationFormat.Hardcover]: ['.pdf'],
  [PublicationFormat.Paperback]: ['.pdf'],
  [PublicationFormat.Pdf]: ['.pdf'],
  [PublicationFormat.Ebook]: ['.epub'],
};
