import type { WalletContextState } from '@solana/wallet-adapter-react';
import Cookies from 'js-cookie';
import { signOut } from 'next-auth/react';
import {
  FEDERATED_LOGOUT_COOKIE_NAME,
  NON_SECURE_COOKIE_OPTIONS,
} from '../../constants';

export const userSignOut = async (wallet: WalletContextState) => {
  const openIdConfig = await fetch(
    `https://cognito-idp.${process.env.NEXT_PUBLIC_AWS_COGNITO_REGION}.amazonaws.com/${process.env.NEXT_PUBLIC_AWS_COGNITO_POOL_ID}/.well-known/openid-configuration`,
  ).then((res) => res.json());

  const federatedLogoutUrl = `${openIdConfig.end_session_endpoint}?client_id=${process.env.NEXT_PUBLIC_AWS_COGNITO_CLIENT_ID}&logout_uri=${process.env.NEXT_PUBLIC_AUTH_PROJECT_URL}/api/federated-logout-callback`;

  Cookies.set(
    FEDERATED_LOGOUT_COOKIE_NAME,
    window.location.href,
    NON_SECURE_COOKIE_OPTIONS,
  );

  await wallet.disconnect();
  await signOut({ redirect: false });

  window.location.replace(federatedLogoutUrl);
};
