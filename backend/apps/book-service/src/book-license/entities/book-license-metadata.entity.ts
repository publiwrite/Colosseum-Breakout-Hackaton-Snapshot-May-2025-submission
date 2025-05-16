import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BookLicenseMetadataEntity {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  hash: string;

  @Field(() => Number)
  pages: number;

  @Field(() => Number)
  tokens: number;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}
