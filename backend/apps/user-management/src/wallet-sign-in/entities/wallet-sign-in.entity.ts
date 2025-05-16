import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class WalletSignInEntity {
  @Field(() => String)
  access_token: string;

  @Field(() => String)
  id_token: string;

  @Field(() => String)
  refresh_token: string;

  @Field(() => Int)
  expires_at: number;
}
