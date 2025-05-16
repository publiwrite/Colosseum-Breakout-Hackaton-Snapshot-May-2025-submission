import 'next-auth';
import 'next-auth/jwt';

declare module 'next-auth' {
  interface User extends DefaultSession['user'] {
    id?: string;
  }

  interface Session {
    access_token: string;
    error?: 'RefreshAccessTokenError';
    'cognito:groups'?: string[];
    user: User;
  }

  interface Profile {
    'cognito:groups'?: string[];
    'cognito:username'?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    expires_at: number;
    access_token: string;
    refresh_token: string;
    provider: string;
    'cognito:groups'?: string[];
    error?: 'RefreshAccessTokenError';
  }
}
