import { gql } from '../../apollo';

gql(`#graphql
  fragment BookAuthorFragment on BookAuthor {
    id
    name
    bannerImageUrl
    avatarImageUrl
    bio
    slug {
      id
      name
    }
  }
`);
