import { UserFragmentFragment } from '../../apollo';
import { isSolanaAddress } from './is-solana-address';

const truncateWalletAddress = (address?: string, characters = 4) => {
  if (address) {
    return !characters
      ? address
      : address.length <= characters
        ? address
        : `${address.substr(0, characters)}...${address.substr(address.length - characters, characters)}`;
  }

  return '';
};

export const getUserTitleHeading = (user?: UserFragmentFragment) => {
  const { profile, username } = user || {};

  return (
    profile?.firstName ||
    (isSolanaAddress(username) ? truncateWalletAddress(username) : username) ||
    ''
  );
};
