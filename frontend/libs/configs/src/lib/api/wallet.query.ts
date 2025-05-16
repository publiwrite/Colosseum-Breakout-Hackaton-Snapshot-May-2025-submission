import { gql } from '../apollo';

/**
 * Getting nonce and message for signing with wallet
 */
export const GET_WALLET_MESSAGE_QUERY = gql(`#graphql
  query GetWalletMessage {
    walletMessage {
      statement
      message
      nonce
    }
  }
`);

/**
 * Gets the user's auth token by signing in with legacy method
 * Which covers solflare, metamask so on
 */
export const SIGN_IN_LEGACY_WITH_WALLET_MUTATION = gql(`
  mutation SignInLegacyWithWallet($input: WalletSignInLegacyInput!) {
    signInLegacyWithWallet(walletSignInInput: $input) {
      access_token
      refresh_token
      id_token
      expires_at 
    } 
  }
`);

/**
 * Gets the user's auth token by signing in with new method
 * Which covers phantom
 */
export const SIGN_IN_WITH_WALLET_MUTATION = gql(`
  mutation SignInWithWallet($input: WalletSignInInput!) {
    signInWithWallet(walletSignInInput: $input) {
      access_token
      refresh_token
      id_token
      expires_at
    }
  }
`);

/**
 * Gets refresh token for the wallet logged accounts
 */
export const REFRESH_TOKEN_FOR_WALLET = gql(`
  query RefreshTokenForWallet($input: String!) {
    walletRefreshToken(walletRefreshTokenInput: $input) {
      access_token
      id_token
      expires_at
    }
  }
`);
