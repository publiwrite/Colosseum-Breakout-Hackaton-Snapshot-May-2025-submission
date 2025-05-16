import { PublicationFormat } from '../../apollo';

export function getPublicationFormatTooltipContent(
  bookType: PublicationFormat,
) {
  switch (bookType) {
    case PublicationFormat.Ebook:
      return 'A digital book your readers can enjoy right in our online reader';
    case PublicationFormat.Pdf:
      return 'A digital download your readers can keep and read anytime';
    case PublicationFormat.Hardcover:
      return 'A printed hardcover book delivered straight to your readers';
    case PublicationFormat.Paperback:
      return 'A printed paperback book shipped directly to your readers';
    default:
      return 'Unknown publication format';
  }
}
