import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class WalletSignInLegacyInput {
  @Field(() => String)
  serializedSignedMessage: string;

  @Field(() => String)
  publicKey: string;
}
