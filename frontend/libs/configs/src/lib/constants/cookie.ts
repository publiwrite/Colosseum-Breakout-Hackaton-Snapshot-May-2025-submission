import { CookieAttributes } from 'js-cookie';
import { CookiesOptions } from 'next-auth';

export const THEME_COOKIE_NAME = 'theme';
export const LAYOUT_COOKIE_NAME = 'product-card-layout';
export const CART_ITEMS_COOKIE_NAME = 'cart-items';
export const FEDERATED_LOGOUT_COOKIE_NAME = 'federatedLogoutUrl';
export const READER_FILE_URL_COOKIE_NAME = 'reader-file-url';
export const READER_FILE_NAME_COOKIE_NAME = 'reader-file-name';

export const useSecureCookies =
  `${process.env.NEXT_PUBLIC_AUTH_PROJECT_URL}`.startsWith('https://');
export const cookiePrefix = useSecureCookies ? '__Secure-' : '';
// export const hostPrefix = useSecureCookies ? '__Host-' : '';
export const hostName = new URL(`${process.env.NEXT_PUBLIC_AUTH_PROJECT_URL}`)
  .hostname;
export const rootDomain = `${process.env.NEXT_PUBLIC_GLOBAL_COOKIE_DOMAIN}`;

export const NON_SECURE_COOKIE_OPTIONS: CookieAttributes = {
  sameSite: 'lax',
  path: '/',
  secure: useSecureCookies,
  expires: 7, //days
  domain: hostName === 'localhost' ? hostName : `.${rootDomain}`,
};

export const SECURE_COOKIE_OPTIONS: CookiesOptions['sessionToken']['options'] =
  {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    secure: useSecureCookies,
    domain: hostName === 'localhost' ? hostName : `.${rootDomain}`,
  };
