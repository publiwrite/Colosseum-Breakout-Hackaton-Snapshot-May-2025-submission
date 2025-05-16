import { UserFragmentFragment } from '../../apollo';

export const isUserProfileComplete = (user?: UserFragmentFragment) => {
  const { profile } = user || {};

  return !!(profile?.email && profile.firstName && profile.lastName);
};
