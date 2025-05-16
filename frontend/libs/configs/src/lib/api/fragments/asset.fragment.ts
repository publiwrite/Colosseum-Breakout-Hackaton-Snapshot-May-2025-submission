import { gql } from '../../apollo';

gql(`#graphql
  fragment AssetFragment on Asset {
    id
    key
    type
  }
`);
