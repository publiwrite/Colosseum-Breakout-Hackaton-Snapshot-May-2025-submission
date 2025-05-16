import {
  Field,
  GraphQLISODateTime,
  ID,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { PaginateResult } from '@lib/common';
import { R_TypeOfRights, R_BtcInscriptionStatus } from '@prisma-clients/main';
import { GraphQLBigInt } from 'graphql-scalars';
import { BookGenre } from '../../book/entities/book-genre.entity';
import { BookLicenseAuthor } from './book-license-author.entity';
import { BookLicenseOrder } from './book-license-order.entity';
import { BookLicenseMetadataEntity } from './book-license-metadata.entity';
import { Asset } from '../../book/entities/asset.entity';

registerEnumType(R_BtcInscriptionStatus, {
  name: 'BtcInscriptionStatus',
  description: 'Status of Bitcoin inscription process',
});

registerEnumType(R_TypeOfRights, {
  name: 'TypeOfRights',
  description: 'Type of rights granted by the license',
});

@ObjectType()
export class BookLicense {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => GraphQLBigInt)
  priceInCents: bigint;

  @Field(() => String)
  manuscriptAssetKey: string;

  @Field(() => String)
  coverAssetKey: string;

  @Field(() => [Asset], { nullable: true })
  assets?: Asset[];

  @Field(() => R_BtcInscriptionStatus)
  btcInscriptionStatus: R_BtcInscriptionStatus;

  @Field(() => String, { nullable: true })
  btcInscriptionId?: string;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;

  @Field(() => [BookGenre], { nullable: true })
  genres?: BookGenre[];

  @Field(() => [BookLicenseAuthor], { nullable: true })
  authors?: BookLicenseAuthor[];

  @Field(() => [BookLicenseOrder], { nullable: true })
  orders?: BookLicenseOrder[];

  @Field(() => Boolean)
  isForCommercialUse: boolean;

  @Field(() => R_TypeOfRights)
  typeOfRights: R_TypeOfRights;

  @Field(() => String, { nullable: true })
  isbn?: string;

  @Field(() => BookLicenseMetadataEntity, { nullable: true })
  metadata?: BookLicenseMetadataEntity;
}

@ObjectType()
export class BookLicensePage extends PaginateResult(BookLicense) {}
