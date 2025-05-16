import { titleGenerator } from '@pw-fe-monorepo/configs';
import { LicenseList } from '@rights/lib/components/license-list';
import { ColouredBackground } from '@rights/lib/components/shared/coloured-background';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: titleGenerator('Explore Licenses | Enhance your AI Model'),
  description:
    'Browse all publicly registered licenses and acquire usage rights in just a few clicks. All listings are time-stamped, rights-verified, and ready for commercial use.',
  // openGraph: {
  //   images:
  //     *TO BE ADDED*,
  // },
};

export default function Marketplace() {
  return (
    <div className="flex flex-col">
      <ColouredBackground className="py-14 lg:py-28">
        <div className="container max-w-xl mx-auto flex flex-col items-center gap-4">
          <h1 className="text-2xl lg:text-5xl text-center">Marketplace</h1>
          <p className="text-center text-sm lg:text-base text-gray-500 dark:text-gray-dark-400">
            Explore a curated collection of books and digital content available
            to power your AI training projects
          </p>
        </div>
      </ColouredBackground>

      <div className="container py-14 lg:py-28">
        <LicenseList />
      </div>
    </div>
  );
}
