import { gql } from '../apollo';

export const GET_SPOTLIGHT_BOOK_EDITIONS = gql(`#graphql
  query GetSpotlightBookEditions {
    getSpotlightBookEditions {
     id
     book {
      title
     }
     publications{
      assets {
        ...AssetFragment
      }
     }
    }
  }
`);

export const SET_SPOTLIGHT_BOOK_EDITIONS = gql(`#graphql
  mutation SetSpotlightBookEditions($input: [String!]!) {
    setSpotlightBookEditions(editionIds: $input) 
  }
`);

export const GET_SPOTLIGHT_AUTHORS = gql(`#graphql
  query GetSpotlightAuthors {
    getSpotlightAuthors {
     id
     name
     slug {
      name
     }
    }
  }
`);

export const SET_SPOTLIGHT_AUTHORS = gql(`#graphql
  mutation SetSpotlightAuthors($input: [String!]!) {
    setSpotlightAuthors(authorSlugs: $input) 
  }
`);
