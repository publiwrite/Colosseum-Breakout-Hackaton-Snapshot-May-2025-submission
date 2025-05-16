import { ManuscriptOriginType } from '../../apollo';

export const manuscriptOriginToReadableWord = (
  origin: ManuscriptOriginType,
): string => {
  switch (origin) {
    case ManuscriptOriginType.External:
      return 'Existing manuscript';
    case ManuscriptOriginType.Internal:
      return 'Started from scratch';
    default:
      return 'Unknown origin';
  }
};
