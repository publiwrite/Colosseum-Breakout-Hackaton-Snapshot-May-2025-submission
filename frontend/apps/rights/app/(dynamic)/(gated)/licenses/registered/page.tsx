import { titleGenerator } from '@pw-fe-monorepo/configs';
import { MyBookLicensesList } from '@rights/lib/components/my-book-licenses-list';
import { ColouredBackground } from '@rights/lib/components/shared/coloured-background';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: titleGenerator(
    'Registered Licences | Powering AI training while keeping IP',
  ),
  description:
    'These are the intellectual property rights you have registered through the platform. You can view license metadata and track licensing activity. ',
  // openGraph: {
  //   images:
  //     *TO BE ADDED*,
  // },
};

export default function RegisteredLicencesPage() {
  return (
    <div className="flex flex-col">
      <ColouredBackground className="py-14 lg:py-28">
        <div className="container max-w-xl mx-auto flex flex-col items-center gap-4">
          <h1 className="text-2xl lg:text-5xl text-center">
            Registered Licenses
          </h1>
          <p className="text-center text-sm lg:text-base text-gray-500 dark:text-gray-dark-400">
            View all the licenses you have registered. Here you can track
            ownership details, access license files or metadata.
          </p>
        </div>
      </ColouredBackground>

      <div className="container py-14 lg:py-28">
        <MyBookLicensesList />
      </div>
    </div>
  );
}
