import { gql } from '../apollo/';

export const GET_AUTHOR = gql(`#graphql
  query GetAuthor($slug: String!) {
    getBookAuthor(slug: $slug) {
      ...BookAuthorFragment
    }
  }
`);

export const GET_AUTHOR_BY_ID = gql(`#graphql
  query GetAuthorById($id: String!) {
    getBookAuthorById(id: $id) {
      slug {
        name
      }
    }
  }
`);

export const CREATE_BOOK_AUTHOR = gql(`#graphql
  mutation CreateBookAuthor($input: CreateAuthorInput!) {
    createBookAuthor(input: $input) {
      ...BookAuthorFragment
    }
  }
`);

export const UPDATE_BOOK_AUTHOR = gql(`#graphql
  mutation UpdateBookAuthor($input: UpdateAuthorInput!) {
    updateBookAuthor(input: $input) {
      ...BookAuthorFragment
    }
  }
`);

export const GET_PEN_BOOK_AUTHORS = gql(`#graphql
  query getPenBookAuthors {
    getPenBookAuthors {
      ...BookAuthorFragment
    }
  }
`);
