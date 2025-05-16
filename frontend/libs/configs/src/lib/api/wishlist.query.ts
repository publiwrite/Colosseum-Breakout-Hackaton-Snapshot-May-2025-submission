import { gql } from '../apollo';

export const GET_WISHLIST_BOOKS = gql(`#graphql
  query GetWishlistBooks {
      getWishlistBooks {
        id
        title
        bookEditionId
        authors {
          ...BookAuthorFragment
        }
        assets {
          ...AssetFragment
        }
      }
  }
`);

export const GET_WISHLIST_BOOK_IDS = gql(`#graphql
  query GetWishlistBookIds {
      getWishlistBooks {
          id
      }
  }
`);

export const ADD_TO_WISHLIST = gql(`#graphql
  mutation AddToWishlist($input: String!) {
      addToWishlist(bookId: $input) 
  }
`);

export const REMOVE_FROM_WISHLIST = gql(`#graphql
  mutation RemoveFromWishlist($input: String!) {
      removeFromWishlist(bookId: $input) {
          id
      }
  }
`);
