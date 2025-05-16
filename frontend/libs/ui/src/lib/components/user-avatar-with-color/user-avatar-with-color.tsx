import {
  UserFragmentFragment,
  getDynamicCdnUrl,
  getUserTitleHeading,
} from '@pw-fe-monorepo/configs';
import { VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  avatarVariants,
} from '../../primitives/avatar';

export const getUniqueColorByUserId = (userId: string, alpha?: number) => {
  function hexToRGB(hex: string, alpha: number) {
    var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
    } else {
      return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
  }

  // Generate hash from the string (user identifier)
  let hash = 0;
  for (let i = 0; i < userId?.length; i++) {
    hash = userId.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Convert hash to a 6-digit hexadecimal string
  let color = '#';
  for (let i = 0; i < 3; i++) {
    // Use the first three bytes of the hash
    const value = (hash >> (i * 8)) & 0xff;
    color += ('00' + value.toString(16)).substr(-2);
  }

  return alpha ? hexToRGB(color, alpha) : color;
};

export const UserAvatarWithColor = ({
  user,
  size = 'medium',
}: {
  user?: UserFragmentFragment;
  size?: VariantProps<typeof avatarVariants>['size'];
}) => {
  if (!user?.profile) {
    return (
      <div
        className={twMerge(
          avatarVariants({ size }),
          'rounded-full border border-dashed border-gray-400 dark:border-gray-dark-500',
        )}
      ></div>
    );
  }

  const colorPerUser = getUniqueColorByUserId(user.id);

  return (
    <Avatar size={size}>
      <AvatarImage
        src={getDynamicCdnUrl(user.profile.avatarImageUrl)}
        alt={getUserTitleHeading(user) || "User's profile picture"}
      />
      <AvatarFallback style={{ borderColor: colorPerUser }}>
        {getUserTitleHeading(user).charAt(0)}
      </AvatarFallback>
    </Avatar>
  );
};
