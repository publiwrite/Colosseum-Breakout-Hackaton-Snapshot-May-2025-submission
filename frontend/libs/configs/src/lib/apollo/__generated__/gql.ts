/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '#graphql\n  query GetCollaboratorsByManuscriptId($input: String!) {\n    getCollaboratorsByManuscriptId(manuscriptId: $input) {\n      createdAt\n      userId\n      role\n      user {\n        ...UserFragment\n      }\n    }\n\n    getCollaboratorInvitationsByManuscriptId(manuscriptId: $input) {\n      email\n      role\n     }\n  }\n':
    types.GetCollaboratorsByManuscriptIdDocument,
  '#graphql\n  mutation InviteCollaborator($input: InviteCollaboratorInput!) {\n    inviteCollaborator(inviteCollaboratorInput: $input) \n  }\n':
    types.InviteCollaboratorDocument,
  '#graphql\n  mutation UpdateCollaborator($input: UpdateCollaboratorInput!) {\n    updateCollaborator(UpdateCollaboratorInput: $input) \n  }\n':
    types.UpdateCollaboratorDocument,
  '#graphql\n  mutation RemoveCollaborator($input: RemoveCollaboratorInput!) {\n    removeCollaborator(removeCollaboratorInput: $input) \n  }\n':
    types.RemoveCollaboratorDocument,
  '#graphql\n  query GetVersions($manuscriptId: String!, $paginationParamsDto: PaginationParamsDto) {\n    getVersions(manuscriptId: $manuscriptId, paginationParamsDto: $paginationParamsDto) {\n      count\n      items {\n        timestamp\n        id\n        participants\n      }\n    }\n  }\n':
    types.GetVersionsDocument,
  '#graphql\n  mutation RestoreVersion($manuscriptId: String!, $documentHistoryId: String!) {\n    restoreVersion(manuscriptId: $manuscriptId, documentHistoryId: $documentHistoryId) \n  }\n':
    types.RestoreVersionDocument,
  '#graphql\n  query GetAuthor($slug: String!) {\n    getBookAuthor(slug: $slug) {\n      ...BookAuthorFragment\n    }\n  }\n':
    types.GetAuthorDocument,
  '#graphql\n  query GetAuthorById($id: String!) {\n    getBookAuthorById(id: $id) {\n      slug {\n        name\n      }\n    }\n  }\n':
    types.GetAuthorByIdDocument,
  '#graphql\n  mutation CreateBookAuthor($input: CreateAuthorInput!) {\n    createBookAuthor(input: $input) {\n      ...BookAuthorFragment\n    }\n  }\n':
    types.CreateBookAuthorDocument,
  '#graphql\n  mutation UpdateBookAuthor($input: UpdateAuthorInput!) {\n    updateBookAuthor(input: $input) {\n      ...BookAuthorFragment\n    }\n  }\n':
    types.UpdateBookAuthorDocument,
  '#graphql\n  query getPenBookAuthors {\n    getPenBookAuthors {\n      ...BookAuthorFragment\n    }\n  }\n':
    types.GetPenBookAuthorsDocument,
  '#graphql\n  query GetBestSellerBookEditions {\n    getBestSellerBookEditions {\n     id\n     name\n     slug\n     editions {\n      ...BookEditionUpwardsFragment\n     }\n    }\n  }\n':
    types.GetBestSellerBookEditionsDocument,
  '#graphql\n  mutation SetBestSellerBookEditions($input: [BestSellerCategoryBookEditionInput!]!) {\n    setBestSellerBookEditions(input: $input) \n  }\n':
    types.SetBestSellerBookEditionsDocument,
  '#graphql\n  mutation CreateBookLicense($input: CreateBookLicenseInput!) {\n    createBookLicense(input: $input) {\n      id\n    }\n  }\n':
    types.CreateBookLicenseDocument,
  '#graphql\n  query GetBookLicenses($pagination: PaginationParamsDto!, $excludeLicenseId: String) {\n    getBookLicenses(pagination: $pagination, excludeLicenseId: $excludeLicenseId) {\n      count\n      items {\n        ...BookLicenseFragment\n      }\n    }\n  }\n':
    types.GetBookLicensesDocument,
  '#graphql\n  query GetBookLicenseById($id: String!) {\n    getBookLicenseById(id: $id) {\n      ...BookLicenseFragment\n    }\n  }\n':
    types.GetBookLicenseByIdDocument,
  '#graphql\n  mutation CreateHelioLicensePayment($licenseId: String!) {\n    createHelioLicensePayment(licenseId: $licenseId) \n  }\n':
    types.CreateHelioLicensePaymentDocument,
  '#graphql\n  query GetPurchasedBookLicenses {\n    getPurchasedBookLicenses {\n      ...BookLicenseFragment\n    }\n  }\n':
    types.GetPurchasedBookLicensesDocument,
  '#graphql\n  query GetMyBookLicenses {\n    getMyBookLicenses {\n      ...BookLicenseFragment\n    }\n  }\n':
    types.GetMyBookLicensesDocument,
  '#graphql\n  query GetBookLicenseByIds($ids: [String!]!) {\n    getBookLicenseByIds(ids: $ids) {\n      ...BookLicenseFragment\n    }\n  }\n':
    types.GetBookLicenseByIdsDocument,
  '#graphql\n  query GetBookLicenseOrderById($orderId: String!) {\n    getBookLicenseOrderById(orderId: $orderId) {\n      id\n      status\n      solanaPNftAddress\n      solanaPNftTxSignature\n      postPaymentTxSignature\n      signedTemplateIpfsCid\n    }\n  }\n':
    types.GetBookLicenseOrderByIdDocument,
  '#graphql\n  query GetBookLicenseManuscriptUrl($bookLicenseId: String!) {\n    getBookLicenseManuscriptUrl(bookLicenseId: $bookLicenseId)\n  }\n':
    types.GetBookLicenseManuscriptUrlDocument,
  '#graphql\n  query GetBookLicenseSales($bookLicenseId: String!) {\n    getBookLicenseSales(bookLicenseId: $bookLicenseId) {\n      volume\n      orders {\n        id\n        solanaPNftAddress\n        postPaymentTxSignature\n        signedTemplateIpfsCid\n        createdAt\n      }\n    }\n  }\n':
    types.GetBookLicenseSalesDocument,
  '#graphql\n  query GetBookEditionRating($input: String!) {\n    getBookEditionRating(bookEditionId: $input) {\n      count\n      averageRating\n      ratingCounts\n    }\n  }\n':
    types.GetBookEditionRatingDocument,
  '#graphql\n  query GetUserBookReview($input: String!) {\n    getUserBookEditionReview(bookEditionId: $input) {\n      id\n      status\n      body\n      rating\n      rejectionReason\n      createdAt\n    }\n  }\n':
    types.GetUserBookReviewDocument,
  '#graphql\n  query GetBookEditionReviews($input: String!, $pagination: PaginationParamsDto) {\n    getBookReviewsByBookEditionId(bookEditionId: $input, pagination: $pagination) {\n      reviews {\n        id\n        rating\n        body\n        createdAt\n        isVerified\n        user {\n          ...UserFragment\n        }\n      }\n      count\n    }\n  }\n':
    types.GetBookEditionReviewsDocument,
  '#graphql\n  query GetReviews($pagination: PaginationParamsDto) {\n    getReviews( pagination: $pagination) {\n      reviews {\n        id\n        rating\n        body\n        status\n        bookEditionId\n        user {\n          ...UserFragment\n        }\n      }\n      count\n    }\n  }\n':
    types.GetReviewsDocument,
  '#graphql\n  mutation AddReview($input: AddReviewInput!) {\n    addReview(input: $input) {\n      id\n    }\n  }\n':
    types.AddReviewDocument,
  '#graphql\n  mutation EditReview($input: EditReviewInput!, $reviewId: String!) {\n    editReview(input: $input, reviewId: $reviewId) {\n      id\n    }\n  }\n':
    types.EditReviewDocument,
  '#graphql\n  mutation ApproveReview($reviewId: String!) {\n    approveReview(reviewId: $reviewId) \n  }\n':
    types.ApproveReviewDocument,
  '#graphql\n  mutation RejectReview($reviewId: String!, $reason: String!) {\n    rejectReview(reviewId: $reviewId, reason: $reason) \n  }\n':
    types.RejectReviewDocument,
  '#graphql\n  query GetBooksWithSearchCriteria($filter: BookFilterInput, $sort: BookSortInput, $pagination: PaginationParamsDto) {\n    getBooksWithSearchCriteria(filter:  $filter, sort: $sort, pagination: $pagination) {\n      count\n      items {\n        id\n        bookEditionId\n        editionId\n        title\n        minPrice\n        maxPrice\n        assets {\n          ...AssetFragment\n        }\n        authors {\n          ...BookAuthorFragment\n        }\n      }\n    } \n  }\n':
    types.GetBooksWithSearchCriteriaDocument,
  '#graphql\n  query GetBookByBookEditionId($id: String!) {\n    getBookByBookEditionId(id: $id) {\n      id\n      ...BookDownwardsFragment\n    }\n  }\n':
    types.GetBookByBookEditionIdDocument,
  '#graphql\n  query GetPublicationAsset( $input: GetPublicationAssetInput!) {\n    getPublicationAsset(input: $input)\n  }\n':
    types.GetPublicationAssetDocument,
  '#graphql\n  query GetBooksByListingIds($input: [String!]!) {\n    getBooksByListingIds(ids: $input) {\n      ...BookDownwardsFragment \n    }\n  }\n':
    types.GetBooksByListingIdsDocument,
  '#graphql\nquery GetEditions {\n    getEditions {\n        id\n        name\n    }\n}\n':
    types.GetEditionsDocument,
  '#graphql\n    query GetBookTags {\n        getBookTags {\n            id\n            name\n        }\n    }\n':
    types.GetBookTagsDocument,
  '#graphql\n  query GetMyOwnedPublications {\n    getMyOwnedPublications {\n      ...UserOwnedPublicationFragment\n    }\n  }\n':
    types.GetMyOwnedPublicationsDocument,
  '#graphql\n  query GetMyOwnedPublicationById($publicationId: String!) {\n    getMyOwnedPublicationById(publicationId: $publicationId) {\n      ...UserOwnedPublicationFragment\n    }\n  }\n':
    types.GetMyOwnedPublicationByIdDocument,
  '#graphql\n  query GetMyOwnedPublicationsMinimal {\n      getMyOwnedPublications {\n          publicationId\n          createdAt\n      }\n  }\n':
    types.GetMyOwnedPublicationsMinimalDocument,
  '#graphql\n    mutation SetPercentageRead($publicationId: String!, $percentage: Float!) {\n      setPercentageRead(publicationId: $publicationId, percentage: $percentage) \n    }\n':
    types.SetPercentageReadDocument,
  '#graphql\n  query GetBookGenres {\n      getBookGenres {\n          id\n          name\n          slug\n          description\n      }\n  }\n':
    types.GetBookGenresDocument,
  '#graphql\nquery GetBookGenresWithBooks {\n  getBookGenres {\n    ...BookGenreFragment\n    books {\n      ...BookDownwardsFragment\n    } \n  }\n}\n':
    types.GetBookGenresWithBooksDocument,
  '#graphql\n  query GetBookCompetitionsWithBooks {\n      getBookCompetitions {\n        id\n        name\n        description\n        imageUrl\n        slug\n        books {\n          ...BookDownwardsFragment\n        }\n      }\n  }\n':
    types.GetBookCompetitionsWithBooksDocument,
  '#graphql\n  query GetStatsForCompetition($competitionSlug: String!) {\n      getStatsForCompetition(competitionSlug: $competitionSlug) {\n        leaderboard {\n          bookId\n          bookName\n          assets {\n            ...AssetFragment\n          }\n          authors{\n            ...BookAuthorFragment\n          }\n          publishedAt\n          score\n          position\n        }\n        globalAverageRating\n        weight\n      }\n  }\n':
    types.GetStatsForCompetitionDocument,
  '#graphql\n  query GenerateUploadPresignedUrl($contentType: ContentType!) {\n      generateUploadPresignedUrl(contentType: $contentType) {\n        url\n        key\n      }\n  }\n':
    types.GenerateUploadPresignedUrlDocument,
  '#graphql\n  query GenerateDownloadPresignedUrl($key: String!) {\n      generateDownloadPresignedUrl(key: $key)\n  }\n':
    types.GenerateDownloadPresignedUrlDocument,
  '#graphql\n  mutation AddFreeBookToLibrary($publicationId: String!) {\n    addFreeBookToLibrary(publicationId: $publicationId) \n  }\n':
    types.AddFreeBookToLibraryDocument,
  '#graphql\n  mutation AddPublicationListingsToBasket($input: [BasketItemInput!]!) {\n    addPublicationListingsToBasket(items:  $input) {\n      ...BasketFragment\n    }\n  }\n':
    types.AddPublicationListingsToBasketDocument,
  '#graphql\n  mutation RemovePublicationListingFromBasket($input: String!) {\n    removePublicationListingFromBasket(publicationListingId: $input) {\n      ...BasketFragment\n    }\n  }\n':
    types.RemovePublicationListingFromBasketDocument,
  '#graphql\n  mutation UpdatePublicationListingFromBasket($listingId: String!, $quantity: Float!) {\n    updatePublicationListingFromBasket(publicationListingId: $listingId, quantity: $quantity) {\n      ...BasketFragment\n    }\n  }\n':
    types.UpdatePublicationListingFromBasketDocument,
  '#graphql\n  query GetMyBasket { \n    getMyBasket {\n      ...BasketFragment\n    }\n  }\n':
    types.GetMyBasketDocument,
  '#graphql\n  mutation CreateCharacter($input: CharacterInput!) {\n    createCharacter(input: $input) {\n      id\n    }\n  }\n':
    types.CreateCharacterDocument,
  '#graphql\n  mutation UpdateCharacter($input: UpdateCharacterInput!) {\n    updateCharacter(input: $input) {\n      id\n    }\n  }\n':
    types.UpdateCharacterDocument,
  '#graphql\n  mutation DeleteCharacter($id: String!) {\n    deleteCharacter(id: $id)\n  }\n':
    types.DeleteCharacterDocument,
  '#graphql\n  mutation CreateCharacterRelation($input: CreateRelationsInput!) {\n    createCharacterRelation(input: $input) \n  }\n':
    types.CreateCharacterRelationDocument,
  '#graphql\n  mutation DeleteCharacterRelation($relationId: String!) {\n    deleteCharacterRelation(relationId: $relationId) \n  }\n':
    types.DeleteCharacterRelationDocument,
  '#graphql\n  mutation UpdateCharacterMetadata($input: UpdateCharacterMetadataInput!) {\n    updateCharactersMetadata(input: $input)\n  }\n':
    types.UpdateCharacterMetadataDocument,
  '#graphql\n  query GetManuscriptCharacters($manuscriptId: String!) {\n    getManuscriptCharacters(manuscriptId: $manuscriptId) {\n      id\n      name\n      description\n      age\n      race\n      species\n      gender\n      personalityTraits\n      origin\n      role\n      isDead\n      physicalAppearance\n      relations {\n        id\n        type\n        fromCharacter {\n          id\n          name\n        }\n        toCharacter {\n          id\n          name\n        }\n      }\n      connectedWith {\n        id\n        type\n        fromCharacter {\n          id\n          name\n        }\n        toCharacter {\n          id\n          name\n        }\n      }\n      additionalFields \n      metadata\n    }\n  }\n':
    types.GetManuscriptCharactersDocument,
  '#graphql\n  query GetCountries($input: Boolean!) {\n    countries (isStripeConnectedAccountSupported: $input) {\n      id\n      name\n      iso\n    }\n  }\n':
    types.GetCountriesDocument,
  '#graphql\n    mutation CreateOrder {\n      createOrder\n    }\n  ':
    types.CreateOrderDocument,
  '#graphql\n  mutation CreateHelioOrder {\n    createHelioOrder\n  }\n':
    types.CreateHelioOrderDocument,
  '#graphql\n  mutation CreateBuyNowOrder($publicationListingId: String!) {\n    createBuyNowOrder(publicationListingId: $publicationListingId)\n  }\n':
    types.CreateBuyNowOrderDocument,
  '#graphql\n  mutation CreateHelioBuyNowOrder($publicationListingId: String!) {\n    createHelioBuyNowOrder(publicationListingId: $publicationListingId)\n  }\n':
    types.CreateHelioBuyNowOrderDocument,
  '#graphql\n  query AccountSessionSecret {\n    accountSessionSecret\n  }\n':
    types.AccountSessionSecretDocument,
  '#graphql\n  fragment AssetFragment on Asset {\n    id\n    key\n    type\n  }\n':
    types.AssetFragmentFragmentDoc,
  '#graphql\n  fragment BasketFragment on Basket {\n    items {\n      publicationListingId\n      quantity\n      publicationsListing {\n        priceInCents\n        publication {\n          ...PublicationUpwardsFragment\n        }\n      }\n    }\n  }\n':
    types.BasketFragmentFragmentDoc,
  '#graphql\n  fragment BookAuthorFragment on BookAuthor {\n    id\n    name\n    bannerImageUrl\n    avatarImageUrl\n    bio\n    slug {\n      id\n      name\n    }\n  }\n':
    types.BookAuthorFragmentFragmentDoc,
  '#graphql\n  fragment BookEditionDownwardsFragment on BookEdition {\n    id\n    description\n    edition {\n      id\n      name\n    }\n    language {\n        id\n        name\n    }\n    authors {\n        ...BookAuthorFragment\n    }\n    publications{\n        ...PublicationDownwardsFragment\n    }\n  }\n':
    types.BookEditionDownwardsFragmentFragmentDoc,
  '#graphql\n  fragment BookEditionUpwardsFragment on BookEdition {\n    ...BookEditionDownwardsFragment\n    book {\n      ...BookUpwardsFragment\n    }\n  }\n':
    types.BookEditionUpwardsFragmentFragmentDoc,
  '#graphql\n  fragment BookGenreFragment on BookGenre {\n    id\n    name\n    description\n    slug\n  }\n':
    types.BookGenreFragmentFragmentDoc,
  '#graphql\n  fragment BookLicenseFragment on BookLicense {\n    id\n    title\n    description\n    priceInCents\n    manuscriptAssetKey\n    coverAssetKey\n    assets {\n      ...AssetFragment\n    }\n    btcInscriptionStatus \n    btcInscriptionId\n    createdAt\n    updatedAt\n    genres {\n      id\n      name\n    }\n    authors {\n      id\n      name\n    }\n    orders {\n      id\n      status\n      solanaPNftAddress\n      solanaPNftTxSignature\n      postPaymentTxSignature\n      signedTemplateIpfsCid\n    }\n    isForCommercialUse\n    typeOfRights\n    isbn\n    metadata {\n      id\n      hash\n      pages\n      tokens\n    }\n    \n  }\n':
    types.BookLicenseFragmentFragmentDoc,
  '#graphql\n  fragment BookDownwardsFragment on Book {\n    title\n    genres {\n      ...BookGenreFragment\n    }\n    editions {\n      ...BookEditionDownwardsFragment\n    }\n  }\n':
    types.BookDownwardsFragmentFragmentDoc,
  '#graphql\n  fragment BookUpwardsFragment on Book {\n    ...BookDownwardsFragment\n    title\n  }\n':
    types.BookUpwardsFragmentFragmentDoc,
  '#graphql\n  fragment ManuscriptAssetFragment on ManuscriptAssetEntity {\n    id\n    key\n    type\n  }\n':
    types.ManuscriptAssetFragmentFragmentDoc,
  '#graphql\n  fragment ManuscriptPublishingAssetFragment on ManuscriptPublishingAsset {\n    id\n    key\n    type\n  }\n':
    types.ManuscriptPublishingAssetFragmentFragmentDoc,
  '#graphql\n  fragment ManuscriptPublishingAuthorFragment on ManuscriptPublishingAuthor {\n    id\n    bookAuthor {\n      id\n      userId\n      name\n      avatarImageUrl\n      bannerImageUrl\n       slug {\n          id\n          name\n        }\n    }\n    percentage\n  }\n':
    types.ManuscriptPublishingAuthorFragmentFragmentDoc,
  '#graphql\n  fragment ManuscriptPublishingFragment on ManuscriptPublishing {\n    id\n    priceInCents\n    status\n    format\n    createdAt\n    description\n    settings {\n      paperSize {\n        id\n        name\n      }\n    }\n    printSettings {\n      textStock{\n        id\n        name\n      }\n      lamination {\n        id\n        name\n      }\n      hasColorPages\n    }\n    manuscript {\n      title\n    }\n    competitionId\n    edition {\n      id\n      name\n    }\n    manuscriptPublishingAuthors {\n      ...ManuscriptPublishingAuthorFragment\n    }\n    assets {\n      ...ManuscriptPublishingAssetFragment\n    }\n    rejection {\n      reason\n    }\n  }\n':
    types.ManuscriptPublishingFragmentFragmentDoc,
  '#graphql\n  fragment OrderFragment on Order {\n    id\n    status\n    type\n    orderItems {\n      quantity\n    }\n    createdAt\n    totalInCents\n  }\n':
    types.OrderFragmentFragmentDoc,
  '#graphql\n  fragment ProfileFragment on Profile {\n    userId\n    email\n    unverifiedEmail\n    firstName\n    lastName\n    description\n    createdAt\n    birthday\n    gender\n    viewMode \n    slug {\n      name\n    }\n    country {\n      id\n    }\n    avatarImageUrl\n    bannerImageUrl\n  }\n':
    types.ProfileFragmentFragmentDoc,
  '#graphql\n  fragment PublicationListingFragment on PublicationListing {\n    id\n    createdAt\n    priceInCents\n    quantity\n  }\n':
    types.PublicationListingFragmentFragmentDoc,
  '#graphql\n  fragment PublicationDownwardsFragment on Publication {\n    id\n    publishedAt\n    pagesCount\n    format \n    assets {\n        ...AssetFragment\n    }\n    listings {\n        ...PublicationListingFragment\n    }\n    epubMetadata {\n      locations\n    }\n  }\n':
    types.PublicationDownwardsFragmentFragmentDoc,
  '#graphql\n  fragment PublicationUpwardsFragment on Publication {\n    ...PublicationDownwardsFragment\n    bookEdition {\n      ...BookEditionUpwardsFragment\n    }\n  }\n':
    types.PublicationUpwardsFragmentFragmentDoc,
  '#graphql\n  fragment UserOwnedPublicationFragment on UserOwnedPublication {\n    id\n    lastReadAt\n    status\n    source\n    createdAt\n    publication{\n      ...PublicationUpwardsFragment\n    }\n    stats {\n      percentageRead\n    }\n  }\n':
    types.UserOwnedPublicationFragmentFragmentDoc,
  '#graphql\n  fragment UserFragment on User {\n    id\n    username\n    userPaymentDetails {\n     stripeConnectedAccountId\n    }\n    profile {\n     ...ProfileFragment\n    }\n    oauthProviders {\n      name\n    }\n    wallets {\n      address\n      isCustodial\n    }\n  }\n':
    types.UserFragmentFragmentDoc,
  '#graphql\n  mutation CreatePublishingDraft($input: CreatePublishingDraftInput!) {\n    createPublishingDraft(input: $input) {\n      ...ManuscriptPublishingFragment\n    }\n  }\n':
    types.CreatePublishingDraftDocument,
  '#graphql\n  mutation UpdatePublishingDraft($input: UpdatePublishingDraftInput!) {\n    updatePublishingDraft(input: $input) {\n      ...ManuscriptPublishingFragment\n    }\n  }\n':
    types.UpdatePublishingDraftDocument,
  '#graphql\n  mutation UpdatePublishingCover($input: UpdatePublishingCoverInput!) {\n    updatePublishingCover(input: $input) \n  }\n':
    types.UpdatePublishingCoverDocument,
  '#graphql\n  mutation CreateManuscript($input: CreateManuscriptInput!) {\n    createManuscript(createManuscriptInput:  $input) {\n      id\n    }\n  }\n':
    types.CreateManuscriptDocument,
  '#graphql\nmutation UpdateManuscript($input: UpdateManuscriptInput!) {\n    updateManuscript(updateManuscriptInput:  $input) {\n        id\n    }\n}\n':
    types.UpdateManuscriptDocument,
  '#graphql\n  mutation AssignIsbn($input: AssignIsbnInput!) {\n      assignIsbn(input: $input) \n  }\n':
    types.AssignIsbnDocument,
  '#graphql\n  mutation ApproveManuscriptPublishing($input: ApprovePublishingInput!) {\n      approveManuscriptPublishing(input: $input) \n  }\n':
    types.ApproveManuscriptPublishingDocument,
  '#graphql\n  mutation RejectManuscriptPublishing($input: RejectPublishingInput!) {\n      rejectManuscriptPublishing(input: $input) \n  }\n':
    types.RejectManuscriptPublishingDocument,
  '#graphql\n  mutation SubmitPublishingDraftForApproval($input: SubmitPublishingDraftInput!) {\n    submitPublishingDraftForApproval(input: $input) {\n      id\n    }\n  }\n':
    types.SubmitPublishingDraftForApprovalDocument,
  '#graphql\n  mutation UpdateManuScriptSettings($input: UpdateManuscriptSettingsInput!) {\n    updateManuscriptSettings(settings: $input) \n  }\n':
    types.UpdateManuScriptSettingsDocument,
  '#graphql\n  query GetManuscriptPublishingAssetMetadata($manuscriptPublishingId: String!) {\n    getManuscriptPublishingAssetMetadata(manuscriptPublishingId: $manuscriptPublishingId) {\n      pageCount\n      colorPageCount\n    } \n  }\n':
    types.GetManuscriptPublishingAssetMetadataDocument,
  '#graphql\n  query CalculatePrintingCostAndCoverSize($input: CalculatePrintingCostAndCoverSizesInput!) {\n    calculatePrintingCostAndCoverSize(input: $input) {\n      printingCost\n      coverSize {\n        width\n        height\n      }\n    } \n  }\n':
    types.CalculatePrintingCostAndCoverSizeDocument,
  '#graphql\n  mutation RemoveManuscript($input: String!) {\n    removeManuscript(id: $input) \n  }\n':
    types.RemoveManuscriptDocument,
  '#graphql\n  query GetPrintLamination {\n    getPrintLamination {\n      id\n      name\n    }\n  }\n':
    types.GetPrintLaminationDocument,
  '#graphql\n  query GetManuscriptPublishingAssetDownloadUrl( $input: String!) {\n    getManuscriptPublishingAssetDownloadUrl(assetId: $input)\n  }\n':
    types.GetManuscriptPublishingAssetDownloadUrlDocument,
  '#graphql\n  query GetManuscriptFonts {\n    getManuscriptFonts {\n      id\n      name\n    }\n  }\n':
    types.GetManuscriptFontsDocument,
  '#graphql\n  query GetManuscriptTextStocks  {\n    getManuscriptTextStocks {\n      id\n      name\n    }\n  }\n':
    types.GetManuscriptTextStocksDocument,
  '#graphql\n  query GetManuscriptPublishings($manuscriptId: String!) {\n    getManuscriptPublishings(manuscriptId: $manuscriptId) {\n      id\n      createdAt\n      format\n      status\n      rejection {\n        id\n        reason\n      }\n      edition {\n        id\n        name\n      }\n    }\n  }\n':
    types.GetManuscriptPublishingsDocument,
  '#graphql\n  query GetManuscriptPublishingsAdmin($manuscriptId: String!) {\n    getManuscriptPublishings(manuscriptId: $manuscriptId) {\n      ...ManuscriptPublishingFragment\n    }\n  }\n':
    types.GetManuscriptPublishingsAdminDocument,
  '#graphql\n  query GetManuscriptPaperSizes {\n    getManuscriptPaperSizes {\n      id\n      name\n      width\n      height\n      unit\n    }\n  }\n':
    types.GetManuscriptPaperSizesDocument,
  '#graphql\n  query GetManuscriptsSummary($input: ManuscriptsSummaryInput!) {\n    getManuscriptsSummary(input: $input) {\n      count\n      items {\n        id\n        title\n        pricesInCents\n        formats\n      }\n    }\n  }\n':
    types.GetManuscriptsSummaryDocument,
  '#graphql\n  query GetManuscriptPublishingById($manuscriptPublishingId: String!) {\n    getManuscriptPublishingById(manuscriptPublishingId: $manuscriptPublishingId) {\n     ...ManuscriptPublishingFragment\n    }\n  }\n':
    types.GetManuscriptPublishingByIdDocument,
  '#graphql\n  query ValidatePdfPageSize($input: ValidatePdfInput!) {\n    validatePdfPageSize(input: $input) \n  }\n':
    types.ValidatePdfPageSizeDocument,
  '#graphql\n  query ValidateBookCoverPdfPageSize($pdfKey: String!, $publishingId: String!) {\n    validateBookCoverPdfPageSize(pdfKey: $pdfKey, publishingId: $publishingId) \n  }\n':
    types.ValidateBookCoverPdfPageSizeDocument,
  '#graphql\n  query GetManuscriptAuthors($input: String) {\n    getManuscriptAuthors(manuscriptId: $input) {\n      userId\n      authorsIdentities{\n       ...BookAuthorFragment\n      }\n    }\n  }\n':
    types.GetManuscriptAuthorsDocument,
  '#graphql\n  query GetManuscriptById($input: String!) {\n    getManuscriptById(id: $input) {\n      id\n      title\n      origin\n      genres{\n        id\n        name\n      }\n      tags {\n        id\n        name\n      }\n      assets {\n        ...ManuscriptAssetFragment\n      }\n      settings {\n        font {\n          id\n        }\n        hasDropcaps\n        sectionTitleAlignment\n        sectionTitleStyle\n        ornamentalBreak\n        addPageNumber\n        pageNumberAlignment\n      }\n      collaborators {\n        userId\n        role\n        user {\n          ...UserFragment\n        }\n      }\n      publishing {\n          edition {\n              id\n              name\n          }\n          description\n          competitionId\n        priceInCents\n        manuscriptPublishingAuthors {\n          ...ManuscriptPublishingAuthorFragment\n        }\n      }  \n    }\n  }\n':
    types.GetManuscriptByIdDocument,
  '#graphql\n  query GetMyManuscriptsCount {\n    getMyManuscriptsCount {\n      internalCount\n      externalCount\n    }\n  }\n':
    types.GetMyManuscriptsCountDocument,
  '#graphql\n  query GetMyManuscripts($input: PaginationParamsDto, $origin: ManuscriptOriginType){\n    getMyManuscripts(paginationParamsDto: $input, origin: $origin) {\n      items{\n        id\n        title\n        createdAt\n        origin \n        assets {\n          ...ManuscriptAssetFragment\n        }\n        genres {\n          id\n        }\n        collaborators {\n          user { \n            ...UserFragment\n          }\n        }\n        publishing {\n          description\n          priceInCents\n          format\n          assets {\n            id\n            key\n            type\n          }\n          manuscriptPublishingAuthors {\n            bookAuthorId\n          }\n          edition {\n            id\n          }\n          rejection {\n            reason\n          }\n          competitionId\n        }\n      }\n      count\n    }\n  }\n':
    types.GetMyManuscriptsDocument,
  '#graphql\nquery PreviewManuscriptEpub($manuscriptId: String!) {\n  previewManuscriptEpub(manuscriptId: $manuscriptId)\n}\n':
    types.PreviewManuscriptEpubDocument,
  '#graphql\n  query GetOrders($input: PaginationParamsDto!) {\n    getOrders(pagination: $input) {\n      count\n      items {\n        ...OrderFragment\n      }\n    }\n  }\n':
    types.GetOrdersDocument,
  '#graphql\n    query GetOrder($input: String!) {\n      getOrder(orderId: $input) {\n       id\n       orderItems {\n        id\n        productPriceInCents\n        totalPriceInCents\n        quantity\n        publicationListing {\n          publication {\n            ...PublicationUpwardsFragment\n          }\n        }\n       }\n       orderHistories {\n        id\n        previousStatus\n        newStatus\n       }\n       createdAt\n       subTotalInCents\n       taxInCents\n       totalInCents\n       status\n       type\n      }\n    }\n  ':
    types.GetOrderDocument,
  '\n  query getCurrentUser {\n    currentUser {\n      ...UserFragment\n    }\n  }\n':
    types.GetCurrentUserDocument,
  '\n    query getAvailableUsername($input: AvailableUsernameInput!) {\n        getAvailableUsername(availableUsernameInput: $input) \n    }\n':
    types.GetAvailableUsernameDocument,
  '\n    query isSlugAvailable($input: String!) {\n        isSlugAvailable(slug: $input) \n    }\n':
    types.IsSlugAvailableDocument,
  '\n  mutation UpdateProfile($input: UpdateProfileInput!) {\n    updateProfile(updateProfileInput: $input) {\n      ...ProfileFragment\n    }\n  }\n':
    types.UpdateProfileDocument,
  '\n  mutation UpdateProfileViewMode($input: UpdateProfileViewModeInput!) {\n    updateProfileViewMode(updateProfileViewModeInput: $input) {\n     viewMode\n    }\n  }\n':
    types.UpdateProfileViewModeDocument,
  '\n  mutation SetPassword($input: SetUserPasswordInput!) {\n    setUserPassword(setUserPasswordInput: $input) {\n      id\n    }\n  }\n':
    types.SetPasswordDocument,
  '\n  mutation VerifyProfile($input: VerifyProfileInput!) {\n    verifyProfile(verifyProfileInput: $input) {\n      access_token\n      id_token\n      refresh_token\n      expires_at\n    }\n  }\n':
    types.VerifyProfileDocument,
  '#graphql\n  query AccountOnboarded {\n    accountOnboarded\n  }\n':
    types.AccountOnboardedDocument,
  '#graphql\n  mutation TransferAvailableBalance {\n    transferAvailableBalance\n  }\n':
    types.TransferAvailableBalanceDocument,
  '#graphql\n  mutation CreateConnectedAccount($input: String!) {\n    createConnectedAccount(countryIso: $input)\n  }\n':
    types.CreateConnectedAccountDocument,
  '#graphql\n  query getAccountBalance {\n    getAccountBalance {\n      availableFiatBalance {\n        value\n        currency\n      }\n      pendingFiatBalanceInCents\n      availableCryptoBalanceInCents\n      pendingCryptoBalanceInCents\n    }\n  }\n':
    types.GetAccountBalanceDocument,
  '#graphql\n  query bookSales($input: PaginationParamsDto) {\n    booksSales(pagination: $input) {\n     items {\n      bookId\n      book {\n        title\n      }\n      listings {\n        type\n        unitsCompleted {\n          count\n          salesVolumeInFiat\n          salesVolumeInCrypto\n        }\n        unitsPending {\n          count\n          salesVolumeInFiat\n          salesVolumeInCrypto\n        }\n      }\n     }\n      count\n    }\n  }\n':
    types.BookSalesDocument,
  '#graphql\n  query GetSpotlightBookEditions {\n    getSpotlightBookEditions {\n     id\n     book {\n      title\n     }\n     publications{\n      assets {\n        ...AssetFragment\n      }\n     }\n    }\n  }\n':
    types.GetSpotlightBookEditionsDocument,
  '#graphql\n  mutation SetSpotlightBookEditions($input: [String!]!) {\n    setSpotlightBookEditions(editionIds: $input) \n  }\n':
    types.SetSpotlightBookEditionsDocument,
  '#graphql\n  query GetSpotlightAuthors {\n    getSpotlightAuthors {\n     id\n     name\n     slug {\n      name\n     }\n    }\n  }\n':
    types.GetSpotlightAuthorsDocument,
  '#graphql\n  mutation SetSpotlightAuthors($input: [String!]!) {\n    setSpotlightAuthors(authorSlugs: $input) \n  }\n':
    types.SetSpotlightAuthorsDocument,
  '#graphql\n  query GetWritingStreak{\n    getWritingStreak {\n        currentStreak\n        activeDates\n    }\n  }\n':
    types.GetWritingStreakDocument,
  '#graphql\n  query GetStatsByUser($input: GetStatsByUserInput!){ \n    getStatsByUser(GetStatsByUserInput: $input)\n  }\n':
    types.GetStatsByUserDocument,
  '#graphql\n  query GetWalletMessage {\n    walletMessage {\n      statement\n      message\n      nonce\n    }\n  }\n':
    types.GetWalletMessageDocument,
  '\n  mutation SignInLegacyWithWallet($input: WalletSignInLegacyInput!) {\n    signInLegacyWithWallet(walletSignInInput: $input) {\n      access_token\n      refresh_token\n      id_token\n      expires_at \n    } \n  }\n':
    types.SignInLegacyWithWalletDocument,
  '\n  mutation SignInWithWallet($input: WalletSignInInput!) {\n    signInWithWallet(walletSignInInput: $input) {\n      access_token\n      refresh_token\n      id_token\n      expires_at\n    }\n  }\n':
    types.SignInWithWalletDocument,
  '\n  query RefreshTokenForWallet($input: String!) {\n    walletRefreshToken(walletRefreshTokenInput: $input) {\n      access_token\n      id_token\n      expires_at\n    }\n  }\n':
    types.RefreshTokenForWalletDocument,
  '#graphql\n  query GetWishlistBooks {\n      getWishlistBooks {\n        id\n        title\n        bookEditionId\n        authors {\n          ...BookAuthorFragment\n        }\n        assets {\n          ...AssetFragment\n        }\n      }\n  }\n':
    types.GetWishlistBooksDocument,
  '#graphql\n  query GetWishlistBookIds {\n      getWishlistBooks {\n          id\n      }\n  }\n':
    types.GetWishlistBookIdsDocument,
  '#graphql\n  mutation AddToWishlist($input: String!) {\n      addToWishlist(bookId: $input) \n  }\n':
    types.AddToWishlistDocument,
  '#graphql\n  mutation RemoveFromWishlist($input: String!) {\n      removeFromWishlist(bookId: $input) {\n          id\n      }\n  }\n':
    types.RemoveFromWishlistDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetCollaboratorsByManuscriptId($input: String!) {\n    getCollaboratorsByManuscriptId(manuscriptId: $input) {\n      createdAt\n      userId\n      role\n      user {\n        ...UserFragment\n      }\n    }\n\n    getCollaboratorInvitationsByManuscriptId(manuscriptId: $input) {\n      email\n      role\n     }\n  }\n',
): (typeof documents)['#graphql\n  query GetCollaboratorsByManuscriptId($input: String!) {\n    getCollaboratorsByManuscriptId(manuscriptId: $input) {\n      createdAt\n      userId\n      role\n      user {\n        ...UserFragment\n      }\n    }\n\n    getCollaboratorInvitationsByManuscriptId(manuscriptId: $input) {\n      email\n      role\n     }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation InviteCollaborator($input: InviteCollaboratorInput!) {\n    inviteCollaborator(inviteCollaboratorInput: $input) \n  }\n',
): (typeof documents)['#graphql\n  mutation InviteCollaborator($input: InviteCollaboratorInput!) {\n    inviteCollaborator(inviteCollaboratorInput: $input) \n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation UpdateCollaborator($input: UpdateCollaboratorInput!) {\n    updateCollaborator(UpdateCollaboratorInput: $input) \n  }\n',
): (typeof documents)['#graphql\n  mutation UpdateCollaborator($input: UpdateCollaboratorInput!) {\n    updateCollaborator(UpdateCollaboratorInput: $input) \n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation RemoveCollaborator($input: RemoveCollaboratorInput!) {\n    removeCollaborator(removeCollaboratorInput: $input) \n  }\n',
): (typeof documents)['#graphql\n  mutation RemoveCollaborator($input: RemoveCollaboratorInput!) {\n    removeCollaborator(removeCollaboratorInput: $input) \n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetVersions($manuscriptId: String!, $paginationParamsDto: PaginationParamsDto) {\n    getVersions(manuscriptId: $manuscriptId, paginationParamsDto: $paginationParamsDto) {\n      count\n      items {\n        timestamp\n        id\n        participants\n      }\n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetVersions($manuscriptId: String!, $paginationParamsDto: PaginationParamsDto) {\n    getVersions(manuscriptId: $manuscriptId, paginationParamsDto: $paginationParamsDto) {\n      count\n      items {\n        timestamp\n        id\n        participants\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation RestoreVersion($manuscriptId: String!, $documentHistoryId: String!) {\n    restoreVersion(manuscriptId: $manuscriptId, documentHistoryId: $documentHistoryId) \n  }\n',
): (typeof documents)['#graphql\n  mutation RestoreVersion($manuscriptId: String!, $documentHistoryId: String!) {\n    restoreVersion(manuscriptId: $manuscriptId, documentHistoryId: $documentHistoryId) \n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetAuthor($slug: String!) {\n    getBookAuthor(slug: $slug) {\n      ...BookAuthorFragment\n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetAuthor($slug: String!) {\n    getBookAuthor(slug: $slug) {\n      ...BookAuthorFragment\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetAuthorById($id: String!) {\n    getBookAuthorById(id: $id) {\n      slug {\n        name\n      }\n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetAuthorById($id: String!) {\n    getBookAuthorById(id: $id) {\n      slug {\n        name\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation CreateBookAuthor($input: CreateAuthorInput!) {\n    createBookAuthor(input: $input) {\n      ...BookAuthorFragment\n    }\n  }\n',
): (typeof documents)['#graphql\n  mutation CreateBookAuthor($input: CreateAuthorInput!) {\n    createBookAuthor(input: $input) {\n      ...BookAuthorFragment\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation UpdateBookAuthor($input: UpdateAuthorInput!) {\n    updateBookAuthor(input: $input) {\n      ...BookAuthorFragment\n    }\n  }\n',
): (typeof documents)['#graphql\n  mutation UpdateBookAuthor($input: UpdateAuthorInput!) {\n    updateBookAuthor(input: $input) {\n      ...BookAuthorFragment\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query getPenBookAuthors {\n    getPenBookAuthors {\n      ...BookAuthorFragment\n    }\n  }\n',
): (typeof documents)['#graphql\n  query getPenBookAuthors {\n    getPenBookAuthors {\n      ...BookAuthorFragment\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetBestSellerBookEditions {\n    getBestSellerBookEditions {\n     id\n     name\n     slug\n     editions {\n      ...BookEditionUpwardsFragment\n     }\n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetBestSellerBookEditions {\n    getBestSellerBookEditions {\n     id\n     name\n     slug\n     editions {\n      ...BookEditionUpwardsFragment\n     }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation SetBestSellerBookEditions($input: [BestSellerCategoryBookEditionInput!]!) {\n    setBestSellerBookEditions(input: $input) \n  }\n',
): (typeof documents)['#graphql\n  mutation SetBestSellerBookEditions($input: [BestSellerCategoryBookEditionInput!]!) {\n    setBestSellerBookEditions(input: $input) \n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation CreateBookLicense($input: CreateBookLicenseInput!) {\n    createBookLicense(input: $input) {\n      id\n    }\n  }\n',
): (typeof documents)['#graphql\n  mutation CreateBookLicense($input: CreateBookLicenseInput!) {\n    createBookLicense(input: $input) {\n      id\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetBookLicenses($pagination: PaginationParamsDto!, $excludeLicenseId: String) {\n    getBookLicenses(pagination: $pagination, excludeLicenseId: $excludeLicenseId) {\n      count\n      items {\n        ...BookLicenseFragment\n      }\n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetBookLicenses($pagination: PaginationParamsDto!, $excludeLicenseId: String) {\n    getBookLicenses(pagination: $pagination, excludeLicenseId: $excludeLicenseId) {\n      count\n      items {\n        ...BookLicenseFragment\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetBookLicenseById($id: String!) {\n    getBookLicenseById(id: $id) {\n      ...BookLicenseFragment\n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetBookLicenseById($id: String!) {\n    getBookLicenseById(id: $id) {\n      ...BookLicenseFragment\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation CreateHelioLicensePayment($licenseId: String!) {\n    createHelioLicensePayment(licenseId: $licenseId) \n  }\n',
): (typeof documents)['#graphql\n  mutation CreateHelioLicensePayment($licenseId: String!) {\n    createHelioLicensePayment(licenseId: $licenseId) \n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetPurchasedBookLicenses {\n    getPurchasedBookLicenses {\n      ...BookLicenseFragment\n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetPurchasedBookLicenses {\n    getPurchasedBookLicenses {\n      ...BookLicenseFragment\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetMyBookLicenses {\n    getMyBookLicenses {\n      ...BookLicenseFragment\n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetMyBookLicenses {\n    getMyBookLicenses {\n      ...BookLicenseFragment\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetBookLicenseByIds($ids: [String!]!) {\n    getBookLicenseByIds(ids: $ids) {\n      ...BookLicenseFragment\n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetBookLicenseByIds($ids: [String!]!) {\n    getBookLicenseByIds(ids: $ids) {\n      ...BookLicenseFragment\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetBookLicenseOrderById($orderId: String!) {\n    getBookLicenseOrderById(orderId: $orderId) {\n      id\n      status\n      solanaPNftAddress\n      solanaPNftTxSignature\n      postPaymentTxSignature\n      signedTemplateIpfsCid\n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetBookLicenseOrderById($orderId: String!) {\n    getBookLicenseOrderById(orderId: $orderId) {\n      id\n      status\n      solanaPNftAddress\n      solanaPNftTxSignature\n      postPaymentTxSignature\n      signedTemplateIpfsCid\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetBookLicenseManuscriptUrl($bookLicenseId: String!) {\n    getBookLicenseManuscriptUrl(bookLicenseId: $bookLicenseId)\n  }\n',
): (typeof documents)['#graphql\n  query GetBookLicenseManuscriptUrl($bookLicenseId: String!) {\n    getBookLicenseManuscriptUrl(bookLicenseId: $bookLicenseId)\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetBookLicenseSales($bookLicenseId: String!) {\n    getBookLicenseSales(bookLicenseId: $bookLicenseId) {\n      volume\n      orders {\n        id\n        solanaPNftAddress\n        postPaymentTxSignature\n        signedTemplateIpfsCid\n        createdAt\n      }\n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetBookLicenseSales($bookLicenseId: String!) {\n    getBookLicenseSales(bookLicenseId: $bookLicenseId) {\n      volume\n      orders {\n        id\n        solanaPNftAddress\n        postPaymentTxSignature\n        signedTemplateIpfsCid\n        createdAt\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetBookEditionRating($input: String!) {\n    getBookEditionRating(bookEditionId: $input) {\n      count\n      averageRating\n      ratingCounts\n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetBookEditionRating($input: String!) {\n    getBookEditionRating(bookEditionId: $input) {\n      count\n      averageRating\n      ratingCounts\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetUserBookReview($input: String!) {\n    getUserBookEditionReview(bookEditionId: $input) {\n      id\n      status\n      body\n      rating\n      rejectionReason\n      createdAt\n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetUserBookReview($input: String!) {\n    getUserBookEditionReview(bookEditionId: $input) {\n      id\n      status\n      body\n      rating\n      rejectionReason\n      createdAt\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetBookEditionReviews($input: String!, $pagination: PaginationParamsDto) {\n    getBookReviewsByBookEditionId(bookEditionId: $input, pagination: $pagination) {\n      reviews {\n        id\n        rating\n        body\n        createdAt\n        isVerified\n        user {\n          ...UserFragment\n        }\n      }\n      count\n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetBookEditionReviews($input: String!, $pagination: PaginationParamsDto) {\n    getBookReviewsByBookEditionId(bookEditionId: $input, pagination: $pagination) {\n      reviews {\n        id\n        rating\n        body\n        createdAt\n        isVerified\n        user {\n          ...UserFragment\n        }\n      }\n      count\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetReviews($pagination: PaginationParamsDto) {\n    getReviews( pagination: $pagination) {\n      reviews {\n        id\n        rating\n        body\n        status\n        bookEditionId\n        user {\n          ...UserFragment\n        }\n      }\n      count\n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetReviews($pagination: PaginationParamsDto) {\n    getReviews( pagination: $pagination) {\n      reviews {\n        id\n        rating\n        body\n        status\n        bookEditionId\n        user {\n          ...UserFragment\n        }\n      }\n      count\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation AddReview($input: AddReviewInput!) {\n    addReview(input: $input) {\n      id\n    }\n  }\n',
): (typeof documents)['#graphql\n  mutation AddReview($input: AddReviewInput!) {\n    addReview(input: $input) {\n      id\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation EditReview($input: EditReviewInput!, $reviewId: String!) {\n    editReview(input: $input, reviewId: $reviewId) {\n      id\n    }\n  }\n',
): (typeof documents)['#graphql\n  mutation EditReview($input: EditReviewInput!, $reviewId: String!) {\n    editReview(input: $input, reviewId: $reviewId) {\n      id\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation ApproveReview($reviewId: String!) {\n    approveReview(reviewId: $reviewId) \n  }\n',
): (typeof documents)['#graphql\n  mutation ApproveReview($reviewId: String!) {\n    approveReview(reviewId: $reviewId) \n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation RejectReview($reviewId: String!, $reason: String!) {\n    rejectReview(reviewId: $reviewId, reason: $reason) \n  }\n',
): (typeof documents)['#graphql\n  mutation RejectReview($reviewId: String!, $reason: String!) {\n    rejectReview(reviewId: $reviewId, reason: $reason) \n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetBooksWithSearchCriteria($filter: BookFilterInput, $sort: BookSortInput, $pagination: PaginationParamsDto) {\n    getBooksWithSearchCriteria(filter:  $filter, sort: $sort, pagination: $pagination) {\n      count\n      items {\n        id\n        bookEditionId\n        editionId\n        title\n        minPrice\n        maxPrice\n        assets {\n          ...AssetFragment\n        }\n        authors {\n          ...BookAuthorFragment\n        }\n      }\n    } \n  }\n',
): (typeof documents)['#graphql\n  query GetBooksWithSearchCriteria($filter: BookFilterInput, $sort: BookSortInput, $pagination: PaginationParamsDto) {\n    getBooksWithSearchCriteria(filter:  $filter, sort: $sort, pagination: $pagination) {\n      count\n      items {\n        id\n        bookEditionId\n        editionId\n        title\n        minPrice\n        maxPrice\n        assets {\n          ...AssetFragment\n        }\n        authors {\n          ...BookAuthorFragment\n        }\n      }\n    } \n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetBookByBookEditionId($id: String!) {\n    getBookByBookEditionId(id: $id) {\n      id\n      ...BookDownwardsFragment\n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetBookByBookEditionId($id: String!) {\n    getBookByBookEditionId(id: $id) {\n      id\n      ...BookDownwardsFragment\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetPublicationAsset( $input: GetPublicationAssetInput!) {\n    getPublicationAsset(input: $input)\n  }\n',
): (typeof documents)['#graphql\n  query GetPublicationAsset( $input: GetPublicationAssetInput!) {\n    getPublicationAsset(input: $input)\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetBooksByListingIds($input: [String!]!) {\n    getBooksByListingIds(ids: $input) {\n      ...BookDownwardsFragment \n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetBooksByListingIds($input: [String!]!) {\n    getBooksByListingIds(ids: $input) {\n      ...BookDownwardsFragment \n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\nquery GetEditions {\n    getEditions {\n        id\n        name\n    }\n}\n',
): (typeof documents)['#graphql\nquery GetEditions {\n    getEditions {\n        id\n        name\n    }\n}\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n    query GetBookTags {\n        getBookTags {\n            id\n            name\n        }\n    }\n',
): (typeof documents)['#graphql\n    query GetBookTags {\n        getBookTags {\n            id\n            name\n        }\n    }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetMyOwnedPublications {\n    getMyOwnedPublications {\n      ...UserOwnedPublicationFragment\n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetMyOwnedPublications {\n    getMyOwnedPublications {\n      ...UserOwnedPublicationFragment\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetMyOwnedPublicationById($publicationId: String!) {\n    getMyOwnedPublicationById(publicationId: $publicationId) {\n      ...UserOwnedPublicationFragment\n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetMyOwnedPublicationById($publicationId: String!) {\n    getMyOwnedPublicationById(publicationId: $publicationId) {\n      ...UserOwnedPublicationFragment\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetMyOwnedPublicationsMinimal {\n      getMyOwnedPublications {\n          publicationId\n          createdAt\n      }\n  }\n',
): (typeof documents)['#graphql\n  query GetMyOwnedPublicationsMinimal {\n      getMyOwnedPublications {\n          publicationId\n          createdAt\n      }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n    mutation SetPercentageRead($publicationId: String!, $percentage: Float!) {\n      setPercentageRead(publicationId: $publicationId, percentage: $percentage) \n    }\n',
): (typeof documents)['#graphql\n    mutation SetPercentageRead($publicationId: String!, $percentage: Float!) {\n      setPercentageRead(publicationId: $publicationId, percentage: $percentage) \n    }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetBookGenres {\n      getBookGenres {\n          id\n          name\n          slug\n          description\n      }\n  }\n',
): (typeof documents)['#graphql\n  query GetBookGenres {\n      getBookGenres {\n          id\n          name\n          slug\n          description\n      }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\nquery GetBookGenresWithBooks {\n  getBookGenres {\n    ...BookGenreFragment\n    books {\n      ...BookDownwardsFragment\n    } \n  }\n}\n',
): (typeof documents)['#graphql\nquery GetBookGenresWithBooks {\n  getBookGenres {\n    ...BookGenreFragment\n    books {\n      ...BookDownwardsFragment\n    } \n  }\n}\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetBookCompetitionsWithBooks {\n      getBookCompetitions {\n        id\n        name\n        description\n        imageUrl\n        slug\n        books {\n          ...BookDownwardsFragment\n        }\n      }\n  }\n',
): (typeof documents)['#graphql\n  query GetBookCompetitionsWithBooks {\n      getBookCompetitions {\n        id\n        name\n        description\n        imageUrl\n        slug\n        books {\n          ...BookDownwardsFragment\n        }\n      }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetStatsForCompetition($competitionSlug: String!) {\n      getStatsForCompetition(competitionSlug: $competitionSlug) {\n        leaderboard {\n          bookId\n          bookName\n          assets {\n            ...AssetFragment\n          }\n          authors{\n            ...BookAuthorFragment\n          }\n          publishedAt\n          score\n          position\n        }\n        globalAverageRating\n        weight\n      }\n  }\n',
): (typeof documents)['#graphql\n  query GetStatsForCompetition($competitionSlug: String!) {\n      getStatsForCompetition(competitionSlug: $competitionSlug) {\n        leaderboard {\n          bookId\n          bookName\n          assets {\n            ...AssetFragment\n          }\n          authors{\n            ...BookAuthorFragment\n          }\n          publishedAt\n          score\n          position\n        }\n        globalAverageRating\n        weight\n      }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GenerateUploadPresignedUrl($contentType: ContentType!) {\n      generateUploadPresignedUrl(contentType: $contentType) {\n        url\n        key\n      }\n  }\n',
): (typeof documents)['#graphql\n  query GenerateUploadPresignedUrl($contentType: ContentType!) {\n      generateUploadPresignedUrl(contentType: $contentType) {\n        url\n        key\n      }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GenerateDownloadPresignedUrl($key: String!) {\n      generateDownloadPresignedUrl(key: $key)\n  }\n',
): (typeof documents)['#graphql\n  query GenerateDownloadPresignedUrl($key: String!) {\n      generateDownloadPresignedUrl(key: $key)\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation AddFreeBookToLibrary($publicationId: String!) {\n    addFreeBookToLibrary(publicationId: $publicationId) \n  }\n',
): (typeof documents)['#graphql\n  mutation AddFreeBookToLibrary($publicationId: String!) {\n    addFreeBookToLibrary(publicationId: $publicationId) \n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation AddPublicationListingsToBasket($input: [BasketItemInput!]!) {\n    addPublicationListingsToBasket(items:  $input) {\n      ...BasketFragment\n    }\n  }\n',
): (typeof documents)['#graphql\n  mutation AddPublicationListingsToBasket($input: [BasketItemInput!]!) {\n    addPublicationListingsToBasket(items:  $input) {\n      ...BasketFragment\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation RemovePublicationListingFromBasket($input: String!) {\n    removePublicationListingFromBasket(publicationListingId: $input) {\n      ...BasketFragment\n    }\n  }\n',
): (typeof documents)['#graphql\n  mutation RemovePublicationListingFromBasket($input: String!) {\n    removePublicationListingFromBasket(publicationListingId: $input) {\n      ...BasketFragment\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation UpdatePublicationListingFromBasket($listingId: String!, $quantity: Float!) {\n    updatePublicationListingFromBasket(publicationListingId: $listingId, quantity: $quantity) {\n      ...BasketFragment\n    }\n  }\n',
): (typeof documents)['#graphql\n  mutation UpdatePublicationListingFromBasket($listingId: String!, $quantity: Float!) {\n    updatePublicationListingFromBasket(publicationListingId: $listingId, quantity: $quantity) {\n      ...BasketFragment\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetMyBasket { \n    getMyBasket {\n      ...BasketFragment\n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetMyBasket { \n    getMyBasket {\n      ...BasketFragment\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation CreateCharacter($input: CharacterInput!) {\n    createCharacter(input: $input) {\n      id\n    }\n  }\n',
): (typeof documents)['#graphql\n  mutation CreateCharacter($input: CharacterInput!) {\n    createCharacter(input: $input) {\n      id\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation UpdateCharacter($input: UpdateCharacterInput!) {\n    updateCharacter(input: $input) {\n      id\n    }\n  }\n',
): (typeof documents)['#graphql\n  mutation UpdateCharacter($input: UpdateCharacterInput!) {\n    updateCharacter(input: $input) {\n      id\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation DeleteCharacter($id: String!) {\n    deleteCharacter(id: $id)\n  }\n',
): (typeof documents)['#graphql\n  mutation DeleteCharacter($id: String!) {\n    deleteCharacter(id: $id)\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation CreateCharacterRelation($input: CreateRelationsInput!) {\n    createCharacterRelation(input: $input) \n  }\n',
): (typeof documents)['#graphql\n  mutation CreateCharacterRelation($input: CreateRelationsInput!) {\n    createCharacterRelation(input: $input) \n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation DeleteCharacterRelation($relationId: String!) {\n    deleteCharacterRelation(relationId: $relationId) \n  }\n',
): (typeof documents)['#graphql\n  mutation DeleteCharacterRelation($relationId: String!) {\n    deleteCharacterRelation(relationId: $relationId) \n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation UpdateCharacterMetadata($input: UpdateCharacterMetadataInput!) {\n    updateCharactersMetadata(input: $input)\n  }\n',
): (typeof documents)['#graphql\n  mutation UpdateCharacterMetadata($input: UpdateCharacterMetadataInput!) {\n    updateCharactersMetadata(input: $input)\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetManuscriptCharacters($manuscriptId: String!) {\n    getManuscriptCharacters(manuscriptId: $manuscriptId) {\n      id\n      name\n      description\n      age\n      race\n      species\n      gender\n      personalityTraits\n      origin\n      role\n      isDead\n      physicalAppearance\n      relations {\n        id\n        type\n        fromCharacter {\n          id\n          name\n        }\n        toCharacter {\n          id\n          name\n        }\n      }\n      connectedWith {\n        id\n        type\n        fromCharacter {\n          id\n          name\n        }\n        toCharacter {\n          id\n          name\n        }\n      }\n      additionalFields \n      metadata\n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetManuscriptCharacters($manuscriptId: String!) {\n    getManuscriptCharacters(manuscriptId: $manuscriptId) {\n      id\n      name\n      description\n      age\n      race\n      species\n      gender\n      personalityTraits\n      origin\n      role\n      isDead\n      physicalAppearance\n      relations {\n        id\n        type\n        fromCharacter {\n          id\n          name\n        }\n        toCharacter {\n          id\n          name\n        }\n      }\n      connectedWith {\n        id\n        type\n        fromCharacter {\n          id\n          name\n        }\n        toCharacter {\n          id\n          name\n        }\n      }\n      additionalFields \n      metadata\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetCountries($input: Boolean!) {\n    countries (isStripeConnectedAccountSupported: $input) {\n      id\n      name\n      iso\n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetCountries($input: Boolean!) {\n    countries (isStripeConnectedAccountSupported: $input) {\n      id\n      name\n      iso\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n    mutation CreateOrder {\n      createOrder\n    }\n  ',
): (typeof documents)['#graphql\n    mutation CreateOrder {\n      createOrder\n    }\n  '];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation CreateHelioOrder {\n    createHelioOrder\n  }\n',
): (typeof documents)['#graphql\n  mutation CreateHelioOrder {\n    createHelioOrder\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation CreateBuyNowOrder($publicationListingId: String!) {\n    createBuyNowOrder(publicationListingId: $publicationListingId)\n  }\n',
): (typeof documents)['#graphql\n  mutation CreateBuyNowOrder($publicationListingId: String!) {\n    createBuyNowOrder(publicationListingId: $publicationListingId)\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation CreateHelioBuyNowOrder($publicationListingId: String!) {\n    createHelioBuyNowOrder(publicationListingId: $publicationListingId)\n  }\n',
): (typeof documents)['#graphql\n  mutation CreateHelioBuyNowOrder($publicationListingId: String!) {\n    createHelioBuyNowOrder(publicationListingId: $publicationListingId)\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query AccountSessionSecret {\n    accountSessionSecret\n  }\n',
): (typeof documents)['#graphql\n  query AccountSessionSecret {\n    accountSessionSecret\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  fragment AssetFragment on Asset {\n    id\n    key\n    type\n  }\n',
): (typeof documents)['#graphql\n  fragment AssetFragment on Asset {\n    id\n    key\n    type\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  fragment BasketFragment on Basket {\n    items {\n      publicationListingId\n      quantity\n      publicationsListing {\n        priceInCents\n        publication {\n          ...PublicationUpwardsFragment\n        }\n      }\n    }\n  }\n',
): (typeof documents)['#graphql\n  fragment BasketFragment on Basket {\n    items {\n      publicationListingId\n      quantity\n      publicationsListing {\n        priceInCents\n        publication {\n          ...PublicationUpwardsFragment\n        }\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  fragment BookAuthorFragment on BookAuthor {\n    id\n    name\n    bannerImageUrl\n    avatarImageUrl\n    bio\n    slug {\n      id\n      name\n    }\n  }\n',
): (typeof documents)['#graphql\n  fragment BookAuthorFragment on BookAuthor {\n    id\n    name\n    bannerImageUrl\n    avatarImageUrl\n    bio\n    slug {\n      id\n      name\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  fragment BookEditionDownwardsFragment on BookEdition {\n    id\n    description\n    edition {\n      id\n      name\n    }\n    language {\n        id\n        name\n    }\n    authors {\n        ...BookAuthorFragment\n    }\n    publications{\n        ...PublicationDownwardsFragment\n    }\n  }\n',
): (typeof documents)['#graphql\n  fragment BookEditionDownwardsFragment on BookEdition {\n    id\n    description\n    edition {\n      id\n      name\n    }\n    language {\n        id\n        name\n    }\n    authors {\n        ...BookAuthorFragment\n    }\n    publications{\n        ...PublicationDownwardsFragment\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  fragment BookEditionUpwardsFragment on BookEdition {\n    ...BookEditionDownwardsFragment\n    book {\n      ...BookUpwardsFragment\n    }\n  }\n',
): (typeof documents)['#graphql\n  fragment BookEditionUpwardsFragment on BookEdition {\n    ...BookEditionDownwardsFragment\n    book {\n      ...BookUpwardsFragment\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  fragment BookGenreFragment on BookGenre {\n    id\n    name\n    description\n    slug\n  }\n',
): (typeof documents)['#graphql\n  fragment BookGenreFragment on BookGenre {\n    id\n    name\n    description\n    slug\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  fragment BookLicenseFragment on BookLicense {\n    id\n    title\n    description\n    priceInCents\n    manuscriptAssetKey\n    coverAssetKey\n    assets {\n      ...AssetFragment\n    }\n    btcInscriptionStatus \n    btcInscriptionId\n    createdAt\n    updatedAt\n    genres {\n      id\n      name\n    }\n    authors {\n      id\n      name\n    }\n    orders {\n      id\n      status\n      solanaPNftAddress\n      solanaPNftTxSignature\n      postPaymentTxSignature\n      signedTemplateIpfsCid\n    }\n    isForCommercialUse\n    typeOfRights\n    isbn\n    metadata {\n      id\n      hash\n      pages\n      tokens\n    }\n    \n  }\n',
): (typeof documents)['#graphql\n  fragment BookLicenseFragment on BookLicense {\n    id\n    title\n    description\n    priceInCents\n    manuscriptAssetKey\n    coverAssetKey\n    assets {\n      ...AssetFragment\n    }\n    btcInscriptionStatus \n    btcInscriptionId\n    createdAt\n    updatedAt\n    genres {\n      id\n      name\n    }\n    authors {\n      id\n      name\n    }\n    orders {\n      id\n      status\n      solanaPNftAddress\n      solanaPNftTxSignature\n      postPaymentTxSignature\n      signedTemplateIpfsCid\n    }\n    isForCommercialUse\n    typeOfRights\n    isbn\n    metadata {\n      id\n      hash\n      pages\n      tokens\n    }\n    \n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  fragment BookDownwardsFragment on Book {\n    title\n    genres {\n      ...BookGenreFragment\n    }\n    editions {\n      ...BookEditionDownwardsFragment\n    }\n  }\n',
): (typeof documents)['#graphql\n  fragment BookDownwardsFragment on Book {\n    title\n    genres {\n      ...BookGenreFragment\n    }\n    editions {\n      ...BookEditionDownwardsFragment\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  fragment BookUpwardsFragment on Book {\n    ...BookDownwardsFragment\n    title\n  }\n',
): (typeof documents)['#graphql\n  fragment BookUpwardsFragment on Book {\n    ...BookDownwardsFragment\n    title\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  fragment ManuscriptAssetFragment on ManuscriptAssetEntity {\n    id\n    key\n    type\n  }\n',
): (typeof documents)['#graphql\n  fragment ManuscriptAssetFragment on ManuscriptAssetEntity {\n    id\n    key\n    type\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  fragment ManuscriptPublishingAssetFragment on ManuscriptPublishingAsset {\n    id\n    key\n    type\n  }\n',
): (typeof documents)['#graphql\n  fragment ManuscriptPublishingAssetFragment on ManuscriptPublishingAsset {\n    id\n    key\n    type\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  fragment ManuscriptPublishingAuthorFragment on ManuscriptPublishingAuthor {\n    id\n    bookAuthor {\n      id\n      userId\n      name\n      avatarImageUrl\n      bannerImageUrl\n       slug {\n          id\n          name\n        }\n    }\n    percentage\n  }\n',
): (typeof documents)['#graphql\n  fragment ManuscriptPublishingAuthorFragment on ManuscriptPublishingAuthor {\n    id\n    bookAuthor {\n      id\n      userId\n      name\n      avatarImageUrl\n      bannerImageUrl\n       slug {\n          id\n          name\n        }\n    }\n    percentage\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  fragment ManuscriptPublishingFragment on ManuscriptPublishing {\n    id\n    priceInCents\n    status\n    format\n    createdAt\n    description\n    settings {\n      paperSize {\n        id\n        name\n      }\n    }\n    printSettings {\n      textStock{\n        id\n        name\n      }\n      lamination {\n        id\n        name\n      }\n      hasColorPages\n    }\n    manuscript {\n      title\n    }\n    competitionId\n    edition {\n      id\n      name\n    }\n    manuscriptPublishingAuthors {\n      ...ManuscriptPublishingAuthorFragment\n    }\n    assets {\n      ...ManuscriptPublishingAssetFragment\n    }\n    rejection {\n      reason\n    }\n  }\n',
): (typeof documents)['#graphql\n  fragment ManuscriptPublishingFragment on ManuscriptPublishing {\n    id\n    priceInCents\n    status\n    format\n    createdAt\n    description\n    settings {\n      paperSize {\n        id\n        name\n      }\n    }\n    printSettings {\n      textStock{\n        id\n        name\n      }\n      lamination {\n        id\n        name\n      }\n      hasColorPages\n    }\n    manuscript {\n      title\n    }\n    competitionId\n    edition {\n      id\n      name\n    }\n    manuscriptPublishingAuthors {\n      ...ManuscriptPublishingAuthorFragment\n    }\n    assets {\n      ...ManuscriptPublishingAssetFragment\n    }\n    rejection {\n      reason\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  fragment OrderFragment on Order {\n    id\n    status\n    type\n    orderItems {\n      quantity\n    }\n    createdAt\n    totalInCents\n  }\n',
): (typeof documents)['#graphql\n  fragment OrderFragment on Order {\n    id\n    status\n    type\n    orderItems {\n      quantity\n    }\n    createdAt\n    totalInCents\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  fragment ProfileFragment on Profile {\n    userId\n    email\n    unverifiedEmail\n    firstName\n    lastName\n    description\n    createdAt\n    birthday\n    gender\n    viewMode \n    slug {\n      name\n    }\n    country {\n      id\n    }\n    avatarImageUrl\n    bannerImageUrl\n  }\n',
): (typeof documents)['#graphql\n  fragment ProfileFragment on Profile {\n    userId\n    email\n    unverifiedEmail\n    firstName\n    lastName\n    description\n    createdAt\n    birthday\n    gender\n    viewMode \n    slug {\n      name\n    }\n    country {\n      id\n    }\n    avatarImageUrl\n    bannerImageUrl\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  fragment PublicationListingFragment on PublicationListing {\n    id\n    createdAt\n    priceInCents\n    quantity\n  }\n',
): (typeof documents)['#graphql\n  fragment PublicationListingFragment on PublicationListing {\n    id\n    createdAt\n    priceInCents\n    quantity\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  fragment PublicationDownwardsFragment on Publication {\n    id\n    publishedAt\n    pagesCount\n    format \n    assets {\n        ...AssetFragment\n    }\n    listings {\n        ...PublicationListingFragment\n    }\n    epubMetadata {\n      locations\n    }\n  }\n',
): (typeof documents)['#graphql\n  fragment PublicationDownwardsFragment on Publication {\n    id\n    publishedAt\n    pagesCount\n    format \n    assets {\n        ...AssetFragment\n    }\n    listings {\n        ...PublicationListingFragment\n    }\n    epubMetadata {\n      locations\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  fragment PublicationUpwardsFragment on Publication {\n    ...PublicationDownwardsFragment\n    bookEdition {\n      ...BookEditionUpwardsFragment\n    }\n  }\n',
): (typeof documents)['#graphql\n  fragment PublicationUpwardsFragment on Publication {\n    ...PublicationDownwardsFragment\n    bookEdition {\n      ...BookEditionUpwardsFragment\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  fragment UserOwnedPublicationFragment on UserOwnedPublication {\n    id\n    lastReadAt\n    status\n    source\n    createdAt\n    publication{\n      ...PublicationUpwardsFragment\n    }\n    stats {\n      percentageRead\n    }\n  }\n',
): (typeof documents)['#graphql\n  fragment UserOwnedPublicationFragment on UserOwnedPublication {\n    id\n    lastReadAt\n    status\n    source\n    createdAt\n    publication{\n      ...PublicationUpwardsFragment\n    }\n    stats {\n      percentageRead\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  fragment UserFragment on User {\n    id\n    username\n    userPaymentDetails {\n     stripeConnectedAccountId\n    }\n    profile {\n     ...ProfileFragment\n    }\n    oauthProviders {\n      name\n    }\n    wallets {\n      address\n      isCustodial\n    }\n  }\n',
): (typeof documents)['#graphql\n  fragment UserFragment on User {\n    id\n    username\n    userPaymentDetails {\n     stripeConnectedAccountId\n    }\n    profile {\n     ...ProfileFragment\n    }\n    oauthProviders {\n      name\n    }\n    wallets {\n      address\n      isCustodial\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation CreatePublishingDraft($input: CreatePublishingDraftInput!) {\n    createPublishingDraft(input: $input) {\n      ...ManuscriptPublishingFragment\n    }\n  }\n',
): (typeof documents)['#graphql\n  mutation CreatePublishingDraft($input: CreatePublishingDraftInput!) {\n    createPublishingDraft(input: $input) {\n      ...ManuscriptPublishingFragment\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation UpdatePublishingDraft($input: UpdatePublishingDraftInput!) {\n    updatePublishingDraft(input: $input) {\n      ...ManuscriptPublishingFragment\n    }\n  }\n',
): (typeof documents)['#graphql\n  mutation UpdatePublishingDraft($input: UpdatePublishingDraftInput!) {\n    updatePublishingDraft(input: $input) {\n      ...ManuscriptPublishingFragment\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation UpdatePublishingCover($input: UpdatePublishingCoverInput!) {\n    updatePublishingCover(input: $input) \n  }\n',
): (typeof documents)['#graphql\n  mutation UpdatePublishingCover($input: UpdatePublishingCoverInput!) {\n    updatePublishingCover(input: $input) \n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation CreateManuscript($input: CreateManuscriptInput!) {\n    createManuscript(createManuscriptInput:  $input) {\n      id\n    }\n  }\n',
): (typeof documents)['#graphql\n  mutation CreateManuscript($input: CreateManuscriptInput!) {\n    createManuscript(createManuscriptInput:  $input) {\n      id\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\nmutation UpdateManuscript($input: UpdateManuscriptInput!) {\n    updateManuscript(updateManuscriptInput:  $input) {\n        id\n    }\n}\n',
): (typeof documents)['#graphql\nmutation UpdateManuscript($input: UpdateManuscriptInput!) {\n    updateManuscript(updateManuscriptInput:  $input) {\n        id\n    }\n}\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation AssignIsbn($input: AssignIsbnInput!) {\n      assignIsbn(input: $input) \n  }\n',
): (typeof documents)['#graphql\n  mutation AssignIsbn($input: AssignIsbnInput!) {\n      assignIsbn(input: $input) \n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation ApproveManuscriptPublishing($input: ApprovePublishingInput!) {\n      approveManuscriptPublishing(input: $input) \n  }\n',
): (typeof documents)['#graphql\n  mutation ApproveManuscriptPublishing($input: ApprovePublishingInput!) {\n      approveManuscriptPublishing(input: $input) \n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation RejectManuscriptPublishing($input: RejectPublishingInput!) {\n      rejectManuscriptPublishing(input: $input) \n  }\n',
): (typeof documents)['#graphql\n  mutation RejectManuscriptPublishing($input: RejectPublishingInput!) {\n      rejectManuscriptPublishing(input: $input) \n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation SubmitPublishingDraftForApproval($input: SubmitPublishingDraftInput!) {\n    submitPublishingDraftForApproval(input: $input) {\n      id\n    }\n  }\n',
): (typeof documents)['#graphql\n  mutation SubmitPublishingDraftForApproval($input: SubmitPublishingDraftInput!) {\n    submitPublishingDraftForApproval(input: $input) {\n      id\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation UpdateManuScriptSettings($input: UpdateManuscriptSettingsInput!) {\n    updateManuscriptSettings(settings: $input) \n  }\n',
): (typeof documents)['#graphql\n  mutation UpdateManuScriptSettings($input: UpdateManuscriptSettingsInput!) {\n    updateManuscriptSettings(settings: $input) \n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetManuscriptPublishingAssetMetadata($manuscriptPublishingId: String!) {\n    getManuscriptPublishingAssetMetadata(manuscriptPublishingId: $manuscriptPublishingId) {\n      pageCount\n      colorPageCount\n    } \n  }\n',
): (typeof documents)['#graphql\n  query GetManuscriptPublishingAssetMetadata($manuscriptPublishingId: String!) {\n    getManuscriptPublishingAssetMetadata(manuscriptPublishingId: $manuscriptPublishingId) {\n      pageCount\n      colorPageCount\n    } \n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query CalculatePrintingCostAndCoverSize($input: CalculatePrintingCostAndCoverSizesInput!) {\n    calculatePrintingCostAndCoverSize(input: $input) {\n      printingCost\n      coverSize {\n        width\n        height\n      }\n    } \n  }\n',
): (typeof documents)['#graphql\n  query CalculatePrintingCostAndCoverSize($input: CalculatePrintingCostAndCoverSizesInput!) {\n    calculatePrintingCostAndCoverSize(input: $input) {\n      printingCost\n      coverSize {\n        width\n        height\n      }\n    } \n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation RemoveManuscript($input: String!) {\n    removeManuscript(id: $input) \n  }\n',
): (typeof documents)['#graphql\n  mutation RemoveManuscript($input: String!) {\n    removeManuscript(id: $input) \n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetPrintLamination {\n    getPrintLamination {\n      id\n      name\n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetPrintLamination {\n    getPrintLamination {\n      id\n      name\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetManuscriptPublishingAssetDownloadUrl( $input: String!) {\n    getManuscriptPublishingAssetDownloadUrl(assetId: $input)\n  }\n',
): (typeof documents)['#graphql\n  query GetManuscriptPublishingAssetDownloadUrl( $input: String!) {\n    getManuscriptPublishingAssetDownloadUrl(assetId: $input)\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetManuscriptFonts {\n    getManuscriptFonts {\n      id\n      name\n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetManuscriptFonts {\n    getManuscriptFonts {\n      id\n      name\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetManuscriptTextStocks  {\n    getManuscriptTextStocks {\n      id\n      name\n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetManuscriptTextStocks  {\n    getManuscriptTextStocks {\n      id\n      name\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetManuscriptPublishings($manuscriptId: String!) {\n    getManuscriptPublishings(manuscriptId: $manuscriptId) {\n      id\n      createdAt\n      format\n      status\n      rejection {\n        id\n        reason\n      }\n      edition {\n        id\n        name\n      }\n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetManuscriptPublishings($manuscriptId: String!) {\n    getManuscriptPublishings(manuscriptId: $manuscriptId) {\n      id\n      createdAt\n      format\n      status\n      rejection {\n        id\n        reason\n      }\n      edition {\n        id\n        name\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetManuscriptPublishingsAdmin($manuscriptId: String!) {\n    getManuscriptPublishings(manuscriptId: $manuscriptId) {\n      ...ManuscriptPublishingFragment\n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetManuscriptPublishingsAdmin($manuscriptId: String!) {\n    getManuscriptPublishings(manuscriptId: $manuscriptId) {\n      ...ManuscriptPublishingFragment\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetManuscriptPaperSizes {\n    getManuscriptPaperSizes {\n      id\n      name\n      width\n      height\n      unit\n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetManuscriptPaperSizes {\n    getManuscriptPaperSizes {\n      id\n      name\n      width\n      height\n      unit\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetManuscriptsSummary($input: ManuscriptsSummaryInput!) {\n    getManuscriptsSummary(input: $input) {\n      count\n      items {\n        id\n        title\n        pricesInCents\n        formats\n      }\n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetManuscriptsSummary($input: ManuscriptsSummaryInput!) {\n    getManuscriptsSummary(input: $input) {\n      count\n      items {\n        id\n        title\n        pricesInCents\n        formats\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetManuscriptPublishingById($manuscriptPublishingId: String!) {\n    getManuscriptPublishingById(manuscriptPublishingId: $manuscriptPublishingId) {\n     ...ManuscriptPublishingFragment\n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetManuscriptPublishingById($manuscriptPublishingId: String!) {\n    getManuscriptPublishingById(manuscriptPublishingId: $manuscriptPublishingId) {\n     ...ManuscriptPublishingFragment\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query ValidatePdfPageSize($input: ValidatePdfInput!) {\n    validatePdfPageSize(input: $input) \n  }\n',
): (typeof documents)['#graphql\n  query ValidatePdfPageSize($input: ValidatePdfInput!) {\n    validatePdfPageSize(input: $input) \n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query ValidateBookCoverPdfPageSize($pdfKey: String!, $publishingId: String!) {\n    validateBookCoverPdfPageSize(pdfKey: $pdfKey, publishingId: $publishingId) \n  }\n',
): (typeof documents)['#graphql\n  query ValidateBookCoverPdfPageSize($pdfKey: String!, $publishingId: String!) {\n    validateBookCoverPdfPageSize(pdfKey: $pdfKey, publishingId: $publishingId) \n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetManuscriptAuthors($input: String) {\n    getManuscriptAuthors(manuscriptId: $input) {\n      userId\n      authorsIdentities{\n       ...BookAuthorFragment\n      }\n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetManuscriptAuthors($input: String) {\n    getManuscriptAuthors(manuscriptId: $input) {\n      userId\n      authorsIdentities{\n       ...BookAuthorFragment\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetManuscriptById($input: String!) {\n    getManuscriptById(id: $input) {\n      id\n      title\n      origin\n      genres{\n        id\n        name\n      }\n      tags {\n        id\n        name\n      }\n      assets {\n        ...ManuscriptAssetFragment\n      }\n      settings {\n        font {\n          id\n        }\n        hasDropcaps\n        sectionTitleAlignment\n        sectionTitleStyle\n        ornamentalBreak\n        addPageNumber\n        pageNumberAlignment\n      }\n      collaborators {\n        userId\n        role\n        user {\n          ...UserFragment\n        }\n      }\n      publishing {\n          edition {\n              id\n              name\n          }\n          description\n          competitionId\n        priceInCents\n        manuscriptPublishingAuthors {\n          ...ManuscriptPublishingAuthorFragment\n        }\n      }  \n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetManuscriptById($input: String!) {\n    getManuscriptById(id: $input) {\n      id\n      title\n      origin\n      genres{\n        id\n        name\n      }\n      tags {\n        id\n        name\n      }\n      assets {\n        ...ManuscriptAssetFragment\n      }\n      settings {\n        font {\n          id\n        }\n        hasDropcaps\n        sectionTitleAlignment\n        sectionTitleStyle\n        ornamentalBreak\n        addPageNumber\n        pageNumberAlignment\n      }\n      collaborators {\n        userId\n        role\n        user {\n          ...UserFragment\n        }\n      }\n      publishing {\n          edition {\n              id\n              name\n          }\n          description\n          competitionId\n        priceInCents\n        manuscriptPublishingAuthors {\n          ...ManuscriptPublishingAuthorFragment\n        }\n      }  \n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetMyManuscriptsCount {\n    getMyManuscriptsCount {\n      internalCount\n      externalCount\n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetMyManuscriptsCount {\n    getMyManuscriptsCount {\n      internalCount\n      externalCount\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetMyManuscripts($input: PaginationParamsDto, $origin: ManuscriptOriginType){\n    getMyManuscripts(paginationParamsDto: $input, origin: $origin) {\n      items{\n        id\n        title\n        createdAt\n        origin \n        assets {\n          ...ManuscriptAssetFragment\n        }\n        genres {\n          id\n        }\n        collaborators {\n          user { \n            ...UserFragment\n          }\n        }\n        publishing {\n          description\n          priceInCents\n          format\n          assets {\n            id\n            key\n            type\n          }\n          manuscriptPublishingAuthors {\n            bookAuthorId\n          }\n          edition {\n            id\n          }\n          rejection {\n            reason\n          }\n          competitionId\n        }\n      }\n      count\n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetMyManuscripts($input: PaginationParamsDto, $origin: ManuscriptOriginType){\n    getMyManuscripts(paginationParamsDto: $input, origin: $origin) {\n      items{\n        id\n        title\n        createdAt\n        origin \n        assets {\n          ...ManuscriptAssetFragment\n        }\n        genres {\n          id\n        }\n        collaborators {\n          user { \n            ...UserFragment\n          }\n        }\n        publishing {\n          description\n          priceInCents\n          format\n          assets {\n            id\n            key\n            type\n          }\n          manuscriptPublishingAuthors {\n            bookAuthorId\n          }\n          edition {\n            id\n          }\n          rejection {\n            reason\n          }\n          competitionId\n        }\n      }\n      count\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\nquery PreviewManuscriptEpub($manuscriptId: String!) {\n  previewManuscriptEpub(manuscriptId: $manuscriptId)\n}\n',
): (typeof documents)['#graphql\nquery PreviewManuscriptEpub($manuscriptId: String!) {\n  previewManuscriptEpub(manuscriptId: $manuscriptId)\n}\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetOrders($input: PaginationParamsDto!) {\n    getOrders(pagination: $input) {\n      count\n      items {\n        ...OrderFragment\n      }\n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetOrders($input: PaginationParamsDto!) {\n    getOrders(pagination: $input) {\n      count\n      items {\n        ...OrderFragment\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n    query GetOrder($input: String!) {\n      getOrder(orderId: $input) {\n       id\n       orderItems {\n        id\n        productPriceInCents\n        totalPriceInCents\n        quantity\n        publicationListing {\n          publication {\n            ...PublicationUpwardsFragment\n          }\n        }\n       }\n       orderHistories {\n        id\n        previousStatus\n        newStatus\n       }\n       createdAt\n       subTotalInCents\n       taxInCents\n       totalInCents\n       status\n       type\n      }\n    }\n  ',
): (typeof documents)['#graphql\n    query GetOrder($input: String!) {\n      getOrder(orderId: $input) {\n       id\n       orderItems {\n        id\n        productPriceInCents\n        totalPriceInCents\n        quantity\n        publicationListing {\n          publication {\n            ...PublicationUpwardsFragment\n          }\n        }\n       }\n       orderHistories {\n        id\n        previousStatus\n        newStatus\n       }\n       createdAt\n       subTotalInCents\n       taxInCents\n       totalInCents\n       status\n       type\n      }\n    }\n  '];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query getCurrentUser {\n    currentUser {\n      ...UserFragment\n    }\n  }\n',
): (typeof documents)['\n  query getCurrentUser {\n    currentUser {\n      ...UserFragment\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n    query getAvailableUsername($input: AvailableUsernameInput!) {\n        getAvailableUsername(availableUsernameInput: $input) \n    }\n',
): (typeof documents)['\n    query getAvailableUsername($input: AvailableUsernameInput!) {\n        getAvailableUsername(availableUsernameInput: $input) \n    }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n    query isSlugAvailable($input: String!) {\n        isSlugAvailable(slug: $input) \n    }\n',
): (typeof documents)['\n    query isSlugAvailable($input: String!) {\n        isSlugAvailable(slug: $input) \n    }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  mutation UpdateProfile($input: UpdateProfileInput!) {\n    updateProfile(updateProfileInput: $input) {\n      ...ProfileFragment\n    }\n  }\n',
): (typeof documents)['\n  mutation UpdateProfile($input: UpdateProfileInput!) {\n    updateProfile(updateProfileInput: $input) {\n      ...ProfileFragment\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  mutation UpdateProfileViewMode($input: UpdateProfileViewModeInput!) {\n    updateProfileViewMode(updateProfileViewModeInput: $input) {\n     viewMode\n    }\n  }\n',
): (typeof documents)['\n  mutation UpdateProfileViewMode($input: UpdateProfileViewModeInput!) {\n    updateProfileViewMode(updateProfileViewModeInput: $input) {\n     viewMode\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  mutation SetPassword($input: SetUserPasswordInput!) {\n    setUserPassword(setUserPasswordInput: $input) {\n      id\n    }\n  }\n',
): (typeof documents)['\n  mutation SetPassword($input: SetUserPasswordInput!) {\n    setUserPassword(setUserPasswordInput: $input) {\n      id\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  mutation VerifyProfile($input: VerifyProfileInput!) {\n    verifyProfile(verifyProfileInput: $input) {\n      access_token\n      id_token\n      refresh_token\n      expires_at\n    }\n  }\n',
): (typeof documents)['\n  mutation VerifyProfile($input: VerifyProfileInput!) {\n    verifyProfile(verifyProfileInput: $input) {\n      access_token\n      id_token\n      refresh_token\n      expires_at\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query AccountOnboarded {\n    accountOnboarded\n  }\n',
): (typeof documents)['#graphql\n  query AccountOnboarded {\n    accountOnboarded\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation TransferAvailableBalance {\n    transferAvailableBalance\n  }\n',
): (typeof documents)['#graphql\n  mutation TransferAvailableBalance {\n    transferAvailableBalance\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation CreateConnectedAccount($input: String!) {\n    createConnectedAccount(countryIso: $input)\n  }\n',
): (typeof documents)['#graphql\n  mutation CreateConnectedAccount($input: String!) {\n    createConnectedAccount(countryIso: $input)\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query getAccountBalance {\n    getAccountBalance {\n      availableFiatBalance {\n        value\n        currency\n      }\n      pendingFiatBalanceInCents\n      availableCryptoBalanceInCents\n      pendingCryptoBalanceInCents\n    }\n  }\n',
): (typeof documents)['#graphql\n  query getAccountBalance {\n    getAccountBalance {\n      availableFiatBalance {\n        value\n        currency\n      }\n      pendingFiatBalanceInCents\n      availableCryptoBalanceInCents\n      pendingCryptoBalanceInCents\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query bookSales($input: PaginationParamsDto) {\n    booksSales(pagination: $input) {\n     items {\n      bookId\n      book {\n        title\n      }\n      listings {\n        type\n        unitsCompleted {\n          count\n          salesVolumeInFiat\n          salesVolumeInCrypto\n        }\n        unitsPending {\n          count\n          salesVolumeInFiat\n          salesVolumeInCrypto\n        }\n      }\n     }\n      count\n    }\n  }\n',
): (typeof documents)['#graphql\n  query bookSales($input: PaginationParamsDto) {\n    booksSales(pagination: $input) {\n     items {\n      bookId\n      book {\n        title\n      }\n      listings {\n        type\n        unitsCompleted {\n          count\n          salesVolumeInFiat\n          salesVolumeInCrypto\n        }\n        unitsPending {\n          count\n          salesVolumeInFiat\n          salesVolumeInCrypto\n        }\n      }\n     }\n      count\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetSpotlightBookEditions {\n    getSpotlightBookEditions {\n     id\n     book {\n      title\n     }\n     publications{\n      assets {\n        ...AssetFragment\n      }\n     }\n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetSpotlightBookEditions {\n    getSpotlightBookEditions {\n     id\n     book {\n      title\n     }\n     publications{\n      assets {\n        ...AssetFragment\n      }\n     }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation SetSpotlightBookEditions($input: [String!]!) {\n    setSpotlightBookEditions(editionIds: $input) \n  }\n',
): (typeof documents)['#graphql\n  mutation SetSpotlightBookEditions($input: [String!]!) {\n    setSpotlightBookEditions(editionIds: $input) \n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetSpotlightAuthors {\n    getSpotlightAuthors {\n     id\n     name\n     slug {\n      name\n     }\n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetSpotlightAuthors {\n    getSpotlightAuthors {\n     id\n     name\n     slug {\n      name\n     }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation SetSpotlightAuthors($input: [String!]!) {\n    setSpotlightAuthors(authorSlugs: $input) \n  }\n',
): (typeof documents)['#graphql\n  mutation SetSpotlightAuthors($input: [String!]!) {\n    setSpotlightAuthors(authorSlugs: $input) \n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetWritingStreak{\n    getWritingStreak {\n        currentStreak\n        activeDates\n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetWritingStreak{\n    getWritingStreak {\n        currentStreak\n        activeDates\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetStatsByUser($input: GetStatsByUserInput!){ \n    getStatsByUser(GetStatsByUserInput: $input)\n  }\n',
): (typeof documents)['#graphql\n  query GetStatsByUser($input: GetStatsByUserInput!){ \n    getStatsByUser(GetStatsByUserInput: $input)\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetWalletMessage {\n    walletMessage {\n      statement\n      message\n      nonce\n    }\n  }\n',
): (typeof documents)['#graphql\n  query GetWalletMessage {\n    walletMessage {\n      statement\n      message\n      nonce\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  mutation SignInLegacyWithWallet($input: WalletSignInLegacyInput!) {\n    signInLegacyWithWallet(walletSignInInput: $input) {\n      access_token\n      refresh_token\n      id_token\n      expires_at \n    } \n  }\n',
): (typeof documents)['\n  mutation SignInLegacyWithWallet($input: WalletSignInLegacyInput!) {\n    signInLegacyWithWallet(walletSignInInput: $input) {\n      access_token\n      refresh_token\n      id_token\n      expires_at \n    } \n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  mutation SignInWithWallet($input: WalletSignInInput!) {\n    signInWithWallet(walletSignInInput: $input) {\n      access_token\n      refresh_token\n      id_token\n      expires_at\n    }\n  }\n',
): (typeof documents)['\n  mutation SignInWithWallet($input: WalletSignInInput!) {\n    signInWithWallet(walletSignInInput: $input) {\n      access_token\n      refresh_token\n      id_token\n      expires_at\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query RefreshTokenForWallet($input: String!) {\n    walletRefreshToken(walletRefreshTokenInput: $input) {\n      access_token\n      id_token\n      expires_at\n    }\n  }\n',
): (typeof documents)['\n  query RefreshTokenForWallet($input: String!) {\n    walletRefreshToken(walletRefreshTokenInput: $input) {\n      access_token\n      id_token\n      expires_at\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetWishlistBooks {\n      getWishlistBooks {\n        id\n        title\n        bookEditionId\n        authors {\n          ...BookAuthorFragment\n        }\n        assets {\n          ...AssetFragment\n        }\n      }\n  }\n',
): (typeof documents)['#graphql\n  query GetWishlistBooks {\n      getWishlistBooks {\n        id\n        title\n        bookEditionId\n        authors {\n          ...BookAuthorFragment\n        }\n        assets {\n          ...AssetFragment\n        }\n      }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  query GetWishlistBookIds {\n      getWishlistBooks {\n          id\n      }\n  }\n',
): (typeof documents)['#graphql\n  query GetWishlistBookIds {\n      getWishlistBooks {\n          id\n      }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation AddToWishlist($input: String!) {\n      addToWishlist(bookId: $input) \n  }\n',
): (typeof documents)['#graphql\n  mutation AddToWishlist($input: String!) {\n      addToWishlist(bookId: $input) \n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '#graphql\n  mutation RemoveFromWishlist($input: String!) {\n      removeFromWishlist(bookId: $input) {\n          id\n      }\n  }\n',
): (typeof documents)['#graphql\n  mutation RemoveFromWishlist($input: String!) {\n      removeFromWishlist(bookId: $input) {\n          id\n      }\n  }\n'];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
