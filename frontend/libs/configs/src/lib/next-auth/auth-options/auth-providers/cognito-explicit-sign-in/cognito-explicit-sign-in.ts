import CredentialsProvider from 'next-auth/providers/credentials';
import { parseJwt } from '../../../../utils';
import {
  CredentialsUser,
  NextAuthProviders,
  TokenExchange,
} from '../../interfaces';

/**
 * This function is used to sign in with a verification process.
 * As the backend logs user in and returns the access token, refresh token, and id token etc.
 */

export const cognitoExplicitSignIn = CredentialsProvider({
  id: NextAuthProviders.EXPLICIT,
  name: 'Cognito Explicit Sign In',
  credentials: {
    access_token: { type: 'text' },
    refresh_token: { type: 'text' },
    id_token: { type: 'text' },
    expires_at: { type: 'number' },
  },
  async authorize(credentials, req) {
    if (!credentials) return null;

    const { access_token, refresh_token, id_token, expires_at } = credentials;

    let user: CredentialsUser;

    try {
      const idTokenExchange: TokenExchange = parseJwt(id_token);

      const accessTokenExchange: TokenExchange = parseJwt(access_token);

      user = {
        id: idTokenExchange.sub,
        name: idTokenExchange['cognito:username'],
        email: idTokenExchange.email,
        image: '',
        access_token: access_token,
        refresh_token: refresh_token,
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
