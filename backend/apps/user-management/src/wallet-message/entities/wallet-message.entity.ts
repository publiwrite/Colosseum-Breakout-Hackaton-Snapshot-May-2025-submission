import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class WalletMessageEntity {
  @Field(() => String)
  nonce: string;

  @Field(() => String)
  statement: string;

  @Field(() => String)
  message: string;
}
