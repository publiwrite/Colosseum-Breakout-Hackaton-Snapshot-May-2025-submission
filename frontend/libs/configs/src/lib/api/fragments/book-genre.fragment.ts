import { gql } from '../../apollo';

gql(`#graphql
  fragment BookGenreFragment on BookGenre {
    id
    name
    description
    slug
  }
`);
