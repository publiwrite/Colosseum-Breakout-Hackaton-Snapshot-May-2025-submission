import { gql } from '../../apollo';

// Will be used on Book -> Edition -> Publication -> Listing
gql(`#graphql
  fragment PublicationDownwardsFragment on Publication {
    id
    publishedAt
    pagesCount
    format 
    assets {
        ...AssetFragment
    }
    listings {
        ...PublicationListingFragment
    }
    epubMetadata {
      locations
    }
  }
`);

// Will be used on Listing -> Publication -> Edition -> Book
gql(`#graphql
  fragment PublicationUpwardsFragment on Publication {
    ...PublicationDownwardsFragment
    bookEdition {
      ...BookEditionUpwardsFragment
    }
  }
`);
