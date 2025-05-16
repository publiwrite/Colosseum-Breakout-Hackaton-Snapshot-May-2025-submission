import CredentialsProvider from 'next-auth/providers/credentials';
import { SIGN_IN_LEGACY_WITH_WALLET_MUTATION } from '../../../../api/server';
import { getApolloFunctionClient } from '../../../../apollo';
import { parseJwt } from '../../../../utils';
import {
  CredentialsUser,
  NextAuthProviders,
  TokenExchange,
} from '../../interfaces';

export const cognitoSolanaSignInLegacy = CredentialsProvider({
  id: NextAuthProviders.SOLANA_WALLET_LEGACY,
  name: 'Cognito Solana Wallet Sign In Legacy',
  credentials: {
    serializedSignedMessage: {},
    publicKey: {},
  },
  async authorize(credentials, req) {
    if (!credentials) return null;

    const { publicKey, serializedSignedMessage } = credentials;
    const apolloClient = getApolloFunctionClient(req.headers?.cookie);

    let user: CredentialsUser;

    try {
      const { data } = await apolloClient.mutate({
        mutation: SIGN_IN_LEGACY_WITH_WALLET_MUTATION,
        variables: {
          input: { serializedSignedMessage, publicKey },
        },
      });

      if (!data) {
        return null;
      }

      const idTokenExchange: TokenExchange = parseJwt(
        data.signInLegacyWithWallet.id_token,
      );

      const accessTokenExchange: TokenExchange = parseJwt(
        data.signInLegacyWithWallet.access_token,
      );

      user = {
        id: idTokenExchange.sub,
        name: idTokenExchange['cognito:username'],
        email: idTokenExchange.email,
        image: '',
        access_token: data.signInLegacyWithWallet.access_token,
        refresh_token: data.signInLegacyWithWallet.refresh_token,
        expires_at: accessTokenExchange.exp,
      };
    } catch (error) {
      return null;
    }

    if (!user) {
      return null;
    }

    return user;
  },
});
