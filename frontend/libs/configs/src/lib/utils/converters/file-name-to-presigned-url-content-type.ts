import { ContentType } from '../../apollo';

export const fileNameToPresignedUrlContentType = (fileName: string) => {
  const extension = fileName.split('.').pop();
  switch (extension) {
    case 'jpeg':
    case 'jpg':
      return ContentType.Jpeg;
    case 'png':
      return ContentType.Png;
    case 'pdf':
      return ContentType.Pdf;
    case 'epub':
      return ContentType.Epub;
    case 'doc':
      return ContentType.Doc;
    case 'docx':
      return ContentType.Docx;
    case 'zip':
      return ContentType.Zip;
    case 'gif':
      return ContentType.Gif;
    default:
      return ContentType.Jpeg;
  }
};
