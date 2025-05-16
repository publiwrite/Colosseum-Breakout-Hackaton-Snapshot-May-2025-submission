import { gql } from '../apollo';

export const ADD_PUBLICATION_LISTINGS_TO_BASKET = gql(`#graphql
  mutation AddPublicationListingsToBasket($input: [BasketItemInput!]!) {
    addPublicationListingsToBasket(items:  $input) {
      ...BasketFragment
    }
  }
`);

export const REMOVE_PUBLICATION_LISTING_FROM_BASKET = gql(`#graphql
  mutation RemovePublicationListingFromBasket($input: String!) {
    removePublicationListingFromBasket(publicationListingId: $input) {
      ...BasketFragment
    }
  }
`);

export const UPDATE_PUBLICATION_LISTING_FROM_BASKET = gql(`#graphql
  mutation UpdatePublicationListingFromBasket($listingId: String!, $quantity: Float!) {
    updatePublicationListingFromBasket(publicationListingId: $listingId, quantity: $quantity) {
      ...BasketFragment
    }
  }
`);

export const GET_MY_BASKET = gql(`#graphql
  query GetMyBasket { 
    getMyBasket {
      ...BasketFragment
    }
  }
`);
