'server-only';

import NextAuth from 'next-auth';
import { cookiePrefix, SECURE_COOKIE_OPTIONS } from '../../constants';
import { compareTimestamps, parseJwt } from '../../utils';
import { cognitoEmailPassSignIn } from './auth-providers/cognito-email-pass-sign-in/cognito-email-pass-sign-in';
import { cognitoExplicitSignIn } from './auth-providers/cognito-explicit-sign-in/cognito-explicit-sign-in';
import { cognitoGoogleAuth } from './auth-providers/cognito-google-auth/cognito-google-auth';
import { cognitoSolanaSignInLegacy } from './auth-providers/cognito-solana-sign-in-legacy/cognito-solana-sign-in-legacy';
import { cognitoSolanaSignIn } from './auth-providers/cognito-solana-sign-in/cognito-solana-sign-in';
import {
  CredentialsUser,
  NextAuthProviders,
  TokenExchange,
} from './interfaces';
import { handleRefreshToken } from './utils/handle-refresh-token';

export const authOptions = NextAuth({
  providers: [
    cognitoGoogleAuth,
    cognitoEmailPassSignIn,
    cognitoSolanaSignInLegacy,
    cognitoSolanaSignIn,
    cognitoExplicitSignIn,
  ],
  session: { strategy: 'jwt' },
  pages: {
    signIn: `${process.env.NEXTAUTH_URL}/signin`,
    signOut: `${process.env.NEXTAUTH_URL}/api/auth/signout`,
    error: `${process.env.NEXTAUTH_URL}/api/auth/error`,
    verifyRequest: `${process.env.NEXTAUTH_URL}/api/auth/verify-request`,
    newUser: `${process.env.NEXTAUTH_URL}/api/auth/new-user`,
  },
  cookies: {
    sessionToken: {
      name: `${cookiePrefix}next-auth.session-token`,
      options: SECURE_COOKIE_OPTIONS,
    },
    callbackUrl: {
      name: `${cookiePrefix}next-auth.callback-url`,
      options: SECURE_COOKIE_OPTIONS,
    },
    csrfToken: {
      name: `${cookiePrefix}next-auth.csrf-token`,
      options: SECURE_COOKIE_OPTIONS,
    },
    pkceCodeVerifier: {
      name: `${cookiePrefix}next-auth.pkce.code_verifier`,
      options: SECURE_COOKIE_OPTIONS,
    },
    state: {
      name: `${cookiePrefix}next-auth.state`,
      options: SECURE_COOKIE_OPTIONS,
    },
    nonce: {
      name: `${cookiePrefix}next-auth.nonce`,
      options: SECURE_COOKIE_OPTIONS,
    },
  },
  callbacks: {
    async jwt({ token, account, user, profile }) {
      /**
       * If there is an account, it means that the user is signing in.
       */
      if (account) {
        if (account.provider === NextAuthProviders.GOOGLE) {
          const oauthProfile = { ...profile } as TokenExchange;
          token.provider = account.provider;
          token.access_token = account.access_token!;
          token.refresh_token = account.refresh_token!;
          token.expires_at = account.expires_at!;
          token.sub = profile?.sub;
          token.name = `${oauthProfile.given_name || ''} ${
            oauthProfile.family_name || ''
          }`.trim();
        }

        if (
          account.provider === NextAuthProviders.EMAIL_PASSWORD ||
          account.provider === NextAuthProviders.SOLANA_WALLET ||
          account.provider === NextAuthProviders.SOLANA_WALLET_LEGACY ||
          account.provider === NextAuthProviders.EXPLICIT
        ) {
          const credentialsUser = { ...user } as CredentialsUser;
          token.provider = account.provider;
          token.access_token = credentialsUser.access_token;
          token.refresh_token = credentialsUser.refresh_token;
          token.sub = credentialsUser.id;
          token.expires_at = credentialsUser.expires_at!;
        }

        const parsedtoken = parseJwt(token.access_token);
        token['cognito:groups'] = parsedtoken?.['cognito:groups'];
      }

      /**
       * If token is not expired, return the token.
       */
      if (compareTimestamps(Date.now(), token.expires_at) === -1) {
        return token;
      }

      /**
       * If token is expired, refresh it.
       */
      try {
        const refreshedToken = await handleRefreshToken(
          token.refresh_token,
          token.provider as NextAuthProviders,
        );

        if (!refreshedToken) {
          return {
            ...token,
            error: 'RefreshAccessTokenError',
          };
        }

        return {
          ...token,
          access_token: refreshedToken.access_token,
          expires_at: refreshedToken.expires_at,
        };
      } catch (error) {
        console.log({ error });
        return {
          ...token,
          error: 'RefreshAccessTokenError',
        };
      }
    },
    async session({ session, token }) {
      session.access_token = token.access_token;
      session.error = token.error;
      session.expires = new Date(token.expires_at * 1000).toISOString();
      session.user.id = token.sub;
      session['cognito:groups'] = token['cognito:groups'];

      return session;
    },
    redirect: async ({ url, baseUrl }) => {
      /**
       * Redirect has to be like this otherwise it doesn't get the `redirect` from
       * signIn() method in the client.
       */
      return Promise.resolve(url);
    },
  },
});
