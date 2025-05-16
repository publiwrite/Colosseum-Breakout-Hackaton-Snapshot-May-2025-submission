import { gql } from '../../apollo';

gql(`#graphql
  fragment PublicationListingFragment on PublicationListing {
    id
    createdAt
    priceInCents
    quantity
  }
`);
