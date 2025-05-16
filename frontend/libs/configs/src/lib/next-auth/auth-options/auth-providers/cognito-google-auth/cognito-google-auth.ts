import CognitoProvider from 'next-auth/providers/cognito';
import { NextAuthProviders } from '../../interfaces';

export const cognitoGoogleAuth = CognitoProvider({
  id: NextAuthProviders.GOOGLE,
  name: 'Cognito Google Auth Provider',
  clientId: process.env.NEXT_PUBLIC_AWS_COGNITO_CLIENT_ID!,
  clientSecret: '',
  idToken: true,
  checks: 'nonce',
  issuer: `https://cognito-idp.${process.env.NEXT_PUBLIC_AWS_COGNITO_REGION}.amazonaws.com/${process.env.NEXT_PUBLIC_AWS_COGNITO_POOL_ID}`,
  client: {
    token_endpoint_auth_method: undefined,
  },
  authorization: {
    params: {
      identity_provider: 'Google',
      redirect_uri: `${process.env.NEXTAUTH_URL}/api/auth/callback/cognito-google`,
    },
  },
});
