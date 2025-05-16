import { PublicationFormat } from '../../apollo';

export const isPhysicalFormat = (format?: PublicationFormat) => {
  if (!format) {
    return false;
  }

  return [PublicationFormat.Hardcover, PublicationFormat.Paperback].includes(
    format,
  );
};
