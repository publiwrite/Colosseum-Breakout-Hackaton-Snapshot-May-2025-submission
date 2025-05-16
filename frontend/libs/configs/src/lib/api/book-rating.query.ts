import { gql } from '../apollo';

export const GET_BOOK_EDITION_RATING = gql(`#graphql
  query GetBookEditionRating($input: String!) {
    getBookEditionRating(bookEditionId: $input) {
      count
      averageRating
      ratingCounts
    }
  }
`);

export const GET_USER_BOOK_EDITION_REVIEW = gql(`#graphql
  query GetUserBookReview($input: String!) {
    getUserBookEditionReview(bookEditionId: $input) {
      id
      status
      body
      rating
      rejectionReason
      createdAt
    }
  }
`);

export const GET_BOOK_EDITION_REVIEWS = gql(`#graphql
  query GetBookEditionReviews($input: String!, $pagination: PaginationParamsDto) {
    getBookReviewsByBookEditionId(bookEditionId: $input, pagination: $pagination) {
      reviews {
        id
        rating
        body
        createdAt
        isVerified
        user {
          ...UserFragment
        }
      }
      count
    }
  }
`);

export const GET_REVIEWS = gql(`#graphql
  query GetReviews($pagination: PaginationParamsDto) {
    getReviews( pagination: $pagination) {
      reviews {
        id
        rating
        body
        status
        bookEditionId
        user {
          ...UserFragment
        }
      }
      count
    }
  }
`);

export const ADD_REVIEW = gql(`#graphql
  mutation AddReview($input: AddReviewInput!) {
    addReview(input: $input) {
      id
    }
  }
`);

export const EDIT_REVIEW = gql(`#graphql
  mutation EditReview($input: EditReviewInput!, $reviewId: String!) {
    editReview(input: $input, reviewId: $reviewId) {
      id
    }
  }
`);

export const APPROVE_REVIEW = gql(`#graphql
  mutation ApproveReview($reviewId: String!) {
    approveReview(reviewId: $reviewId) 
  }
`);

export const REJECT_REVIEW = gql(`#graphql
  mutation RejectReview($reviewId: String!, $reason: String!) {
    rejectReview(reviewId: $reviewId, reason: $reason) 
  }
`);
