import { gql } from '../../apollo';

// Will be used on Book -> Edition -> Publication -> Listing
gql(`#graphql
  fragment BookDownwardsFragment on Book {
    title
    genres {
      ...BookGenreFragment
    }
    editions {
      ...BookEditionDownwardsFragment
    }
  }
`);

// Will be used on Listing -> Publication -> Edition -> Book
gql(`#graphql
  fragment BookUpwardsFragment on Book {
    ...BookDownwardsFragment
    title
  }
`);
