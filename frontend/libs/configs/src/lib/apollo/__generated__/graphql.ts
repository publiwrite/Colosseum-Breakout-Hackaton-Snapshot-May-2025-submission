/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: { input: any; output: any };
  /** A field whose value is a Currency: https://en.wikipedia.org/wiki/ISO_4217. */
  Currency: { input: any; output: any };
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any };
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any };
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any };
};

export type AddReviewInput = {
  body: Scalars['String']['input'];
  bookEditionId: Scalars['String']['input'];
  rating: Scalars['Int']['input'];
};

export type Address = {
  __typename?: 'Address';
  country: Country;
  countryId: Scalars['Float']['output'];
  county: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  line1: Scalars['String']['output'];
  line2?: Maybe<Scalars['String']['output']>;
  line3?: Maybe<Scalars['String']['output']>;
  line4?: Maybe<Scalars['String']['output']>;
  postcode: Scalars['String']['output'];
  telephoneNumber?: Maybe<Scalars['String']['output']>;
  town: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ApprovePublishingInput = {
  bisacGenreIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  manuscriptPublishingId: Scalars['ID']['input'];
};

export type Asset = {
  __typename?: 'Asset';
  bookId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

/** Type of the asset (cover, ebook) */
export enum AssetType {
  Cover = 'cover',
  Ebook = 'ebook',
  Pdf = 'pdf',
  PdfCover = 'pdfCover',
}

export type AssignIsbnInput = {
  manuscriptPublishingId: Scalars['ID']['input'];
};

export type AuthorInput = {
  bookAuthorId: Scalars['ID']['input'];
  percentage: Scalars['Float']['input'];
};

export type AvailableUsernameInput = {
  username: Scalars['String']['input'];
};

export type Balance = {
  __typename?: 'Balance';
  availableCryptoBalanceInCents: Scalars['BigInt']['output'];
  availableFiatBalance: Array<FiatBalance>;
  pendingCryptoBalanceInCents: Scalars['BigInt']['output'];
  pendingFiatBalanceInCents: Scalars['BigInt']['output'];
};

export type Basket = {
  __typename?: 'Basket';
  createdAt: Scalars['DateTimeISO']['output'];
  items: Array<BasketItem>;
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
};

export type BasketItem = {
  __typename?: 'BasketItem';
  createdAt: Scalars['DateTimeISO']['output'];
  publicationListingId: Scalars['String']['output'];
  publicationsListing: PublicationListing;
  quantity: Scalars['Float']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type BasketItemInput = {
  publicationListingId: Scalars['String']['input'];
  quantity: Scalars['Float']['input'];
};

export type BestSellerCategoryBookEditionInput = {
  editionIds: Array<Scalars['String']['input']>;
  genreSlug: Scalars['String']['input'];
};

export type BestSellerCategoryEntity = {
  __typename?: 'BestSellerCategoryEntity';
  editions: Array<BookEdition>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type BisacGenre = {
  __typename?: 'BisacGenre';
  bisacCode: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  pwGenreId: Scalars['Int']['output'];
  themaCode: Scalars['String']['output'];
};

export type Book = {
  __typename?: 'Book';
  editions?: Maybe<Array<BookEdition>>;
  genres?: Maybe<Array<BookGenre>>;
  /** bookId */
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type BookAuthor = {
  __typename?: 'BookAuthor';
  avatarImageUrl?: Maybe<Scalars['String']['output']>;
  bannerImageUrl?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Slug;
  userId?: Maybe<Scalars['ID']['output']>;
};

export type BookCompetition = {
  __typename?: 'BookCompetition';
  bookIds?: Maybe<Array<Scalars['String']['output']>>;
  books?: Maybe<Array<Book>>;
  description: Scalars['String']['output'];
  endDate: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  startDate: Scalars['DateTimeISO']['output'];
};

export type BookEdition = {
  __typename?: 'BookEdition';
  authors: Array<BookAuthor>;
  book: Book;
  bookId: Scalars['String']['output'];
  description: Scalars['String']['output'];
  edition: Edition;
  id: Scalars['ID']['output'];
  language: Language;
  publications?: Maybe<Array<Publication>>;
};

export type BookFilterInput = {
  authorSlug?: InputMaybe<Scalars['String']['input']>;
  bookFormat?: InputMaybe<Array<PublicationFormat>>;
  categoriesIds?: InputMaybe<Array<Scalars['Float']['input']>>;
  categoriesSlugs?: InputMaybe<Array<Scalars['String']['input']>>;
  competitionsSlugs?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  pageCount?: InputMaybe<Range>;
  price?: InputMaybe<Range>;
};

export type BookGenre = {
  __typename?: 'BookGenre';
  bookIds?: Maybe<Array<Scalars['String']['output']>>;
  books?: Maybe<Array<Book>>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type BookLeaderboard = {
  __typename?: 'BookLeaderboard';
  assets?: Maybe<Array<Asset>>;
  authors: Array<BookAuthor>;
  bookId: Scalars['ID']['output'];
  bookName: Scalars['String']['output'];
  position: Scalars['Int']['output'];
  publishedAt: Scalars['DateTimeISO']['output'];
  score: Scalars['Float']['output'];
};

export type BookLicense = {
  __typename?: 'BookLicense';
  assets?: Maybe<Array<Asset>>;
  authors?: Maybe<Array<BookLicenseAuthor>>;
  btcInscriptionId?: Maybe<Scalars['String']['output']>;
  btcInscriptionStatus: BtcInscriptionStatus;
  coverAssetKey: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  genres?: Maybe<Array<BookGenre>>;
  id: Scalars['ID']['output'];
  isForCommercialUse: Scalars['Boolean']['output'];
  isbn?: Maybe<Scalars['String']['output']>;
  manuscriptAssetKey: Scalars['String']['output'];
  metadata?: Maybe<BookLicenseMetadataEntity>;
  orders?: Maybe<Array<BookLicenseOrder>>;
  priceInCents: Scalars['BigInt']['output'];
  title: Scalars['String']['output'];
  typeOfRights: TypeOfRights;
  updatedAt: Scalars['DateTime']['output'];
};

export type BookLicenseAuthor = {
  __typename?: 'BookLicenseAuthor';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  walletAddress?: Maybe<Scalars['String']['output']>;
};

export type BookLicenseMetadataEntity = {
  __typename?: 'BookLicenseMetadataEntity';
  createdAt: Scalars['DateTime']['output'];
  hash: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  pages: Scalars['Float']['output'];
  tokens: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type BookLicenseOrder = {
  __typename?: 'BookLicenseOrder';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  postPaymentTxSignature?: Maybe<Scalars['String']['output']>;
  signedTemplateIpfsCid?: Maybe<Scalars['String']['output']>;
  solanaPNftAddress?: Maybe<Scalars['String']['output']>;
  solanaPNftTxSignature?: Maybe<Scalars['String']['output']>;
  status: BookLicenseOrderStatus;
  txSignature?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

/** Status of a book license order */
export enum BookLicenseOrderStatus {
  Paid = 'PAID',
  PaymentFailed = 'PAYMENT_FAILED',
  PendingTransaction = 'PENDING_TRANSACTION',
}

export type BookLicensePage = {
  __typename?: 'BookLicensePage';
  count: Scalars['Float']['output'];
  items: Array<BookLicense>;
};

export type BookLicenseSaleEntity = {
  __typename?: 'BookLicenseSaleEntity';
  orders: Array<BookLicenseOrder>;
  volume?: Maybe<Scalars['Float']['output']>;
};

export type BookListItem = {
  __typename?: 'BookListItem';
  assets?: Maybe<Array<Asset>>;
  authors: Array<BookAuthor>;
  bookEditionId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type BookRating = {
  __typename?: 'BookRating';
  averageRating: Scalars['Float']['output'];
  count: Scalars['Int']['output'];
  ratingCounts: Array<Scalars['Int']['output']>;
};

export type BookSale = {
  __typename?: 'BookSale';
  book: Book;
  bookId: Scalars['String']['output'];
  listings: Array<Listing>;
};

export type BookSalesPage = {
  __typename?: 'BookSalesPage';
  count: Scalars['Float']['output'];
  items: Array<BookSale>;
};

export type BookSearchPage = {
  __typename?: 'BookSearchPage';
  count: Scalars['Float']['output'];
  items: Array<BookSearchResult>;
};

export type BookSearchResult = {
  __typename?: 'BookSearchResult';
  assets?: Maybe<Array<Asset>>;
  authors: Array<BookAuthor>;
  bookEditionDescription: Scalars['String']['output'];
  bookEditionId: Scalars['String']['output'];
  editionId: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  maxPrice?: Maybe<Scalars['Float']['output']>;
  minPrice?: Maybe<Scalars['Float']['output']>;
  title: Scalars['String']['output'];
};

export type BookSortInput = {
  name?: InputMaybe<SortOrder>;
  pageCount?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  publishedDate?: InputMaybe<SortOrder>;
};

/** Status of Bitcoin inscription process */
export enum BtcInscriptionStatus {
  BtcInscriptionCreated = 'BTC_INSCRIPTION_CREATED',
  CreatingBtcInscription = 'CREATING_BTC_INSCRIPTION',
  NotStarted = 'NOT_STARTED',
}

export type CalculatePrintingCostAndCoverSizesInput = {
  colourPagesCount: Scalars['Int']['input'];
  format: PublicationFormat;
  laminationId: Scalars['Float']['input'];
  monoPagesCount: Scalars['Int']['input'];
  paperSizeId: Scalars['Float']['input'];
  textStockId: Scalars['Float']['input'];
};

export type Character = {
  __typename?: 'Character';
  additionalFields?: Maybe<Scalars['JSON']['output']>;
  age?: Maybe<Scalars['Int']['output']>;
  connectedWith?: Maybe<Array<CharacterRelation>>;
  description?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isDead: Scalars['Boolean']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  origin?: Maybe<Scalars['String']['output']>;
  personalityTraits?: Maybe<Scalars['String']['output']>;
  physicalAppearance?: Maybe<Scalars['String']['output']>;
  race?: Maybe<Scalars['String']['output']>;
  relations?: Maybe<Array<CharacterRelation>>;
  role?: Maybe<Scalars['String']['output']>;
  species?: Maybe<Scalars['String']['output']>;
};

export type CharacterInput = {
  additionalFields?: InputMaybe<Scalars['JSON']['input']>;
  age?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  isDead?: InputMaybe<Scalars['Boolean']['input']>;
  manuscriptId: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
  origin?: InputMaybe<Scalars['String']['input']>;
  personalityTraits?: InputMaybe<Scalars['String']['input']>;
  physicalAppearance?: InputMaybe<Scalars['String']['input']>;
  race?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  species?: InputMaybe<Scalars['String']['input']>;
};

export type CharacterRelation = {
  __typename?: 'CharacterRelation';
  fromCharacter: Character;
  id: Scalars['String']['output'];
  toCharacter: Character;
  type: Scalars['String']['output'];
};

export type Collaborator = {
  __typename?: 'Collaborator';
  createdAt: Scalars['DateTimeISO']['output'];
  role?: Maybe<CollaboratorRoleName>;
  updatedAt: Scalars['DateTimeISO']['output'];
  user: User;
  userId: Scalars['ID']['output'];
};

export type CollaboratorInvitation = {
  __typename?: 'CollaboratorInvitation';
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  invitedBy: User;
  role?: Maybe<CollaboratorRoleName>;
  updatedAt: Scalars['DateTimeISO']['output'];
};

/** Type of the book (EBOOK, PAPERBACK, HARDCOVER) */
export enum CollaboratorRoleName {
  Author = 'AUTHOR',
  Editor = 'EDITOR',
  Owner = 'OWNER',
  Viewer = 'VIEWER',
}

export type CompetitionStats = {
  __typename?: 'CompetitionStats';
  globalAverageRating: Scalars['Float']['output'];
  leaderboard: Array<BookLeaderboard>;
  weight: Scalars['Float']['output'];
};

/** Content type of the file */
export enum ContentType {
  Doc = 'DOC',
  Docx = 'DOCX',
  Epub = 'EPUB',
  Gif = 'GIF',
  Jpeg = 'JPEG',
  Pdf = 'PDF',
  Png = 'PNG',
  Zip = 'ZIP',
}

export type Country = {
  __typename?: 'Country';
  id?: Maybe<Scalars['Int']['output']>;
  iso?: Maybe<Scalars['String']['output']>;
  iso3?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phoneCode?: Maybe<Scalars['Int']['output']>;
};

export type CoverSize = {
  __typename?: 'CoverSize';
  height: Scalars['Float']['output'];
  width: Scalars['Float']['output'];
};

export type CreateAddressInput = {
  countryId: Scalars['Float']['input'];
  county: Scalars['String']['input'];
  line1: Scalars['String']['input'];
  line2?: InputMaybe<Scalars['String']['input']>;
  line3?: InputMaybe<Scalars['String']['input']>;
  line4?: InputMaybe<Scalars['String']['input']>;
  postcode: Scalars['String']['input'];
  telephoneNumber: Scalars['String']['input'];
  town: Scalars['String']['input'];
};

export type CreateAuthorInput = {
  bio: Scalars['String']['input'];
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type CreateBookLicenseInput = {
  authorName: Scalars['String']['input'];
  coverAssetKey: Scalars['String']['input'];
  description: Scalars['String']['input'];
  genresIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  isForCommercialUse: Scalars['Boolean']['input'];
  isbn?: InputMaybe<Scalars['String']['input']>;
  manuscriptAssetKey: Scalars['String']['input'];
  ownerWalletAddress: Scalars['String']['input'];
  priceInCents: Scalars['Float']['input'];
  title: Scalars['String']['input'];
  typeOfRights: TypeOfRights;
};

export type CreateCharacterRelationInput = {
  fromCharacterId: Scalars['String']['input'];
  toCharacterId: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type CreateManuscriptInput = {
  genresIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  origin: ManuscriptOriginType;
  title: Scalars['String']['input'];
};

export type CreatePublishingDraftInput = {
  assetKey?: InputMaybe<Scalars['String']['input']>;
  /** Manuscript description */
  description?: InputMaybe<Scalars['String']['input']>;
  editionId: Scalars['Float']['input'];
  format: PublicationFormat;
  manuscriptId: Scalars['ID']['input'];
};

export type CreateRelationsInput = {
  manuscriptId: Scalars['String']['input'];
  relations: Array<CreateCharacterRelationInput>;
};

export type EditReviewInput = {
  body: Scalars['String']['input'];
  rating: Scalars['Int']['input'];
};

export type Edition = {
  __typename?: 'Edition';
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
};

export type EpubMetadataEntity = {
  __typename?: 'EpubMetadataEntity';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  locations: Scalars['JSON']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type FiatBalance = {
  __typename?: 'FiatBalance';
  currency: Scalars['Currency']['output'];
  value: Scalars['BigInt']['output'];
};

export type GetPublicationAssetInput = {
  format: PublicationFormat;
  publicationId: Scalars['String']['input'];
};

export type GetStatsByUserAndManuscriptInput = {
  from: Scalars['String']['input'];
  manuscriptId: Scalars['String']['input'];
  to: Scalars['String']['input'];
};

export type GetStatsByUserInput = {
  from: Scalars['String']['input'];
  to: Scalars['String']['input'];
};

export type InviteCollaboratorInput = {
  /** Collaborator email where to send invitation */
  email: Scalars['String']['input'];
  /** Manuscript ID */
  manuscriptId: Scalars['String']['input'];
  /** Collaborator Role ID */
  roleId: CollaboratorRoleName;
};

export type Language = {
  __typename?: 'Language';
  id: Scalars['Float']['output'];
  isoCode2: Scalars['String']['output'];
  isoCode3: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Listing = {
  __typename?: 'Listing';
  type: Scalars['String']['output'];
  unitsCompleted?: Maybe<Units>;
  unitsPending?: Maybe<Units>;
};

export type Manuscript = {
  __typename?: 'Manuscript';
  assets?: Maybe<Array<ManuscriptAssetEntity>>;
  collaborators?: Maybe<Array<Collaborator>>;
  createdAt: Scalars['DateTimeISO']['output'];
  genres?: Maybe<Array<ManuscriptGenreEntity>>;
  id: Scalars['ID']['output'];
  origin: ManuscriptOriginType;
  publishing?: Maybe<Array<ManuscriptPublishing>>;
  settings?: Maybe<ManuscriptSettings>;
  tags?: Maybe<Array<Tag>>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type ManuscriptAssetEntity = {
  __typename?: 'ManuscriptAssetEntity';
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  manuscriptId: Scalars['ID']['output'];
  type: AssetType;
};

export type ManuscriptCount = {
  __typename?: 'ManuscriptCount';
  externalCount: Scalars['Int']['output'];
  internalCount: Scalars['Int']['output'];
};

export type ManuscriptFontEntity = {
  __typename?: 'ManuscriptFontEntity';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type ManuscriptGenreEntity = {
  __typename?: 'ManuscriptGenreEntity';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

/** Origin of the manuscript */
export enum ManuscriptOriginType {
  External = 'EXTERNAL',
  Internal = 'INTERNAL',
}

export type ManuscriptPage = {
  __typename?: 'ManuscriptPage';
  count: Scalars['Float']['output'];
  items: Array<Manuscript>;
};

export type ManuscriptPaperSizeEntity = {
  __typename?: 'ManuscriptPaperSizeEntity';
  height: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  unit: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type ManuscriptPrintLamination = {
  __typename?: 'ManuscriptPrintLamination';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type ManuscriptPrintSettings = {
  __typename?: 'ManuscriptPrintSettings';
  hasColorPages: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  lamination: ManuscriptPrintLamination;
  laminationId: Scalars['Float']['output'];
  textStock: ManuscriptTextStock;
  textStockId: Scalars['Float']['output'];
};

export type ManuscriptPublishing = {
  __typename?: 'ManuscriptPublishing';
  assets?: Maybe<Array<ManuscriptPublishingAsset>>;
  bookId?: Maybe<Scalars['String']['output']>;
  competitionId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  edition?: Maybe<Edition>;
  format: PublicationFormat;
  id: Scalars['ID']['output'];
  manuscript?: Maybe<Manuscript>;
  manuscriptId: Scalars['String']['output'];
  manuscriptPublishingAuthors?: Maybe<Array<ManuscriptPublishingAuthor>>;
  priceInCents?: Maybe<Scalars['BigInt']['output']>;
  printSettings?: Maybe<ManuscriptPrintSettings>;
  publication?: Maybe<Publication>;
  rejection?: Maybe<ManuscriptPublishingRejection>;
  settings?: Maybe<ManuscriptPublishingSettings>;
  status: PublishingStatus;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type ManuscriptPublishingAsset = {
  __typename?: 'ManuscriptPublishingAsset';
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  manuscriptPublishingId: Scalars['ID']['output'];
  metadata?: Maybe<ManuscriptPublishingAssetMetadata>;
  type: AssetType;
};

export type ManuscriptPublishingAssetMetadata = {
  __typename?: 'ManuscriptPublishingAssetMetadata';
  assetId: Scalars['String']['output'];
  colorPageCount: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  pageCount: Scalars['Int']['output'];
};

export type ManuscriptPublishingAuthor = {
  __typename?: 'ManuscriptPublishingAuthor';
  bookAuthor: BookAuthor;
  bookAuthorId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  manuscriptPublishingId: Scalars['String']['output'];
  percentage: Scalars['Int']['output'];
};

export type ManuscriptPublishingRejection = {
  __typename?: 'ManuscriptPublishingRejection';
  id: Scalars['ID']['output'];
  manuscriptPublishingId: Scalars['String']['output'];
  reason: Scalars['String']['output'];
};

export type ManuscriptPublishingSettings = {
  __typename?: 'ManuscriptPublishingSettings';
  id: Scalars['ID']['output'];
  paperSize: PaperSize;
};

export type ManuscriptSettings = {
  __typename?: 'ManuscriptSettings';
  addPageNumber: Scalars['Boolean']['output'];
  font: PaperSize;
  hasDropcaps: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  ornamentalBreak?: Maybe<Scalars['Int']['output']>;
  pageMarginBottom: Scalars['Int']['output'];
  pageMarginLeft: Scalars['Int']['output'];
  pageMarginRight: Scalars['Int']['output'];
  pageMarginTop: Scalars['Int']['output'];
  pageNumberAlignment: TextPosition;
  sectionTitleAlignment: TextPosition;
  sectionTitleStyle: SectionTitleStyle;
};

export type ManuscriptSummary = {
  __typename?: 'ManuscriptSummary';
  formats: Array<PublicationFormat>;
  id: Scalars['ID']['output'];
  pricesInCents: Array<Scalars['BigInt']['output']>;
  title: Scalars['String']['output'];
};

export type ManuscriptSummaryPage = {
  __typename?: 'ManuscriptSummaryPage';
  count: Scalars['Float']['output'];
  items: Array<ManuscriptSummary>;
};

export type ManuscriptTextStock = {
  __typename?: 'ManuscriptTextStock';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type ManuscriptsSummaryInput = {
  pagination: PaginationParamsDto;
  status?: InputMaybe<PublishingStatus>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MetadataInput = {
  characterId: Scalars['String']['input'];
  metadata: Scalars['JSON']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addFreeBookToLibrary: Scalars['Boolean']['output'];
  addPublicationListingsToBasket: Basket;
  addReview: Review;
  addToWishlist: Scalars['Boolean']['output'];
  approveManuscriptPublishing: Scalars['Boolean']['output'];
  approveReview: Scalars['Boolean']['output'];
  assignIsbn: Scalars['String']['output'];
  createAddress: Address;
  createBookAuthor: BookAuthor;
  createBookLicense: BookLicense;
  createBuyNowOrder: Scalars['String']['output'];
  createCharacter: Character;
  createCharacterRelation: Scalars['Boolean']['output'];
  createConnectedAccount: Scalars['String']['output'];
  createHelioBuyNowOrder: Scalars['String']['output'];
  createHelioLicensePayment: Scalars['String']['output'];
  createHelioOrder: Scalars['String']['output'];
  createManuscript: Manuscript;
  createOrder: Scalars['String']['output'];
  createPublishingDraft: ManuscriptPublishing;
  deleteAddress: Scalars['Boolean']['output'];
  deleteCharacter: Scalars['Boolean']['output'];
  deleteCharacterRelation: Scalars['Boolean']['output'];
  editReview: Review;
  inviteCollaborator: Scalars['Boolean']['output'];
  rejectManuscriptPublishing: Scalars['Boolean']['output'];
  rejectReview: Scalars['Boolean']['output'];
  removeCollaborator: Scalars['Boolean']['output'];
  removeFromWishlist: BookListItem;
  removeManuscript: Scalars['Boolean']['output'];
  removePublicationListingFromBasket: Basket;
  restoreVersion: Scalars['Boolean']['output'];
  setBestSellerBookEditions: Scalars['Boolean']['output'];
  setPercentageRead: Scalars['Boolean']['output'];
  setSpotlightAuthors: Scalars['Boolean']['output'];
  setSpotlightBookEditions: Scalars['Boolean']['output'];
  setUserPassword: User;
  signInLegacyWithWallet: WalletSignInEntity;
  signInWithWallet: WalletSignInEntity;
  submitPublishingDraftForApproval: ManuscriptPublishing;
  transferAvailableBalance: Scalars['Boolean']['output'];
  updateAddress: Address;
  updateBookAuthor: BookAuthor;
  updateCharacter: Character;
  updateCharactersMetadata: Scalars['Boolean']['output'];
  updateCollaborator: Scalars['Boolean']['output'];
  updateManuscript: Manuscript;
  updateManuscriptSettings: Scalars['Boolean']['output'];
  updateProfile: Profile;
  updateProfileViewMode: Profile;
  updatePublicationListingFromBasket: Basket;
  updatePublishingCover: PublishingStatus;
  updatePublishingDraft: ManuscriptPublishing;
  updateRelations: Scalars['Boolean']['output'];
  verifyProfile: VerifyProfileEntity;
  withdraw: Scalars['Boolean']['output'];
};

export type MutationAddFreeBookToLibraryArgs = {
  publicationId: Scalars['String']['input'];
};

export type MutationAddPublicationListingsToBasketArgs = {
  items: Array<BasketItemInput>;
};

export type MutationAddReviewArgs = {
  input: AddReviewInput;
};

export type MutationAddToWishlistArgs = {
  bookId: Scalars['String']['input'];
};

export type MutationApproveManuscriptPublishingArgs = {
  input: ApprovePublishingInput;
};

export type MutationApproveReviewArgs = {
  reviewId: Scalars['String']['input'];
};

export type MutationAssignIsbnArgs = {
  input: AssignIsbnInput;
};

export type MutationCreateAddressArgs = {
  createAddressInput: CreateAddressInput;
};

export type MutationCreateBookAuthorArgs = {
  input: CreateAuthorInput;
};

export type MutationCreateBookLicenseArgs = {
  input: CreateBookLicenseInput;
};

export type MutationCreateBuyNowOrderArgs = {
  printingSettings?: InputMaybe<OrderPrintingSettingsInput>;
  publicationListingId: Scalars['String']['input'];
};

export type MutationCreateCharacterArgs = {
  input: CharacterInput;
};

export type MutationCreateCharacterRelationArgs = {
  input: CreateRelationsInput;
};

export type MutationCreateConnectedAccountArgs = {
  countryIso: Scalars['String']['input'];
};

export type MutationCreateHelioBuyNowOrderArgs = {
  printingSettings?: InputMaybe<OrderPrintingSettingsInput>;
  publicationListingId: Scalars['String']['input'];
};

export type MutationCreateHelioLicensePaymentArgs = {
  licenseId: Scalars['String']['input'];
};

export type MutationCreateHelioOrderArgs = {
  printingSettings?: InputMaybe<OrderPrintingSettingsInput>;
};

export type MutationCreateManuscriptArgs = {
  createManuscriptInput: CreateManuscriptInput;
};

export type MutationCreateOrderArgs = {
  printingSettings?: InputMaybe<OrderPrintingSettingsInput>;
};

export type MutationCreatePublishingDraftArgs = {
  input: CreatePublishingDraftInput;
};

export type MutationDeleteAddressArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteCharacterArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteCharacterRelationArgs = {
  relationId: Scalars['String']['input'];
};

export type MutationEditReviewArgs = {
  input: EditReviewInput;
  reviewId: Scalars['String']['input'];
};

export type MutationInviteCollaboratorArgs = {
  inviteCollaboratorInput: InviteCollaboratorInput;
};

export type MutationRejectManuscriptPublishingArgs = {
  input: RejectPublishingInput;
};

export type MutationRejectReviewArgs = {
  reason: Scalars['String']['input'];
  reviewId: Scalars['String']['input'];
};

export type MutationRemoveCollaboratorArgs = {
  removeCollaboratorInput: RemoveCollaboratorInput;
};

export type MutationRemoveFromWishlistArgs = {
  bookId: Scalars['String']['input'];
};

export type MutationRemoveManuscriptArgs = {
  id: Scalars['String']['input'];
};

export type MutationRemovePublicationListingFromBasketArgs = {
  publicationListingId: Scalars['String']['input'];
};

export type MutationRestoreVersionArgs = {
  documentHistoryId: Scalars['String']['input'];
  manuscriptId: Scalars['String']['input'];
};

export type MutationSetBestSellerBookEditionsArgs = {
  input: Array<BestSellerCategoryBookEditionInput>;
};

export type MutationSetPercentageReadArgs = {
  percentage: Scalars['Float']['input'];
  publicationId: Scalars['String']['input'];
};

export type MutationSetSpotlightAuthorsArgs = {
  authorSlugs: Array<Scalars['String']['input']>;
};

export type MutationSetSpotlightBookEditionsArgs = {
  editionIds: Array<Scalars['String']['input']>;
};

export type MutationSetUserPasswordArgs = {
  setUserPasswordInput: SetUserPasswordInput;
};

export type MutationSignInLegacyWithWalletArgs = {
  walletSignInInput: WalletSignInLegacyInput;
};

export type MutationSignInWithWalletArgs = {
  walletSignInInput: WalletSignInInput;
};

export type MutationSubmitPublishingDraftForApprovalArgs = {
  input: SubmitPublishingDraftInput;
};

export type MutationUpdateAddressArgs = {
  updateAddressInput: UpdateAddressInput;
};

export type MutationUpdateBookAuthorArgs = {
  input: UpdateAuthorInput;
};

export type MutationUpdateCharacterArgs = {
  input: UpdateCharacterInput;
};

export type MutationUpdateCharactersMetadataArgs = {
  input: UpdateCharacterMetadataInput;
};

export type MutationUpdateCollaboratorArgs = {
  UpdateCollaboratorInput: UpdateCollaboratorInput;
};

export type MutationUpdateManuscriptArgs = {
  updateManuscriptInput: UpdateManuscriptInput;
};

export type MutationUpdateManuscriptSettingsArgs = {
  settings: UpdateManuscriptSettingsInput;
};

export type MutationUpdateProfileArgs = {
  updateProfileInput: UpdateProfileInput;
};

export type MutationUpdateProfileViewModeArgs = {
  updateProfileViewModeInput: UpdateProfileViewModeInput;
};

export type MutationUpdatePublicationListingFromBasketArgs = {
  publicationListingId: Scalars['String']['input'];
  quantity: Scalars['Float']['input'];
};

export type MutationUpdatePublishingCoverArgs = {
  input: UpdatePublishingCoverInput;
};

export type MutationUpdatePublishingDraftArgs = {
  input: UpdatePublishingDraftInput;
};

export type MutationUpdateRelationsArgs = {
  input: UpdateRelationsInput;
};

export type MutationVerifyProfileArgs = {
  verifyProfileInput: VerifyProfileInput;
};

export type MutationWithdrawArgs = {
  amount: Scalars['Float']['input'];
};

export type OauthProvider = {
  __typename?: 'OauthProvider';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type Order = {
  __typename?: 'Order';
  closedDate?: Maybe<Scalars['DateTimeISO']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  currency: Scalars['Currency']['output'];
  id: Scalars['String']['output'];
  orderHistories: Array<OrderHistory>;
  orderItems: Array<OrderItem>;
  refundAmountInCents: Scalars['BigInt']['output'];
  status: OrderStatus;
  subTotalInCents: Scalars['BigInt']['output'];
  taxInCents: Scalars['BigInt']['output'];
  totalInCents: Scalars['BigInt']['output'];
  type: OrderType;
  updatedAt: Scalars['DateTimeISO']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type OrderHistory = {
  __typename?: 'OrderHistory';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  newStatus: OrderStatus;
  previousStatus: OrderStatus;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  bookNftId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  orderId: Scalars['String']['output'];
  productPriceInCents: Scalars['BigInt']['output'];
  publicationListing: PublicationListing;
  publicationListingId: Scalars['String']['output'];
  quantity: Scalars['Float']['output'];
  status: OrderItemStatus;
  totalPriceInCents: Scalars['BigInt']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

/** OrderItemStatus */
export enum OrderItemStatus {
  Acknowledged = 'Acknowledged',
  Batched = 'Batched',
  Cancelled = 'Cancelled',
  Created = 'Created',
  Delivered = 'Delivered',
  Dispatched = 'Dispatched',
  Invoiced = 'Invoiced',
  Pending = 'Pending',
  Printed = 'Printed',
  Processing = 'Processing',
  RefundedFully = 'RefundedFully',
  RefundedPartially = 'RefundedPartially',
  Returned = 'Returned',
  SentToPrint = 'SentToPrint',
  Shipped = 'Shipped',
}

export type OrderPage = {
  __typename?: 'OrderPage';
  count: Scalars['Float']['output'];
  items: Array<Order>;
};

export type OrderPrintingSettingsInput = {
  addressId: Scalars['String']['input'];
  productionSpeed: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
};

/** OrderStatus */
export enum OrderStatus {
  BalanceCalculated = 'BALANCE_CALCULATED',
  Completed = 'COMPLETED',
  Open = 'OPEN',
  Paid = 'PAID',
  PartiallyRefunded = 'PARTIALLY_REFUNDED',
  PaymentFailed = 'PAYMENT_FAILED',
  PendingTransaction = 'PENDING_TRANSACTION',
}

/** OrderType */
export enum OrderType {
  BasketOrder = 'BASKET_ORDER',
  BuyNowOrder = 'BUY_NOW_ORDER',
}

/** Pagination */
export type PaginationParamsDto = {
  /** limit */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** offset */
  offset?: InputMaybe<Scalars['Float']['input']>;
};

export type PaperSize = {
  __typename?: 'PaperSize';
  height: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  unit?: Maybe<Scalars['String']['output']>;
  width: Scalars['Float']['output'];
};

export type PresignedUrl = {
  __typename?: 'PresignedUrl';
  key: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type PreviewManuscriptPdfInput = {
  addPageNumber?: Scalars['Boolean']['input'];
  manuscriptId: Scalars['ID']['input'];
  pageNumberAlignment?: TextPosition;
  paperSizeId?: InputMaybe<Scalars['Float']['input']>;
};

export type PrintingCostAndCoverSize = {
  __typename?: 'PrintingCostAndCoverSize';
  coverSize: CoverSize;
  printingCost: Scalars['BigInt']['output'];
};

export type Profile = {
  __typename?: 'Profile';
  /** Profile picture url */
  avatarImageUrl?: Maybe<Scalars['String']['output']>;
  /** Banner image url */
  bannerImageUrl?: Maybe<Scalars['String']['output']>;
  /** Profile birthday */
  birthday?: Maybe<Scalars['DateTimeISO']['output']>;
  /** Country */
  country?: Maybe<Country>;
  /** Profile created at */
  createdAt: Scalars['String']['output'];
  /** Profile description */
  description?: Maybe<Scalars['String']['output']>;
  /** Profile email */
  email?: Maybe<Scalars['String']['output']>;
  /** Profile first name */
  firstName?: Maybe<Scalars['String']['output']>;
  /** Profile gender */
  gender?: Maybe<Scalars['String']['output']>;
  /** Profile id */
  id: Scalars['ID']['output'];
  /** Profile last name */
  lastName?: Maybe<Scalars['String']['output']>;
  /** Profile slug */
  slug?: Maybe<Slug>;
  /** Profile email unverified */
  unverifiedEmail?: Maybe<Scalars['String']['output']>;
  /** Profile updated at */
  updatedAt: Scalars['String']['output'];
  /** User id */
  userId: Scalars['String']['output'];
  /** Profile view mode */
  viewMode?: Maybe<ViewMode>;
};

export type Publication = {
  __typename?: 'Publication';
  assets?: Maybe<Array<Asset>>;
  bookEdition: BookEdition;
  epubMetadata?: Maybe<EpubMetadataEntity>;
  format: PublicationFormat;
  /** PublicationId */
  id: Scalars['ID']['output'];
  listings?: Maybe<Array<PublicationListing>>;
  pagesCount: Scalars['Int']['output'];
  publishedAt: Scalars['DateTimeISO']['output'];
};

/** Type of the publication (EBOOK, PAPERBACK, HARDCOVER) */
export enum PublicationFormat {
  Ebook = 'EBOOK',
  Hardcover = 'HARDCOVER',
  Paperback = 'PAPERBACK',
  Pdf = 'PDF',
}

export type PublicationListing = {
  __typename?: 'PublicationListing';
  createdAt: Scalars['DateTimeISO']['output'];
  /** PublicationListingId */
  id: Scalars['ID']['output'];
  priceInCents: Scalars['BigInt']['output'];
  publication: Publication;
  publicationId: Scalars['ID']['output'];
  quantity: Scalars['Float']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type PublicationPrintSettingsInput = {
  hasColorPages?: Scalars['Boolean']['input'];
  laminationId: Scalars['Float']['input'];
  textStockId: Scalars['Float']['input'];
};

export type PublicationSettings = {
  paperSizeId: Scalars['Int']['input'];
};

/** Status of the ManuscriptPublishing */
export enum PublishingStatus {
  Approved = 'APPROVED',
  Draft = 'DRAFT',
  Pending = 'PENDING',
  Processing = 'PROCESSING',
  Published = 'PUBLISHED',
  Rejected = 'REJECTED',
}

export type Query = {
  __typename?: 'Query';
  accountOnboarded: Scalars['Boolean']['output'];
  accountSessionSecret: Scalars['String']['output'];
  booksSales: BookSalesPage;
  calculatePrintingCostAndCoverSize: PrintingCostAndCoverSize;
  calculateShippingCostBasketOrder: Array<ShippingOptionEntity>;
  calculateShippingCostBuyNowOrder: Array<ShippingOptionEntity>;
  countries: Array<Country>;
  currentUser: User;
  generateDownloadPresignedUrl: Scalars['String']['output'];
  generateUploadPresignedUrl: PresignedUrl;
  getAccountBalance: Balance;
  getAddresses: Array<Address>;
  getAvailableUsername: Scalars['String']['output'];
  getBestSellerBookEditions: Array<BestSellerCategoryEntity>;
  getBisacGenreThemes: Array<BisacGenre>;
  getBook: Book;
  getBookAuthor: BookAuthor;
  getBookAuthorById: BookAuthor;
  getBookByBookEditionId: Book;
  getBookCompetitions: Array<BookCompetition>;
  getBookEditionRating: BookRating;
  getBookGenres: Array<BookGenre>;
  getBookLicenseById: BookLicense;
  getBookLicenseByIds: Array<BookLicense>;
  getBookLicenseManuscriptUrl: Scalars['String']['output'];
  getBookLicenseOrderById: BookLicenseOrder;
  getBookLicenseSales: BookLicenseSaleEntity;
  getBookLicenses: BookLicensePage;
  getBookReviewsByBookEditionId: ReviewPage;
  getBookTags: Array<Tag>;
  getBooks: Array<Book>;
  getBooksByListingIds: Array<Book>;
  getBooksWithSearchCriteria: BookSearchPage;
  getCollaboratorInvitationsByManuscriptId: Array<CollaboratorInvitation>;
  getCollaboratorsByManuscriptId: Array<Collaborator>;
  getEditionDescription?: Maybe<Scalars['String']['output']>;
  getEditions: Array<Edition>;
  getLanguages: Array<Language>;
  getManuscriptAuthors: Array<UserAuthorIdentities>;
  getManuscriptById: Manuscript;
  getManuscriptCharacters: Array<Character>;
  getManuscriptFonts: Array<ManuscriptFontEntity>;
  getManuscriptPaperSizes: Array<ManuscriptPaperSizeEntity>;
  getManuscriptPublishingAssetDownloadUrl: Scalars['String']['output'];
  getManuscriptPublishingAssetMetadata?: Maybe<ManuscriptPublishingAssetMetadata>;
  getManuscriptPublishingById: ManuscriptPublishing;
  getManuscriptPublishings: Array<ManuscriptPublishing>;
  getManuscriptTextStocks: Array<ManuscriptTextStock>;
  getManuscriptsSummary: ManuscriptSummaryPage;
  getMyBasket: Basket;
  getMyBookLicenses: Array<BookLicense>;
  getMyManuscripts: ManuscriptPage;
  getMyManuscriptsCount: ManuscriptCount;
  getMyOwnedPublicationById: UserOwnedPublication;
  getMyOwnedPublications: Array<UserOwnedPublication>;
  getOrder: Order;
  getOrders: OrderPage;
  getPenBookAuthors: Array<BookAuthor>;
  getPrintLamination: Array<ManuscriptPrintLamination>;
  getPublicationAsset: Scalars['String']['output'];
  getPurchasedBookLicenses: Array<BookLicense>;
  getReviews: ReviewPage;
  getSpotlightAuthors: Array<BookAuthor>;
  getSpotlightBookEditions: Array<BookEdition>;
  getStatsByUser: Scalars['JSON']['output'];
  getStatsByUserAndManuscript: Scalars['JSON']['output'];
  getStatsForCompetition: CompetitionStats;
  getUserBookEditionReview?: Maybe<Review>;
  getUserReviews: ReviewPage;
  getVersions: VersionPage;
  getWishlistBooks: Array<BookListItem>;
  getWritingStreak: WritingStreak;
  isSlugAvailable: Scalars['Boolean']['output'];
  previewManuscriptEpub: Scalars['String']['output'];
  previewManuscriptPdf: Scalars['String']['output'];
  userSalesByBookId: UserBookSalesPage;
  validateBookCoverPdfPageSize: Scalars['Boolean']['output'];
  validatePdfPageSize: Scalars['Boolean']['output'];
  walletMessage: WalletMessageEntity;
  walletRefreshToken: WalletRefreshTokenEntity;
};

export type QueryBooksSalesArgs = {
  pagination?: InputMaybe<PaginationParamsDto>;
};

export type QueryCalculatePrintingCostAndCoverSizeArgs = {
  input: CalculatePrintingCostAndCoverSizesInput;
};

export type QueryCalculateShippingCostBasketOrderArgs = {
  addressId: Scalars['String']['input'];
};

export type QueryCalculateShippingCostBuyNowOrderArgs = {
  addressId: Scalars['String']['input'];
  publicationListingId: Scalars['String']['input'];
};

export type QueryCountriesArgs = {
  isStripeConnectedAccountSupported?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryGenerateDownloadPresignedUrlArgs = {
  key: Scalars['String']['input'];
};

export type QueryGenerateUploadPresignedUrlArgs = {
  contentType: ContentType;
};

export type QueryGetAvailableUsernameArgs = {
  availableUsernameInput: AvailableUsernameInput;
};

export type QueryGetBisacGenreThemesArgs = {
  genreIds: Array<Scalars['Int']['input']>;
};

export type QueryGetBookArgs = {
  id: Scalars['String']['input'];
};

export type QueryGetBookAuthorArgs = {
  slug: Scalars['String']['input'];
};

export type QueryGetBookAuthorByIdArgs = {
  id: Scalars['String']['input'];
};

export type QueryGetBookByBookEditionIdArgs = {
  id: Scalars['String']['input'];
};

export type QueryGetBookEditionRatingArgs = {
  bookEditionId: Scalars['String']['input'];
};

export type QueryGetBookLicenseByIdArgs = {
  id: Scalars['String']['input'];
};

export type QueryGetBookLicenseByIdsArgs = {
  ids: Array<Scalars['String']['input']>;
};

export type QueryGetBookLicenseManuscriptUrlArgs = {
  bookLicenseId: Scalars['String']['input'];
};

export type QueryGetBookLicenseOrderByIdArgs = {
  orderId: Scalars['String']['input'];
};

export type QueryGetBookLicenseSalesArgs = {
  bookLicenseId: Scalars['String']['input'];
};

export type QueryGetBookLicensesArgs = {
  excludeLicenseId?: InputMaybe<Scalars['String']['input']>;
  pagination?: InputMaybe<PaginationParamsDto>;
};

export type QueryGetBookReviewsByBookEditionIdArgs = {
  bookEditionId: Scalars['String']['input'];
  pagination?: InputMaybe<PaginationParamsDto>;
};

export type QueryGetBooksArgs = {
  ids: Array<Scalars['String']['input']>;
};

export type QueryGetBooksByListingIdsArgs = {
  ids: Array<Scalars['String']['input']>;
};

export type QueryGetBooksWithSearchCriteriaArgs = {
  filter?: InputMaybe<BookFilterInput>;
  pagination?: InputMaybe<PaginationParamsDto>;
  sort?: InputMaybe<BookSortInput>;
};

export type QueryGetCollaboratorInvitationsByManuscriptIdArgs = {
  manuscriptId: Scalars['String']['input'];
};

export type QueryGetCollaboratorsByManuscriptIdArgs = {
  manuscriptId: Scalars['String']['input'];
};

export type QueryGetEditionDescriptionArgs = {
  editionId: Scalars['Float']['input'];
  manuscriptId: Scalars['String']['input'];
};

export type QueryGetManuscriptAuthorsArgs = {
  manuscriptId?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetManuscriptByIdArgs = {
  id: Scalars['String']['input'];
};

export type QueryGetManuscriptCharactersArgs = {
  manuscriptId: Scalars['String']['input'];
};

export type QueryGetManuscriptPublishingAssetDownloadUrlArgs = {
  assetId: Scalars['String']['input'];
};

export type QueryGetManuscriptPublishingAssetMetadataArgs = {
  manuscriptPublishingId: Scalars['String']['input'];
};

export type QueryGetManuscriptPublishingByIdArgs = {
  manuscriptPublishingId: Scalars['String']['input'];
};

export type QueryGetManuscriptPublishingsArgs = {
  manuscriptId: Scalars['String']['input'];
};

export type QueryGetManuscriptsSummaryArgs = {
  input: ManuscriptsSummaryInput;
};

export type QueryGetMyManuscriptsArgs = {
  origin?: InputMaybe<ManuscriptOriginType>;
  paginationParamsDto?: InputMaybe<PaginationParamsDto>;
};

export type QueryGetMyOwnedPublicationByIdArgs = {
  publicationId: Scalars['String']['input'];
};

export type QueryGetOrderArgs = {
  orderId: Scalars['String']['input'];
};

export type QueryGetOrdersArgs = {
  pagination?: InputMaybe<PaginationParamsDto>;
};

export type QueryGetPublicationAssetArgs = {
  input: GetPublicationAssetInput;
};

export type QueryGetReviewsArgs = {
  pagination?: InputMaybe<PaginationParamsDto>;
};

export type QueryGetStatsByUserArgs = {
  GetStatsByUserInput: GetStatsByUserInput;
};

export type QueryGetStatsByUserAndManuscriptArgs = {
  GetStatsByUserAndManuscriptInput: GetStatsByUserAndManuscriptInput;
};

export type QueryGetStatsForCompetitionArgs = {
  competitionSlug: Scalars['String']['input'];
};

export type QueryGetUserBookEditionReviewArgs = {
  bookEditionId: Scalars['String']['input'];
};

export type QueryGetUserReviewsArgs = {
  pagination?: InputMaybe<PaginationParamsDto>;
};

export type QueryGetVersionsArgs = {
  manuscriptId: Scalars['String']['input'];
  paginationParamsDto?: InputMaybe<PaginationParamsDto>;
};

export type QueryIsSlugAvailableArgs = {
  slug: Scalars['String']['input'];
};

export type QueryPreviewManuscriptEpubArgs = {
  manuscriptId: Scalars['String']['input'];
};

export type QueryPreviewManuscriptPdfArgs = {
  input: PreviewManuscriptPdfInput;
};

export type QueryUserSalesByBookIdArgs = {
  bookId: Scalars['String']['input'];
  pagination?: InputMaybe<PaginationParamsDto>;
};

export type QueryValidateBookCoverPdfPageSizeArgs = {
  pdfKey: Scalars['String']['input'];
  publishingId: Scalars['String']['input'];
};

export type QueryValidatePdfPageSizeArgs = {
  input: ValidatePdfInput;
};

export type QueryWalletRefreshTokenArgs = {
  walletRefreshTokenInput: Scalars['String']['input'];
};

export type Range = {
  max?: InputMaybe<Scalars['Int']['input']>;
  min?: InputMaybe<Scalars['Int']['input']>;
};

export type RejectPublishingInput = {
  manuscriptPublishingId: Scalars['ID']['input'];
  reason: Scalars['String']['input'];
};

export type RemoveCollaboratorInput = {
  /** Collaborator email where to send invitation */
  email: Scalars['String']['input'];
  /** Manuscript ID */
  manuscriptId: Scalars['String']['input'];
};

export type Review = {
  __typename?: 'Review';
  body: Scalars['String']['output'];
  bookEditionId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isVerified?: Maybe<Scalars['Boolean']['output']>;
  rating: Scalars['Int']['output'];
  rejectionReason?: Maybe<Scalars['String']['output']>;
  status: ReviewStatus;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

export type ReviewPage = {
  __typename?: 'ReviewPage';
  count: Scalars['Int']['output'];
  reviews: Array<Review>;
};

export enum ReviewStatus {
  Approved = 'APPROVED',
  Pending = 'PENDING',
  Rejected = 'REJECTED',
}

/** Style of the section title (chapter number, number dot, roman numeral, default) */
export enum SectionTitleStyle {
  ChapterNumberColon = 'CHAPTER_NUMBER_COLON',
  Default = 'DEFAULT',
  NumberDot = 'NUMBER_DOT',
  RomanNumeral = 'ROMAN_NUMERAL',
}

export type SetUserPasswordInput = {
  oldPassword?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type ShippingOptionEntity = {
  __typename?: 'ShippingOptionEntity';
  deduction: Scalars['Float']['output'];
  level: Scalars['String']['output'];
  maximumDays: Scalars['Float']['output'];
  minimumDays: Scalars['Float']['output'];
  production: Scalars['String']['output'];
  servDetail: Scalars['String']['output'];
  servID: Scalars['Float']['output'];
  servName: Scalars['String']['output'];
  totalCost: Scalars['Float']['output'];
  totalDays: Scalars['Float']['output'];
};

export type Slug = {
  __typename?: 'Slug';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** Sort Order */
export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type SubmitPublishingDraftInput = {
  publishingId: Scalars['ID']['input'];
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  type: TagType;
};

/** Type of the tag (book etc.) */
export enum TagType {
  Book = 'BOOK',
}

/** Position of the text (left, center, right) */
export enum TextPosition {
  Center = 'center',
  Left = 'left',
  Right = 'right',
}

/** Type of rights granted by the license */
export enum TypeOfRights {
  Both = 'BOTH',
  ReferenceRights = 'REFERENCE_RIGHTS',
  TrainingRights = 'TRAINING_RIGHTS',
}

export type Units = {
  __typename?: 'Units';
  count: Scalars['Int']['output'];
  salesVolumeInCrypto: Scalars['Int']['output'];
  salesVolumeInFiat: Scalars['Int']['output'];
};

export type UpdateAddressInput = {
  countryId?: InputMaybe<Scalars['Float']['input']>;
  county?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  line1?: InputMaybe<Scalars['String']['input']>;
  line2?: InputMaybe<Scalars['String']['input']>;
  line3?: InputMaybe<Scalars['String']['input']>;
  line4?: InputMaybe<Scalars['String']['input']>;
  postcode?: InputMaybe<Scalars['String']['input']>;
  telephoneNumber?: InputMaybe<Scalars['String']['input']>;
  town?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAuthorInput = {
  authorId: Scalars['String']['input'];
  bio?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCharacterInput = {
  additionalFields?: InputMaybe<Scalars['JSON']['input']>;
  age?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  isDead?: InputMaybe<Scalars['Boolean']['input']>;
  manuscriptId?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  origin?: InputMaybe<Scalars['String']['input']>;
  personalityTraits?: InputMaybe<Scalars['String']['input']>;
  physicalAppearance?: InputMaybe<Scalars['String']['input']>;
  race?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  species?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCharacterMetadataInput = {
  manuscriptId: Scalars['String']['input'];
  metadataArray: Array<MetadataInput>;
};

export type UpdateCharacterRelationInput = {
  newType: Scalars['String']['input'];
  relationId: Scalars['String']['input'];
};

export type UpdateCollaboratorInput = {
  /** Collaborator email where to send invitation */
  email: Scalars['String']['input'];
  /** Manuscript ID */
  manuscriptId: Scalars['String']['input'];
  /** New collaborator Role ID */
  roleId: CollaboratorRoleName;
};

export type UpdateManuscriptInput = {
  genresIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  manuscriptId: Scalars['String']['input'];
  tagIds?: InputMaybe<Array<Scalars['Float']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateManuscriptSettingsInput = {
  addPageNumber: Scalars['Boolean']['input'];
  fontId: Scalars['Int']['input'];
  hasDropcaps: Scalars['Boolean']['input'];
  manuscriptId: Scalars['String']['input'];
  ornamentalBreak?: InputMaybe<Scalars['Int']['input']>;
  pageNumberAlignment: TextPosition;
  sectionTitleAlignment: TextPosition;
  sectionTitleStyle: SectionTitleStyle;
};

export type UpdateProfileInput = {
  /** Profile birthday */
  birthday?: InputMaybe<Scalars['String']['input']>;
  /** User country */
  countryId?: InputMaybe<Scalars['Int']['input']>;
  /** Description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Profile email */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Profile first name */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** Profile gender */
  gender?: InputMaybe<Scalars['String']['input']>;
  /** Profile last name */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Profile slug */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Profile first name */
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProfileViewModeInput = {
  viewMode: ViewMode;
};

export type UpdatePublishingCoverInput = {
  coverKey?: InputMaybe<Scalars['String']['input']>;
  manuscriptPublishingId: Scalars['String']['input'];
  pdfCoverKey?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePublishingDraftInput = {
  assetKey?: InputMaybe<Scalars['String']['input']>;
  authors?: InputMaybe<Array<AuthorInput>>;
  /** Manuscript description */
  description?: InputMaybe<Scalars['String']['input']>;
  editionId?: InputMaybe<Scalars['Float']['input']>;
  format?: InputMaybe<PublicationFormat>;
  isParticipatingInCompetition?: InputMaybe<Scalars['Boolean']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  printSettings?: InputMaybe<PublicationPrintSettingsInput>;
  publishingId: Scalars['ID']['input'];
  settings?: InputMaybe<PublicationSettings>;
};

export type UpdateRelationsInput = {
  manuscriptId: Scalars['String']['input'];
  relations: Array<UpdateCharacterRelationInput>;
};

export type User = {
  __typename?: 'User';
  /** userId */
  id: Scalars['String']['output'];
  /** OAuth provider */
  oauthProviders?: Maybe<Array<OauthProvider>>;
  /** User Profile */
  profile?: Maybe<Profile>;
  /** User Payment Details */
  userPaymentDetails?: Maybe<UserPaymentDetailsEntity>;
  /** username */
  username: Scalars['String']['output'];
  /** User Wallets */
  wallets?: Maybe<Array<Wallet>>;
};

export type UserAuthorIdentities = {
  __typename?: 'UserAuthorIdentities';
  authorsIdentities: Array<BookAuthor>;
  userId: Scalars['String']['output'];
};

export type UserBookSale = {
  __typename?: 'UserBookSale';
  bookAuthorId?: Maybe<Scalars['String']['output']>;
  currency: Scalars['Currency']['output'];
  id: Scalars['String']['output'];
  orderItem: OrderItem;
  orderItemId: Scalars['String']['output'];
  publicationListingId: Scalars['String']['output'];
  status: UserSalesStatus;
  totalInCents: Scalars['BigInt']['output'];
  userId: Scalars['String']['output'];
};

export type UserBookSalesPage = {
  __typename?: 'UserBookSalesPage';
  count: Scalars['Float']['output'];
  items: Array<UserBookSale>;
};

export type UserOwnedPublication = {
  __typename?: 'UserOwnedPublication';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  lastReadAt?: Maybe<Scalars['DateTimeISO']['output']>;
  publication?: Maybe<Publication>;
  publicationId?: Maybe<Scalars['String']['output']>;
  source: Scalars['String']['output'];
  stats?: Maybe<UserOwnedPublicationStats>;
  status: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type UserOwnedPublicationStats = {
  __typename?: 'UserOwnedPublicationStats';
  id: Scalars['ID']['output'];
  percentageRead: Scalars['Float']['output'];
};

export type UserPaymentDetailsEntity = {
  __typename?: 'UserPaymentDetailsEntity';
  stripeConnectedAccountId?: Maybe<Scalars['String']['output']>;
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
};

export enum UserSalesStatus {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Pending = 'PENDING',
  Refunded = 'REFUNDED',
}

export type ValidatePdfInput = {
  pdfKey: Scalars['String']['input'];
};

export type VerifyProfileEntity = {
  __typename?: 'VerifyProfileEntity';
  access_token: Scalars['String']['output'];
  expires_at: Scalars['Int']['output'];
  id_token: Scalars['String']['output'];
  refresh_token: Scalars['String']['output'];
};

export type VerifyProfileInput = {
  isUserUpdatingEmailAddress?: InputMaybe<Scalars['Boolean']['input']>;
  userId: Scalars['String']['input'];
  verificationCode: Scalars['String']['input'];
};

export type Version = {
  __typename?: 'Version';
  /** Version id */
  id: Scalars['String']['output'];
  /** Array of participants */
  participants: Array<Scalars['String']['output']>;
  /** Timestamp */
  timestamp: Scalars['String']['output'];
};

export type VersionPage = {
  __typename?: 'VersionPage';
  count: Scalars['Float']['output'];
  items: Array<Version>;
};

/** View mode for profile */
export enum ViewMode {
  Author = 'AUTHOR',
  Both = 'BOTH',
  Reader = 'READER',
}

export type Wallet = {
  __typename?: 'Wallet';
  address: Scalars['String']['output'];
  isCustodial: Scalars['Boolean']['output'];
  isPrimary: Scalars['String']['output'];
};

export type WalletMessageEntity = {
  __typename?: 'WalletMessageEntity';
  message: Scalars['String']['output'];
  nonce: Scalars['String']['output'];
  statement: Scalars['String']['output'];
};

export type WalletRefreshTokenEntity = {
  __typename?: 'WalletRefreshTokenEntity';
  access_token: Scalars['String']['output'];
  expires_at: Scalars['Int']['output'];
  id_token: Scalars['String']['output'];
};

export type WalletSignInEntity = {
  __typename?: 'WalletSignInEntity';
  access_token: Scalars['String']['output'];
  expires_at: Scalars['Int']['output'];
  id_token: Scalars['String']['output'];
  refresh_token: Scalars['String']['output'];
};

export type WalletSignInInput = {
  chains?: InputMaybe<Array<Scalars['String']['input']>>;
  domain: Scalars['String']['input'];
  features?: InputMaybe<Array<Scalars['String']['input']>>;
  publicKey: Scalars['String']['input'];
  serializedSignature: Scalars['String']['input'];
  serializedSignedMessage: Scalars['String']['input'];
};

export type WalletSignInLegacyInput = {
  publicKey: Scalars['String']['input'];
  serializedSignedMessage: Scalars['String']['input'];
};

export type WritingStreak = {
  __typename?: 'WritingStreak';
  activeDates: Array<Scalars['DateTimeISO']['output']>;
  currentStreak: Scalars['Float']['output'];
};

export type GetCollaboratorsByManuscriptIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;

export type GetCollaboratorsByManuscriptIdQuery = {
  __typename?: 'Query';
  getCollaboratorsByManuscriptId: Array<{
    __typename?: 'Collaborator';
    createdAt: any;
    userId: string;
    role?: CollaboratorRoleName | null;
    user: {
      __typename?: 'User';
      id: string;
      username: string;
      userPaymentDetails?: {
        __typename?: 'UserPaymentDetailsEntity';
        stripeConnectedAccountId?: string | null;
      } | null;
      profile?: {
        __typename?: 'Profile';
        userId: string;
        email?: string | null;
        unverifiedEmail?: string | null;
        firstName?: string | null;
        lastName?: string | null;
        description?: string | null;
        createdAt: string;
        birthday?: any | null;
        gender?: string | null;
        viewMode?: ViewMode | null;
        avatarImageUrl?: string | null;
        bannerImageUrl?: string | null;
        slug?: { __typename?: 'Slug'; name: string } | null;
        country?: { __typename?: 'Country'; id?: number | null } | null;
      } | null;
      oauthProviders?: Array<{
        __typename?: 'OauthProvider';
        name: string;
      }> | null;
      wallets?: Array<{
        __typename?: 'Wallet';
        address: string;
        isCustodial: boolean;
      }> | null;
    };
  }>;
  getCollaboratorInvitationsByManuscriptId: Array<{
    __typename?: 'CollaboratorInvitation';
    email: string;
    role?: CollaboratorRoleName | null;
  }>;
};

export type InviteCollaboratorMutationVariables = Exact<{
  input: InviteCollaboratorInput;
}>;

export type InviteCollaboratorMutation = {
  __typename?: 'Mutation';
  inviteCollaborator: boolean;
};

export type UpdateCollaboratorMutationVariables = Exact<{
  input: UpdateCollaboratorInput;
}>;

export type UpdateCollaboratorMutation = {
  __typename?: 'Mutation';
  updateCollaborator: boolean;
};

export type RemoveCollaboratorMutationVariables = Exact<{
  input: RemoveCollaboratorInput;
}>;

export type RemoveCollaboratorMutation = {
  __typename?: 'Mutation';
  removeCollaborator: boolean;
};

export type GetVersionsQueryVariables = Exact<{
  manuscriptId: Scalars['String']['input'];
  paginationParamsDto?: InputMaybe<PaginationParamsDto>;
}>;

export type GetVersionsQuery = {
  __typename?: 'Query';
  getVersions: {
    __typename?: 'VersionPage';
    count: number;
    items: Array<{
      __typename?: 'Version';
      timestamp: string;
      id: string;
      participants: Array<string>;
    }>;
  };
};

export type RestoreVersionMutationVariables = Exact<{
  manuscriptId: Scalars['String']['input'];
  documentHistoryId: Scalars['String']['input'];
}>;

export type RestoreVersionMutation = {
  __typename?: 'Mutation';
  restoreVersion: boolean;
};

export type GetAuthorQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;

export type GetAuthorQuery = {
  __typename?: 'Query';
  getBookAuthor: {
    __typename?: 'BookAuthor';
    id: string;
    name: string;
    bannerImageUrl?: string | null;
    avatarImageUrl?: string | null;
    bio?: string | null;
    slug: { __typename?: 'Slug'; id: string; name: string };
  };
};

export type GetAuthorByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type GetAuthorByIdQuery = {
  __typename?: 'Query';
  getBookAuthorById: {
    __typename?: 'BookAuthor';
    slug: { __typename?: 'Slug'; name: string };
  };
};

export type CreateBookAuthorMutationVariables = Exact<{
  input: CreateAuthorInput;
}>;

export type CreateBookAuthorMutation = {
  __typename?: 'Mutation';
  createBookAuthor: {
    __typename?: 'BookAuthor';
    id: string;
    name: string;
    bannerImageUrl?: string | null;
    avatarImageUrl?: string | null;
    bio?: string | null;
    slug: { __typename?: 'Slug'; id: string; name: string };
  };
};

export type UpdateBookAuthorMutationVariables = Exact<{
  input: UpdateAuthorInput;
}>;

export type UpdateBookAuthorMutation = {
  __typename?: 'Mutation';
  updateBookAuthor: {
    __typename?: 'BookAuthor';
    id: string;
    name: string;
    bannerImageUrl?: string | null;
    avatarImageUrl?: string | null;
    bio?: string | null;
    slug: { __typename?: 'Slug'; id: string; name: string };
  };
};

export type GetPenBookAuthorsQueryVariables = Exact<{ [key: string]: never }>;

export type GetPenBookAuthorsQuery = {
  __typename?: 'Query';
  getPenBookAuthors: Array<{
    __typename?: 'BookAuthor';
    id: string;
    name: string;
    bannerImageUrl?: string | null;
    avatarImageUrl?: string | null;
    bio?: string | null;
    slug: { __typename?: 'Slug'; id: string; name: string };
  }>;
};

export type GetBestSellerBookEditionsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetBestSellerBookEditionsQuery = {
  __typename?: 'Query';
  getBestSellerBookEditions: Array<{
    __typename?: 'BestSellerCategoryEntity';
    id: number;
    name: string;
    slug: string;
    editions: Array<{
      __typename?: 'BookEdition';
      id: string;
      description: string;
      book: {
        __typename?: 'Book';
        title: string;
        genres?: Array<{
          __typename?: 'BookGenre';
          id: string;
          name: string;
          description?: string | null;
          slug: string;
        }> | null;
        editions?: Array<{
          __typename?: 'BookEdition';
          id: string;
          description: string;
          edition: { __typename?: 'Edition'; id: number; name: string };
          language: { __typename?: 'Language'; id: number; name: string };
          authors: Array<{
            __typename?: 'BookAuthor';
            id: string;
            name: string;
            bannerImageUrl?: string | null;
            avatarImageUrl?: string | null;
            bio?: string | null;
            slug: { __typename?: 'Slug'; id: string; name: string };
          }>;
          publications?: Array<{
            __typename?: 'Publication';
            id: string;
            publishedAt: any;
            pagesCount: number;
            format: PublicationFormat;
            assets?: Array<{
              __typename?: 'Asset';
              id: string;
              key: string;
              type: string;
            }> | null;
            listings?: Array<{
              __typename?: 'PublicationListing';
              id: string;
              createdAt: any;
              priceInCents: any;
              quantity: number;
            }> | null;
            epubMetadata?: {
              __typename?: 'EpubMetadataEntity';
              locations: any;
            } | null;
          }> | null;
        }> | null;
      };
      edition: { __typename?: 'Edition'; id: number; name: string };
      language: { __typename?: 'Language'; id: number; name: string };
      authors: Array<{
        __typename?: 'BookAuthor';
        id: string;
        name: string;
        bannerImageUrl?: string | null;
        avatarImageUrl?: string | null;
        bio?: string | null;
        slug: { __typename?: 'Slug'; id: string; name: string };
      }>;
      publications?: Array<{
        __typename?: 'Publication';
        id: string;
        publishedAt: any;
        pagesCount: number;
        format: PublicationFormat;
        assets?: Array<{
          __typename?: 'Asset';
          id: string;
          key: string;
          type: string;
        }> | null;
        listings?: Array<{
          __typename?: 'PublicationListing';
          id: string;
          createdAt: any;
          priceInCents: any;
          quantity: number;
        }> | null;
        epubMetadata?: {
          __typename?: 'EpubMetadataEntity';
          locations: any;
        } | null;
      }> | null;
    }>;
  }>;
};

export type SetBestSellerBookEditionsMutationVariables = Exact<{
  input:
    | Array<BestSellerCategoryBookEditionInput>
    | BestSellerCategoryBookEditionInput;
}>;

export type SetBestSellerBookEditionsMutation = {
  __typename?: 'Mutation';
  setBestSellerBookEditions: boolean;
};

export type CreateBookLicenseMutationVariables = Exact<{
  input: CreateBookLicenseInput;
}>;

export type CreateBookLicenseMutation = {
  __typename?: 'Mutation';
  createBookLicense: { __typename?: 'BookLicense'; id: string };
};

export type GetBookLicensesQueryVariables = Exact<{
  pagination: PaginationParamsDto;
  excludeLicenseId?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetBookLicensesQuery = {
  __typename?: 'Query';
  getBookLicenses: {
    __typename?: 'BookLicensePage';
    count: number;
    items: Array<{
      __typename?: 'BookLicense';
      id: string;
      title: string;
      description: string;
      priceInCents: any;
      manuscriptAssetKey: string;
      coverAssetKey: string;
      btcInscriptionStatus: BtcInscriptionStatus;
      btcInscriptionId?: string | null;
      createdAt: any;
      updatedAt: any;
      isForCommercialUse: boolean;
      typeOfRights: TypeOfRights;
      isbn?: string | null;
      assets?: Array<{
        __typename?: 'Asset';
        id: string;
        key: string;
        type: string;
      }> | null;
      genres?: Array<{
        __typename?: 'BookGenre';
        id: string;
        name: string;
      }> | null;
      authors?: Array<{
        __typename?: 'BookLicenseAuthor';
        id: string;
        name: string;
      }> | null;
      orders?: Array<{
        __typename?: 'BookLicenseOrder';
        id: string;
        status: BookLicenseOrderStatus;
        solanaPNftAddress?: string | null;
        solanaPNftTxSignature?: string | null;
        postPaymentTxSignature?: string | null;
        signedTemplateIpfsCid?: string | null;
      }> | null;
      metadata?: {
        __typename?: 'BookLicenseMetadataEntity';
        id: string;
        hash: string;
        pages: number;
        tokens: number;
      } | null;
    }>;
  };
};

export type GetBookLicenseByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type GetBookLicenseByIdQuery = {
  __typename?: 'Query';
  getBookLicenseById: {
    __typename?: 'BookLicense';
    id: string;
    title: string;
    description: string;
    priceInCents: any;
    manuscriptAssetKey: string;
    coverAssetKey: string;
    btcInscriptionStatus: BtcInscriptionStatus;
    btcInscriptionId?: string | null;
    createdAt: any;
    updatedAt: any;
    isForCommercialUse: boolean;
    typeOfRights: TypeOfRights;
    isbn?: string | null;
    assets?: Array<{
      __typename?: 'Asset';
      id: string;
      key: string;
      type: string;
    }> | null;
    genres?: Array<{
      __typename?: 'BookGenre';
      id: string;
      name: string;
    }> | null;
    authors?: Array<{
      __typename?: 'BookLicenseAuthor';
      id: string;
      name: string;
    }> | null;
    orders?: Array<{
      __typename?: 'BookLicenseOrder';
      id: string;
      status: BookLicenseOrderStatus;
      solanaPNftAddress?: string | null;
      solanaPNftTxSignature?: string | null;
      postPaymentTxSignature?: string | null;
      signedTemplateIpfsCid?: string | null;
    }> | null;
    metadata?: {
      __typename?: 'BookLicenseMetadataEntity';
      id: string;
      hash: string;
      pages: number;
      tokens: number;
    } | null;
  };
};

export type CreateHelioLicensePaymentMutationVariables = Exact<{
  licenseId: Scalars['String']['input'];
}>;

export type CreateHelioLicensePaymentMutation = {
  __typename?: 'Mutation';
  createHelioLicensePayment: string;
};

export type GetPurchasedBookLicensesQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetPurchasedBookLicensesQuery = {
  __typename?: 'Query';
  getPurchasedBookLicenses: Array<{
    __typename?: 'BookLicense';
    id: string;
    title: string;
    description: string;
    priceInCents: any;
    manuscriptAssetKey: string;
    coverAssetKey: string;
    btcInscriptionStatus: BtcInscriptionStatus;
    btcInscriptionId?: string | null;
    createdAt: any;
    updatedAt: any;
    isForCommercialUse: boolean;
    typeOfRights: TypeOfRights;
    isbn?: string | null;
    assets?: Array<{
      __typename?: 'Asset';
      id: string;
      key: string;
      type: string;
    }> | null;
    genres?: Array<{
      __typename?: 'BookGenre';
      id: string;
      name: string;
    }> | null;
    authors?: Array<{
      __typename?: 'BookLicenseAuthor';
      id: string;
      name: string;
    }> | null;
    orders?: Array<{
      __typename?: 'BookLicenseOrder';
      id: string;
      status: BookLicenseOrderStatus;
      solanaPNftAddress?: string | null;
      solanaPNftTxSignature?: string | null;
      postPaymentTxSignature?: string | null;
      signedTemplateIpfsCid?: string | null;
    }> | null;
    metadata?: {
      __typename?: 'BookLicenseMetadataEntity';
      id: string;
      hash: string;
      pages: number;
      tokens: number;
    } | null;
  }>;
};

export type GetMyBookLicensesQueryVariables = Exact<{ [key: string]: never }>;

export type GetMyBookLicensesQuery = {
  __typename?: 'Query';
  getMyBookLicenses: Array<{
    __typename?: 'BookLicense';
    id: string;
    title: string;
    description: string;
    priceInCents: any;
    manuscriptAssetKey: string;
    coverAssetKey: string;
    btcInscriptionStatus: BtcInscriptionStatus;
    btcInscriptionId?: string | null;
    createdAt: any;
    updatedAt: any;
    isForCommercialUse: boolean;
    typeOfRights: TypeOfRights;
    isbn?: string | null;
    assets?: Array<{
      __typename?: 'Asset';
      id: string;
      key: string;
      type: string;
    }> | null;
    genres?: Array<{
      __typename?: 'BookGenre';
      id: string;
      name: string;
    }> | null;
    authors?: Array<{
      __typename?: 'BookLicenseAuthor';
      id: string;
      name: string;
    }> | null;
    orders?: Array<{
      __typename?: 'BookLicenseOrder';
      id: string;
      status: BookLicenseOrderStatus;
      solanaPNftAddress?: string | null;
      solanaPNftTxSignature?: string | null;
      postPaymentTxSignature?: string | null;
      signedTemplateIpfsCid?: string | null;
    }> | null;
    metadata?: {
      __typename?: 'BookLicenseMetadataEntity';
      id: string;
      hash: string;
      pages: number;
      tokens: number;
    } | null;
  }>;
};

export type GetBookLicenseByIdsQueryVariables = Exact<{
  ids: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;

export type GetBookLicenseByIdsQuery = {
  __typename?: 'Query';
  getBookLicenseByIds: Array<{
    __typename?: 'BookLicense';
    id: string;
    title: string;
    description: string;
    priceInCents: any;
    manuscriptAssetKey: string;
    coverAssetKey: string;
    btcInscriptionStatus: BtcInscriptionStatus;
    btcInscriptionId?: string | null;
    createdAt: any;
    updatedAt: any;
    isForCommercialUse: boolean;
    typeOfRights: TypeOfRights;
    isbn?: string | null;
    assets?: Array<{
      __typename?: 'Asset';
      id: string;
      key: string;
      type: string;
    }> | null;
    genres?: Array<{
      __typename?: 'BookGenre';
      id: string;
      name: string;
    }> | null;
    authors?: Array<{
      __typename?: 'BookLicenseAuthor';
      id: string;
      name: string;
    }> | null;
    orders?: Array<{
      __typename?: 'BookLicenseOrder';
      id: string;
      status: BookLicenseOrderStatus;
      solanaPNftAddress?: string | null;
      solanaPNftTxSignature?: string | null;
      postPaymentTxSignature?: string | null;
      signedTemplateIpfsCid?: string | null;
    }> | null;
    metadata?: {
      __typename?: 'BookLicenseMetadataEntity';
      id: string;
      hash: string;
      pages: number;
      tokens: number;
    } | null;
  }>;
};

export type GetBookLicenseOrderByIdQueryVariables = Exact<{
  orderId: Scalars['String']['input'];
}>;

export type GetBookLicenseOrderByIdQuery = {
  __typename?: 'Query';
  getBookLicenseOrderById: {
    __typename?: 'BookLicenseOrder';
    id: string;
    status: BookLicenseOrderStatus;
    solanaPNftAddress?: string | null;
    solanaPNftTxSignature?: string | null;
    postPaymentTxSignature?: string | null;
    signedTemplateIpfsCid?: string | null;
  };
};

export type GetBookLicenseManuscriptUrlQueryVariables = Exact<{
  bookLicenseId: Scalars['String']['input'];
}>;

export type GetBookLicenseManuscriptUrlQuery = {
  __typename?: 'Query';
  getBookLicenseManuscriptUrl: string;
};

export type GetBookLicenseSalesQueryVariables = Exact<{
  bookLicenseId: Scalars['String']['input'];
}>;

export type GetBookLicenseSalesQuery = {
  __typename?: 'Query';
  getBookLicenseSales: {
    __typename?: 'BookLicenseSaleEntity';
    volume?: number | null;
    orders: Array<{
      __typename?: 'BookLicenseOrder';
      id: string;
      solanaPNftAddress?: string | null;
      postPaymentTxSignature?: string | null;
      signedTemplateIpfsCid?: string | null;
      createdAt: any;
    }>;
  };
};

export type GetBookEditionRatingQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;

export type GetBookEditionRatingQuery = {
  __typename?: 'Query';
  getBookEditionRating: {
    __typename?: 'BookRating';
    count: number;
    averageRating: number;
    ratingCounts: Array<number>;
  };
};

export type GetUserBookReviewQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;

export type GetUserBookReviewQuery = {
  __typename?: 'Query';
  getUserBookEditionReview?: {
    __typename?: 'Review';
    id: string;
    status: ReviewStatus;
    body: string;
    rating: number;
    rejectionReason?: string | null;
    createdAt: any;
  } | null;
};

export type GetBookEditionReviewsQueryVariables = Exact<{
  input: Scalars['String']['input'];
  pagination?: InputMaybe<PaginationParamsDto>;
}>;

export type GetBookEditionReviewsQuery = {
  __typename?: 'Query';
  getBookReviewsByBookEditionId: {
    __typename?: 'ReviewPage';
    count: number;
    reviews: Array<{
      __typename?: 'Review';
      id: string;
      rating: number;
      body: string;
      createdAt: any;
      isVerified?: boolean | null;
      user: {
        __typename?: 'User';
        id: string;
        username: string;
        userPaymentDetails?: {
          __typename?: 'UserPaymentDetailsEntity';
          stripeConnectedAccountId?: string | null;
        } | null;
        profile?: {
          __typename?: 'Profile';
          userId: string;
          email?: string | null;
          unverifiedEmail?: string | null;
          firstName?: string | null;
          lastName?: string | null;
          description?: string | null;
          createdAt: string;
          birthday?: any | null;
          gender?: string | null;
          viewMode?: ViewMode | null;
          avatarImageUrl?: string | null;
          bannerImageUrl?: string | null;
          slug?: { __typename?: 'Slug'; name: string } | null;
          country?: { __typename?: 'Country'; id?: number | null } | null;
        } | null;
        oauthProviders?: Array<{
          __typename?: 'OauthProvider';
          name: string;
        }> | null;
        wallets?: Array<{
          __typename?: 'Wallet';
          address: string;
          isCustodial: boolean;
        }> | null;
      };
    }>;
  };
};

export type GetReviewsQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationParamsDto>;
}>;

export type GetReviewsQuery = {
  __typename?: 'Query';
  getReviews: {
    __typename?: 'ReviewPage';
    count: number;
    reviews: Array<{
      __typename?: 'Review';
      id: string;
      rating: number;
      body: string;
      status: ReviewStatus;
      bookEditionId: string;
      user: {
        __typename?: 'User';
        id: string;
        username: string;
        userPaymentDetails?: {
          __typename?: 'UserPaymentDetailsEntity';
          stripeConnectedAccountId?: string | null;
        } | null;
        profile?: {
          __typename?: 'Profile';
          userId: string;
          email?: string | null;
          unverifiedEmail?: string | null;
          firstName?: string | null;
          lastName?: string | null;
          description?: string | null;
          createdAt: string;
          birthday?: any | null;
          gender?: string | null;
          viewMode?: ViewMode | null;
          avatarImageUrl?: string | null;
          bannerImageUrl?: string | null;
          slug?: { __typename?: 'Slug'; name: string } | null;
          country?: { __typename?: 'Country'; id?: number | null } | null;
        } | null;
        oauthProviders?: Array<{
          __typename?: 'OauthProvider';
          name: string;
        }> | null;
        wallets?: Array<{
          __typename?: 'Wallet';
          address: string;
          isCustodial: boolean;
        }> | null;
      };
    }>;
  };
};

export type AddReviewMutationVariables = Exact<{
  input: AddReviewInput;
}>;

export type AddReviewMutation = {
  __typename?: 'Mutation';
  addReview: { __typename?: 'Review'; id: string };
};

export type EditReviewMutationVariables = Exact<{
  input: EditReviewInput;
  reviewId: Scalars['String']['input'];
}>;

export type EditReviewMutation = {
  __typename?: 'Mutation';
  editReview: { __typename?: 'Review'; id: string };
};

export type ApproveReviewMutationVariables = Exact<{
  reviewId: Scalars['String']['input'];
}>;

export type ApproveReviewMutation = {
  __typename?: 'Mutation';
  approveReview: boolean;
};

export type RejectReviewMutationVariables = Exact<{
  reviewId: Scalars['String']['input'];
  reason: Scalars['String']['input'];
}>;

export type RejectReviewMutation = {
  __typename?: 'Mutation';
  rejectReview: boolean;
};

export type GetBooksWithSearchCriteriaQueryVariables = Exact<{
  filter?: InputMaybe<BookFilterInput>;
  sort?: InputMaybe<BookSortInput>;
  pagination?: InputMaybe<PaginationParamsDto>;
}>;

export type GetBooksWithSearchCriteriaQuery = {
  __typename?: 'Query';
  getBooksWithSearchCriteria: {
    __typename?: 'BookSearchPage';
    count: number;
    items: Array<{
      __typename?: 'BookSearchResult';
      id: string;
      bookEditionId: string;
      editionId: number;
      title: string;
      minPrice?: number | null;
      maxPrice?: number | null;
      assets?: Array<{
        __typename?: 'Asset';
        id: string;
        key: string;
        type: string;
      }> | null;
      authors: Array<{
        __typename?: 'BookAuthor';
        id: string;
        name: string;
        bannerImageUrl?: string | null;
        avatarImageUrl?: string | null;
        bio?: string | null;
        slug: { __typename?: 'Slug'; id: string; name: string };
      }>;
    }>;
  };
};

export type GetBookByBookEditionIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type GetBookByBookEditionIdQuery = {
  __typename?: 'Query';
  getBookByBookEditionId: {
    __typename?: 'Book';
    id: string;
    title: string;
    genres?: Array<{
      __typename?: 'BookGenre';
      id: string;
      name: string;
      description?: string | null;
      slug: string;
    }> | null;
    editions?: Array<{
      __typename?: 'BookEdition';
      id: string;
      description: string;
      edition: { __typename?: 'Edition'; id: number; name: string };
      language: { __typename?: 'Language'; id: number; name: string };
      authors: Array<{
        __typename?: 'BookAuthor';
        id: string;
        name: string;
        bannerImageUrl?: string | null;
        avatarImageUrl?: string | null;
        bio?: string | null;
        slug: { __typename?: 'Slug'; id: string; name: string };
      }>;
      publications?: Array<{
        __typename?: 'Publication';
        id: string;
        publishedAt: any;
        pagesCount: number;
        format: PublicationFormat;
        assets?: Array<{
          __typename?: 'Asset';
          id: string;
          key: string;
          type: string;
        }> | null;
        listings?: Array<{
          __typename?: 'PublicationListing';
          id: string;
          createdAt: any;
          priceInCents: any;
          quantity: number;
        }> | null;
        epubMetadata?: {
          __typename?: 'EpubMetadataEntity';
          locations: any;
        } | null;
      }> | null;
    }> | null;
  };
};

export type GetPublicationAssetQueryVariables = Exact<{
  input: GetPublicationAssetInput;
}>;

export type GetPublicationAssetQuery = {
  __typename?: 'Query';
  getPublicationAsset: string;
};

export type GetBooksByListingIdsQueryVariables = Exact<{
  input: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;

export type GetBooksByListingIdsQuery = {
  __typename?: 'Query';
  getBooksByListingIds: Array<{
    __typename?: 'Book';
    title: string;
    genres?: Array<{
      __typename?: 'BookGenre';
      id: string;
      name: string;
      description?: string | null;
      slug: string;
    }> | null;
    editions?: Array<{
      __typename?: 'BookEdition';
      id: string;
      description: string;
      edition: { __typename?: 'Edition'; id: number; name: string };
      language: { __typename?: 'Language'; id: number; name: string };
      authors: Array<{
        __typename?: 'BookAuthor';
        id: string;
        name: string;
        bannerImageUrl?: string | null;
        avatarImageUrl?: string | null;
        bio?: string | null;
        slug: { __typename?: 'Slug'; id: string; name: string };
      }>;
      publications?: Array<{
        __typename?: 'Publication';
        id: string;
        publishedAt: any;
        pagesCount: number;
        format: PublicationFormat;
        assets?: Array<{
          __typename?: 'Asset';
          id: string;
          key: string;
          type: string;
        }> | null;
        listings?: Array<{
          __typename?: 'PublicationListing';
          id: string;
          createdAt: any;
          priceInCents: any;
          quantity: number;
        }> | null;
        epubMetadata?: {
          __typename?: 'EpubMetadataEntity';
          locations: any;
        } | null;
      }> | null;
    }> | null;
  }>;
};

export type GetEditionsQueryVariables = Exact<{ [key: string]: never }>;

export type GetEditionsQuery = {
  __typename?: 'Query';
  getEditions: Array<{ __typename?: 'Edition'; id: number; name: string }>;
};

export type GetBookTagsQueryVariables = Exact<{ [key: string]: never }>;

export type GetBookTagsQuery = {
  __typename?: 'Query';
  getBookTags: Array<{ __typename?: 'Tag'; id: number; name: string }>;
};

export type GetMyOwnedPublicationsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetMyOwnedPublicationsQuery = {
  __typename?: 'Query';
  getMyOwnedPublications: Array<{
    __typename?: 'UserOwnedPublication';
    id: string;
    lastReadAt?: any | null;
    status: string;
    source: string;
    createdAt: any;
    publication?: {
      __typename?: 'Publication';
      id: string;
      publishedAt: any;
      pagesCount: number;
      format: PublicationFormat;
      bookEdition: {
        __typename?: 'BookEdition';
        id: string;
        description: string;
        book: {
          __typename?: 'Book';
          title: string;
          genres?: Array<{
            __typename?: 'BookGenre';
            id: string;
            name: string;
            description?: string | null;
            slug: string;
          }> | null;
          editions?: Array<{
            __typename?: 'BookEdition';
            id: string;
            description: string;
            edition: { __typename?: 'Edition'; id: number; name: string };
            language: { __typename?: 'Language'; id: number; name: string };
            authors: Array<{
              __typename?: 'BookAuthor';
              id: string;
              name: string;
              bannerImageUrl?: string | null;
              avatarImageUrl?: string | null;
              bio?: string | null;
              slug: { __typename?: 'Slug'; id: string; name: string };
            }>;
            publications?: Array<{
              __typename?: 'Publication';
              id: string;
              publishedAt: any;
              pagesCount: number;
              format: PublicationFormat;
              assets?: Array<{
                __typename?: 'Asset';
                id: string;
                key: string;
                type: string;
              }> | null;
              listings?: Array<{
                __typename?: 'PublicationListing';
                id: string;
                createdAt: any;
                priceInCents: any;
                quantity: number;
              }> | null;
              epubMetadata?: {
                __typename?: 'EpubMetadataEntity';
                locations: any;
              } | null;
            }> | null;
          }> | null;
        };
        edition: { __typename?: 'Edition'; id: number; name: string };
        language: { __typename?: 'Language'; id: number; name: string };
        authors: Array<{
          __typename?: 'BookAuthor';
          id: string;
          name: string;
          bannerImageUrl?: string | null;
          avatarImageUrl?: string | null;
          bio?: string | null;
          slug: { __typename?: 'Slug'; id: string; name: string };
        }>;
        publications?: Array<{
          __typename?: 'Publication';
          id: string;
          publishedAt: any;
          pagesCount: number;
          format: PublicationFormat;
          assets?: Array<{
            __typename?: 'Asset';
            id: string;
            key: string;
            type: string;
          }> | null;
          listings?: Array<{
            __typename?: 'PublicationListing';
            id: string;
            createdAt: any;
            priceInCents: any;
            quantity: number;
          }> | null;
          epubMetadata?: {
            __typename?: 'EpubMetadataEntity';
            locations: any;
          } | null;
        }> | null;
      };
      assets?: Array<{
        __typename?: 'Asset';
        id: string;
        key: string;
        type: string;
      }> | null;
      listings?: Array<{
        __typename?: 'PublicationListing';
        id: string;
        createdAt: any;
        priceInCents: any;
        quantity: number;
      }> | null;
      epubMetadata?: {
        __typename?: 'EpubMetadataEntity';
        locations: any;
      } | null;
    } | null;
    stats?: {
      __typename?: 'UserOwnedPublicationStats';
      percentageRead: number;
    } | null;
  }>;
};

export type GetMyOwnedPublicationByIdQueryVariables = Exact<{
  publicationId: Scalars['String']['input'];
}>;

export type GetMyOwnedPublicationByIdQuery = {
  __typename?: 'Query';
  getMyOwnedPublicationById: {
    __typename?: 'UserOwnedPublication';
    id: string;
    lastReadAt?: any | null;
    status: string;
    source: string;
    createdAt: any;
    publication?: {
      __typename?: 'Publication';
      id: string;
      publishedAt: any;
      pagesCount: number;
      format: PublicationFormat;
      bookEdition: {
        __typename?: 'BookEdition';
        id: string;
        description: string;
        book: {
          __typename?: 'Book';
          title: string;
          genres?: Array<{
            __typename?: 'BookGenre';
            id: string;
            name: string;
            description?: string | null;
            slug: string;
          }> | null;
          editions?: Array<{
            __typename?: 'BookEdition';
            id: string;
            description: string;
            edition: { __typename?: 'Edition'; id: number; name: string };
            language: { __typename?: 'Language'; id: number; name: string };
            authors: Array<{
              __typename?: 'BookAuthor';
              id: string;
              name: string;
              bannerImageUrl?: string | null;
              avatarImageUrl?: string | null;
              bio?: string | null;
              slug: { __typename?: 'Slug'; id: string; name: string };
            }>;
            publications?: Array<{
              __typename?: 'Publication';
              id: string;
              publishedAt: any;
              pagesCount: number;
              format: PublicationFormat;
              assets?: Array<{
                __typename?: 'Asset';
                id: string;
                key: string;
                type: string;
              }> | null;
              listings?: Array<{
                __typename?: 'PublicationListing';
                id: string;
                createdAt: any;
                priceInCents: any;
                quantity: number;
              }> | null;
              epubMetadata?: {
                __typename?: 'EpubMetadataEntity';
                locations: any;
              } | null;
            }> | null;
          }> | null;
        };
        edition: { __typename?: 'Edition'; id: number; name: string };
        language: { __typename?: 'Language'; id: number; name: string };
        authors: Array<{
          __typename?: 'BookAuthor';
          id: string;
          name: string;
          bannerImageUrl?: string | null;
          avatarImageUrl?: string | null;
          bio?: string | null;
          slug: { __typename?: 'Slug'; id: string; name: string };
        }>;
        publications?: Array<{
          __typename?: 'Publication';
          id: string;
          publishedAt: any;
          pagesCount: number;
          format: PublicationFormat;
          assets?: Array<{
            __typename?: 'Asset';
            id: string;
            key: string;
            type: string;
          }> | null;
          listings?: Array<{
            __typename?: 'PublicationListing';
            id: string;
            createdAt: any;
            priceInCents: any;
            quantity: number;
          }> | null;
          epubMetadata?: {
            __typename?: 'EpubMetadataEntity';
            locations: any;
          } | null;
        }> | null;
      };
      assets?: Array<{
        __typename?: 'Asset';
        id: string;
        key: string;
        type: string;
      }> | null;
      listings?: Array<{
        __typename?: 'PublicationListing';
        id: string;
        createdAt: any;
        priceInCents: any;
        quantity: number;
      }> | null;
      epubMetadata?: {
        __typename?: 'EpubMetadataEntity';
        locations: any;
      } | null;
    } | null;
    stats?: {
      __typename?: 'UserOwnedPublicationStats';
      percentageRead: number;
    } | null;
  };
};

export type GetMyOwnedPublicationsMinimalQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetMyOwnedPublicationsMinimalQuery = {
  __typename?: 'Query';
  getMyOwnedPublications: Array<{
    __typename?: 'UserOwnedPublication';
    publicationId?: string | null;
    createdAt: any;
  }>;
};

export type SetPercentageReadMutationVariables = Exact<{
  publicationId: Scalars['String']['input'];
  percentage: Scalars['Float']['input'];
}>;

export type SetPercentageReadMutation = {
  __typename?: 'Mutation';
  setPercentageRead: boolean;
};

export type GetBookGenresQueryVariables = Exact<{ [key: string]: never }>;

export type GetBookGenresQuery = {
  __typename?: 'Query';
  getBookGenres: Array<{
    __typename?: 'BookGenre';
    id: string;
    name: string;
    slug: string;
    description?: string | null;
  }>;
};

export type GetBookGenresWithBooksQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetBookGenresWithBooksQuery = {
  __typename?: 'Query';
  getBookGenres: Array<{
    __typename?: 'BookGenre';
    id: string;
    name: string;
    description?: string | null;
    slug: string;
    books?: Array<{
      __typename?: 'Book';
      title: string;
      genres?: Array<{
        __typename?: 'BookGenre';
        id: string;
        name: string;
        description?: string | null;
        slug: string;
      }> | null;
      editions?: Array<{
        __typename?: 'BookEdition';
        id: string;
        description: string;
        edition: { __typename?: 'Edition'; id: number; name: string };
        language: { __typename?: 'Language'; id: number; name: string };
        authors: Array<{
          __typename?: 'BookAuthor';
          id: string;
          name: string;
          bannerImageUrl?: string | null;
          avatarImageUrl?: string | null;
          bio?: string | null;
          slug: { __typename?: 'Slug'; id: string; name: string };
        }>;
        publications?: Array<{
          __typename?: 'Publication';
          id: string;
          publishedAt: any;
          pagesCount: number;
          format: PublicationFormat;
          assets?: Array<{
            __typename?: 'Asset';
            id: string;
            key: string;
            type: string;
          }> | null;
          listings?: Array<{
            __typename?: 'PublicationListing';
            id: string;
            createdAt: any;
            priceInCents: any;
            quantity: number;
          }> | null;
          epubMetadata?: {
            __typename?: 'EpubMetadataEntity';
            locations: any;
          } | null;
        }> | null;
      }> | null;
    }> | null;
  }>;
};

export type GetBookCompetitionsWithBooksQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetBookCompetitionsWithBooksQuery = {
  __typename?: 'Query';
  getBookCompetitions: Array<{
    __typename?: 'BookCompetition';
    id: string;
    name: string;
    description: string;
    imageUrl?: string | null;
    slug: string;
    books?: Array<{
      __typename?: 'Book';
      title: string;
      genres?: Array<{
        __typename?: 'BookGenre';
        id: string;
        name: string;
        description?: string | null;
        slug: string;
      }> | null;
      editions?: Array<{
        __typename?: 'BookEdition';
        id: string;
        description: string;
        edition: { __typename?: 'Edition'; id: number; name: string };
        language: { __typename?: 'Language'; id: number; name: string };
        authors: Array<{
          __typename?: 'BookAuthor';
          id: string;
          name: string;
          bannerImageUrl?: string | null;
          avatarImageUrl?: string | null;
          bio?: string | null;
          slug: { __typename?: 'Slug'; id: string; name: string };
        }>;
        publications?: Array<{
          __typename?: 'Publication';
          id: string;
          publishedAt: any;
          pagesCount: number;
          format: PublicationFormat;
          assets?: Array<{
            __typename?: 'Asset';
            id: string;
            key: string;
            type: string;
          }> | null;
          listings?: Array<{
            __typename?: 'PublicationListing';
            id: string;
            createdAt: any;
            priceInCents: any;
            quantity: number;
          }> | null;
          epubMetadata?: {
            __typename?: 'EpubMetadataEntity';
            locations: any;
          } | null;
        }> | null;
      }> | null;
    }> | null;
  }>;
};

export type GetStatsForCompetitionQueryVariables = Exact<{
  competitionSlug: Scalars['String']['input'];
}>;

export type GetStatsForCompetitionQuery = {
  __typename?: 'Query';
  getStatsForCompetition: {
    __typename?: 'CompetitionStats';
    globalAverageRating: number;
    weight: number;
    leaderboard: Array<{
      __typename?: 'BookLeaderboard';
      bookId: string;
      bookName: string;
      publishedAt: any;
      score: number;
      position: number;
      assets?: Array<{
        __typename?: 'Asset';
        id: string;
        key: string;
        type: string;
      }> | null;
      authors: Array<{
        __typename?: 'BookAuthor';
        id: string;
        name: string;
        bannerImageUrl?: string | null;
        avatarImageUrl?: string | null;
        bio?: string | null;
        slug: { __typename?: 'Slug'; id: string; name: string };
      }>;
    }>;
  };
};

export type GenerateUploadPresignedUrlQueryVariables = Exact<{
  contentType: ContentType;
}>;

export type GenerateUploadPresignedUrlQuery = {
  __typename?: 'Query';
  generateUploadPresignedUrl: {
    __typename?: 'PresignedUrl';
    url: string;
    key: string;
  };
};

export type GenerateDownloadPresignedUrlQueryVariables = Exact<{
  key: Scalars['String']['input'];
}>;

export type GenerateDownloadPresignedUrlQuery = {
  __typename?: 'Query';
  generateDownloadPresignedUrl: string;
};

export type AddFreeBookToLibraryMutationVariables = Exact<{
  publicationId: Scalars['String']['input'];
}>;

export type AddFreeBookToLibraryMutation = {
  __typename?: 'Mutation';
  addFreeBookToLibrary: boolean;
};

export type AddPublicationListingsToBasketMutationVariables = Exact<{
  input: Array<BasketItemInput> | BasketItemInput;
}>;

export type AddPublicationListingsToBasketMutation = {
  __typename?: 'Mutation';
  addPublicationListingsToBasket: {
    __typename?: 'Basket';
    items: Array<{
      __typename?: 'BasketItem';
      publicationListingId: string;
      quantity: number;
      publicationsListing: {
        __typename?: 'PublicationListing';
        priceInCents: any;
        publication: {
          __typename?: 'Publication';
          id: string;
          publishedAt: any;
          pagesCount: number;
          format: PublicationFormat;
          bookEdition: {
            __typename?: 'BookEdition';
            id: string;
            description: string;
            book: {
              __typename?: 'Book';
              title: string;
              genres?: Array<{
                __typename?: 'BookGenre';
                id: string;
                name: string;
                description?: string | null;
                slug: string;
              }> | null;
              editions?: Array<{
                __typename?: 'BookEdition';
                id: string;
                description: string;
                edition: { __typename?: 'Edition'; id: number; name: string };
                language: { __typename?: 'Language'; id: number; name: string };
                authors: Array<{
                  __typename?: 'BookAuthor';
                  id: string;
                  name: string;
                  bannerImageUrl?: string | null;
                  avatarImageUrl?: string | null;
                  bio?: string | null;
                  slug: { __typename?: 'Slug'; id: string; name: string };
                }>;
                publications?: Array<{
                  __typename?: 'Publication';
                  id: string;
                  publishedAt: any;
                  pagesCount: number;
                  format: PublicationFormat;
                  assets?: Array<{
                    __typename?: 'Asset';
                    id: string;
                    key: string;
                    type: string;
                  }> | null;
                  listings?: Array<{
                    __typename?: 'PublicationListing';
                    id: string;
                    createdAt: any;
                    priceInCents: any;
                    quantity: number;
                  }> | null;
                  epubMetadata?: {
                    __typename?: 'EpubMetadataEntity';
                    locations: any;
                  } | null;
                }> | null;
              }> | null;
            };
            edition: { __typename?: 'Edition'; id: number; name: string };
            language: { __typename?: 'Language'; id: number; name: string };
            authors: Array<{
              __typename?: 'BookAuthor';
              id: string;
              name: string;
              bannerImageUrl?: string | null;
              avatarImageUrl?: string | null;
              bio?: string | null;
              slug: { __typename?: 'Slug'; id: string; name: string };
            }>;
            publications?: Array<{
              __typename?: 'Publication';
              id: string;
              publishedAt: any;
              pagesCount: number;
              format: PublicationFormat;
              assets?: Array<{
                __typename?: 'Asset';
                id: string;
                key: string;
                type: string;
              }> | null;
              listings?: Array<{
                __typename?: 'PublicationListing';
                id: string;
                createdAt: any;
                priceInCents: any;
                quantity: number;
              }> | null;
              epubMetadata?: {
                __typename?: 'EpubMetadataEntity';
                locations: any;
              } | null;
            }> | null;
          };
          assets?: Array<{
            __typename?: 'Asset';
            id: string;
            key: string;
            type: string;
          }> | null;
          listings?: Array<{
            __typename?: 'PublicationListing';
            id: string;
            createdAt: any;
            priceInCents: any;
            quantity: number;
          }> | null;
          epubMetadata?: {
            __typename?: 'EpubMetadataEntity';
            locations: any;
          } | null;
        };
      };
    }>;
  };
};

export type RemovePublicationListingFromBasketMutationVariables = Exact<{
  input: Scalars['String']['input'];
}>;

export type RemovePublicationListingFromBasketMutation = {
  __typename?: 'Mutation';
  removePublicationListingFromBasket: {
    __typename?: 'Basket';
    items: Array<{
      __typename?: 'BasketItem';
      publicationListingId: string;
      quantity: number;
      publicationsListing: {
        __typename?: 'PublicationListing';
        priceInCents: any;
        publication: {
          __typename?: 'Publication';
          id: string;
          publishedAt: any;
          pagesCount: number;
          format: PublicationFormat;
          bookEdition: {
            __typename?: 'BookEdition';
            id: string;
            description: string;
            book: {
              __typename?: 'Book';
              title: string;
              genres?: Array<{
                __typename?: 'BookGenre';
                id: string;
                name: string;
                description?: string | null;
                slug: string;
              }> | null;
              editions?: Array<{
                __typename?: 'BookEdition';
                id: string;
                description: string;
                edition: { __typename?: 'Edition'; id: number; name: string };
                language: { __typename?: 'Language'; id: number; name: string };
                authors: Array<{
                  __typename?: 'BookAuthor';
                  id: string;
                  name: string;
                  bannerImageUrl?: string | null;
                  avatarImageUrl?: string | null;
                  bio?: string | null;
                  slug: { __typename?: 'Slug'; id: string; name: string };
                }>;
                publications?: Array<{
                  __typename?: 'Publication';
                  id: string;
                  publishedAt: any;
                  pagesCount: number;
                  format: PublicationFormat;
                  assets?: Array<{
                    __typename?: 'Asset';
                    id: string;
                    key: string;
                    type: string;
                  }> | null;
                  listings?: Array<{
                    __typename?: 'PublicationListing';
                    id: string;
                    createdAt: any;
                    priceInCents: any;
                    quantity: number;
                  }> | null;
                  epubMetadata?: {
                    __typename?: 'EpubMetadataEntity';
                    locations: any;
                  } | null;
                }> | null;
              }> | null;
            };
            edition: { __typename?: 'Edition'; id: number; name: string };
            language: { __typename?: 'Language'; id: number; name: string };
            authors: Array<{
              __typename?: 'BookAuthor';
              id: string;
              name: string;
              bannerImageUrl?: string | null;
              avatarImageUrl?: string | null;
              bio?: string | null;
              slug: { __typename?: 'Slug'; id: string; name: string };
            }>;
            publications?: Array<{
              __typename?: 'Publication';
              id: string;
              publishedAt: any;
              pagesCount: number;
              format: PublicationFormat;
              assets?: Array<{
                __typename?: 'Asset';
                id: string;
                key: string;
                type: string;
              }> | null;
              listings?: Array<{
                __typename?: 'PublicationListing';
                id: string;
                createdAt: any;
                priceInCents: any;
                quantity: number;
              }> | null;
              epubMetadata?: {
                __typename?: 'EpubMetadataEntity';
                locations: any;
              } | null;
            }> | null;
          };
          assets?: Array<{
            __typename?: 'Asset';
            id: string;
            key: string;
            type: string;
          }> | null;
          listings?: Array<{
            __typename?: 'PublicationListing';
            id: string;
            createdAt: any;
            priceInCents: any;
            quantity: number;
          }> | null;
          epubMetadata?: {
            __typename?: 'EpubMetadataEntity';
            locations: any;
          } | null;
        };
      };
    }>;
  };
};

export type UpdatePublicationListingFromBasketMutationVariables = Exact<{
  listingId: Scalars['String']['input'];
  quantity: Scalars['Float']['input'];
}>;

export type UpdatePublicationListingFromBasketMutation = {
  __typename?: 'Mutation';
  updatePublicationListingFromBasket: {
    __typename?: 'Basket';
    items: Array<{
      __typename?: 'BasketItem';
      publicationListingId: string;
      quantity: number;
      publicationsListing: {
        __typename?: 'PublicationListing';
        priceInCents: any;
        publication: {
          __typename?: 'Publication';
          id: string;
          publishedAt: any;
          pagesCount: number;
          format: PublicationFormat;
          bookEdition: {
            __typename?: 'BookEdition';
            id: string;
            description: string;
            book: {
              __typename?: 'Book';
              title: string;
              genres?: Array<{
                __typename?: 'BookGenre';
                id: string;
                name: string;
                description?: string | null;
                slug: string;
              }> | null;
              editions?: Array<{
                __typename?: 'BookEdition';
                id: string;
                description: string;
                edition: { __typename?: 'Edition'; id: number; name: string };
                language: { __typename?: 'Language'; id: number; name: string };
                authors: Array<{
                  __typename?: 'BookAuthor';
                  id: string;
                  name: string;
                  bannerImageUrl?: string | null;
                  avatarImageUrl?: string | null;
                  bio?: string | null;
                  slug: { __typename?: 'Slug'; id: string; name: string };
                }>;
                publications?: Array<{
                  __typename?: 'Publication';
                  id: string;
                  publishedAt: any;
                  pagesCount: number;
                  format: PublicationFormat;
                  assets?: Array<{
                    __typename?: 'Asset';
                    id: string;
                    key: string;
                    type: string;
                  }> | null;
                  listings?: Array<{
                    __typename?: 'PublicationListing';
                    id: string;
                    createdAt: any;
                    priceInCents: any;
                    quantity: number;
                  }> | null;
                  epubMetadata?: {
                    __typename?: 'EpubMetadataEntity';
                    locations: any;
                  } | null;
                }> | null;
              }> | null;
            };
            edition: { __typename?: 'Edition'; id: number; name: string };
            language: { __typename?: 'Language'; id: number; name: string };
            authors: Array<{
              __typename?: 'BookAuthor';
              id: string;
              name: string;
              bannerImageUrl?: string | null;
              avatarImageUrl?: string | null;
              bio?: string | null;
              slug: { __typename?: 'Slug'; id: string; name: string };
            }>;
            publications?: Array<{
              __typename?: 'Publication';
              id: string;
              publishedAt: any;
              pagesCount: number;
              format: PublicationFormat;
              assets?: Array<{
                __typename?: 'Asset';
                id: string;
                key: string;
                type: string;
              }> | null;
              listings?: Array<{
                __typename?: 'PublicationListing';
                id: string;
                createdAt: any;
                priceInCents: any;
                quantity: number;
              }> | null;
              epubMetadata?: {
                __typename?: 'EpubMetadataEntity';
                locations: any;
              } | null;
            }> | null;
          };
          assets?: Array<{
            __typename?: 'Asset';
            id: string;
            key: string;
            type: string;
          }> | null;
          listings?: Array<{
            __typename?: 'PublicationListing';
            id: string;
            createdAt: any;
            priceInCents: any;
            quantity: number;
          }> | null;
          epubMetadata?: {
            __typename?: 'EpubMetadataEntity';
            locations: any;
          } | null;
        };
      };
    }>;
  };
};

export type GetMyBasketQueryVariables = Exact<{ [key: string]: never }>;

export type GetMyBasketQuery = {
  __typename?: 'Query';
  getMyBasket: {
    __typename?: 'Basket';
    items: Array<{
      __typename?: 'BasketItem';
      publicationListingId: string;
      quantity: number;
      publicationsListing: {
        __typename?: 'PublicationListing';
        priceInCents: any;
        publication: {
          __typename?: 'Publication';
          id: string;
          publishedAt: any;
          pagesCount: number;
          format: PublicationFormat;
          bookEdition: {
            __typename?: 'BookEdition';
            id: string;
            description: string;
            book: {
              __typename?: 'Book';
              title: string;
              genres?: Array<{
                __typename?: 'BookGenre';
                id: string;
                name: string;
                description?: string | null;
                slug: string;
              }> | null;
              editions?: Array<{
                __typename?: 'BookEdition';
                id: string;
                description: string;
                edition: { __typename?: 'Edition'; id: number; name: string };
                language: { __typename?: 'Language'; id: number; name: string };
                authors: Array<{
                  __typename?: 'BookAuthor';
                  id: string;
                  name: string;
                  bannerImageUrl?: string | null;
                  avatarImageUrl?: string | null;
                  bio?: string | null;
                  slug: { __typename?: 'Slug'; id: string; name: string };
                }>;
                publications?: Array<{
                  __typename?: 'Publication';
                  id: string;
                  publishedAt: any;
                  pagesCount: number;
                  format: PublicationFormat;
                  assets?: Array<{
                    __typename?: 'Asset';
                    id: string;
                    key: string;
                    type: string;
                  }> | null;
                  listings?: Array<{
                    __typename?: 'PublicationListing';
                    id: string;
                    createdAt: any;
                    priceInCents: any;
                    quantity: number;
                  }> | null;
                  epubMetadata?: {
                    __typename?: 'EpubMetadataEntity';
                    locations: any;
                  } | null;
                }> | null;
              }> | null;
            };
            edition: { __typename?: 'Edition'; id: number; name: string };
            language: { __typename?: 'Language'; id: number; name: string };
            authors: Array<{
              __typename?: 'BookAuthor';
              id: string;
              name: string;
              bannerImageUrl?: string | null;
              avatarImageUrl?: string | null;
              bio?: string | null;
              slug: { __typename?: 'Slug'; id: string; name: string };
            }>;
            publications?: Array<{
              __typename?: 'Publication';
              id: string;
              publishedAt: any;
              pagesCount: number;
              format: PublicationFormat;
              assets?: Array<{
                __typename?: 'Asset';
                id: string;
                key: string;
                type: string;
              }> | null;
              listings?: Array<{
                __typename?: 'PublicationListing';
                id: string;
                createdAt: any;
                priceInCents: any;
                quantity: number;
              }> | null;
              epubMetadata?: {
                __typename?: 'EpubMetadataEntity';
                locations: any;
              } | null;
            }> | null;
          };
          assets?: Array<{
            __typename?: 'Asset';
            id: string;
            key: string;
            type: string;
          }> | null;
          listings?: Array<{
            __typename?: 'PublicationListing';
            id: string;
            createdAt: any;
            priceInCents: any;
            quantity: number;
          }> | null;
          epubMetadata?: {
            __typename?: 'EpubMetadataEntity';
            locations: any;
          } | null;
        };
      };
    }>;
  };
};

export type CreateCharacterMutationVariables = Exact<{
  input: CharacterInput;
}>;

export type CreateCharacterMutation = {
  __typename?: 'Mutation';
  createCharacter: { __typename?: 'Character'; id: string };
};

export type UpdateCharacterMutationVariables = Exact<{
  input: UpdateCharacterInput;
}>;

export type UpdateCharacterMutation = {
  __typename?: 'Mutation';
  updateCharacter: { __typename?: 'Character'; id: string };
};

export type DeleteCharacterMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type DeleteCharacterMutation = {
  __typename?: 'Mutation';
  deleteCharacter: boolean;
};

export type CreateCharacterRelationMutationVariables = Exact<{
  input: CreateRelationsInput;
}>;

export type CreateCharacterRelationMutation = {
  __typename?: 'Mutation';
  createCharacterRelation: boolean;
};

export type DeleteCharacterRelationMutationVariables = Exact<{
  relationId: Scalars['String']['input'];
}>;

export type DeleteCharacterRelationMutation = {
  __typename?: 'Mutation';
  deleteCharacterRelation: boolean;
};

export type UpdateCharacterMetadataMutationVariables = Exact<{
  input: UpdateCharacterMetadataInput;
}>;

export type UpdateCharacterMetadataMutation = {
  __typename?: 'Mutation';
  updateCharactersMetadata: boolean;
};

export type GetManuscriptCharactersQueryVariables = Exact<{
  manuscriptId: Scalars['String']['input'];
}>;

export type GetManuscriptCharactersQuery = {
  __typename?: 'Query';
  getManuscriptCharacters: Array<{
    __typename?: 'Character';
    id: string;
    name: string;
    description?: string | null;
    age?: number | null;
    race?: string | null;
    species?: string | null;
    gender?: string | null;
    personalityTraits?: string | null;
    origin?: string | null;
    role?: string | null;
    isDead: boolean;
    physicalAppearance?: string | null;
    additionalFields?: any | null;
    metadata?: any | null;
    relations?: Array<{
      __typename?: 'CharacterRelation';
      id: string;
      type: string;
      fromCharacter: { __typename?: 'Character'; id: string; name: string };
      toCharacter: { __typename?: 'Character'; id: string; name: string };
    }> | null;
    connectedWith?: Array<{
      __typename?: 'CharacterRelation';
      id: string;
      type: string;
      fromCharacter: { __typename?: 'Character'; id: string; name: string };
      toCharacter: { __typename?: 'Character'; id: string; name: string };
    }> | null;
  }>;
};

export type GetCountriesQueryVariables = Exact<{
  input: Scalars['Boolean']['input'];
}>;

export type GetCountriesQuery = {
  __typename?: 'Query';
  countries: Array<{
    __typename?: 'Country';
    id?: number | null;
    name?: string | null;
    iso?: string | null;
  }>;
};

export type CreateOrderMutationVariables = Exact<{ [key: string]: never }>;

export type CreateOrderMutation = {
  __typename?: 'Mutation';
  createOrder: string;
};

export type CreateHelioOrderMutationVariables = Exact<{ [key: string]: never }>;

export type CreateHelioOrderMutation = {
  __typename?: 'Mutation';
  createHelioOrder: string;
};

export type CreateBuyNowOrderMutationVariables = Exact<{
  publicationListingId: Scalars['String']['input'];
}>;

export type CreateBuyNowOrderMutation = {
  __typename?: 'Mutation';
  createBuyNowOrder: string;
};

export type CreateHelioBuyNowOrderMutationVariables = Exact<{
  publicationListingId: Scalars['String']['input'];
}>;

export type CreateHelioBuyNowOrderMutation = {
  __typename?: 'Mutation';
  createHelioBuyNowOrder: string;
};

export type AccountSessionSecretQueryVariables = Exact<{
  [key: string]: never;
}>;

export type AccountSessionSecretQuery = {
  __typename?: 'Query';
  accountSessionSecret: string;
};

export type AssetFragmentFragment = {
  __typename?: 'Asset';
  id: string;
  key: string;
  type: string;
};

export type BasketFragmentFragment = {
  __typename?: 'Basket';
  items: Array<{
    __typename?: 'BasketItem';
    publicationListingId: string;
    quantity: number;
    publicationsListing: {
      __typename?: 'PublicationListing';
      priceInCents: any;
      publication: {
        __typename?: 'Publication';
        id: string;
        publishedAt: any;
        pagesCount: number;
        format: PublicationFormat;
        bookEdition: {
          __typename?: 'BookEdition';
          id: string;
          description: string;
          book: {
            __typename?: 'Book';
            title: string;
            genres?: Array<{
              __typename?: 'BookGenre';
              id: string;
              name: string;
              description?: string | null;
              slug: string;
            }> | null;
            editions?: Array<{
              __typename?: 'BookEdition';
              id: string;
              description: string;
              edition: { __typename?: 'Edition'; id: number; name: string };
              language: { __typename?: 'Language'; id: number; name: string };
              authors: Array<{
                __typename?: 'BookAuthor';
                id: string;
                name: string;
                bannerImageUrl?: string | null;
                avatarImageUrl?: string | null;
                bio?: string | null;
                slug: { __typename?: 'Slug'; id: string; name: string };
              }>;
              publications?: Array<{
                __typename?: 'Publication';
                id: string;
                publishedAt: any;
                pagesCount: number;
                format: PublicationFormat;
                assets?: Array<{
                  __typename?: 'Asset';
                  id: string;
                  key: string;
                  type: string;
                }> | null;
                listings?: Array<{
                  __typename?: 'PublicationListing';
                  id: string;
                  createdAt: any;
                  priceInCents: any;
                  quantity: number;
                }> | null;
                epubMetadata?: {
                  __typename?: 'EpubMetadataEntity';
                  locations: any;
                } | null;
              }> | null;
            }> | null;
          };
          edition: { __typename?: 'Edition'; id: number; name: string };
          language: { __typename?: 'Language'; id: number; name: string };
          authors: Array<{
            __typename?: 'BookAuthor';
            id: string;
            name: string;
            bannerImageUrl?: string | null;
            avatarImageUrl?: string | null;
            bio?: string | null;
            slug: { __typename?: 'Slug'; id: string; name: string };
          }>;
          publications?: Array<{
            __typename?: 'Publication';
            id: string;
            publishedAt: any;
            pagesCount: number;
            format: PublicationFormat;
            assets?: Array<{
              __typename?: 'Asset';
              id: string;
              key: string;
              type: string;
            }> | null;
            listings?: Array<{
              __typename?: 'PublicationListing';
              id: string;
              createdAt: any;
              priceInCents: any;
              quantity: number;
            }> | null;
            epubMetadata?: {
              __typename?: 'EpubMetadataEntity';
              locations: any;
            } | null;
          }> | null;
        };
        assets?: Array<{
          __typename?: 'Asset';
          id: string;
          key: string;
          type: string;
        }> | null;
        listings?: Array<{
          __typename?: 'PublicationListing';
          id: string;
          createdAt: any;
          priceInCents: any;
          quantity: number;
        }> | null;
        epubMetadata?: {
          __typename?: 'EpubMetadataEntity';
          locations: any;
        } | null;
      };
    };
  }>;
};

export type BookAuthorFragmentFragment = {
  __typename?: 'BookAuthor';
  id: string;
  name: string;
  bannerImageUrl?: string | null;
  avatarImageUrl?: string | null;
  bio?: string | null;
  slug: { __typename?: 'Slug'; id: string; name: string };
};

export type BookEditionDownwardsFragmentFragment = {
  __typename?: 'BookEdition';
  id: string;
  description: string;
  edition: { __typename?: 'Edition'; id: number; name: string };
  language: { __typename?: 'Language'; id: number; name: string };
  authors: Array<{
    __typename?: 'BookAuthor';
    id: string;
    name: string;
    bannerImageUrl?: string | null;
    avatarImageUrl?: string | null;
    bio?: string | null;
    slug: { __typename?: 'Slug'; id: string; name: string };
  }>;
  publications?: Array<{
    __typename?: 'Publication';
    id: string;
    publishedAt: any;
    pagesCount: number;
    format: PublicationFormat;
    assets?: Array<{
      __typename?: 'Asset';
      id: string;
      key: string;
      type: string;
    }> | null;
    listings?: Array<{
      __typename?: 'PublicationListing';
      id: string;
      createdAt: any;
      priceInCents: any;
      quantity: number;
    }> | null;
    epubMetadata?: { __typename?: 'EpubMetadataEntity'; locations: any } | null;
  }> | null;
};

export type BookEditionUpwardsFragmentFragment = {
  __typename?: 'BookEdition';
  id: string;
  description: string;
  book: {
    __typename?: 'Book';
    title: string;
    genres?: Array<{
      __typename?: 'BookGenre';
      id: string;
      name: string;
      description?: string | null;
      slug: string;
    }> | null;
    editions?: Array<{
      __typename?: 'BookEdition';
      id: string;
      description: string;
      edition: { __typename?: 'Edition'; id: number; name: string };
      language: { __typename?: 'Language'; id: number; name: string };
      authors: Array<{
        __typename?: 'BookAuthor';
        id: string;
        name: string;
        bannerImageUrl?: string | null;
        avatarImageUrl?: string | null;
        bio?: string | null;
        slug: { __typename?: 'Slug'; id: string; name: string };
      }>;
      publications?: Array<{
        __typename?: 'Publication';
        id: string;
        publishedAt: any;
        pagesCount: number;
        format: PublicationFormat;
        assets?: Array<{
          __typename?: 'Asset';
          id: string;
          key: string;
          type: string;
        }> | null;
        listings?: Array<{
          __typename?: 'PublicationListing';
          id: string;
          createdAt: any;
          priceInCents: any;
          quantity: number;
        }> | null;
        epubMetadata?: {
          __typename?: 'EpubMetadataEntity';
          locations: any;
        } | null;
      }> | null;
    }> | null;
  };
  edition: { __typename?: 'Edition'; id: number; name: string };
  language: { __typename?: 'Language'; id: number; name: string };
  authors: Array<{
    __typename?: 'BookAuthor';
    id: string;
    name: string;
    bannerImageUrl?: string | null;
    avatarImageUrl?: string | null;
    bio?: string | null;
    slug: { __typename?: 'Slug'; id: string; name: string };
  }>;
  publications?: Array<{
    __typename?: 'Publication';
    id: string;
    publishedAt: any;
    pagesCount: number;
    format: PublicationFormat;
    assets?: Array<{
      __typename?: 'Asset';
      id: string;
      key: string;
      type: string;
    }> | null;
    listings?: Array<{
      __typename?: 'PublicationListing';
      id: string;
      createdAt: any;
      priceInCents: any;
      quantity: number;
    }> | null;
    epubMetadata?: { __typename?: 'EpubMetadataEntity'; locations: any } | null;
  }> | null;
};

export type BookGenreFragmentFragment = {
  __typename?: 'BookGenre';
  id: string;
  name: string;
  description?: string | null;
  slug: string;
};

export type BookLicenseFragmentFragment = {
  __typename?: 'BookLicense';
  id: string;
  title: string;
  description: string;
  priceInCents: any;
  manuscriptAssetKey: string;
  coverAssetKey: string;
  btcInscriptionStatus: BtcInscriptionStatus;
  btcInscriptionId?: string | null;
  createdAt: any;
  updatedAt: any;
  isForCommercialUse: boolean;
  typeOfRights: TypeOfRights;
  isbn?: string | null;
  assets?: Array<{
    __typename?: 'Asset';
    id: string;
    key: string;
    type: string;
  }> | null;
  genres?: Array<{ __typename?: 'BookGenre'; id: string; name: string }> | null;
  authors?: Array<{
    __typename?: 'BookLicenseAuthor';
    id: string;
    name: string;
  }> | null;
  orders?: Array<{
    __typename?: 'BookLicenseOrder';
    id: string;
    status: BookLicenseOrderStatus;
    solanaPNftAddress?: string | null;
    solanaPNftTxSignature?: string | null;
    postPaymentTxSignature?: string | null;
    signedTemplateIpfsCid?: string | null;
  }> | null;
  metadata?: {
    __typename?: 'BookLicenseMetadataEntity';
    id: string;
    hash: string;
    pages: number;
    tokens: number;
  } | null;
};

export type BookDownwardsFragmentFragment = {
  __typename?: 'Book';
  title: string;
  genres?: Array<{
    __typename?: 'BookGenre';
    id: string;
    name: string;
    description?: string | null;
    slug: string;
  }> | null;
  editions?: Array<{
    __typename?: 'BookEdition';
    id: string;
    description: string;
    edition: { __typename?: 'Edition'; id: number; name: string };
    language: { __typename?: 'Language'; id: number; name: string };
    authors: Array<{
      __typename?: 'BookAuthor';
      id: string;
      name: string;
      bannerImageUrl?: string | null;
      avatarImageUrl?: string | null;
      bio?: string | null;
      slug: { __typename?: 'Slug'; id: string; name: string };
    }>;
    publications?: Array<{
      __typename?: 'Publication';
      id: string;
      publishedAt: any;
      pagesCount: number;
      format: PublicationFormat;
      assets?: Array<{
        __typename?: 'Asset';
        id: string;
        key: string;
        type: string;
      }> | null;
      listings?: Array<{
        __typename?: 'PublicationListing';
        id: string;
        createdAt: any;
        priceInCents: any;
        quantity: number;
      }> | null;
      epubMetadata?: {
        __typename?: 'EpubMetadataEntity';
        locations: any;
      } | null;
    }> | null;
  }> | null;
};

export type BookUpwardsFragmentFragment = {
  __typename?: 'Book';
  title: string;
  genres?: Array<{
    __typename?: 'BookGenre';
    id: string;
    name: string;
    description?: string | null;
    slug: string;
  }> | null;
  editions?: Array<{
    __typename?: 'BookEdition';
    id: string;
    description: string;
    edition: { __typename?: 'Edition'; id: number; name: string };
    language: { __typename?: 'Language'; id: number; name: string };
    authors: Array<{
      __typename?: 'BookAuthor';
      id: string;
      name: string;
      bannerImageUrl?: string | null;
      avatarImageUrl?: string | null;
      bio?: string | null;
      slug: { __typename?: 'Slug'; id: string; name: string };
    }>;
    publications?: Array<{
      __typename?: 'Publication';
      id: string;
      publishedAt: any;
      pagesCount: number;
      format: PublicationFormat;
      assets?: Array<{
        __typename?: 'Asset';
        id: string;
        key: string;
        type: string;
      }> | null;
      listings?: Array<{
        __typename?: 'PublicationListing';
        id: string;
        createdAt: any;
        priceInCents: any;
        quantity: number;
      }> | null;
      epubMetadata?: {
        __typename?: 'EpubMetadataEntity';
        locations: any;
      } | null;
    }> | null;
  }> | null;
};

export type ManuscriptAssetFragmentFragment = {
  __typename?: 'ManuscriptAssetEntity';
  id: string;
  key: string;
  type: AssetType;
};

export type ManuscriptPublishingAssetFragmentFragment = {
  __typename?: 'ManuscriptPublishingAsset';
  id: string;
  key: string;
  type: AssetType;
};

export type ManuscriptPublishingAuthorFragmentFragment = {
  __typename?: 'ManuscriptPublishingAuthor';
  id: string;
  percentage: number;
  bookAuthor: {
    __typename?: 'BookAuthor';
    id: string;
    userId?: string | null;
    name: string;
    avatarImageUrl?: string | null;
    bannerImageUrl?: string | null;
    slug: { __typename?: 'Slug'; id: string; name: string };
  };
};

export type ManuscriptPublishingFragmentFragment = {
  __typename?: 'ManuscriptPublishing';
  id: string;
  priceInCents?: any | null;
  status: PublishingStatus;
  format: PublicationFormat;
  createdAt: any;
  description?: string | null;
  competitionId?: string | null;
  settings?: {
    __typename?: 'ManuscriptPublishingSettings';
    paperSize: { __typename?: 'PaperSize'; id: number; name: string };
  } | null;
  printSettings?: {
    __typename?: 'ManuscriptPrintSettings';
    hasColorPages: boolean;
    textStock: { __typename?: 'ManuscriptTextStock'; id: number; name: string };
    lamination: {
      __typename?: 'ManuscriptPrintLamination';
      id: number;
      name: string;
    };
  } | null;
  manuscript?: { __typename?: 'Manuscript'; title: string } | null;
  edition?: { __typename?: 'Edition'; id: number; name: string } | null;
  manuscriptPublishingAuthors?: Array<{
    __typename?: 'ManuscriptPublishingAuthor';
    id: string;
    percentage: number;
    bookAuthor: {
      __typename?: 'BookAuthor';
      id: string;
      userId?: string | null;
      name: string;
      avatarImageUrl?: string | null;
      bannerImageUrl?: string | null;
      slug: { __typename?: 'Slug'; id: string; name: string };
    };
  }> | null;
  assets?: Array<{
    __typename?: 'ManuscriptPublishingAsset';
    id: string;
    key: string;
    type: AssetType;
  }> | null;
  rejection?: {
    __typename?: 'ManuscriptPublishingRejection';
    reason: string;
  } | null;
};

export type OrderFragmentFragment = {
  __typename?: 'Order';
  id: string;
  status: OrderStatus;
  type: OrderType;
  createdAt: any;
  totalInCents: any;
  orderItems: Array<{ __typename?: 'OrderItem'; quantity: number }>;
};

export type ProfileFragmentFragment = {
  __typename?: 'Profile';
  userId: string;
  email?: string | null;
  unverifiedEmail?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  description?: string | null;
  createdAt: string;
  birthday?: any | null;
  gender?: string | null;
  viewMode?: ViewMode | null;
  avatarImageUrl?: string | null;
  bannerImageUrl?: string | null;
  slug?: { __typename?: 'Slug'; name: string } | null;
  country?: { __typename?: 'Country'; id?: number | null } | null;
};

export type PublicationListingFragmentFragment = {
  __typename?: 'PublicationListing';
  id: string;
  createdAt: any;
  priceInCents: any;
  quantity: number;
};

export type PublicationDownwardsFragmentFragment = {
  __typename?: 'Publication';
  id: string;
  publishedAt: any;
  pagesCount: number;
  format: PublicationFormat;
  assets?: Array<{
    __typename?: 'Asset';
    id: string;
    key: string;
    type: string;
  }> | null;
  listings?: Array<{
    __typename?: 'PublicationListing';
    id: string;
    createdAt: any;
    priceInCents: any;
    quantity: number;
  }> | null;
  epubMetadata?: { __typename?: 'EpubMetadataEntity'; locations: any } | null;
};

export type PublicationUpwardsFragmentFragment = {
  __typename?: 'Publication';
  id: string;
  publishedAt: any;
  pagesCount: number;
  format: PublicationFormat;
  bookEdition: {
    __typename?: 'BookEdition';
    id: string;
    description: string;
    book: {
      __typename?: 'Book';
      title: string;
      genres?: Array<{
        __typename?: 'BookGenre';
        id: string;
        name: string;
        description?: string | null;
        slug: string;
      }> | null;
      editions?: Array<{
        __typename?: 'BookEdition';
        id: string;
        description: string;
        edition: { __typename?: 'Edition'; id: number; name: string };
        language: { __typename?: 'Language'; id: number; name: string };
        authors: Array<{
          __typename?: 'BookAuthor';
          id: string;
          name: string;
          bannerImageUrl?: string | null;
          avatarImageUrl?: string | null;
          bio?: string | null;
          slug: { __typename?: 'Slug'; id: string; name: string };
        }>;
        publications?: Array<{
          __typename?: 'Publication';
          id: string;
          publishedAt: any;
          pagesCount: number;
          format: PublicationFormat;
          assets?: Array<{
            __typename?: 'Asset';
            id: string;
            key: string;
            type: string;
          }> | null;
          listings?: Array<{
            __typename?: 'PublicationListing';
            id: string;
            createdAt: any;
            priceInCents: any;
            quantity: number;
          }> | null;
          epubMetadata?: {
            __typename?: 'EpubMetadataEntity';
            locations: any;
          } | null;
        }> | null;
      }> | null;
    };
    edition: { __typename?: 'Edition'; id: number; name: string };
    language: { __typename?: 'Language'; id: number; name: string };
    authors: Array<{
      __typename?: 'BookAuthor';
      id: string;
      name: string;
      bannerImageUrl?: string | null;
      avatarImageUrl?: string | null;
      bio?: string | null;
      slug: { __typename?: 'Slug'; id: string; name: string };
    }>;
    publications?: Array<{
      __typename?: 'Publication';
      id: string;
      publishedAt: any;
      pagesCount: number;
      format: PublicationFormat;
      assets?: Array<{
        __typename?: 'Asset';
        id: string;
        key: string;
        type: string;
      }> | null;
      listings?: Array<{
        __typename?: 'PublicationListing';
        id: string;
        createdAt: any;
        priceInCents: any;
        quantity: number;
      }> | null;
      epubMetadata?: {
        __typename?: 'EpubMetadataEntity';
        locations: any;
      } | null;
    }> | null;
  };
  assets?: Array<{
    __typename?: 'Asset';
    id: string;
    key: string;
    type: string;
  }> | null;
  listings?: Array<{
    __typename?: 'PublicationListing';
    id: string;
    createdAt: any;
    priceInCents: any;
    quantity: number;
  }> | null;
  epubMetadata?: { __typename?: 'EpubMetadataEntity'; locations: any } | null;
};

export type UserOwnedPublicationFragmentFragment = {
  __typename?: 'UserOwnedPublication';
  id: string;
  lastReadAt?: any | null;
  status: string;
  source: string;
  createdAt: any;
  publication?: {
    __typename?: 'Publication';
    id: string;
    publishedAt: any;
    pagesCount: number;
    format: PublicationFormat;
    bookEdition: {
      __typename?: 'BookEdition';
      id: string;
      description: string;
      book: {
        __typename?: 'Book';
        title: string;
        genres?: Array<{
          __typename?: 'BookGenre';
          id: string;
          name: string;
          description?: string | null;
          slug: string;
        }> | null;
        editions?: Array<{
          __typename?: 'BookEdition';
          id: string;
          description: string;
          edition: { __typename?: 'Edition'; id: number; name: string };
          language: { __typename?: 'Language'; id: number; name: string };
          authors: Array<{
            __typename?: 'BookAuthor';
            id: string;
            name: string;
            bannerImageUrl?: string | null;
            avatarImageUrl?: string | null;
            bio?: string | null;
            slug: { __typename?: 'Slug'; id: string; name: string };
          }>;
          publications?: Array<{
            __typename?: 'Publication';
            id: string;
            publishedAt: any;
            pagesCount: number;
            format: PublicationFormat;
            assets?: Array<{
              __typename?: 'Asset';
              id: string;
              key: string;
              type: string;
            }> | null;
            listings?: Array<{
              __typename?: 'PublicationListing';
              id: string;
              createdAt: any;
              priceInCents: any;
              quantity: number;
            }> | null;
            epubMetadata?: {
              __typename?: 'EpubMetadataEntity';
              locations: any;
            } | null;
          }> | null;
        }> | null;
      };
      edition: { __typename?: 'Edition'; id: number; name: string };
      language: { __typename?: 'Language'; id: number; name: string };
      authors: Array<{
        __typename?: 'BookAuthor';
        id: string;
        name: string;
        bannerImageUrl?: string | null;
        avatarImageUrl?: string | null;
        bio?: string | null;
        slug: { __typename?: 'Slug'; id: string; name: string };
      }>;
      publications?: Array<{
        __typename?: 'Publication';
        id: string;
        publishedAt: any;
        pagesCount: number;
        format: PublicationFormat;
        assets?: Array<{
          __typename?: 'Asset';
          id: string;
          key: string;
          type: string;
        }> | null;
        listings?: Array<{
          __typename?: 'PublicationListing';
          id: string;
          createdAt: any;
          priceInCents: any;
          quantity: number;
        }> | null;
        epubMetadata?: {
          __typename?: 'EpubMetadataEntity';
          locations: any;
        } | null;
      }> | null;
    };
    assets?: Array<{
      __typename?: 'Asset';
      id: string;
      key: string;
      type: string;
    }> | null;
    listings?: Array<{
      __typename?: 'PublicationListing';
      id: string;
      createdAt: any;
      priceInCents: any;
      quantity: number;
    }> | null;
    epubMetadata?: { __typename?: 'EpubMetadataEntity'; locations: any } | null;
  } | null;
  stats?: {
    __typename?: 'UserOwnedPublicationStats';
    percentageRead: number;
  } | null;
};

export type UserFragmentFragment = {
  __typename?: 'User';
  id: string;
  username: string;
  userPaymentDetails?: {
    __typename?: 'UserPaymentDetailsEntity';
    stripeConnectedAccountId?: string | null;
  } | null;
  profile?: {
    __typename?: 'Profile';
    userId: string;
    email?: string | null;
    unverifiedEmail?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    description?: string | null;
    createdAt: string;
    birthday?: any | null;
    gender?: string | null;
    viewMode?: ViewMode | null;
    avatarImageUrl?: string | null;
    bannerImageUrl?: string | null;
    slug?: { __typename?: 'Slug'; name: string } | null;
    country?: { __typename?: 'Country'; id?: number | null } | null;
  } | null;
  oauthProviders?: Array<{ __typename?: 'OauthProvider'; name: string }> | null;
  wallets?: Array<{
    __typename?: 'Wallet';
    address: string;
    isCustodial: boolean;
  }> | null;
};

export type CreatePublishingDraftMutationVariables = Exact<{
  input: CreatePublishingDraftInput;
}>;

export type CreatePublishingDraftMutation = {
  __typename?: 'Mutation';
  createPublishingDraft: {
    __typename?: 'ManuscriptPublishing';
    id: string;
    priceInCents?: any | null;
    status: PublishingStatus;
    format: PublicationFormat;
    createdAt: any;
    description?: string | null;
    competitionId?: string | null;
    settings?: {
      __typename?: 'ManuscriptPublishingSettings';
      paperSize: { __typename?: 'PaperSize'; id: number; name: string };
    } | null;
    printSettings?: {
      __typename?: 'ManuscriptPrintSettings';
      hasColorPages: boolean;
      textStock: {
        __typename?: 'ManuscriptTextStock';
        id: number;
        name: string;
      };
      lamination: {
        __typename?: 'ManuscriptPrintLamination';
        id: number;
        name: string;
      };
    } | null;
    manuscript?: { __typename?: 'Manuscript'; title: string } | null;
    edition?: { __typename?: 'Edition'; id: number; name: string } | null;
    manuscriptPublishingAuthors?: Array<{
      __typename?: 'ManuscriptPublishingAuthor';
      id: string;
      percentage: number;
      bookAuthor: {
        __typename?: 'BookAuthor';
        id: string;
        userId?: string | null;
        name: string;
        avatarImageUrl?: string | null;
        bannerImageUrl?: string | null;
        slug: { __typename?: 'Slug'; id: string; name: string };
      };
    }> | null;
    assets?: Array<{
      __typename?: 'ManuscriptPublishingAsset';
      id: string;
      key: string;
      type: AssetType;
    }> | null;
    rejection?: {
      __typename?: 'ManuscriptPublishingRejection';
      reason: string;
    } | null;
  };
};

export type UpdatePublishingDraftMutationVariables = Exact<{
  input: UpdatePublishingDraftInput;
}>;

export type UpdatePublishingDraftMutation = {
  __typename?: 'Mutation';
  updatePublishingDraft: {
    __typename?: 'ManuscriptPublishing';
    id: string;
    priceInCents?: any | null;
    status: PublishingStatus;
    format: PublicationFormat;
    createdAt: any;
    description?: string | null;
    competitionId?: string | null;
    settings?: {
      __typename?: 'ManuscriptPublishingSettings';
      paperSize: { __typename?: 'PaperSize'; id: number; name: string };
    } | null;
    printSettings?: {
      __typename?: 'ManuscriptPrintSettings';
      hasColorPages: boolean;
      textStock: {
        __typename?: 'ManuscriptTextStock';
        id: number;
        name: string;
      };
      lamination: {
        __typename?: 'ManuscriptPrintLamination';
        id: number;
        name: string;
      };
    } | null;
    manuscript?: { __typename?: 'Manuscript'; title: string } | null;
    edition?: { __typename?: 'Edition'; id: number; name: string } | null;
    manuscriptPublishingAuthors?: Array<{
      __typename?: 'ManuscriptPublishingAuthor';
      id: string;
      percentage: number;
      bookAuthor: {
        __typename?: 'BookAuthor';
        id: string;
        userId?: string | null;
        name: string;
        avatarImageUrl?: string | null;
        bannerImageUrl?: string | null;
        slug: { __typename?: 'Slug'; id: string; name: string };
      };
    }> | null;
    assets?: Array<{
      __typename?: 'ManuscriptPublishingAsset';
      id: string;
      key: string;
      type: AssetType;
    }> | null;
    rejection?: {
      __typename?: 'ManuscriptPublishingRejection';
      reason: string;
    } | null;
  };
};

export type UpdatePublishingCoverMutationVariables = Exact<{
  input: UpdatePublishingCoverInput;
}>;

export type UpdatePublishingCoverMutation = {
  __typename?: 'Mutation';
  updatePublishingCover: PublishingStatus;
};

export type CreateManuscriptMutationVariables = Exact<{
  input: CreateManuscriptInput;
}>;

export type CreateManuscriptMutation = {
  __typename?: 'Mutation';
  createManuscript: { __typename?: 'Manuscript'; id: string };
};

export type UpdateManuscriptMutationVariables = Exact<{
  input: UpdateManuscriptInput;
}>;

export type UpdateManuscriptMutation = {
  __typename?: 'Mutation';
  updateManuscript: { __typename?: 'Manuscript'; id: string };
};

export type AssignIsbnMutationVariables = Exact<{
  input: AssignIsbnInput;
}>;

export type AssignIsbnMutation = {
  __typename?: 'Mutation';
  assignIsbn: string;
};

export type ApproveManuscriptPublishingMutationVariables = Exact<{
  input: ApprovePublishingInput;
}>;

export type ApproveManuscriptPublishingMutation = {
  __typename?: 'Mutation';
  approveManuscriptPublishing: boolean;
};

export type RejectManuscriptPublishingMutationVariables = Exact<{
  input: RejectPublishingInput;
}>;

export type RejectManuscriptPublishingMutation = {
  __typename?: 'Mutation';
  rejectManuscriptPublishing: boolean;
};

export type SubmitPublishingDraftForApprovalMutationVariables = Exact<{
  input: SubmitPublishingDraftInput;
}>;

export type SubmitPublishingDraftForApprovalMutation = {
  __typename?: 'Mutation';
  submitPublishingDraftForApproval: {
    __typename?: 'ManuscriptPublishing';
    id: string;
  };
};

export type UpdateManuScriptSettingsMutationVariables = Exact<{
  input: UpdateManuscriptSettingsInput;
}>;

export type UpdateManuScriptSettingsMutation = {
  __typename?: 'Mutation';
  updateManuscriptSettings: boolean;
};

export type GetManuscriptPublishingAssetMetadataQueryVariables = Exact<{
  manuscriptPublishingId: Scalars['String']['input'];
}>;

export type GetManuscriptPublishingAssetMetadataQuery = {
  __typename?: 'Query';
  getManuscriptPublishingAssetMetadata?: {
    __typename?: 'ManuscriptPublishingAssetMetadata';
    pageCount: number;
    colorPageCount: number;
  } | null;
};

export type CalculatePrintingCostAndCoverSizeQueryVariables = Exact<{
  input: CalculatePrintingCostAndCoverSizesInput;
}>;

export type CalculatePrintingCostAndCoverSizeQuery = {
  __typename?: 'Query';
  calculatePrintingCostAndCoverSize: {
    __typename?: 'PrintingCostAndCoverSize';
    printingCost: any;
    coverSize: { __typename?: 'CoverSize'; width: number; height: number };
  };
};

export type RemoveManuscriptMutationVariables = Exact<{
  input: Scalars['String']['input'];
}>;

export type RemoveManuscriptMutation = {
  __typename?: 'Mutation';
  removeManuscript: boolean;
};

export type GetPrintLaminationQueryVariables = Exact<{ [key: string]: never }>;

export type GetPrintLaminationQuery = {
  __typename?: 'Query';
  getPrintLamination: Array<{
    __typename?: 'ManuscriptPrintLamination';
    id: number;
    name: string;
  }>;
};

export type GetManuscriptPublishingAssetDownloadUrlQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;

export type GetManuscriptPublishingAssetDownloadUrlQuery = {
  __typename?: 'Query';
  getManuscriptPublishingAssetDownloadUrl: string;
};

export type GetManuscriptFontsQueryVariables = Exact<{ [key: string]: never }>;

export type GetManuscriptFontsQuery = {
  __typename?: 'Query';
  getManuscriptFonts: Array<{
    __typename?: 'ManuscriptFontEntity';
    id: string;
    name: string;
  }>;
};

export type GetManuscriptTextStocksQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetManuscriptTextStocksQuery = {
  __typename?: 'Query';
  getManuscriptTextStocks: Array<{
    __typename?: 'ManuscriptTextStock';
    id: number;
    name: string;
  }>;
};

export type GetManuscriptPublishingsQueryVariables = Exact<{
  manuscriptId: Scalars['String']['input'];
}>;

export type GetManuscriptPublishingsQuery = {
  __typename?: 'Query';
  getManuscriptPublishings: Array<{
    __typename?: 'ManuscriptPublishing';
    id: string;
    createdAt: any;
    format: PublicationFormat;
    status: PublishingStatus;
    rejection?: {
      __typename?: 'ManuscriptPublishingRejection';
      id: string;
      reason: string;
    } | null;
    edition?: { __typename?: 'Edition'; id: number; name: string } | null;
  }>;
};

export type GetManuscriptPublishingsAdminQueryVariables = Exact<{
  manuscriptId: Scalars['String']['input'];
}>;

export type GetManuscriptPublishingsAdminQuery = {
  __typename?: 'Query';
  getManuscriptPublishings: Array<{
    __typename?: 'ManuscriptPublishing';
    id: string;
    priceInCents?: any | null;
    status: PublishingStatus;
    format: PublicationFormat;
    createdAt: any;
    description?: string | null;
    competitionId?: string | null;
    settings?: {
      __typename?: 'ManuscriptPublishingSettings';
      paperSize: { __typename?: 'PaperSize'; id: number; name: string };
    } | null;
    printSettings?: {
      __typename?: 'ManuscriptPrintSettings';
      hasColorPages: boolean;
      textStock: {
        __typename?: 'ManuscriptTextStock';
        id: number;
        name: string;
      };
      lamination: {
        __typename?: 'ManuscriptPrintLamination';
        id: number;
        name: string;
      };
    } | null;
    manuscript?: { __typename?: 'Manuscript'; title: string } | null;
    edition?: { __typename?: 'Edition'; id: number; name: string } | null;
    manuscriptPublishingAuthors?: Array<{
      __typename?: 'ManuscriptPublishingAuthor';
      id: string;
      percentage: number;
      bookAuthor: {
        __typename?: 'BookAuthor';
        id: string;
        userId?: string | null;
        name: string;
        avatarImageUrl?: string | null;
        bannerImageUrl?: string | null;
        slug: { __typename?: 'Slug'; id: string; name: string };
      };
    }> | null;
    assets?: Array<{
      __typename?: 'ManuscriptPublishingAsset';
      id: string;
      key: string;
      type: AssetType;
    }> | null;
    rejection?: {
      __typename?: 'ManuscriptPublishingRejection';
      reason: string;
    } | null;
  }>;
};

export type GetManuscriptPaperSizesQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetManuscriptPaperSizesQuery = {
  __typename?: 'Query';
  getManuscriptPaperSizes: Array<{
    __typename?: 'ManuscriptPaperSizeEntity';
    id: string;
    name: string;
    width: number;
    height: number;
    unit: string;
  }>;
};

export type GetManuscriptsSummaryQueryVariables = Exact<{
  input: ManuscriptsSummaryInput;
}>;

export type GetManuscriptsSummaryQuery = {
  __typename?: 'Query';
  getManuscriptsSummary: {
    __typename?: 'ManuscriptSummaryPage';
    count: number;
    items: Array<{
      __typename?: 'ManuscriptSummary';
      id: string;
      title: string;
      pricesInCents: Array<any>;
      formats: Array<PublicationFormat>;
    }>;
  };
};

export type GetManuscriptPublishingByIdQueryVariables = Exact<{
  manuscriptPublishingId: Scalars['String']['input'];
}>;

export type GetManuscriptPublishingByIdQuery = {
  __typename?: 'Query';
  getManuscriptPublishingById: {
    __typename?: 'ManuscriptPublishing';
    id: string;
    priceInCents?: any | null;
    status: PublishingStatus;
    format: PublicationFormat;
    createdAt: any;
    description?: string | null;
    competitionId?: string | null;
    settings?: {
      __typename?: 'ManuscriptPublishingSettings';
      paperSize: { __typename?: 'PaperSize'; id: number; name: string };
    } | null;
    printSettings?: {
      __typename?: 'ManuscriptPrintSettings';
      hasColorPages: boolean;
      textStock: {
        __typename?: 'ManuscriptTextStock';
        id: number;
        name: string;
      };
      lamination: {
        __typename?: 'ManuscriptPrintLamination';
        id: number;
        name: string;
      };
    } | null;
    manuscript?: { __typename?: 'Manuscript'; title: string } | null;
    edition?: { __typename?: 'Edition'; id: number; name: string } | null;
    manuscriptPublishingAuthors?: Array<{
      __typename?: 'ManuscriptPublishingAuthor';
      id: string;
      percentage: number;
      bookAuthor: {
        __typename?: 'BookAuthor';
        id: string;
        userId?: string | null;
        name: string;
        avatarImageUrl?: string | null;
        bannerImageUrl?: string | null;
        slug: { __typename?: 'Slug'; id: string; name: string };
      };
    }> | null;
    assets?: Array<{
      __typename?: 'ManuscriptPublishingAsset';
      id: string;
      key: string;
      type: AssetType;
    }> | null;
    rejection?: {
      __typename?: 'ManuscriptPublishingRejection';
      reason: string;
    } | null;
  };
};

export type ValidatePdfPageSizeQueryVariables = Exact<{
  input: ValidatePdfInput;
}>;

export type ValidatePdfPageSizeQuery = {
  __typename?: 'Query';
  validatePdfPageSize: boolean;
};

export type ValidateBookCoverPdfPageSizeQueryVariables = Exact<{
  pdfKey: Scalars['String']['input'];
  publishingId: Scalars['String']['input'];
}>;

export type ValidateBookCoverPdfPageSizeQuery = {
  __typename?: 'Query';
  validateBookCoverPdfPageSize: boolean;
};

export type GetManuscriptAuthorsQueryVariables = Exact<{
  input?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetManuscriptAuthorsQuery = {
  __typename?: 'Query';
  getManuscriptAuthors: Array<{
    __typename?: 'UserAuthorIdentities';
    userId: string;
    authorsIdentities: Array<{
      __typename?: 'BookAuthor';
      id: string;
      name: string;
      bannerImageUrl?: string | null;
      avatarImageUrl?: string | null;
      bio?: string | null;
      slug: { __typename?: 'Slug'; id: string; name: string };
    }>;
  }>;
};

export type GetManuscriptByIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;

export type GetManuscriptByIdQuery = {
  __typename?: 'Query';
  getManuscriptById: {
    __typename?: 'Manuscript';
    id: string;
    title: string;
    origin: ManuscriptOriginType;
    genres?: Array<{
      __typename?: 'ManuscriptGenreEntity';
      id: string;
      name: string;
    }> | null;
    tags?: Array<{ __typename?: 'Tag'; id: number; name: string }> | null;
    assets?: Array<{
      __typename?: 'ManuscriptAssetEntity';
      id: string;
      key: string;
      type: AssetType;
    }> | null;
    settings?: {
      __typename?: 'ManuscriptSettings';
      hasDropcaps: boolean;
      sectionTitleAlignment: TextPosition;
      sectionTitleStyle: SectionTitleStyle;
      ornamentalBreak?: number | null;
      addPageNumber: boolean;
      pageNumberAlignment: TextPosition;
      font: { __typename?: 'PaperSize'; id: number };
    } | null;
    collaborators?: Array<{
      __typename?: 'Collaborator';
      userId: string;
      role?: CollaboratorRoleName | null;
      user: {
        __typename?: 'User';
        id: string;
        username: string;
        userPaymentDetails?: {
          __typename?: 'UserPaymentDetailsEntity';
          stripeConnectedAccountId?: string | null;
        } | null;
        profile?: {
          __typename?: 'Profile';
          userId: string;
          email?: string | null;
          unverifiedEmail?: string | null;
          firstName?: string | null;
          lastName?: string | null;
          description?: string | null;
          createdAt: string;
          birthday?: any | null;
          gender?: string | null;
          viewMode?: ViewMode | null;
          avatarImageUrl?: string | null;
          bannerImageUrl?: string | null;
          slug?: { __typename?: 'Slug'; name: string } | null;
          country?: { __typename?: 'Country'; id?: number | null } | null;
        } | null;
        oauthProviders?: Array<{
          __typename?: 'OauthProvider';
          name: string;
        }> | null;
        wallets?: Array<{
          __typename?: 'Wallet';
          address: string;
          isCustodial: boolean;
        }> | null;
      };
    }> | null;
    publishing?: Array<{
      __typename?: 'ManuscriptPublishing';
      description?: string | null;
      competitionId?: string | null;
      priceInCents?: any | null;
      edition?: { __typename?: 'Edition'; id: number; name: string } | null;
      manuscriptPublishingAuthors?: Array<{
        __typename?: 'ManuscriptPublishingAuthor';
        id: string;
        percentage: number;
        bookAuthor: {
          __typename?: 'BookAuthor';
          id: string;
          userId?: string | null;
          name: string;
          avatarImageUrl?: string | null;
          bannerImageUrl?: string | null;
          slug: { __typename?: 'Slug'; id: string; name: string };
        };
      }> | null;
    }> | null;
  };
};

export type GetMyManuscriptsCountQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetMyManuscriptsCountQuery = {
  __typename?: 'Query';
  getMyManuscriptsCount: {
    __typename?: 'ManuscriptCount';
    internalCount: number;
    externalCount: number;
  };
};

export type GetMyManuscriptsQueryVariables = Exact<{
  input?: InputMaybe<PaginationParamsDto>;
  origin?: InputMaybe<ManuscriptOriginType>;
}>;

export type GetMyManuscriptsQuery = {
  __typename?: 'Query';
  getMyManuscripts: {
    __typename?: 'ManuscriptPage';
    count: number;
    items: Array<{
      __typename?: 'Manuscript';
      id: string;
      title: string;
      createdAt: any;
      origin: ManuscriptOriginType;
      assets?: Array<{
        __typename?: 'ManuscriptAssetEntity';
        id: string;
        key: string;
        type: AssetType;
      }> | null;
      genres?: Array<{
        __typename?: 'ManuscriptGenreEntity';
        id: string;
      }> | null;
      collaborators?: Array<{
        __typename?: 'Collaborator';
        user: {
          __typename?: 'User';
          id: string;
          username: string;
          userPaymentDetails?: {
            __typename?: 'UserPaymentDetailsEntity';
            stripeConnectedAccountId?: string | null;
          } | null;
          profile?: {
            __typename?: 'Profile';
            userId: string;
            email?: string | null;
            unverifiedEmail?: string | null;
            firstName?: string | null;
            lastName?: string | null;
            description?: string | null;
            createdAt: string;
            birthday?: any | null;
            gender?: string | null;
            viewMode?: ViewMode | null;
            avatarImageUrl?: string | null;
            bannerImageUrl?: string | null;
            slug?: { __typename?: 'Slug'; name: string } | null;
            country?: { __typename?: 'Country'; id?: number | null } | null;
          } | null;
          oauthProviders?: Array<{
            __typename?: 'OauthProvider';
            name: string;
          }> | null;
          wallets?: Array<{
            __typename?: 'Wallet';
            address: string;
            isCustodial: boolean;
          }> | null;
        };
      }> | null;
      publishing?: Array<{
        __typename?: 'ManuscriptPublishing';
        description?: string | null;
        priceInCents?: any | null;
        format: PublicationFormat;
        competitionId?: string | null;
        assets?: Array<{
          __typename?: 'ManuscriptPublishingAsset';
          id: string;
          key: string;
          type: AssetType;
        }> | null;
        manuscriptPublishingAuthors?: Array<{
          __typename?: 'ManuscriptPublishingAuthor';
          bookAuthorId: string;
        }> | null;
        edition?: { __typename?: 'Edition'; id: number } | null;
        rejection?: {
          __typename?: 'ManuscriptPublishingRejection';
          reason: string;
        } | null;
      }> | null;
    }>;
  };
};

export type PreviewManuscriptEpubQueryVariables = Exact<{
  manuscriptId: Scalars['String']['input'];
}>;

export type PreviewManuscriptEpubQuery = {
  __typename?: 'Query';
  previewManuscriptEpub: string;
};

export type GetOrdersQueryVariables = Exact<{
  input: PaginationParamsDto;
}>;

export type GetOrdersQuery = {
  __typename?: 'Query';
  getOrders: {
    __typename?: 'OrderPage';
    count: number;
    items: Array<{
      __typename?: 'Order';
      id: string;
      status: OrderStatus;
      type: OrderType;
      createdAt: any;
      totalInCents: any;
      orderItems: Array<{ __typename?: 'OrderItem'; quantity: number }>;
    }>;
  };
};

export type GetOrderQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;

export type GetOrderQuery = {
  __typename?: 'Query';
  getOrder: {
    __typename?: 'Order';
    id: string;
    createdAt: any;
    subTotalInCents: any;
    taxInCents: any;
    totalInCents: any;
    status: OrderStatus;
    type: OrderType;
    orderItems: Array<{
      __typename?: 'OrderItem';
      id: string;
      productPriceInCents: any;
      totalPriceInCents: any;
      quantity: number;
      publicationListing: {
        __typename?: 'PublicationListing';
        publication: {
          __typename?: 'Publication';
          id: string;
          publishedAt: any;
          pagesCount: number;
          format: PublicationFormat;
          bookEdition: {
            __typename?: 'BookEdition';
            id: string;
            description: string;
            book: {
              __typename?: 'Book';
              title: string;
              genres?: Array<{
                __typename?: 'BookGenre';
                id: string;
                name: string;
                description?: string | null;
                slug: string;
              }> | null;
              editions?: Array<{
                __typename?: 'BookEdition';
                id: string;
                description: string;
                edition: { __typename?: 'Edition'; id: number; name: string };
                language: { __typename?: 'Language'; id: number; name: string };
                authors: Array<{
                  __typename?: 'BookAuthor';
                  id: string;
                  name: string;
                  bannerImageUrl?: string | null;
                  avatarImageUrl?: string | null;
                  bio?: string | null;
                  slug: { __typename?: 'Slug'; id: string; name: string };
                }>;
                publications?: Array<{
                  __typename?: 'Publication';
                  id: string;
                  publishedAt: any;
                  pagesCount: number;
                  format: PublicationFormat;
                  assets?: Array<{
                    __typename?: 'Asset';
                    id: string;
                    key: string;
                    type: string;
                  }> | null;
                  listings?: Array<{
                    __typename?: 'PublicationListing';
                    id: string;
                    createdAt: any;
                    priceInCents: any;
                    quantity: number;
                  }> | null;
                  epubMetadata?: {
                    __typename?: 'EpubMetadataEntity';
                    locations: any;
                  } | null;
                }> | null;
              }> | null;
            };
            edition: { __typename?: 'Edition'; id: number; name: string };
            language: { __typename?: 'Language'; id: number; name: string };
            authors: Array<{
              __typename?: 'BookAuthor';
              id: string;
              name: string;
              bannerImageUrl?: string | null;
              avatarImageUrl?: string | null;
              bio?: string | null;
              slug: { __typename?: 'Slug'; id: string; name: string };
            }>;
            publications?: Array<{
              __typename?: 'Publication';
              id: string;
              publishedAt: any;
              pagesCount: number;
              format: PublicationFormat;
              assets?: Array<{
                __typename?: 'Asset';
                id: string;
                key: string;
                type: string;
              }> | null;
              listings?: Array<{
                __typename?: 'PublicationListing';
                id: string;
                createdAt: any;
                priceInCents: any;
                quantity: number;
              }> | null;
              epubMetadata?: {
                __typename?: 'EpubMetadataEntity';
                locations: any;
              } | null;
            }> | null;
          };
          assets?: Array<{
            __typename?: 'Asset';
            id: string;
            key: string;
            type: string;
          }> | null;
          listings?: Array<{
            __typename?: 'PublicationListing';
            id: string;
            createdAt: any;
            priceInCents: any;
            quantity: number;
          }> | null;
          epubMetadata?: {
            __typename?: 'EpubMetadataEntity';
            locations: any;
          } | null;
        };
      };
    }>;
    orderHistories: Array<{
      __typename?: 'OrderHistory';
      id: string;
      previousStatus: OrderStatus;
      newStatus: OrderStatus;
    }>;
  };
};

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetCurrentUserQuery = {
  __typename?: 'Query';
  currentUser: {
    __typename?: 'User';
    id: string;
    username: string;
    userPaymentDetails?: {
      __typename?: 'UserPaymentDetailsEntity';
      stripeConnectedAccountId?: string | null;
    } | null;
    profile?: {
      __typename?: 'Profile';
      userId: string;
      email?: string | null;
      unverifiedEmail?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      description?: string | null;
      createdAt: string;
      birthday?: any | null;
      gender?: string | null;
      viewMode?: ViewMode | null;
      avatarImageUrl?: string | null;
      bannerImageUrl?: string | null;
      slug?: { __typename?: 'Slug'; name: string } | null;
      country?: { __typename?: 'Country'; id?: number | null } | null;
    } | null;
    oauthProviders?: Array<{
      __typename?: 'OauthProvider';
      name: string;
    }> | null;
    wallets?: Array<{
      __typename?: 'Wallet';
      address: string;
      isCustodial: boolean;
    }> | null;
  };
};

export type GetAvailableUsernameQueryVariables = Exact<{
  input: AvailableUsernameInput;
}>;

export type GetAvailableUsernameQuery = {
  __typename?: 'Query';
  getAvailableUsername: string;
};

export type IsSlugAvailableQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;

export type IsSlugAvailableQuery = {
  __typename?: 'Query';
  isSlugAvailable: boolean;
};

export type UpdateProfileMutationVariables = Exact<{
  input: UpdateProfileInput;
}>;

export type UpdateProfileMutation = {
  __typename?: 'Mutation';
  updateProfile: {
    __typename?: 'Profile';
    userId: string;
    email?: string | null;
    unverifiedEmail?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    description?: string | null;
    createdAt: string;
    birthday?: any | null;
    gender?: string | null;
    viewMode?: ViewMode | null;
    avatarImageUrl?: string | null;
    bannerImageUrl?: string | null;
    slug?: { __typename?: 'Slug'; name: string } | null;
    country?: { __typename?: 'Country'; id?: number | null } | null;
  };
};

export type UpdateProfileViewModeMutationVariables = Exact<{
  input: UpdateProfileViewModeInput;
}>;

export type UpdateProfileViewModeMutation = {
  __typename?: 'Mutation';
  updateProfileViewMode: { __typename?: 'Profile'; viewMode?: ViewMode | null };
};

export type SetPasswordMutationVariables = Exact<{
  input: SetUserPasswordInput;
}>;

export type SetPasswordMutation = {
  __typename?: 'Mutation';
  setUserPassword: { __typename?: 'User'; id: string };
};

export type VerifyProfileMutationVariables = Exact<{
  input: VerifyProfileInput;
}>;

export type VerifyProfileMutation = {
  __typename?: 'Mutation';
  verifyProfile: {
    __typename?: 'VerifyProfileEntity';
    access_token: string;
    id_token: string;
    refresh_token: string;
    expires_at: number;
  };
};

export type AccountOnboardedQueryVariables = Exact<{ [key: string]: never }>;

export type AccountOnboardedQuery = {
  __typename?: 'Query';
  accountOnboarded: boolean;
};

export type TransferAvailableBalanceMutationVariables = Exact<{
  [key: string]: never;
}>;

export type TransferAvailableBalanceMutation = {
  __typename?: 'Mutation';
  transferAvailableBalance: boolean;
};

export type CreateConnectedAccountMutationVariables = Exact<{
  input: Scalars['String']['input'];
}>;

export type CreateConnectedAccountMutation = {
  __typename?: 'Mutation';
  createConnectedAccount: string;
};

export type GetAccountBalanceQueryVariables = Exact<{ [key: string]: never }>;

export type GetAccountBalanceQuery = {
  __typename?: 'Query';
  getAccountBalance: {
    __typename?: 'Balance';
    pendingFiatBalanceInCents: any;
    availableCryptoBalanceInCents: any;
    pendingCryptoBalanceInCents: any;
    availableFiatBalance: Array<{
      __typename?: 'FiatBalance';
      value: any;
      currency: any;
    }>;
  };
};

export type BookSalesQueryVariables = Exact<{
  input?: InputMaybe<PaginationParamsDto>;
}>;

export type BookSalesQuery = {
  __typename?: 'Query';
  booksSales: {
    __typename?: 'BookSalesPage';
    count: number;
    items: Array<{
      __typename?: 'BookSale';
      bookId: string;
      book: { __typename?: 'Book'; title: string };
      listings: Array<{
        __typename?: 'Listing';
        type: string;
        unitsCompleted?: {
          __typename?: 'Units';
          count: number;
          salesVolumeInFiat: number;
          salesVolumeInCrypto: number;
        } | null;
        unitsPending?: {
          __typename?: 'Units';
          count: number;
          salesVolumeInFiat: number;
          salesVolumeInCrypto: number;
        } | null;
      }>;
    }>;
  };
};

export type GetSpotlightBookEditionsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetSpotlightBookEditionsQuery = {
  __typename?: 'Query';
  getSpotlightBookEditions: Array<{
    __typename?: 'BookEdition';
    id: string;
    book: { __typename?: 'Book'; title: string };
    publications?: Array<{
      __typename?: 'Publication';
      assets?: Array<{
        __typename?: 'Asset';
        id: string;
        key: string;
        type: string;
      }> | null;
    }> | null;
  }>;
};

export type SetSpotlightBookEditionsMutationVariables = Exact<{
  input: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;

export type SetSpotlightBookEditionsMutation = {
  __typename?: 'Mutation';
  setSpotlightBookEditions: boolean;
};

export type GetSpotlightAuthorsQueryVariables = Exact<{ [key: string]: never }>;

export type GetSpotlightAuthorsQuery = {
  __typename?: 'Query';
  getSpotlightAuthors: Array<{
    __typename?: 'BookAuthor';
    id: string;
    name: string;
    slug: { __typename?: 'Slug'; name: string };
  }>;
};

export type SetSpotlightAuthorsMutationVariables = Exact<{
  input: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;

export type SetSpotlightAuthorsMutation = {
  __typename?: 'Mutation';
  setSpotlightAuthors: boolean;
};

export type GetWritingStreakQueryVariables = Exact<{ [key: string]: never }>;

export type GetWritingStreakQuery = {
  __typename?: 'Query';
  getWritingStreak: {
    __typename?: 'WritingStreak';
    currentStreak: number;
    activeDates: Array<any>;
  };
};

export type GetStatsByUserQueryVariables = Exact<{
  input: GetStatsByUserInput;
}>;

export type GetStatsByUserQuery = { __typename?: 'Query'; getStatsByUser: any };

export type GetWalletMessageQueryVariables = Exact<{ [key: string]: never }>;

export type GetWalletMessageQuery = {
  __typename?: 'Query';
  walletMessage: {
    __typename?: 'WalletMessageEntity';
    statement: string;
    message: string;
    nonce: string;
  };
};

export type SignInLegacyWithWalletMutationVariables = Exact<{
  input: WalletSignInLegacyInput;
}>;

export type SignInLegacyWithWalletMutation = {
  __typename?: 'Mutation';
  signInLegacyWithWallet: {
    __typename?: 'WalletSignInEntity';
    access_token: string;
    refresh_token: string;
    id_token: string;
    expires_at: number;
  };
};

export type SignInWithWalletMutationVariables = Exact<{
  input: WalletSignInInput;
}>;

export type SignInWithWalletMutation = {
  __typename?: 'Mutation';
  signInWithWallet: {
    __typename?: 'WalletSignInEntity';
    access_token: string;
    refresh_token: string;
    id_token: string;
    expires_at: number;
  };
};

export type RefreshTokenForWalletQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;

export type RefreshTokenForWalletQuery = {
  __typename?: 'Query';
  walletRefreshToken: {
    __typename?: 'WalletRefreshTokenEntity';
    access_token: string;
    id_token: string;
    expires_at: number;
  };
};

export type GetWishlistBooksQueryVariables = Exact<{ [key: string]: never }>;

export type GetWishlistBooksQuery = {
  __typename?: 'Query';
  getWishlistBooks: Array<{
    __typename?: 'BookListItem';
    id: string;
    title: string;
    bookEditionId: string;
    authors: Array<{
      __typename?: 'BookAuthor';
      id: string;
      name: string;
      bannerImageUrl?: string | null;
      avatarImageUrl?: string | null;
      bio?: string | null;
      slug: { __typename?: 'Slug'; id: string; name: string };
    }>;
    assets?: Array<{
      __typename?: 'Asset';
      id: string;
      key: string;
      type: string;
    }> | null;
  }>;
};

export type GetWishlistBookIdsQueryVariables = Exact<{ [key: string]: never }>;

export type GetWishlistBookIdsQuery = {
  __typename?: 'Query';
  getWishlistBooks: Array<{ __typename?: 'BookListItem'; id: string }>;
};

export type AddToWishlistMutationVariables = Exact<{
  input: Scalars['String']['input'];
}>;

export type AddToWishlistMutation = {
  __typename?: 'Mutation';
  addToWishlist: boolean;
};

export type RemoveFromWishlistMutationVariables = Exact<{
  input: Scalars['String']['input'];
}>;

export type RemoveFromWishlistMutation = {
  __typename?: 'Mutation';
  removeFromWishlist: { __typename?: 'BookListItem'; id: string };
};

export const AssetFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Asset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AssetFragmentFragment, unknown>;
export const PublicationListingFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationListingFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PublicationListing' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priceInCents' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PublicationListingFragmentFragment, unknown>;
export const PublicationDownwardsFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Publication' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pagesCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AssetFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'listings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationListingFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'epubMetadata' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'locations' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Asset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationListingFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PublicationListing' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priceInCents' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PublicationDownwardsFragmentFragment, unknown>;
export const BookAuthorFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookAuthorFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookAuthor' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bannerImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatarImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slug' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BookAuthorFragmentFragment, unknown>;
export const BookEditionDownwardsFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookEdition' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'edition' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'language' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookAuthorFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'publications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Asset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationListingFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PublicationListing' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priceInCents' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookAuthorFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookAuthor' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bannerImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatarImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slug' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Publication' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pagesCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AssetFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'listings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationListingFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'epubMetadata' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'locations' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BookEditionDownwardsFragmentFragment, unknown>;
export const BookGenreFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookGenreFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookGenre' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BookGenreFragmentFragment, unknown>;
export const BookDownwardsFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Book' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookGenreFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'editions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookAuthorFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookAuthor' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bannerImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatarImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slug' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Asset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationListingFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PublicationListing' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priceInCents' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Publication' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pagesCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AssetFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'listings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationListingFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'epubMetadata' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'locations' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookGenreFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookGenre' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookEdition' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'edition' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'language' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookAuthorFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'publications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BookDownwardsFragmentFragment, unknown>;
export const BookUpwardsFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookUpwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Book' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'BookDownwardsFragment' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookGenreFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookGenre' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookAuthorFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookAuthor' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bannerImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatarImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slug' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Asset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationListingFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PublicationListing' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priceInCents' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Publication' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pagesCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AssetFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'listings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationListingFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'epubMetadata' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'locations' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookEdition' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'edition' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'language' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookAuthorFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'publications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Book' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookGenreFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'editions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BookUpwardsFragmentFragment, unknown>;
export const BookEditionUpwardsFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookEditionUpwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookEdition' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'book' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookUpwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookAuthorFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookAuthor' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bannerImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatarImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slug' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Asset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationListingFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PublicationListing' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priceInCents' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Publication' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pagesCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AssetFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'listings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationListingFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'epubMetadata' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'locations' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookGenreFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookGenre' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookEdition' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'edition' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'language' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookAuthorFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'publications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Book' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookGenreFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'editions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookUpwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Book' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'BookDownwardsFragment' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BookEditionUpwardsFragmentFragment, unknown>;
export const PublicationUpwardsFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationUpwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Publication' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bookEdition' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookEditionUpwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Asset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationListingFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PublicationListing' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priceInCents' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookAuthorFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookAuthor' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bannerImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatarImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slug' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Publication' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pagesCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AssetFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'listings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationListingFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'epubMetadata' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'locations' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookEdition' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'edition' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'language' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookAuthorFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'publications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookGenreFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookGenre' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Book' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookGenreFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'editions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookUpwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Book' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'BookDownwardsFragment' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookEditionUpwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookEdition' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'book' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookUpwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PublicationUpwardsFragmentFragment, unknown>;
export const BasketFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BasketFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Basket' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'publicationListingId' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'publicationsListing' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'priceInCents' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'publication' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'PublicationUpwardsFragment',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Asset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationListingFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PublicationListing' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priceInCents' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Publication' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pagesCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AssetFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'listings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationListingFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'epubMetadata' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'locations' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookAuthorFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookAuthor' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bannerImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatarImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slug' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookEdition' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'edition' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'language' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookAuthorFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'publications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookGenreFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookGenre' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Book' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookGenreFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'editions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookUpwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Book' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'BookDownwardsFragment' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookEditionUpwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookEdition' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'book' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookUpwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationUpwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Publication' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bookEdition' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookEditionUpwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BasketFragmentFragment, unknown>;
export const BookLicenseFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookLicenseFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookLicense' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priceInCents' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'manuscriptAssetKey' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'coverAssetKey' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AssetFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'btcInscriptionStatus' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'btcInscriptionId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'orders' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'solanaPNftAddress' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'solanaPNftTxSignature' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'postPaymentTxSignature' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'signedTemplateIpfsCid' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'isForCommercialUse' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'typeOfRights' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isbn' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'metadata' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
                { kind: 'Field', name: { kind: 'Name', value: 'pages' } },
                { kind: 'Field', name: { kind: 'Name', value: 'tokens' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Asset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BookLicenseFragmentFragment, unknown>;
export const ManuscriptAssetFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ManuscriptAssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ManuscriptAssetEntity' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ManuscriptAssetFragmentFragment, unknown>;
export const ManuscriptPublishingAuthorFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ManuscriptPublishingAuthorFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ManuscriptPublishingAuthor' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bookAuthor' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'avatarImageUrl' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'bannerImageUrl' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'slug' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'percentage' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ManuscriptPublishingAuthorFragmentFragment,
  unknown
>;
export const ManuscriptPublishingAssetFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ManuscriptPublishingAssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ManuscriptPublishingAsset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ManuscriptPublishingAssetFragmentFragment,
  unknown
>;
export const ManuscriptPublishingFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ManuscriptPublishingFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ManuscriptPublishing' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priceInCents' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'settings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'paperSize' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'printSettings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'textStock' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'lamination' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'hasColorPages' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'manuscript' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'competitionId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'edition' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'manuscriptPublishingAuthors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'ManuscriptPublishingAuthorFragment',
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'ManuscriptPublishingAssetFragment',
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rejection' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'reason' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ManuscriptPublishingAuthorFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ManuscriptPublishingAuthor' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bookAuthor' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'avatarImageUrl' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'bannerImageUrl' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'slug' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'percentage' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ManuscriptPublishingAssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ManuscriptPublishingAsset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ManuscriptPublishingFragmentFragment, unknown>;
export const OrderFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'OrderFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Order' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'orderItems' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'totalInCents' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<OrderFragmentFragment, unknown>;
export const UserOwnedPublicationFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserOwnedPublicationFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UserOwnedPublication' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastReadAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'source' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'publication' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationUpwardsFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'stats' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'percentageRead' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Asset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationListingFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PublicationListing' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priceInCents' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Publication' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pagesCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AssetFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'listings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationListingFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'epubMetadata' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'locations' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookAuthorFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookAuthor' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bannerImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatarImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slug' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookEdition' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'edition' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'language' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookAuthorFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'publications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookGenreFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookGenre' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Book' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookGenreFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'editions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookUpwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Book' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'BookDownwardsFragment' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookEditionUpwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookEdition' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'book' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookUpwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationUpwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Publication' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bookEdition' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookEditionUpwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserOwnedPublicationFragmentFragment, unknown>;
export const ProfileFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProfileFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Profile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'unverifiedEmail' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'birthday' } },
          { kind: 'Field', name: { kind: 'Name', value: 'gender' } },
          { kind: 'Field', name: { kind: 'Name', value: 'viewMode' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slug' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'country' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'avatarImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bannerImageUrl' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProfileFragmentFragment, unknown>;
export const UserFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'username' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'userPaymentDetails' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'stripeConnectedAccountId' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'profile' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ProfileFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'oauthProviders' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'wallets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isCustodial' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProfileFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Profile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'unverifiedEmail' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'birthday' } },
          { kind: 'Field', name: { kind: 'Name', value: 'gender' } },
          { kind: 'Field', name: { kind: 'Name', value: 'viewMode' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slug' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'country' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'avatarImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bannerImageUrl' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserFragmentFragment, unknown>;
export const GetCollaboratorsByManuscriptIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetCollaboratorsByManuscriptId' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getCollaboratorsByManuscriptId' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'manuscriptId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'UserFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'getCollaboratorInvitationsByManuscriptId',
            },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'manuscriptId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'role' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProfileFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Profile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'unverifiedEmail' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'birthday' } },
          { kind: 'Field', name: { kind: 'Name', value: 'gender' } },
          { kind: 'Field', name: { kind: 'Name', value: 'viewMode' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slug' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'country' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'avatarImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bannerImageUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'username' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'userPaymentDetails' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'stripeConnectedAccountId' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'profile' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ProfileFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'oauthProviders' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'wallets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isCustodial' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetCollaboratorsByManuscriptIdQuery,
  GetCollaboratorsByManuscriptIdQueryVariables
>;
export const InviteCollaboratorDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'InviteCollaborator' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'InviteCollaboratorInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'inviteCollaborator' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'inviteCollaboratorInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  InviteCollaboratorMutation,
  InviteCollaboratorMutationVariables
>;
export const UpdateCollaboratorDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateCollaborator' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateCollaboratorInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateCollaborator' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'UpdateCollaboratorInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateCollaboratorMutation,
  UpdateCollaboratorMutationVariables
>;
export const RemoveCollaboratorDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'RemoveCollaborator' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'RemoveCollaboratorInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'removeCollaborator' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'removeCollaboratorInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RemoveCollaboratorMutation,
  RemoveCollaboratorMutationVariables
>;
export const GetVersionsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetVersions' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'manuscriptId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'paginationParamsDto' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'PaginationParamsDto' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getVersions' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'manuscriptId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'manuscriptId' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'paginationParamsDto' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'paginationParamsDto' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'timestamp' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'participants' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetVersionsQuery, GetVersionsQueryVariables>;
export const RestoreVersionDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'RestoreVersion' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'manuscriptId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'documentHistoryId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'restoreVersion' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'manuscriptId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'manuscriptId' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'documentHistoryId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'documentHistoryId' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RestoreVersionMutation,
  RestoreVersionMutationVariables
>;
export const GetAuthorDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetAuthor' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getBookAuthor' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'slug' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'slug' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookAuthorFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookAuthorFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookAuthor' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bannerImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatarImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slug' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAuthorQuery, GetAuthorQueryVariables>;
export const GetAuthorByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetAuthorById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getBookAuthorById' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'slug' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAuthorByIdQuery, GetAuthorByIdQueryVariables>;
export const CreateBookAuthorDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateBookAuthor' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateAuthorInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createBookAuthor' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookAuthorFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookAuthorFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookAuthor' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bannerImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatarImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slug' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateBookAuthorMutation,
  CreateBookAuthorMutationVariables
>;
export const UpdateBookAuthorDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateBookAuthor' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateAuthorInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateBookAuthor' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookAuthorFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookAuthorFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookAuthor' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bannerImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatarImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slug' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateBookAuthorMutation,
  UpdateBookAuthorMutationVariables
>;
export const GetPenBookAuthorsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getPenBookAuthors' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getPenBookAuthors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookAuthorFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookAuthorFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookAuthor' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bannerImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatarImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slug' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetPenBookAuthorsQuery,
  GetPenBookAuthorsQueryVariables
>;
export const GetBestSellerBookEditionsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetBestSellerBookEditions' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getBestSellerBookEditions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'editions' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'BookEditionUpwardsFragment',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookAuthorFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookAuthor' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bannerImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatarImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slug' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Asset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationListingFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PublicationListing' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priceInCents' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Publication' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pagesCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AssetFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'listings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationListingFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'epubMetadata' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'locations' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookEdition' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'edition' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'language' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookAuthorFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'publications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookGenreFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookGenre' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Book' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookGenreFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'editions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookUpwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Book' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'BookDownwardsFragment' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookEditionUpwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookEdition' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'book' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookUpwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetBestSellerBookEditionsQuery,
  GetBestSellerBookEditionsQueryVariables
>;
export const SetBestSellerBookEditionsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SetBestSellerBookEditions' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'BestSellerCategoryBookEditionInput',
                  },
                },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'setBestSellerBookEditions' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  SetBestSellerBookEditionsMutation,
  SetBestSellerBookEditionsMutationVariables
>;
export const CreateBookLicenseDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateBookLicense' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateBookLicenseInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createBookLicense' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateBookLicenseMutation,
  CreateBookLicenseMutationVariables
>;
export const GetBookLicensesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetBookLicenses' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'pagination' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'PaginationParamsDto' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'excludeLicenseId' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getBookLicenses' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pagination' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'pagination' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'excludeLicenseId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'excludeLicenseId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'BookLicenseFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Asset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookLicenseFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookLicense' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priceInCents' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'manuscriptAssetKey' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'coverAssetKey' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AssetFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'btcInscriptionStatus' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'btcInscriptionId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'orders' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'solanaPNftAddress' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'solanaPNftTxSignature' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'postPaymentTxSignature' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'signedTemplateIpfsCid' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'isForCommercialUse' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'typeOfRights' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isbn' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'metadata' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
                { kind: 'Field', name: { kind: 'Name', value: 'pages' } },
                { kind: 'Field', name: { kind: 'Name', value: 'tokens' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetBookLicensesQuery,
  GetBookLicensesQueryVariables
>;
export const GetBookLicenseByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetBookLicenseById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getBookLicenseById' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookLicenseFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Asset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookLicenseFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookLicense' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priceInCents' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'manuscriptAssetKey' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'coverAssetKey' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AssetFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'btcInscriptionStatus' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'btcInscriptionId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'orders' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'solanaPNftAddress' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'solanaPNftTxSignature' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'postPaymentTxSignature' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'signedTemplateIpfsCid' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'isForCommercialUse' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'typeOfRights' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isbn' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'metadata' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
                { kind: 'Field', name: { kind: 'Name', value: 'pages' } },
                { kind: 'Field', name: { kind: 'Name', value: 'tokens' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetBookLicenseByIdQuery,
  GetBookLicenseByIdQueryVariables
>;
export const CreateHelioLicensePaymentDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateHelioLicensePayment' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'licenseId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createHelioLicensePayment' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'licenseId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'licenseId' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateHelioLicensePaymentMutation,
  CreateHelioLicensePaymentMutationVariables
>;
export const GetPurchasedBookLicensesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetPurchasedBookLicenses' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getPurchasedBookLicenses' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookLicenseFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Asset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookLicenseFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookLicense' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priceInCents' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'manuscriptAssetKey' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'coverAssetKey' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AssetFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'btcInscriptionStatus' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'btcInscriptionId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'orders' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'solanaPNftAddress' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'solanaPNftTxSignature' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'postPaymentTxSignature' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'signedTemplateIpfsCid' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'isForCommercialUse' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'typeOfRights' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isbn' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'metadata' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
                { kind: 'Field', name: { kind: 'Name', value: 'pages' } },
                { kind: 'Field', name: { kind: 'Name', value: 'tokens' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetPurchasedBookLicensesQuery,
  GetPurchasedBookLicensesQueryVariables
>;
export const GetMyBookLicensesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetMyBookLicenses' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getMyBookLicenses' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookLicenseFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Asset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookLicenseFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookLicense' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priceInCents' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'manuscriptAssetKey' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'coverAssetKey' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AssetFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'btcInscriptionStatus' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'btcInscriptionId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'orders' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'solanaPNftAddress' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'solanaPNftTxSignature' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'postPaymentTxSignature' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'signedTemplateIpfsCid' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'isForCommercialUse' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'typeOfRights' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isbn' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'metadata' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
                { kind: 'Field', name: { kind: 'Name', value: 'pages' } },
                { kind: 'Field', name: { kind: 'Name', value: 'tokens' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetMyBookLicensesQuery,
  GetMyBookLicensesQueryVariables
>;
export const GetBookLicenseByIdsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetBookLicenseByIds' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'ids' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'String' },
                },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getBookLicenseByIds' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'ids' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'ids' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookLicenseFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Asset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookLicenseFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookLicense' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priceInCents' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'manuscriptAssetKey' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'coverAssetKey' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AssetFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'btcInscriptionStatus' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'btcInscriptionId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'orders' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'solanaPNftAddress' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'solanaPNftTxSignature' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'postPaymentTxSignature' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'signedTemplateIpfsCid' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'isForCommercialUse' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'typeOfRights' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isbn' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'metadata' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'hash' } },
                { kind: 'Field', name: { kind: 'Name', value: 'pages' } },
                { kind: 'Field', name: { kind: 'Name', value: 'tokens' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetBookLicenseByIdsQuery,
  GetBookLicenseByIdsQueryVariables
>;
export const GetBookLicenseOrderByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetBookLicenseOrderById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getBookLicenseOrderById' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'solanaPNftAddress' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'solanaPNftTxSignature' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'postPaymentTxSignature' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'signedTemplateIpfsCid' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetBookLicenseOrderByIdQuery,
  GetBookLicenseOrderByIdQueryVariables
>;
export const GetBookLicenseManuscriptUrlDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetBookLicenseManuscriptUrl' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'bookLicenseId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getBookLicenseManuscriptUrl' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'bookLicenseId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'bookLicenseId' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetBookLicenseManuscriptUrlQuery,
  GetBookLicenseManuscriptUrlQueryVariables
>;
export const GetBookLicenseSalesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetBookLicenseSales' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'bookLicenseId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getBookLicenseSales' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'bookLicenseId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'bookLicenseId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'volume' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'orders' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'solanaPNftAddress' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'postPaymentTxSignature' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'signedTemplateIpfsCid' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetBookLicenseSalesQuery,
  GetBookLicenseSalesQueryVariables
>;
export const GetBookEditionRatingDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetBookEditionRating' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getBookEditionRating' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'bookEditionId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'averageRating' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'ratingCounts' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetBookEditionRatingQuery,
  GetBookEditionRatingQueryVariables
>;
export const GetUserBookReviewDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetUserBookReview' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getUserBookEditionReview' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'bookEditionId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'body' } },
                { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'rejectionReason' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetUserBookReviewQuery,
  GetUserBookReviewQueryVariables
>;
export const GetBookEditionReviewsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetBookEditionReviews' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'pagination' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'PaginationParamsDto' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getBookReviewsByBookEditionId' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'bookEditionId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pagination' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'pagination' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'reviews' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'rating' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'body' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isVerified' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'UserFragment' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'count' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProfileFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Profile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'unverifiedEmail' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'birthday' } },
          { kind: 'Field', name: { kind: 'Name', value: 'gender' } },
          { kind: 'Field', name: { kind: 'Name', value: 'viewMode' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slug' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'country' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'avatarImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bannerImageUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'username' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'userPaymentDetails' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'stripeConnectedAccountId' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'profile' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ProfileFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'oauthProviders' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'wallets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isCustodial' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetBookEditionReviewsQuery,
  GetBookEditionReviewsQueryVariables
>;
export const GetReviewsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetReviews' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'pagination' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'PaginationParamsDto' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getReviews' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pagination' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'pagination' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'reviews' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'rating' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'body' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'status' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'bookEditionId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'UserFragment' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'count' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProfileFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Profile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'unverifiedEmail' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'birthday' } },
          { kind: 'Field', name: { kind: 'Name', value: 'gender' } },
          { kind: 'Field', name: { kind: 'Name', value: 'viewMode' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slug' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'country' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'avatarImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bannerImageUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'username' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'userPaymentDetails' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'stripeConnectedAccountId' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'profile' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ProfileFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'oauthProviders' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'wallets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isCustodial' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetReviewsQuery, GetReviewsQueryVariables>;
export const AddReviewDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AddReview' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AddReviewInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'addReview' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AddReviewMutation, AddReviewMutationVariables>;
export const EditReviewDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'EditReview' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'EditReviewInput' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'reviewId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'editReview' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'reviewId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'reviewId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EditReviewMutation, EditReviewMutationVariables>;
export const ApproveReviewDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'ApproveReview' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'reviewId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'approveReview' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'reviewId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'reviewId' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ApproveReviewMutation,
  ApproveReviewMutationVariables
>;
export const RejectReviewDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'RejectReview' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'reviewId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'reason' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rejectReview' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'reviewId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'reviewId' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'reason' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'reason' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RejectReviewMutation,
  RejectReviewMutationVariables
>;
export const GetBooksWithSearchCriteriaDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetBooksWithSearchCriteria' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'filter' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'BookFilterInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'BookSortInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'pagination' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'PaginationParamsDto' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getBooksWithSearchCriteria' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'filter' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'sort' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pagination' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'pagination' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'bookEditionId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'editionId' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'minPrice' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'maxPrice' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'assets' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'AssetFragment' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'authors' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'BookAuthorFragment',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Asset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookAuthorFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookAuthor' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bannerImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatarImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slug' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetBooksWithSearchCriteriaQuery,
  GetBooksWithSearchCriteriaQueryVariables
>;
export const GetBookByBookEditionIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetBookByBookEditionId' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getBookByBookEditionId' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookGenreFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookGenre' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookAuthorFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookAuthor' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bannerImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatarImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slug' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Asset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationListingFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PublicationListing' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priceInCents' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Publication' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pagesCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AssetFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'listings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationListingFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'epubMetadata' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'locations' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookEdition' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'edition' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'language' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookAuthorFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'publications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Book' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookGenreFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'editions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetBookByBookEditionIdQuery,
  GetBookByBookEditionIdQueryVariables
>;
export const GetPublicationAssetDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetPublicationAsset' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'GetPublicationAssetInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getPublicationAsset' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetPublicationAssetQuery,
  GetPublicationAssetQueryVariables
>;
export const GetBooksByListingIdsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetBooksByListingIds' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'String' },
                },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getBooksByListingIds' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'ids' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookGenreFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookGenre' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookAuthorFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookAuthor' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bannerImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatarImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slug' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Asset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationListingFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PublicationListing' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priceInCents' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Publication' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pagesCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AssetFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'listings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationListingFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'epubMetadata' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'locations' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookEdition' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'edition' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'language' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookAuthorFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'publications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Book' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookGenreFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'editions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetBooksByListingIdsQuery,
  GetBooksByListingIdsQueryVariables
>;
export const GetEditionsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetEditions' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getEditions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetEditionsQuery, GetEditionsQueryVariables>;
export const GetBookTagsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetBookTags' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getBookTags' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetBookTagsQuery, GetBookTagsQueryVariables>;
export const GetMyOwnedPublicationsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetMyOwnedPublications' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getMyOwnedPublications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'UserOwnedPublicationFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Asset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationListingFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PublicationListing' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priceInCents' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Publication' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pagesCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AssetFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'listings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationListingFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'epubMetadata' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'locations' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookAuthorFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookAuthor' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bannerImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatarImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slug' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookEdition' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'edition' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'language' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookAuthorFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'publications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookGenreFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookGenre' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Book' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookGenreFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'editions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookUpwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Book' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'BookDownwardsFragment' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookEditionUpwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookEdition' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'book' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookUpwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationUpwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Publication' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bookEdition' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookEditionUpwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserOwnedPublicationFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UserOwnedPublication' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastReadAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'source' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'publication' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationUpwardsFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'stats' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'percentageRead' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetMyOwnedPublicationsQuery,
  GetMyOwnedPublicationsQueryVariables
>;
export const GetMyOwnedPublicationByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetMyOwnedPublicationById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'publicationId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getMyOwnedPublicationById' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'publicationId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'publicationId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'UserOwnedPublicationFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Asset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationListingFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PublicationListing' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priceInCents' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Publication' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pagesCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AssetFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'listings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationListingFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'epubMetadata' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'locations' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookAuthorFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookAuthor' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bannerImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatarImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slug' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookEdition' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'edition' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'language' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookAuthorFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'publications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookGenreFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookGenre' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Book' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookGenreFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'editions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookUpwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Book' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'BookDownwardsFragment' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookEditionUpwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookEdition' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'book' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookUpwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationUpwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Publication' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bookEdition' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookEditionUpwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserOwnedPublicationFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UserOwnedPublication' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastReadAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'source' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'publication' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationUpwardsFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'stats' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'percentageRead' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetMyOwnedPublicationByIdQuery,
  GetMyOwnedPublicationByIdQueryVariables
>;
export const GetMyOwnedPublicationsMinimalDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetMyOwnedPublicationsMinimal' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getMyOwnedPublications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'publicationId' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetMyOwnedPublicationsMinimalQuery,
  GetMyOwnedPublicationsMinimalQueryVariables
>;
export const SetPercentageReadDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SetPercentageRead' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'publicationId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'percentage' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Float' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'setPercentageRead' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'publicationId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'publicationId' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'percentage' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'percentage' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  SetPercentageReadMutation,
  SetPercentageReadMutationVariables
>;
export const GetBookGenresDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetBookGenres' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getBookGenres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetBookGenresQuery, GetBookGenresQueryVariables>;
export const GetBookGenresWithBooksDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetBookGenresWithBooks' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getBookGenres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookGenreFragment' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'books' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'BookDownwardsFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookGenreFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookGenre' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookAuthorFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookAuthor' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bannerImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatarImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slug' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Asset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationListingFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PublicationListing' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priceInCents' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Publication' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pagesCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AssetFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'listings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationListingFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'epubMetadata' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'locations' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookEdition' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'edition' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'language' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookAuthorFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'publications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Book' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookGenreFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'editions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetBookGenresWithBooksQuery,
  GetBookGenresWithBooksQueryVariables
>;
export const GetBookCompetitionsWithBooksDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetBookCompetitionsWithBooks' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getBookCompetitions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'imageUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'books' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'BookDownwardsFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookGenreFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookGenre' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookAuthorFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookAuthor' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bannerImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatarImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slug' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Asset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationListingFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PublicationListing' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priceInCents' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Publication' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pagesCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AssetFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'listings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationListingFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'epubMetadata' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'locations' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookEdition' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'edition' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'language' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookAuthorFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'publications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Book' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookGenreFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'editions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetBookCompetitionsWithBooksQuery,
  GetBookCompetitionsWithBooksQueryVariables
>;
export const GetStatsForCompetitionDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetStatsForCompetition' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'competitionSlug' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getStatsForCompetition' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'competitionSlug' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'competitionSlug' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'leaderboard' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'bookId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'bookName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'assets' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'AssetFragment' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'authors' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'BookAuthorFragment',
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'publishedAt' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'score' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'position' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'globalAverageRating' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'weight' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Asset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookAuthorFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookAuthor' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bannerImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatarImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slug' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetStatsForCompetitionQuery,
  GetStatsForCompetitionQueryVariables
>;
export const GenerateUploadPresignedUrlDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GenerateUploadPresignedUrl' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'contentType' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ContentType' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'generateUploadPresignedUrl' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'contentType' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'contentType' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                { kind: 'Field', name: { kind: 'Name', value: 'key' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GenerateUploadPresignedUrlQuery,
  GenerateUploadPresignedUrlQueryVariables
>;
export const GenerateDownloadPresignedUrlDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GenerateDownloadPresignedUrl' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'key' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'generateDownloadPresignedUrl' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'key' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'key' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GenerateDownloadPresignedUrlQuery,
  GenerateDownloadPresignedUrlQueryVariables
>;
export const AddFreeBookToLibraryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AddFreeBookToLibrary' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'publicationId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'addFreeBookToLibrary' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'publicationId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'publicationId' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AddFreeBookToLibraryMutation,
  AddFreeBookToLibraryMutationVariables
>;
export const AddPublicationListingsToBasketDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AddPublicationListingsToBasket' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'BasketItemInput' },
                },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'addPublicationListingsToBasket' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'items' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BasketFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Asset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationListingFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PublicationListing' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priceInCents' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Publication' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pagesCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AssetFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'listings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationListingFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'epubMetadata' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'locations' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookAuthorFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookAuthor' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bannerImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatarImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slug' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookEdition' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'edition' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'language' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookAuthorFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'publications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookGenreFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookGenre' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Book' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookGenreFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'editions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookUpwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Book' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'BookDownwardsFragment' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookEditionUpwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookEdition' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'book' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookUpwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationUpwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Publication' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bookEdition' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookEditionUpwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BasketFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Basket' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'publicationListingId' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'publicationsListing' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'priceInCents' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'publication' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'PublicationUpwardsFragment',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AddPublicationListingsToBasketMutation,
  AddPublicationListingsToBasketMutationVariables
>;
export const RemovePublicationListingFromBasketDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'RemovePublicationListingFromBasket' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'removePublicationListingFromBasket' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'publicationListingId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BasketFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Asset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationListingFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PublicationListing' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priceInCents' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Publication' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pagesCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AssetFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'listings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationListingFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'epubMetadata' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'locations' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookAuthorFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookAuthor' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bannerImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatarImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slug' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookEdition' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'edition' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'language' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookAuthorFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'publications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookGenreFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookGenre' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Book' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookGenreFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'editions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookUpwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Book' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'BookDownwardsFragment' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookEditionUpwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookEdition' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'book' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookUpwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationUpwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Publication' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bookEdition' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookEditionUpwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BasketFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Basket' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'publicationListingId' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'publicationsListing' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'priceInCents' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'publication' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'PublicationUpwardsFragment',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RemovePublicationListingFromBasketMutation,
  RemovePublicationListingFromBasketMutationVariables
>;
export const UpdatePublicationListingFromBasketDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdatePublicationListingFromBasket' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'listingId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'quantity' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Float' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updatePublicationListingFromBasket' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'publicationListingId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'listingId' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'quantity' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'quantity' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BasketFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Asset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationListingFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PublicationListing' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priceInCents' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Publication' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pagesCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AssetFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'listings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationListingFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'epubMetadata' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'locations' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookAuthorFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookAuthor' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bannerImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatarImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slug' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookEdition' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'edition' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'language' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookAuthorFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'publications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookGenreFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookGenre' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Book' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookGenreFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'editions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookUpwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Book' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'BookDownwardsFragment' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookEditionUpwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookEdition' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'book' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookUpwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationUpwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Publication' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bookEdition' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookEditionUpwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BasketFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Basket' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'publicationListingId' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'publicationsListing' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'priceInCents' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'publication' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'PublicationUpwardsFragment',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdatePublicationListingFromBasketMutation,
  UpdatePublicationListingFromBasketMutationVariables
>;
export const GetMyBasketDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetMyBasket' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getMyBasket' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BasketFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Asset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationListingFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PublicationListing' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priceInCents' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Publication' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pagesCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AssetFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'listings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationListingFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'epubMetadata' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'locations' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookAuthorFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookAuthor' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bannerImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatarImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slug' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookEdition' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'edition' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'language' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookAuthorFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'publications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookGenreFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookGenre' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Book' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookGenreFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'editions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookUpwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Book' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'BookDownwardsFragment' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookEditionUpwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookEdition' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'book' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookUpwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationUpwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Publication' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bookEdition' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookEditionUpwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BasketFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Basket' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'publicationListingId' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'publicationsListing' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'priceInCents' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'publication' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'PublicationUpwardsFragment',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetMyBasketQuery, GetMyBasketQueryVariables>;
export const CreateCharacterDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateCharacter' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CharacterInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createCharacter' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateCharacterMutation,
  CreateCharacterMutationVariables
>;
export const UpdateCharacterDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateCharacter' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateCharacterInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateCharacter' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateCharacterMutation,
  UpdateCharacterMutationVariables
>;
export const DeleteCharacterDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteCharacter' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteCharacter' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteCharacterMutation,
  DeleteCharacterMutationVariables
>;
export const CreateCharacterRelationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateCharacterRelation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateRelationsInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createCharacterRelation' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateCharacterRelationMutation,
  CreateCharacterRelationMutationVariables
>;
export const DeleteCharacterRelationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteCharacterRelation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'relationId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteCharacterRelation' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'relationId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'relationId' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteCharacterRelationMutation,
  DeleteCharacterRelationMutationVariables
>;
export const UpdateCharacterMetadataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateCharacterMetadata' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateCharacterMetadataInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateCharactersMetadata' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateCharacterMetadataMutation,
  UpdateCharacterMetadataMutationVariables
>;
export const GetManuscriptCharactersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetManuscriptCharacters' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'manuscriptId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getManuscriptCharacters' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'manuscriptId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'manuscriptId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'age' } },
                { kind: 'Field', name: { kind: 'Name', value: 'race' } },
                { kind: 'Field', name: { kind: 'Name', value: 'species' } },
                { kind: 'Field', name: { kind: 'Name', value: 'gender' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'personalityTraits' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'origin' } },
                { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isDead' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'physicalAppearance' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'relations' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'fromCharacter' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'toCharacter' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'connectedWith' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'fromCharacter' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'toCharacter' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'additionalFields' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'metadata' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetManuscriptCharactersQuery,
  GetManuscriptCharactersQueryVariables
>;
export const GetCountriesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetCountries' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            arguments: [
              {
                kind: 'Argument',
                name: {
                  kind: 'Name',
                  value: 'isStripeConnectedAccountSupported',
                },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'iso' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCountriesQuery, GetCountriesQueryVariables>;
export const CreateOrderDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateOrder' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'createOrder' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateOrderMutation, CreateOrderMutationVariables>;
export const CreateHelioOrderDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateHelioOrder' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'createHelioOrder' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateHelioOrderMutation,
  CreateHelioOrderMutationVariables
>;
export const CreateBuyNowOrderDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateBuyNowOrder' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'publicationListingId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createBuyNowOrder' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'publicationListingId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'publicationListingId' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateBuyNowOrderMutation,
  CreateBuyNowOrderMutationVariables
>;
export const CreateHelioBuyNowOrderDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateHelioBuyNowOrder' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'publicationListingId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createHelioBuyNowOrder' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'publicationListingId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'publicationListingId' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateHelioBuyNowOrderMutation,
  CreateHelioBuyNowOrderMutationVariables
>;
export const AccountSessionSecretDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AccountSessionSecret' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accountSessionSecret' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AccountSessionSecretQuery,
  AccountSessionSecretQueryVariables
>;
export const CreatePublishingDraftDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreatePublishingDraft' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreatePublishingDraftInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createPublishingDraft' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ManuscriptPublishingFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ManuscriptPublishingAuthorFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ManuscriptPublishingAuthor' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bookAuthor' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'avatarImageUrl' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'bannerImageUrl' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'slug' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'percentage' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ManuscriptPublishingAssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ManuscriptPublishingAsset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ManuscriptPublishingFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ManuscriptPublishing' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priceInCents' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'settings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'paperSize' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'printSettings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'textStock' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'lamination' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'hasColorPages' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'manuscript' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'competitionId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'edition' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'manuscriptPublishingAuthors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'ManuscriptPublishingAuthorFragment',
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'ManuscriptPublishingAssetFragment',
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rejection' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'reason' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreatePublishingDraftMutation,
  CreatePublishingDraftMutationVariables
>;
export const UpdatePublishingDraftDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdatePublishingDraft' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdatePublishingDraftInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updatePublishingDraft' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ManuscriptPublishingFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ManuscriptPublishingAuthorFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ManuscriptPublishingAuthor' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bookAuthor' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'avatarImageUrl' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'bannerImageUrl' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'slug' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'percentage' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ManuscriptPublishingAssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ManuscriptPublishingAsset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ManuscriptPublishingFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ManuscriptPublishing' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priceInCents' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'settings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'paperSize' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'printSettings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'textStock' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'lamination' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'hasColorPages' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'manuscript' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'competitionId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'edition' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'manuscriptPublishingAuthors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'ManuscriptPublishingAuthorFragment',
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'ManuscriptPublishingAssetFragment',
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rejection' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'reason' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdatePublishingDraftMutation,
  UpdatePublishingDraftMutationVariables
>;
export const UpdatePublishingCoverDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdatePublishingCover' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdatePublishingCoverInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updatePublishingCover' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdatePublishingCoverMutation,
  UpdatePublishingCoverMutationVariables
>;
export const CreateManuscriptDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateManuscript' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateManuscriptInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createManuscript' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createManuscriptInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateManuscriptMutation,
  CreateManuscriptMutationVariables
>;
export const UpdateManuscriptDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateManuscript' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateManuscriptInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateManuscript' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'updateManuscriptInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateManuscriptMutation,
  UpdateManuscriptMutationVariables
>;
export const AssignIsbnDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AssignIsbn' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AssignIsbnInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assignIsbn' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AssignIsbnMutation, AssignIsbnMutationVariables>;
export const ApproveManuscriptPublishingDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'ApproveManuscriptPublishing' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ApprovePublishingInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'approveManuscriptPublishing' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ApproveManuscriptPublishingMutation,
  ApproveManuscriptPublishingMutationVariables
>;
export const RejectManuscriptPublishingDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'RejectManuscriptPublishing' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'RejectPublishingInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rejectManuscriptPublishing' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RejectManuscriptPublishingMutation,
  RejectManuscriptPublishingMutationVariables
>;
export const SubmitPublishingDraftForApprovalDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SubmitPublishingDraftForApproval' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'SubmitPublishingDraftInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'submitPublishingDraftForApproval' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  SubmitPublishingDraftForApprovalMutation,
  SubmitPublishingDraftForApprovalMutationVariables
>;
export const UpdateManuScriptSettingsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateManuScriptSettings' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateManuscriptSettingsInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateManuscriptSettings' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'settings' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateManuScriptSettingsMutation,
  UpdateManuScriptSettingsMutationVariables
>;
export const GetManuscriptPublishingAssetMetadataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetManuscriptPublishingAssetMetadata' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'manuscriptPublishingId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'getManuscriptPublishingAssetMetadata',
            },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'manuscriptPublishingId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'manuscriptPublishingId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'pageCount' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'colorPageCount' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetManuscriptPublishingAssetMetadataQuery,
  GetManuscriptPublishingAssetMetadataQueryVariables
>;
export const CalculatePrintingCostAndCoverSizeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'CalculatePrintingCostAndCoverSize' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'CalculatePrintingCostAndCoverSizesInput',
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'calculatePrintingCostAndCoverSize' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'printingCost' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'coverSize' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'width' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'height' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CalculatePrintingCostAndCoverSizeQuery,
  CalculatePrintingCostAndCoverSizeQueryVariables
>;
export const RemoveManuscriptDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'RemoveManuscript' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'removeManuscript' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RemoveManuscriptMutation,
  RemoveManuscriptMutationVariables
>;
export const GetPrintLaminationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetPrintLamination' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getPrintLamination' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetPrintLaminationQuery,
  GetPrintLaminationQueryVariables
>;
export const GetManuscriptPublishingAssetDownloadUrlDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetManuscriptPublishingAssetDownloadUrl' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'getManuscriptPublishingAssetDownloadUrl',
            },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'assetId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetManuscriptPublishingAssetDownloadUrlQuery,
  GetManuscriptPublishingAssetDownloadUrlQueryVariables
>;
export const GetManuscriptFontsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetManuscriptFonts' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getManuscriptFonts' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetManuscriptFontsQuery,
  GetManuscriptFontsQueryVariables
>;
export const GetManuscriptTextStocksDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetManuscriptTextStocks' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getManuscriptTextStocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetManuscriptTextStocksQuery,
  GetManuscriptTextStocksQueryVariables
>;
export const GetManuscriptPublishingsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetManuscriptPublishings' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'manuscriptId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getManuscriptPublishings' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'manuscriptId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'manuscriptId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'format' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'rejection' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'reason' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edition' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetManuscriptPublishingsQuery,
  GetManuscriptPublishingsQueryVariables
>;
export const GetManuscriptPublishingsAdminDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetManuscriptPublishingsAdmin' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'manuscriptId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getManuscriptPublishings' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'manuscriptId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'manuscriptId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ManuscriptPublishingFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ManuscriptPublishingAuthorFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ManuscriptPublishingAuthor' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bookAuthor' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'avatarImageUrl' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'bannerImageUrl' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'slug' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'percentage' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ManuscriptPublishingAssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ManuscriptPublishingAsset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ManuscriptPublishingFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ManuscriptPublishing' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priceInCents' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'settings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'paperSize' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'printSettings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'textStock' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'lamination' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'hasColorPages' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'manuscript' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'competitionId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'edition' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'manuscriptPublishingAuthors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'ManuscriptPublishingAuthorFragment',
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'ManuscriptPublishingAssetFragment',
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rejection' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'reason' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetManuscriptPublishingsAdminQuery,
  GetManuscriptPublishingsAdminQueryVariables
>;
export const GetManuscriptPaperSizesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetManuscriptPaperSizes' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getManuscriptPaperSizes' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'width' } },
                { kind: 'Field', name: { kind: 'Name', value: 'height' } },
                { kind: 'Field', name: { kind: 'Name', value: 'unit' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetManuscriptPaperSizesQuery,
  GetManuscriptPaperSizesQueryVariables
>;
export const GetManuscriptsSummaryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetManuscriptsSummary' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ManuscriptsSummaryInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getManuscriptsSummary' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pricesInCents' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'formats' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetManuscriptsSummaryQuery,
  GetManuscriptsSummaryQueryVariables
>;
export const GetManuscriptPublishingByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetManuscriptPublishingById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'manuscriptPublishingId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getManuscriptPublishingById' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'manuscriptPublishingId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'manuscriptPublishingId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ManuscriptPublishingFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ManuscriptPublishingAuthorFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ManuscriptPublishingAuthor' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bookAuthor' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'avatarImageUrl' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'bannerImageUrl' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'slug' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'percentage' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ManuscriptPublishingAssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ManuscriptPublishingAsset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ManuscriptPublishingFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ManuscriptPublishing' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priceInCents' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'settings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'paperSize' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'printSettings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'textStock' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'lamination' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'hasColorPages' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'manuscript' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'competitionId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'edition' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'manuscriptPublishingAuthors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'ManuscriptPublishingAuthorFragment',
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'ManuscriptPublishingAssetFragment',
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rejection' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'reason' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetManuscriptPublishingByIdQuery,
  GetManuscriptPublishingByIdQueryVariables
>;
export const ValidatePdfPageSizeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ValidatePdfPageSize' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ValidatePdfInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'validatePdfPageSize' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ValidatePdfPageSizeQuery,
  ValidatePdfPageSizeQueryVariables
>;
export const ValidateBookCoverPdfPageSizeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ValidateBookCoverPdfPageSize' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'pdfKey' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'publishingId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'validateBookCoverPdfPageSize' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pdfKey' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'pdfKey' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'publishingId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'publishingId' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ValidateBookCoverPdfPageSizeQuery,
  ValidateBookCoverPdfPageSizeQueryVariables
>;
export const GetManuscriptAuthorsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetManuscriptAuthors' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getManuscriptAuthors' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'manuscriptId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'authorsIdentities' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'BookAuthorFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookAuthorFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookAuthor' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bannerImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatarImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slug' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetManuscriptAuthorsQuery,
  GetManuscriptAuthorsQueryVariables
>;
export const GetManuscriptByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetManuscriptById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getManuscriptById' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'origin' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'genres' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tags' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'assets' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'ManuscriptAssetFragment',
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'settings' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'font' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'hasDropcaps' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'sectionTitleAlignment' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'sectionTitleStyle' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'ornamentalBreak' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'addPageNumber' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageNumberAlignment' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'collaborators' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'userId' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'UserFragment' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'publishing' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'edition' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'competitionId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'priceInCents' },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'manuscriptPublishingAuthors',
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'ManuscriptPublishingAuthorFragment',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProfileFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Profile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'unverifiedEmail' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'birthday' } },
          { kind: 'Field', name: { kind: 'Name', value: 'gender' } },
          { kind: 'Field', name: { kind: 'Name', value: 'viewMode' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slug' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'country' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'avatarImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bannerImageUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ManuscriptAssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ManuscriptAssetEntity' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'username' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'userPaymentDetails' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'stripeConnectedAccountId' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'profile' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ProfileFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'oauthProviders' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'wallets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isCustodial' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ManuscriptPublishingAuthorFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ManuscriptPublishingAuthor' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bookAuthor' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'avatarImageUrl' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'bannerImageUrl' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'slug' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'percentage' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetManuscriptByIdQuery,
  GetManuscriptByIdQueryVariables
>;
export const GetMyManuscriptsCountDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetMyManuscriptsCount' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getMyManuscriptsCount' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'internalCount' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'externalCount' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetMyManuscriptsCountQuery,
  GetMyManuscriptsCountQueryVariables
>;
export const GetMyManuscriptsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetMyManuscripts' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'PaginationParamsDto' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'origin' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ManuscriptOriginType' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getMyManuscripts' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'paginationParamsDto' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'origin' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'origin' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'origin' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'assets' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'ManuscriptAssetFragment',
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'genres' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'collaborators' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'user' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'UserFragment',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'publishing' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'description' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'priceInCents' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'format' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'assets' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'key' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'type' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'manuscriptPublishingAuthors',
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'bookAuthorId',
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'edition' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'rejection' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'reason' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'competitionId' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'count' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProfileFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Profile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'unverifiedEmail' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'birthday' } },
          { kind: 'Field', name: { kind: 'Name', value: 'gender' } },
          { kind: 'Field', name: { kind: 'Name', value: 'viewMode' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slug' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'country' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'avatarImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bannerImageUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ManuscriptAssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ManuscriptAssetEntity' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'username' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'userPaymentDetails' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'stripeConnectedAccountId' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'profile' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ProfileFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'oauthProviders' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'wallets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isCustodial' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetMyManuscriptsQuery,
  GetMyManuscriptsQueryVariables
>;
export const PreviewManuscriptEpubDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'PreviewManuscriptEpub' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'manuscriptId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'previewManuscriptEpub' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'manuscriptId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'manuscriptId' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  PreviewManuscriptEpubQuery,
  PreviewManuscriptEpubQueryVariables
>;
export const GetOrdersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetOrders' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'PaginationParamsDto' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getOrders' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pagination' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'OrderFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'OrderFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Order' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'orderItems' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'totalInCents' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetOrdersQuery, GetOrdersQueryVariables>;
export const GetOrderDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetOrder' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getOrder' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'orderItems' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'productPriceInCents' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalPriceInCents' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'quantity' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'publicationListing' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'publication' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'PublicationUpwardsFragment',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'orderHistories' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'previousStatus' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'newStatus' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'subTotalInCents' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'taxInCents' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'totalInCents' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Asset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationListingFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PublicationListing' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'priceInCents' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Publication' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pagesCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'format' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'assets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AssetFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'listings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationListingFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'epubMetadata' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'locations' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookAuthorFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookAuthor' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bannerImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatarImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slug' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookEdition' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'edition' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'language' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookAuthorFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'publications' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookGenreFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookGenre' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookDownwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Book' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'genres' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookGenreFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'editions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookUpwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Book' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'BookDownwardsFragment' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookEditionUpwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookEdition' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'BookEditionDownwardsFragment' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'book' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookUpwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PublicationUpwardsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Publication' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'PublicationDownwardsFragment' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bookEdition' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BookEditionUpwardsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetOrderQuery, GetOrderQueryVariables>;
export const GetCurrentUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getCurrentUser' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'currentUser' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'UserFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProfileFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Profile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'unverifiedEmail' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'birthday' } },
          { kind: 'Field', name: { kind: 'Name', value: 'gender' } },
          { kind: 'Field', name: { kind: 'Name', value: 'viewMode' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slug' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'country' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'avatarImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bannerImageUrl' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'username' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'userPaymentDetails' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'stripeConnectedAccountId' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'profile' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ProfileFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'oauthProviders' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'wallets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isCustodial' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCurrentUserQuery, GetCurrentUserQueryVariables>;
export const GetAvailableUsernameDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getAvailableUsername' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AvailableUsernameInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getAvailableUsername' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'availableUsernameInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAvailableUsernameQuery,
  GetAvailableUsernameQueryVariables
>;
export const IsSlugAvailableDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'isSlugAvailable' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'isSlugAvailable' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'slug' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  IsSlugAvailableQuery,
  IsSlugAvailableQueryVariables
>;
export const UpdateProfileDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateProfile' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateProfileInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateProfile' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'updateProfileInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ProfileFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProfileFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Profile' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'unverifiedEmail' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'birthday' } },
          { kind: 'Field', name: { kind: 'Name', value: 'gender' } },
          { kind: 'Field', name: { kind: 'Name', value: 'viewMode' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slug' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'country' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'avatarImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bannerImageUrl' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateProfileMutation,
  UpdateProfileMutationVariables
>;
export const UpdateProfileViewModeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateProfileViewMode' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateProfileViewModeInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateProfileViewMode' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'updateProfileViewModeInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'viewMode' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateProfileViewModeMutation,
  UpdateProfileViewModeMutationVariables
>;
export const SetPasswordDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SetPassword' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'SetUserPasswordInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'setUserPassword' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'setUserPasswordInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SetPasswordMutation, SetPasswordMutationVariables>;
export const VerifyProfileDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'VerifyProfile' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'VerifyProfileInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'verifyProfile' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'verifyProfileInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'access_token' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'id_token' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'refresh_token' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'expires_at' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  VerifyProfileMutation,
  VerifyProfileMutationVariables
>;
export const AccountOnboardedDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AccountOnboarded' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'accountOnboarded' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AccountOnboardedQuery,
  AccountOnboardedQueryVariables
>;
export const TransferAvailableBalanceDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'TransferAvailableBalance' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'transferAvailableBalance' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  TransferAvailableBalanceMutation,
  TransferAvailableBalanceMutationVariables
>;
export const CreateConnectedAccountDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateConnectedAccount' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createConnectedAccount' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'countryIso' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateConnectedAccountMutation,
  CreateConnectedAccountMutationVariables
>;
export const GetAccountBalanceDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getAccountBalance' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getAccountBalance' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'availableFiatBalance' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currency' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pendingFiatBalanceInCents' },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'availableCryptoBalanceInCents',
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pendingCryptoBalanceInCents' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAccountBalanceQuery,
  GetAccountBalanceQueryVariables
>;
export const BookSalesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'bookSales' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'PaginationParamsDto' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'booksSales' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pagination' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'bookId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'book' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'listings' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'type' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'unitsCompleted' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'count' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'salesVolumeInFiat',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'salesVolumeInCrypto',
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'unitsPending' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'count' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'salesVolumeInFiat',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'salesVolumeInCrypto',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'count' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BookSalesQuery, BookSalesQueryVariables>;
export const GetSpotlightBookEditionsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetSpotlightBookEditions' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getSpotlightBookEditions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'book' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'publications' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'assets' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'AssetFragment' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Asset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetSpotlightBookEditionsQuery,
  GetSpotlightBookEditionsQueryVariables
>;
export const SetSpotlightBookEditionsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SetSpotlightBookEditions' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'String' },
                },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'setSpotlightBookEditions' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'editionIds' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  SetSpotlightBookEditionsMutation,
  SetSpotlightBookEditionsMutationVariables
>;
export const GetSpotlightAuthorsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetSpotlightAuthors' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getSpotlightAuthors' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'slug' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetSpotlightAuthorsQuery,
  GetSpotlightAuthorsQueryVariables
>;
export const SetSpotlightAuthorsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SetSpotlightAuthors' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'String' },
                },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'setSpotlightAuthors' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'authorSlugs' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  SetSpotlightAuthorsMutation,
  SetSpotlightAuthorsMutationVariables
>;
export const GetWritingStreakDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetWritingStreak' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getWritingStreak' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'currentStreak' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'activeDates' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetWritingStreakQuery,
  GetWritingStreakQueryVariables
>;
export const GetStatsByUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetStatsByUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'GetStatsByUserInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getStatsByUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'GetStatsByUserInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetStatsByUserQuery, GetStatsByUserQueryVariables>;
export const GetWalletMessageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetWalletMessage' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'walletMessage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'statement' } },
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                { kind: 'Field', name: { kind: 'Name', value: 'nonce' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetWalletMessageQuery,
  GetWalletMessageQueryVariables
>;
export const SignInLegacyWithWalletDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SignInLegacyWithWallet' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'WalletSignInLegacyInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'signInLegacyWithWallet' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'walletSignInInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'access_token' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'refresh_token' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'id_token' } },
                { kind: 'Field', name: { kind: 'Name', value: 'expires_at' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  SignInLegacyWithWalletMutation,
  SignInLegacyWithWalletMutationVariables
>;
export const SignInWithWalletDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SignInWithWallet' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'WalletSignInInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'signInWithWallet' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'walletSignInInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'access_token' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'refresh_token' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'id_token' } },
                { kind: 'Field', name: { kind: 'Name', value: 'expires_at' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  SignInWithWalletMutation,
  SignInWithWalletMutationVariables
>;
export const RefreshTokenForWalletDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'RefreshTokenForWallet' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'walletRefreshToken' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'walletRefreshTokenInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'access_token' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'id_token' } },
                { kind: 'Field', name: { kind: 'Name', value: 'expires_at' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RefreshTokenForWalletQuery,
  RefreshTokenForWalletQueryVariables
>;
export const GetWishlistBooksDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetWishlistBooks' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getWishlistBooks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'bookEditionId' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'authors' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'BookAuthorFragment' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'assets' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'AssetFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BookAuthorFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BookAuthor' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bannerImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatarImageUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bio' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slug' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AssetFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Asset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetWishlistBooksQuery,
  GetWishlistBooksQueryVariables
>;
export const GetWishlistBookIdsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetWishlistBookIds' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getWishlistBooks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetWishlistBookIdsQuery,
  GetWishlistBookIdsQueryVariables
>;
export const AddToWishlistDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AddToWishlist' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'addToWishlist' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'bookId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AddToWishlistMutation,
  AddToWishlistMutationVariables
>;
export const RemoveFromWishlistDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'RemoveFromWishlist' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'removeFromWishlist' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'bookId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RemoveFromWishlistMutation,
  RemoveFromWishlistMutationVariables
>;
