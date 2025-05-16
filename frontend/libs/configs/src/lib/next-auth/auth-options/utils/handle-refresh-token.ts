import { InitiateAuthCommand } from '@aws-sdk/client-cognito-identity-provider';
import { REFRESH_TOKEN_FOR_WALLET } from '../../../api';
import { getApolloFunctionClient } from '../../../apollo';
import { cognitoClient } from '../../../cognito';
import { parseJwt } from '../../../utils';
import { NextAuthProviders, TokenExchange } from '../interfaces';

export const handleRefreshToken = async (
  refreshToken: string,
  provider: NextAuthProviders,
): Promise<
  | {
      access_token: string;
      id_token: string;
      expires_at: number;
    }
  | undefined
> => {
  /**
   * Refresh wallet tokens using the server.
   * This is necessary because wallet users signed in via our server
   * As explicit sign in being used to validate email + password users, we also need to refresh the token using the server.
   * Hence the client ids different, so we can't use the client to refresh the token.
   */
  if (
    provider === NextAuthProviders.SOLANA_WALLET_LEGACY ||
    provider === NextAuthProviders.SOLANA_WALLET ||
    provider === NextAuthProviders.EXPLICIT
  ) {
    const apolloClient = getApolloFunctionClient('');

    try {
      const { data, errors } = await apolloClient.query({
        query: REFRESH_TOKEN_FOR_WALLET,
        variables: { input: refreshToken },
      });
      if (errors) {
        return undefined;
      }

      const { access_token, id_token } = data.walletRefreshToken;

      const accessTokenExchange: TokenExchange = parseJwt(access_token);

      return {
        access_token,
        id_token,
        expires_at: accessTokenExchange.exp,
      };
    } catch (error) {
      return undefined;
    }
  }

  /**
   * Cognito refresh token.
   */
  const command = new InitiateAuthCommand({
    ClientId: process.env.NEXT_PUBLIC_AWS_COGNITO_CLIENT_ID,
    AuthFlow: 'REFRESH_TOKEN_AUTH',
    AuthParameters: {
      REFRESH_TOKEN: refreshToken,
    },
  });

  try {
    const awsResponse = await cognitoClient.send(command);

    if (
      !awsResponse.AuthenticationResult ||
      !awsResponse.AuthenticationResult.AccessToken ||
      !awsResponse.AuthenticationResult.IdToken ||
      !awsResponse.AuthenticationResult.ExpiresIn
    ) {
      throw Error('No AuthenticationResult in awsResponse');
    }

    const accessTokenExchange: TokenExchange = parseJwt(
      awsResponse.AuthenticationResult.AccessToken,
    );

    return {
      access_token: awsResponse.AuthenticationResult.AccessToken,
      id_token: awsResponse.AuthenticationResult.IdToken,
      expires_at: accessTokenExchange.exp,
    };
  } catch (error) {
    return undefined;
  }
};
