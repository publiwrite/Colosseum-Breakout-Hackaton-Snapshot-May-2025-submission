import { gql } from '../../apollo';

gql(`#graphql
  fragment UserOwnedPublicationFragment on UserOwnedPublication {
    id
    lastReadAt
    status
    source
    createdAt
    publication{
      ...PublicationUpwardsFragment
    }
    stats {
      percentageRead
    }
  }
`);
