import { gql } from '../../apollo';

gql(`#graphql
  fragment ManuscriptAssetFragment on ManuscriptAssetEntity {
    id
    key
    type
  }
`);
