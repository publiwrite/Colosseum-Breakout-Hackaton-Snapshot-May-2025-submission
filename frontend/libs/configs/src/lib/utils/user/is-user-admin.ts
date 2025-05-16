import { Session } from 'next-auth';

const ADMIN_GROUP = 'admins';

export const isUserAdmin = (user?: Session | null) => {
  return user?.['cognito:groups']?.includes(ADMIN_GROUP) || false;
};
