import {
  Field,
  GraphQLISODateTime,
  ID,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { R_BookLicenseOrderStatus } from '@prisma-clients/main';

registerEnumType(R_BookLicenseOrderStatus, {
  name: 'BookLicenseOrderStatus',
  description: 'Status of a book license order',
});

@ObjectType()
export class BookLicenseOrder {
  @Field(() => ID)
  id: string;

  @Field(() => R_BookLicenseOrderStatus)
  status: R_BookLicenseOrderStatus;

  @Field(() => String, { nullable: true })
  solanaPNftAddress?: string;

  @Field(() => String, { nullable: true })
  solanaPNftTxSignature?: string;

  @Field(() => String, { nullable: true })
  postPaymentTxSignature?: string;

  @Field(() => String, { nullable: true })
  signedTemplateIpfsCid?: string;

  @Field(() => String, { nullable: true })
  txSignature?: string;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}
