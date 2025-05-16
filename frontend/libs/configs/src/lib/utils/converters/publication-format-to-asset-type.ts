import { AssetType, PublicationFormat } from '../../apollo';

export const publicationFormatToAssetType = (
  publicationFormat: PublicationFormat,
): AssetType => {
  switch (publicationFormat) {
    case PublicationFormat.Ebook:
      return AssetType.Ebook;
    case PublicationFormat.Pdf:
      return AssetType.Pdf;
    case PublicationFormat.Hardcover:
      return AssetType.Pdf;
    case PublicationFormat.Paperback:
      return AssetType.Pdf;
    default:
      return AssetType.Pdf;
  }
};
