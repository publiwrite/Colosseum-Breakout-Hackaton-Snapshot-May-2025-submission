import { NextApiRequest } from 'next';
import { getToken as originalGetToken } from 'next-auth/jwt';
import { cookies, headers } from 'next/headers';

export const getToken = async () => {
  const req = {
    headers: Object.fromEntries(
      headers() as unknown as Iterable<readonly [PropertyKey, string]>
    ),
    cookies: Object.fromEntries(
      cookies()
        .getAll()
        .map((c) => [c.name, c.value])
    ),
  } as NextApiRequest;

  return originalGetToken({ req });
};
