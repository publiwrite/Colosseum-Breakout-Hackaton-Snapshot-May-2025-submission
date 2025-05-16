import { Field, InputType, Int } from '@nestjs/graphql';
import {
  ArrayMinSize,
  ArrayNotEmpty,
  IsBoolean,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { IsSolanaWalletAddress } from '../validators/solana-wallet.validator';
import { R_TypeOfRights } from '@prisma-clients/main';

@InputType()
export class CreateBookLicenseInput {
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  title: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  description: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  manuscriptAssetKey: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  coverAssetKey: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  authorName: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  @IsSolanaWalletAddress()
  ownerWalletAddress: string;

  @Field(() => Number)
  @IsInt()
  @Min(1)
  priceInCents: number;

  @Field(() => [Int], { nullable: true })
  @IsOptional()
  @ArrayNotEmpty({ message: 'Genres IDs array cannot be empty' })
  @ArrayMinSize(1, { message: 'At least one genre ID must be provided' })
  @IsInt({ each: true, message: 'Each genre ID must be an integer' })
  genresIds?: number[];

  @Field(() => Boolean)
  @IsNotEmpty()
  @IsBoolean()
  isForCommercialUse: boolean;

  @Field(() => R_TypeOfRights)
  @IsNotEmpty()
  @IsEnum(R_TypeOfRights)
  typeOfRights: R_TypeOfRights;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  isbn?: string;
}
