'use client';

import { ACCEPTED_IMAGE_TYPES, formatBytes } from '@pw-fe-monorepo/configs';
import { GalleryIcon } from '@pw-fe-monorepo/ui';
import { useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { twMerge } from 'tailwind-merge';
import { AssetRenderer } from './asset-renderer/asset-renderer';

type AvatarProps = React.ComponentPropsWithRef<'input'>;
type BannerProps = React.ComponentPropsWithRef<'input'>;

export const AvatarBannerUploader = ({
  avatar,
  banner,
  avatarValue,
  bannerValue,
  avatarUploading,
  bannerUploading,
  avatarMaxFileSizeBytes,
  bannerMaxFileSizeBytes,
}: {
  avatar: AvatarProps;
  banner: BannerProps;
  avatarValue?: string;
  bannerValue?: string;
  avatarUploading: boolean;
  bannerUploading: boolean;
  avatarMaxFileSizeBytes: number;
  bannerMaxFileSizeBytes: number;
}) => {
  const [localAvatar, setLocalAvatar] = useState<File | null>(null);
  const [localBanner, setLocalBanner] = useState<File | null>(null);

  return (
    <div className="flex flex-col gap-1">
      <div className="relative h-36 overflow-hidden rounded-2xl rounded-bl-none">
        <label
          htmlFor="banner"
          className={twMerge(
            'group cursor-pointer',
            'relative h-full flex items-center justify-center',
            'bg-gray-200 dark:bg-gray-dark-700',
          )}
        >
          {/* Uploading overlay */}
          <span
            className={twMerge(
              'flex items-center justify-center w-full h-full',
              'absolute inset-0 bg-black/70 z-10',
              'transition-opacity',
              bannerUploading ? 'opacity-100' : 'opacity-0',
            )}
          >
            <AiOutlineLoading3Quarters className="w-10 h-10 fill-white animate-spin" />
          </span>

          {/* Hover overlay */}
          <span
            className={twMerge(
              'flex items-center justify-center w-full h-full',
              'absolute inset-0 bg-black/70 z-10',
              'transition-opacity opacity-0 group-hover:opacity-100',
            )}
          >
            <GalleryIcon className="w-10 h-10 stroke-white" />
          </span>

          <span
            className={twMerge(
              'w-full h-full transition-transform group-hover:scale-105',
              'flex items-center justify-center',
            )}
          >
            <AssetRenderer
              existingFileUrl={
                (localBanner && URL.createObjectURL(localBanner)) || bannerValue
              }
            />
          </span>

          {/* Upper reverse border */}
          <span
            className={twMerge(
              'absolute z-20 cursor-pointer',
              '-left-2 bottom-[84px] lg:bottom-[72px]',
              'w-16 box-content h-full rounded-2xl rounded-br-none',
              'border-l-8 border-b-8 border-gray-100 dark:border-gray-dark-900',
            )}
          ></span>

          {/* Right reverse border */}
          <span
            className={twMerge(
              'absolute z-20 cursor-pointer',
              'left-[84px] lg:left-[72px] -bottom-2',
              'w-16 h-16 box-content rounded-2xl rounded-tl-none rounded-br-none',
              'border-l-8 border-b-8 border-gray-100 dark:border-gray-dark-900',
            )}
          ></span>

          <input
            {...banner}
            type="file"
            id="banner"
            className="sr-only"
            accept={ACCEPTED_IMAGE_TYPES.join(',')}
            onChange={(e) => {
              banner.onChange?.(e);
              setLocalBanner(e.target.files?.[0] || null);
            }}
          />
        </label>

        <label
          htmlFor="avatar"
          className={twMerge(
            'cursor-pointer',
            'z-10 absolute w-[100px] h-[100px] lg:w-[88px] lg:h-[88px] rounded-2xl overflow-hidden',
            '-left-2 -bottom-2',
            'border-8 border-gray-100 dark:border-gray-dark-900',
            'bg-gray-200 dark:bg-gray-dark-700',
          )}
        >
          <span
            className={twMerge(
              'relative w-full h-full flex items-center justify-center',
              'group transition-transform hover:scale-105',
            )}
          >
            {/* Uploading overlay */}
            <span
              className={twMerge(
                'flex items-center justify-center w-full h-full',
                'absolute inset-0 bg-black/70 z-10',
                'transition-opacity',
                avatarUploading ? 'opacity-100' : 'opacity-0',
              )}
            >
              <AiOutlineLoading3Quarters className="w-5 h-5 fill-white animate-spin" />
            </span>

            {/* Hover overlay */}
            <span
              className={twMerge(
                'flex items-center justify-center w-full h-full',
                'absolute inset-0 bg-black/70 z-10',
                'transition-opacity opacity-0 group-hover:opacity-100',
              )}
            >
              <GalleryIcon className="w-5 h-5 stroke-white" />
            </span>

            <AssetRenderer
              existingFileUrl={
                (localAvatar && URL.createObjectURL(localAvatar)) || avatarValue
              }
            />

            <input
              {...avatar}
              type="file"
              id="avatar"
              className="sr-only"
              accept={ACCEPTED_IMAGE_TYPES.join(',')}
              onChange={(e) => {
                avatar.onChange?.(e);
                setLocalAvatar(e.target.files?.[0] || null);
              }}
            />
          </span>
        </label>
      </div>
      <span className="text-xs">
        * File upload limit is up to{' '}
        {avatarMaxFileSizeBytes === bannerMaxFileSizeBytes
          ? formatBytes(avatarMaxFileSizeBytes)
          : `${formatBytes(avatarMaxFileSizeBytes)} for 
          avatar and ${formatBytes(bannerMaxFileSizeBytes)} for banner`}
      </span>
    </div>
  );
};
