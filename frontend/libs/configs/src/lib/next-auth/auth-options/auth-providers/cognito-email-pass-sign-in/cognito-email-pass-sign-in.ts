import { InitiateAuthCommand } from '@aws-sdk/client-cognito-identity-provider';
import CredentialsProvider from 'next-auth/providers/credentials';
import { cognitoClient } from '../../../../cognito/cognito-client';
import { parseJwt } from '../../../../utils';
import {
  CredentialsUser,
  NextAuthProviders,
  TokenExchange,
} from '../../interfaces';

export const cognitoEmailPassSignIn = CredentialsProvider({
  id: NextAuthProviders.EMAIL_PASSWORD,
  name: 'Cognito Email Password Sign In',
  credentials: {
    username: { label: 'Username', type: 'text' },
    password: { label: 'Password', type: 'password' },
  },
  async authorize(credentials, req) {
    if (!credentials) {
      return null;
    }

    const { username, password } = credentials;

    const command = new InitiateAuthCommand({
      AuthFlow: 'USER_PASSWORD_AUTH',
      ClientId: process.env.NEXT_PUBLIC_AWS_COGNITO_CLIENT_ID,
      AuthParameters: {
        USERNAME: username,
        PASSWORD: password,
      },
    });
    const awsResponse = await cognitoClient.send(command);

    let user: CredentialsUser | null = null;

    if (!awsResponse.AuthenticationResult) {
      return null;
    }

    const idTokenExchange: TokenExchange = parseJwt(
      awsResponse.AuthenticationResult.IdToken!,
    );

    const accessTokenExchange: TokenExchange = parseJwt(
      awsResponse.AuthenticationResult.AccessToken!,
    );

    user = {
      id: idTokenExchange.sub,
      name: `${idTokenExchange.given_name || ''} ${
        idTokenExchange.family_name || ''
      }`.trim(),
      email: idTokenExchange.email,
      image: '',
      access_token: awsResponse.AuthenticationResult.AccessToken!,
      refresh_token: awsResponse.AuthenticationResult.RefreshToken!,
      expires_at: accessTokenExchange.exp,
    };

    if (!user) {
      return null;
    }

    return user;
  },
});
