import { gql } from '../apollo';

export const GET_ORDERS = gql(`#graphql
  query GetOrders($input: PaginationParamsDto!) {
    getOrders(pagination: $input) {
      count
      items {
        ...OrderFragment
      }
    }
  }
`);

export const GET_ORDER = gql(`#graphql
    query GetOrder($input: String!) {
      getOrder(orderId: $input) {
       id
       orderItems {
        id
        productPriceInCents
        totalPriceInCents
        quantity
        publicationListing {
          publication {
            ...PublicationUpwardsFragment
          }
        }
       }
       orderHistories {
        id
        previousStatus
        newStatus
       }
       createdAt
       subTotalInCents
       taxInCents
       totalInCents
       status
       type
      }
    }
  `);
