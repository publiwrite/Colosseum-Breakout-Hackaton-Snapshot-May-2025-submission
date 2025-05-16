import { gql } from '../../apollo';

gql(`#graphql
  fragment OrderFragment on Order {
    id
    status
    type
    orderItems {
      quantity
    }
    createdAt
    totalInCents
  }
`);
