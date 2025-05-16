import { gql } from '../apollo';

export const GET_BEST_SELLER_BOOK_EDITIONS = gql(`#graphql
  query GetBestSellerBookEditions {
    getBestSellerBookEditions {
     id
     name
     slug
     editions {
      ...BookEditionUpwardsFragment
     }
    }
  }
`);

export const SET_BEST_SELLER_BOOK_EDITIONS = gql(`#graphql
  mutation SetBestSellerBookEditions($input: [BestSellerCategoryBookEditionInput!]!) {
    setBestSellerBookEditions(input: $input) 
  }
`);
