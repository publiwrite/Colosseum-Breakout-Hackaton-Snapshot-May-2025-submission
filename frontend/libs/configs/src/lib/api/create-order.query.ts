import { gql } from '../apollo';

export const CREATE_ORDER = gql(`#graphql
    mutation CreateOrder {
      createOrder
    }
  `);

export const CREATE_HELIO_ORDER = gql(`#graphql
  mutation CreateHelioOrder {
    createHelioOrder
  }
`);

export const CREATE_BUY_NOW_ORDER = gql(`#graphql
  mutation CreateBuyNowOrder($publicationListingId: String!) {
    createBuyNowOrder(publicationListingId: $publicationListingId)
  }
`);

export const CREATE_HELIO_BUY_NOW_ORDER = gql(`#graphql
  mutation CreateHelioBuyNowOrder($publicationListingId: String!) {
    createHelioBuyNowOrder(publicationListingId: $publicationListingId)
  }
`);

/** STRIPE BALANCE - PAYOUTS COMPONENT REQUIRED THIS */
export const ACCOUNT_SESSION_SECRET = gql(`#graphql
  query AccountSessionSecret {
    accountSessionSecret
  }
`);
