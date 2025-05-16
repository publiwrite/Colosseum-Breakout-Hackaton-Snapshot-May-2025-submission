import { gql } from '../../apollo';

gql(`#graphql
  fragment ManuscriptPublishingAuthorFragment on ManuscriptPublishingAuthor {
    id
    bookAuthor {
      id
      userId
      name
      avatarImageUrl
      bannerImageUrl
       slug {
          id
          name
        }
    }
    percentage
  }
`);
