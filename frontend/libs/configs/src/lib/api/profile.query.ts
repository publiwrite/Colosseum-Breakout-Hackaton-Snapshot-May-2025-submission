import { gql } from '../apollo';

export const GET_CURRENT_USER = gql(`
  query getCurrentUser {
    currentUser {
      ...UserFragment
    }
  }
`);

export const GET_AVAILABLE_USERNAME = gql(`
    query getAvailableUsername($input: AvailableUsernameInput!) {
        getAvailableUsername(availableUsernameInput: $input) 
    }
`);

export const IS_SLUG_AVAILABLE = gql(`
    query isSlugAvailable($input: String!) {
        isSlugAvailable(slug: $input) 
    }
`);

export const UPDATE_PROFILE = gql(`
  mutation UpdateProfile($input: UpdateProfileInput!) {
    updateProfile(updateProfileInput: $input) {
      ...ProfileFragment
    }
  }
`);

export const UPDATE_PROFILE_VIEW_MODE = gql(`
  mutation UpdateProfileViewMode($input: UpdateProfileViewModeInput!) {
    updateProfileViewMode(updateProfileViewModeInput: $input) {
     viewMode
    }
  }
`);

export const SET_PASSWORD = gql(`
  mutation SetPassword($input: SetUserPasswordInput!) {
    setUserPassword(setUserPasswordInput: $input) {
      id
    }
  }
`);

export const VERIFY_PROFILE = gql(`
  mutation VerifyProfile($input: VerifyProfileInput!) {
    verifyProfile(verifyProfileInput: $input) {
      access_token
      id_token
      refresh_token
      expires_at
    }
  }
`);

export const ACCOUNT_ONBOARDED = gql(`#graphql
  query AccountOnboarded {
    accountOnboarded
  }
`);

export const TRANSFER_AVAILABLE_BALANCE = gql(`#graphql
  mutation TransferAvailableBalance {
    transferAvailableBalance
  }
`);

export const CREATE_CONNECTED_ACCOUNT = gql(`#graphql
  mutation CreateConnectedAccount($input: String!) {
    createConnectedAccount(countryIso: $input)
  }
`);

export const GET_ACCOUNT_BALANCE = gql(`#graphql
  query getAccountBalance {
    getAccountBalance {
      availableFiatBalance {
        value
        currency
      }
      pendingFiatBalanceInCents
      availableCryptoBalanceInCents
      pendingCryptoBalanceInCents
    }
  }
`);

export const GET_BOOK_SALES = gql(`#graphql
  query bookSales($input: PaginationParamsDto) {
    booksSales(pagination: $input) {
     items {
      bookId
      book {
        title
      }
      listings {
        type
        unitsCompleted {
          count
          salesVolumeInFiat
          salesVolumeInCrypto
        }
        unitsPending {
          count
          salesVolumeInFiat
          salesVolumeInCrypto
        }
      }
     }
      count
    }
  }
`);
