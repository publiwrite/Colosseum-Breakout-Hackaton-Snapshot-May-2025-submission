import { PublicationFormat } from '../../apollo';

export const fileNameToPublicationFormat = (
  fileName: string,
): PublicationFormat => {
  const extension = fileName.split('.').pop();
  switch (extension) {
    case 'pdf':
      return PublicationFormat.Pdf;
    case 'epub':
      return PublicationFormat.Ebook;
    default:
      return PublicationFormat.Pdf;
  }
};
