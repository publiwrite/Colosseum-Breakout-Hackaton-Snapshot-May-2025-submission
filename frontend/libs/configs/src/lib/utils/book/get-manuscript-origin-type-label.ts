import { ManuscriptOriginType } from '../../apollo';

export function getManuscriptOriginTypeLabel(originType: ManuscriptOriginType) {
  switch (originType) {
    case ManuscriptOriginType.Internal:
      return 'Start from scratch';
    case ManuscriptOriginType.External:
      return 'Use existing manuscript';
    default:
      return 'Unknown origin type';
  }
}
