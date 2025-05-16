import { gql } from '../apollo';

export const GET_WRITING_STREAK = gql(`#graphql
  query GetWritingStreak{
    getWritingStreak {
        currentStreak
        activeDates
    }
  }
`);

export const GET_STATS_BY_USER = gql(`#graphql
  query GetStatsByUser($input: GetStatsByUserInput!){ 
    getStatsByUser(GetStatsByUserInput: $input)
  }
`);
