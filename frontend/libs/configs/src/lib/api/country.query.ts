import { gql } from '../apollo';

/**
 * Getting nonce and message for signing with wallet
 */
export const GET_COUNTRIES = gql(`#graphql
  query GetCountries($input: Boolean!) {
    countries (isStripeConnectedAccountSupported: $input) {
      id
      name
      iso
    }
  }
`);
