import { gql } from '../../apollo';

gql(`#graphql
  fragment ManuscriptPublishingAssetFragment on ManuscriptPublishingAsset {
    id
    key
    type
  }
`);
