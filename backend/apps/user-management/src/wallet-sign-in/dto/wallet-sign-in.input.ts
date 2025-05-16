import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class WalletSignInInput {
  @Field(() => [String], { nullable: true })
  features: string[];

  @Field(() => [String], { nullable: true })
  chains: string[];

  @Field(() => String)
  publicKey: string;

  @Field(() => String)
  serializedSignature: string;

  @Field(() => String)
  serializedSignedMessage: string;

  @Field(() => String)
  domain: string;
}
