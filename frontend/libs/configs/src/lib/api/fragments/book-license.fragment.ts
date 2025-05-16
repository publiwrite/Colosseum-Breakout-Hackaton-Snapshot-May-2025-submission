import { gql } from '../../apollo';

gql(`#graphql
  fragment BookLicenseFragment on BookLicense {
    id
    title
    description
    priceInCents
    manuscriptAssetKey
    coverAssetKey
    assets {
      ...AssetFragment
    }
    btcInscriptionStatus 
    btcInscriptionId
    createdAt
    updatedAt
    genres {
      id
      name
    }
    authors {
      id
      name
    }
    orders {
      id
      status
      solanaPNftAddress
      solanaPNftTxSignature
      postPaymentTxSignature
      signedTemplateIpfsCid
    }
    isForCommercialUse
    typeOfRights
    isbn
    metadata {
      id
      hash
      pages
      tokens
    }
    
  }
`);
