import { PublicationFormat } from '../../apollo';

export function getPublicationFormatLabel(bookType: PublicationFormat) {
  switch (bookType) {
    case PublicationFormat.Ebook:
      return 'eBook';
    case PublicationFormat.Pdf:
      return 'PDF';
    case PublicationFormat.Hardcover:
      return 'Hardcover';
    case PublicationFormat.Paperback:
      return 'Paperback';
    default:
      return 'Unknown publication format';
  }
}
