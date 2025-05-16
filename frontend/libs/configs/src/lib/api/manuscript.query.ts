import { gql } from '../apollo';

export const CREATE_PUBLISHING_DRAFT = gql(`#graphql
  mutation CreatePublishingDraft($input: CreatePublishingDraftInput!) {
    createPublishingDraft(input: $input) {
      ...ManuscriptPublishingFragment
    }
  }
`);

export const UPDATE_PUBLISHING_DRAFT = gql(`#graphql
  mutation UpdatePublishingDraft($input: UpdatePublishingDraftInput!) {
    updatePublishingDraft(input: $input) {
      ...ManuscriptPublishingFragment
    }
  }
`);

export const UPDATE_PUBLISHING_COVER = gql(`#graphql
  mutation UpdatePublishingCover($input: UpdatePublishingCoverInput!) {
    updatePublishingCover(input: $input) 
  }
`);

export const CREATE_MANUSCRIPT = gql(`#graphql
  mutation CreateManuscript($input: CreateManuscriptInput!) {
    createManuscript(createManuscriptInput:  $input) {
      id
    }
  }
`);

export const UPDATE_MANUSCRIPT = gql(`#graphql
mutation UpdateManuscript($input: UpdateManuscriptInput!) {
    updateManuscript(updateManuscriptInput:  $input) {
        id
    }
}
`);

export const ASSIGN_ISBN = gql(`#graphql
  mutation AssignIsbn($input: AssignIsbnInput!) {
      assignIsbn(input: $input) 
  }
`);

export const APPROVE_MANUSCRIPT_PUBLISHING = gql(`#graphql
  mutation ApproveManuscriptPublishing($input: ApprovePublishingInput!) {
      approveManuscriptPublishing(input: $input) 
  }
`);

export const REJECT_MANUSCRIPT_PUBLISHING = gql(`#graphql
  mutation RejectManuscriptPublishing($input: RejectPublishingInput!) {
      rejectManuscriptPublishing(input: $input) 
  }
`);

export const SUBMIT_PUBLISHING_DRAFT_FOR_APPROVAL = gql(`#graphql
  mutation SubmitPublishingDraftForApproval($input: SubmitPublishingDraftInput!) {
    submitPublishingDraftForApproval(input: $input) {
      id
    }
  }
`);

export const UPDATE_MANUSCRIPT_SETTINGS = gql(`#graphql
  mutation UpdateManuScriptSettings($input: UpdateManuscriptSettingsInput!) {
    updateManuscriptSettings(settings: $input) 
  }
`);

export const GET_MANUSCRIPT_PUBLISHING_ASSET_METADATA = gql(`#graphql
  query GetManuscriptPublishingAssetMetadata($manuscriptPublishingId: String!) {
    getManuscriptPublishingAssetMetadata(manuscriptPublishingId: $manuscriptPublishingId) {
      pageCount
      colorPageCount
    } 
  }
`);

export const CALCULATE_PRINTING_COST_AND_COVER_SIZE = gql(`#graphql
  query CalculatePrintingCostAndCoverSize($input: CalculatePrintingCostAndCoverSizesInput!) {
    calculatePrintingCostAndCoverSize(input: $input) {
      printingCost
      coverSize {
        width
        height
      }
    } 
  }
`);

export const REMOVE_MANUSCRIPT = gql(`#graphql
  mutation RemoveManuscript($input: String!) {
    removeManuscript(id: $input) 
  }
`);

export const GET_PRINT_LAMINATION = gql(`#graphql
  query GetPrintLamination {
    getPrintLamination {
      id
      name
    }
  }
`);

export const GET_MANUSCRIPT_PUBLISHING_ASSET_DOWNLOAD_URL = gql(`#graphql
  query GetManuscriptPublishingAssetDownloadUrl( $input: String!) {
    getManuscriptPublishingAssetDownloadUrl(assetId: $input)
  }
`);

export const GET_MANUSCRIPT_FONTS = gql(`#graphql
  query GetManuscriptFonts {
    getManuscriptFonts {
      id
      name
    }
  }
`);

export const GET_MANUSCRIPT_TEXT_STOCKS = gql(`#graphql
  query GetManuscriptTextStocks  {
    getManuscriptTextStocks {
      id
      name
    }
  }
`);

