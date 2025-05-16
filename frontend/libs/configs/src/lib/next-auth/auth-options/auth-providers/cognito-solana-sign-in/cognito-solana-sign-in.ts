import CredentialsProvider from 'next-auth/providers/credentials';
import { SIGN_IN_WITH_WALLET_MUTATION } from '../../../../api/server';
import { getApolloFunctionClient } from '../../../../apollo';
import { parseJwt } from '../../../../utils';
import {
  CredentialsUser,
  NextAuthProviders,
  TokenExchange,
} from '../../interfaces';

export const cognitoSolanaSignIn = CredentialsProvider({
  id: NextAuthProviders.SOLANA_WALLET,
  name: 'Cognito Solana Wallet Sign In',
  credentials: {
    serializedSignature: {},
    serializedSignedMessage: {},
    publicKey: {},
    chains: {},
    features: {},
    domain: {},
  },
  async authorize(credentials, req) {
    if (!credentials) return null;

    const {
      publicKey,
      serializedSignedMessage,
      serializedSignature,
      features,
      chains,
      domain,
    } = credentials;
    const apolloClient = getApolloFunctionClient(req.headers?.cookie);

    let user: CredentialsUser;

    try {
      const { data } = await apolloClient.mutate({
        mutation: SIGN_IN_WITH_WALLET_MUTATION,
        variables: {
          input: {
            serializedSignedMessage,
            publicKey,
            serializedSignature,
            features: features.split(','),
            chains: chains.split(','),
            domain,
          },
        },
      });

      if (!data) {
        return null;
      }

      const idTokenExchange: TokenExchange = parseJwt(
        data.signInWithWallet.id_token,
      );

      const accessTokenExchange: TokenExchange = parseJwt(
        data.signInWithWallet.access_token,
      );

      user = {
        id: idTokenExchange.sub,
        name: idTokenExchange['cognito:username'],
        email: idTokenExchange.email,
        image: '',
        access_token: data.signInWithWallet.access_token,
        refresh_token: data.signInWithWallet.refresh_token,
        expires_at: accessTokenExchange.exp,
      };
    } catch (error) {
      console.log(error);
      return null;
    }

    if (!user) {
      return null;
    }

    return user;
  },
});
