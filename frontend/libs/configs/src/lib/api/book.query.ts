import { gql } from '../apollo';

export const GET_BOOKS_WITH_SEARCH_CRITERIA = gql(`#graphql
  query GetBooksWithSearchCriteria($filter: BookFilterInput, $sort: BookSortInput, $pagination: PaginationParamsDto) {
    getBooksWithSearchCriteria(filter:  $filter, sort: $sort, pagination: $pagination) {
      count
      items {
        id
        bookEditionId
        editionId
        title
        minPrice
        maxPrice
        assets {
          ...AssetFragment
        }
        authors {
          ...BookAuthorFragment
        }
      }
    } 
  }
`);

export const GET_BOOK_BY_BOOK_EDITION_ID = gql(`#graphql
  query GetBookByBookEditionId($id: String!) {
    getBookByBookEditionId(id: $id) {
      id
      ...BookDownwardsFragment
    }
  }
`);

export const GET_PUBLICATION_ASSET = gql(`#graphql
  query GetPublicationAsset( $input: GetPublicationAssetInput!) {
    getPublicationAsset(input: $input)
  }
`);

export const GET_BOOKS_BY_LISTING_IDS = gql(`#graphql
  query GetBooksByListingIds($input: [String!]!) {
    getBooksByListingIds(ids: $input) {
      ...BookDownwardsFragment 
    }
  }
`);

export const GET_EDITIONS = gql(`#graphql
query GetEditions {
    getEditions {
        id
        name
    }
}
`);

export const GET_BOOK_TAGS = gql(`#graphql
    query GetBookTags {
        getBookTags {
            id
            name
        }
    }
`);

export const GET_MY_OWNED_PUBLICATIONS = gql(`#graphql
  query GetMyOwnedPublications {
    getMyOwnedPublications {
      ...UserOwnedPublicationFragment
    }
  }
`);

export const GET_MY_OWNED_PUBLICATION_BY_ID = gql(`#graphql
  query GetMyOwnedPublicationById($publicationId: String!) {
    getMyOwnedPublicationById(publicationId: $publicationId) {
      ...UserOwnedPublicationFragment
    }
  }
`);

export const GET_MY_OWNED_PUBLICATIONS_MINIMAL = gql(`#graphql
  query GetMyOwnedPublicationsMinimal {
      getMyOwnedPublications {
          publicationId
          createdAt
      }
  }
`);

export const SET_PERCENTAGE_READ = gql(`#graphql
    mutation SetPercentageRead($publicationId: String!, $percentage: Float!) {
      setPercentageRead(publicationId: $publicationId, percentage: $percentage) 
    }
`);

export const GET_BOOK_GENRES = gql(`#graphql
  query GetBookGenres {
      getBookGenres {
          id
          name
          slug
          description
      }
  }
`);

export const GET_BOOK_GENRES_WITH_BOOKS = gql(`#graphql
query GetBookGenresWithBooks {
  getBookGenres {
    ...BookGenreFragment
    books {
      ...BookDownwardsFragment
    } 
  }
}
`);

export const GET_BOOK_COMPETITIONS_WITH_BOOKS = gql(`#graphql
  query GetBookCompetitionsWithBooks {
      getBookCompetitions {
        id
        name
        description
        imageUrl
        slug
        books {
          ...BookDownwardsFragment
        }
      }
  }
`);

export const GET_STATS_FOR_COMPETITION = gql(`#graphql
  query GetStatsForCompetition($competitionSlug: String!) {
      getStatsForCompetition(competitionSlug: $competitionSlug) {
        leaderboard {
          bookId
          bookName
          assets {
            ...AssetFragment
          }
          authors{
            ...BookAuthorFragment
          }
          publishedAt
          score
          position
        }
        globalAverageRating
        weight
      }
  }
`);

export const GENERATE_UPLOAD_PRESIGNED_URL = gql(`#graphql
  query GenerateUploadPresignedUrl($contentType: ContentType!) {
      generateUploadPresignedUrl(contentType: $contentType) {
        url
        key
      }
  }
`);

export const GENERATE_DOWNLOAD_PRESIGNED_URL = gql(`#graphql
  query GenerateDownloadPresignedUrl($key: String!) {
      generateDownloadPresignedUrl(key: $key)
  }
`);

export const ADD_FREE_BOOK_TO_LIBRARY = gql(`#graphql
  mutation AddFreeBookToLibrary($publicationId: String!) {
    addFreeBookToLibrary(publicationId: $publicationId) 
  }
`);
