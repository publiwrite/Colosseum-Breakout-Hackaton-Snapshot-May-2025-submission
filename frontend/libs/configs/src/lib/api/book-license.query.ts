import { gql } from '../apollo';

export const CREATE_BOOK_LICENSE = gql(`#graphql
  mutation CreateBookLicense($input: CreateBookLicenseInput!) {
    createBookLicense(input: $input) {
      id
    }
  }
`);

export const GET_BOOK_LICENSES = gql(`#graphql
  query GetBookLicenses($pagination: PaginationParamsDto!, $excludeLicenseId: String) {
    getBookLicenses(pagination: $pagination, excludeLicenseId: $excludeLicenseId) {
      count
      items {
        ...BookLicenseFragment
      }
    }
  }
`);

export const GET_BOOK_LICENSE_BY_ID = gql(`#graphql
  query GetBookLicenseById($id: String!) {
    getBookLicenseById(id: $id) {
      ...BookLicenseFragment
    }
  }
`);

export const CREATE_HELIO_LICENSE_PAYMENT = gql(`#graphql
  mutation CreateHelioLicensePayment($licenseId: String!) {
    createHelioLicensePayment(licenseId: $licenseId) 
  }
`);

export const GET_PURCHASED_BOOK_LICENSES = gql(`#graphql
  query GetPurchasedBookLicenses {
    getPurchasedBookLicenses {
      ...BookLicenseFragment
    }
  }
`);

export const GET_MY_BOOK_LICENSES = gql(`#graphql
  query GetMyBookLicenses {
    getMyBookLicenses {
      ...BookLicenseFragment
    }
  }
`);

export const GET_BOOK_LICENSE_BY_IDS = gql(`#graphql
  query GetBookLicenseByIds($ids: [String!]!) {
    getBookLicenseByIds(ids: $ids) {
      ...BookLicenseFragment
    }
  }
`);

export const GET_BOOK_LICENSE_ORDER_BY_ID = gql(`#graphql
  query GetBookLicenseOrderById($orderId: String!) {
    getBookLicenseOrderById(orderId: $orderId) {
      id
      status
      solanaPNftAddress
      solanaPNftTxSignature
      postPaymentTxSignature
      signedTemplateIpfsCid
    }
  }
`);

export const GET_BOOK_LICENSE_MANUSCRIPT_URL = gql(`#graphql
  query GetBookLicenseManuscriptUrl($bookLicenseId: String!) {
    getBookLicenseManuscriptUrl(bookLicenseId: $bookLicenseId)
  }
`);

export const GET_BOOK_LICENSE_SALES = gql(`#graphql
  query GetBookLicenseSales($bookLicenseId: String!) {
    getBookLicenseSales(bookLicenseId: $bookLicenseId) {
      volume
      orders {
        id
        solanaPNftAddress
        postPaymentTxSignature
        signedTemplateIpfsCid
        createdAt
      }
    }
  }
`);
