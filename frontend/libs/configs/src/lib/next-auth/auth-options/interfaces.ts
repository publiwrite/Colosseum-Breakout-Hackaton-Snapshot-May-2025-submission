import { DefaultUser } from 'next-auth';

export enum NextAuthProviders {
  GOOGLE = 'cognito-google',
  EMAIL_PASSWORD = 'cognito-credentials',
  SOLANA_WALLET_LEGACY = 'solana-wallet-legacy',
  SOLANA_WALLET = 'solana-wallet',
  EXPLICIT = 'cognito-explicit',
}

export type TokenExchange = {
  sub: string;
  email_verified: boolean;
  iss: string;
  'cognito:username': string;
  given_name: string;
  family_name: string;
  origin_jti: string;
  aud: string;
  event_id: string;
  token_use: string;
  auth_time: number;
  exp: number;
  iat: number;
  jti: string;
  email: string;
};

export type CredentialsUser = DefaultUser & {
  access_token: string;
  refresh_token: string;
  expires_at?: number;
};
