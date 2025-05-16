import { getSession } from 'next-auth/react';
import { cookies, headers } from 'next/headers';

/*  
  There is a bug on getServerSession method from next-auth for the time being.
  Hence we've implemented custom solution until its fixed for NextJS App dir.
  NOTE: Trying to use this for now, as it should be fixed.
*/
// export const getServerSession = async () => {
//   return originalGetServerSession(authOptions);
// };

export const getServerSession = async () => {
  const req = {
    headers: Object.fromEntries(
      headers() as unknown as Iterable<readonly [PropertyKey, string]>
    ),
    cookies: Object.fromEntries(
      cookies()
        .getAll()
        .map((c) => [c.name, c.value])
    ),
  };

  return getSession({ req });
};