export const GET_MANUSCRIPT_PUBLISHINGS = gql(`#graphql
  query GetManuscriptPublishings($manuscriptId: String!) {
    getManuscriptPublishings(manuscriptId: $manuscriptId) {
      id
      createdAt
      format
      status
      rejection {
        id
        reason
      }
      edition {
        id
        name
      }
    }
  }
`);

export const GET_MANUSCRIPT_PUBLISHINGS_ADMIN = gql(`#graphql
  query GetManuscriptPublishingsAdmin($manuscriptId: String!) {
    getManuscriptPublishings(manuscriptId: $manuscriptId) {
      ...ManuscriptPublishingFragment
    }
  }
`);

export const GET_MANUSCRIPT_PAPER_SIZES = gql(`#graphql
  query GetManuscriptPaperSizes {
    getManuscriptPaperSizes {
      id
      name
      width
      height
      unit
    }
  }
`);

export const GET_MANUSCRIPTS_SUMMARY = gql(`#graphql
  query GetManuscriptsSummary($input: ManuscriptsSummaryInput!) {
    getManuscriptsSummary(input: $input) {
      count
      items {
        id
        title
        pricesInCents
        formats
      }
    }
  }
`);

export const GET_MANUSCRIPT_PUBLISHING_BY_ID = gql(`#graphql
  query GetManuscriptPublishingById($manuscriptPublishingId: String!) {
    getManuscriptPublishingById(manuscriptPublishingId: $manuscriptPublishingId) {
     ...ManuscriptPublishingFragment
    }
  }
`);

export const VALIDATE_PDF_PAGE_SIZE = gql(`#graphql
  query ValidatePdfPageSize($input: ValidatePdfInput!) {
    validatePdfPageSize(input: $input) 
  }
`);

export const VALIDATE_BOOK_COVER_PDF_PAGE_SIZE = gql(`#graphql
  query ValidateBookCoverPdfPageSize($pdfKey: String!, $publishingId: String!) {
    validateBookCoverPdfPageSize(pdfKey: $pdfKey, publishingId: $publishingId) 
  }
`);

export const GET_MANUSCRIPT_AUTHORS = gql(`#graphql
  query GetManuscriptAuthors($input: String) {
    getManuscriptAuthors(manuscriptId: $input) {
      userId
      authorsIdentities{
       ...BookAuthorFragment
      }
    }
  }
`);

export const GET_MANUSCRIPT_BY_ID = gql(`#graphql
  query GetManuscriptById($input: String!) {
    getManuscriptById(id: $input) {
      id
      title
      origin
      genres{
        id
        name
      }
      tags {
        id
        name
      }
      assets {
        ...ManuscriptAssetFragment
      }
      settings {
        font {
          id
        }
        hasDropcaps
        sectionTitleAlignment
        sectionTitleStyle
        ornamentalBreak
        addPageNumber
        pageNumberAlignment
      }
      collaborators {
        userId
        role
        user {
          ...UserFragment
        }
      }
      publishing {
          edition {
              id
              name
          }
          description
          competitionId
        priceInCents
        manuscriptPublishingAuthors {
          ...ManuscriptPublishingAuthorFragment
        }
      }  
    }
  }
`);

export const GET_MY_MANUSCRIPTS_COUNT = gql(`#graphql
  query GetMyManuscriptsCount {
    getMyManuscriptsCount {
      internalCount
      externalCount
    }
  }
`);

export const GET_MY_MANUSCRIPTS = gql(`#graphql
  query GetMyManuscripts($input: PaginationParamsDto, $origin: ManuscriptOriginType){
    getMyManuscripts(paginationParamsDto: $input, origin: $origin) {
      items{
        id
        title
        createdAt
        origin 
        assets {
          ...ManuscriptAssetFragment
        }
        genres {
          id
        }
        collaborators {
          user { 
            ...UserFragment
          }
        }
        publishing {
          description
          priceInCents
          format
          assets {
            id
            key
            type
          }
          manuscriptPublishingAuthors {
            bookAuthorId
          }
          edition {
            id
          }
          rejection {
            reason
          }
          competitionId
        }
      }
      count
    }
  }
`);

export const PREVIEW_MANUSCRIPT_EPUB_QUERY = gql(`#graphql
query PreviewManuscriptEpub($manuscriptId: String!) {
  previewManuscriptEpub(manuscriptId: $manuscriptId)
}
`);
