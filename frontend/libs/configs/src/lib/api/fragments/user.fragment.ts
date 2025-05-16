import { gql } from '../../apollo';

gql(`#graphql
  fragment UserFragment on User {
    id
    username
    userPaymentDetails {
     stripeConnectedAccountId
    }
    profile {
     ...ProfileFragment
    }
    oauthProviders {
      name
    }
    wallets {
      address
      isCustodial
    }
  }
`);
