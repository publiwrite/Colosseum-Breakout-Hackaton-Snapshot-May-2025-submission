import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class WalletRefreshTokenEntity {
  @Field(() => String)
  access_token: string;

  @Field(() => String)
  id_token: string;

  @Field(() => Int)
  expires_at: number;
}
