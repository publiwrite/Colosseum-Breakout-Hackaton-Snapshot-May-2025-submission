'use client';

import {
  getDynamicCdnUrl,
  getUserTitleHeading,
  userSignOut,
} from '@pw-fe-monorepo/configs';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  CurrentUserContext,
  getUniqueColorByUserId,
  MoonIcon,
  PwDropdown,
  SunIcon,
  useMounted,
  usePwTheme,
  useScreenSize,
} from '@pw-fe-monorepo/ui';
import { useWallet } from '@solana/wallet-adapter-react';
import { useSession } from 'next-auth/react';
import { useContext } from 'react';
import { twMerge } from 'tailwind-merge';

export const ProfileButton = () => {
  const isLgOrAbove = useScreenSize('lg');
  const mounted = useMounted();
  const { status } = useSession();
  const { theme, setTheme } = usePwTheme();
  const { user } = useContext(CurrentUserContext);
  const wallet = useWallet();

  const Icon = theme === 'light' ? MoonIcon : SunIcon;

  if (status === 'loading' || !mounted) {
    return (
      <div className="block w-7 h-7 lg:w-10 lg:h-10 rounded-full skeleton-loader"></div>
    );
  }

  if (user) {
    return (
      <PwDropdown
        triggerClassName="rounded-full"
        trigger={
          <Avatar size={isLgOrAbove ? 'large' : 'small'}>
            <AvatarImage
              src={getDynamicCdnUrl(user?.profile?.avatarImageUrl)}
              alt={getUserTitleHeading(user) || "User's profile picture"}
            />
            <AvatarFallback
              style={{ borderColor: user && getUniqueColorByUserId(user.id) }}
            >
              {getUserTitleHeading(user)?.charAt(0)}
            </AvatarFallback>
          </Avatar>
        }
        menuItems={[
          { label: `Hey, ${getUserTitleHeading(user)} 👋`, type: 'label' },
          {
            label: 'Purchases',
            type: 'link',
            href: `${process.env.NEXT_PUBLIC_RIGHTS_PROJECT_URL}/licenses/purchases`,
          },
          {
            label: 'Licensed works',
            type: 'link',
            href: `${process.env.NEXT_PUBLIC_RIGHTS_PROJECT_URL}/licenses/registered`,
          },
          {
            label: (
              <span className="flex items-center gap-2">
                <Icon
                  className={twMerge(
                    'w-4 h-4 [&>path]:stroke-2 ',
                    'stroke-gray-600 dark:stroke-gray-dark-300 group-focus:stroke-black dark:group-focus:stroke-white',
                  )}
                />
                {theme === 'light' ? 'Dark mode' : 'Light mode'}
              </span>
            ),
            type: 'item',
            onClick: (e) => {
              e.preventDefault();
              theme === 'light' ? setTheme('dark') : setTheme('light');
            },
          },
          { type: 'separator' },
          { label: 'Logout', type: 'item', onClick: () => userSignOut(wallet) },
        ]}
      />
    );
  }
};
