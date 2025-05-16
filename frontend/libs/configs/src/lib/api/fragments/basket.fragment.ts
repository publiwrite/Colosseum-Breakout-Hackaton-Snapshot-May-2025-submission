import { gql } from '../../apollo';

gql(`#graphql
  fragment BasketFragment on Basket {
    items {
      publicationListingId
      quantity
      publicationsListing {
        priceInCents
        publication {
          ...PublicationUpwardsFragment
        }
      }
    }
  }
`);
