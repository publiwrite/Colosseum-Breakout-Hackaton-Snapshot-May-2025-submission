import { gql } from '../../apollo';

gql(`#graphql
  fragment ProfileFragment on Profile {
    userId
    email
    unverifiedEmail
    firstName
    lastName
    description
    createdAt
    birthday
    gender
    viewMode 
    slug {
      name
    }
    country {
      id
    }
    avatarImageUrl
    bannerImageUrl
  }
`);
