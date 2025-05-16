import { gql } from '../../apollo';

gql(`#graphql
  fragment ManuscriptPublishingFragment on ManuscriptPublishing {
    id
    priceInCents
    status
    format
    createdAt
    description
    settings {
      paperSize {
        id
        name
      }
    }
    printSettings {
      textStock{
        id
        name
      }
      lamination {
        id
        name
      }
      hasColorPages
    }
    manuscript {
      title
    }
    competitionId
    edition {
      id
      name
    }
    manuscriptPublishingAuthors {
      ...ManuscriptPublishingAuthorFragment
    }
    assets {
      ...ManuscriptPublishingAssetFragment
    }
    rejection {
      reason
    }
  }
`);
