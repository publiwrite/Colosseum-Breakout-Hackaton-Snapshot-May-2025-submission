import { UserFragmentFragment } from '../../apollo';
import { isSolanaAddress } from './is-solana-address';

export const getUserInitials = (user?: UserFragmentFragment) => {
  const { profile, username } = user || {};

  const walletAddress = isSolanaAddress(username);

  if (walletAddress && username) {
    return username.slice(0, 2).toUpperCase();
  }

  if (!profile?.firstName && !profile?.lastName) {
    return username?.slice(0, 2).toUpperCase();
  }

  const firstName = profile?.firstName || '';
  const lastName = profile?.lastName || '';
  const initials = `${firstName[0] || ''}${lastName[0] || ''}`;

  return initials.toUpperCase();
};
