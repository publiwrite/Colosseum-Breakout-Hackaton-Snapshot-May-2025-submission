import { TypeOfRights } from '../../apollo';

export const typeOfRightsToReadableWord = (type: TypeOfRights): string => {
  switch (type) {
    case TypeOfRights.ReferenceRights:
      return 'Reference rights';
    case TypeOfRights.TrainingRights:
      return 'Training rights';
    case TypeOfRights.Both:
      return 'Reference and training rights';
    default:
      return 'Unknown type of rights';
  }
};
