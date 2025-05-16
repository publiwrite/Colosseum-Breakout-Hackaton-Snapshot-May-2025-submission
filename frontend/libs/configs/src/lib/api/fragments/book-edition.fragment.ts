import { gql } from '../../apollo';

// Will be used on Book -> Edition -> Publication -> Listing
gql(`#graphql
  fragment BookEditionDownwardsFragment on BookEdition {
    id
    description
    edition {
      id
      name
    }
    language {
        id
        name
    }
    authors {
        ...BookAuthorFragment
    }
    publications{
        ...PublicationDownwardsFragment
    }
  }
`);

// Will be used on Listing -> Publication -> Edition -> Book
gql(`#graphql
  fragment BookEditionUpwardsFragment on BookEdition {
    ...BookEditionDownwardsFragment
    book {
      ...BookUpwardsFragment
    }
  }
`);
