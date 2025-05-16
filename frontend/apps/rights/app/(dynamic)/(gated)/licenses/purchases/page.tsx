import { titleGenerator } from '@pw-fe-monorepo/configs';
import { PurchasedBookLicensesList } from '@rights/lib/components/purchased-book-licenses-list';
import { ColouredBackground } from '@rights/lib/components/shared/coloured-background';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: titleGenerator('Purchased Licences | Powering AI training '),
  description:
    'View all the licenses you have acquired. Here you can track ownership details, access license files or metadata.',
  // openGraph: {
  //   images:
  //     *TO BE ADDED*,
  // },
};

export default function PurchasedLicensesPage() {
  return (
    <div className="flex flex-col">
      <ColouredBackground className="py-14 lg:py-28">
        <div className="container max-w-xl mx-auto flex flex-col items-center gap-4">
          <h1 className="text-2xl lg:text-5xl text-center">
            Purchased Licenses
          </h1>
          <p className="text-center text-sm lg:text-base text-gray-500 dark:text-gray-dark-400">
            View all the licenses you have acquired. Here you can track
            ownership details, access license files or metadata.
          </p>
        </div>
      </ColouredBackground>

      <div className="container py-14 lg:py-28">
        <PurchasedBookLicensesList />
      </div>
    </div>
  );
}
