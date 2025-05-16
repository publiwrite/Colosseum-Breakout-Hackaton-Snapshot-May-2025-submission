import { GetBookLicenseByIdServerActionType } from '@pw-fe-monorepo/configs/server';
import { ReadMore } from '@pw-fe-monorepo/ui';
import { twMerge } from 'tailwind-merge';
import { Banner } from './banner';
import { CoverImage } from './cover-image';
import { PaymentArea, PaymentAreaMobile } from './payment-area';
import { LicenseDetailProvider } from './provider/license-detail.provider';
import { SalesVolume } from './sales-volume';
import { StatusBadge } from './status-badge';
import { Tags } from './tags';

export const LicenseDetail = ({
  initialLicense,
}: {
  initialLicense: GetBookLicenseByIdServerActionType;
}) => {
  return (
    <LicenseDetailProvider initialLicense={initialLicense}>
      <div className="relative mb-16">
        <div className="lg:z-[1] lg:absolute lg:top-0 lg:left-0 lg:w-screen lg:max-w-full p-1 lg:p-2">
          <div className="relative rounded-lg overflow-hidden h-[260px] lg:h-[560px]">
            <Banner />

            <div className="lg:hidden absolute inset-5 z-10">
              <div className="w-full h-full relative">
                <CoverImage />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:relative lg:z-[2] lg:pt-[68px]">
          <div
            className={twMerge(
              'container py-7 px-4 lg:p-15 rounded-xl',
              'lg:bg-white lg:dark:bg-gray-dark-800',
              'lg:border lg:border-gray-300 lg:dark:border-gray-dark-600',
            )}
          >
            <div className="grid grid-cols-12 gap-y-14">
              <div
                className={twMerge(
                  'col-span-12 lg:col-span-6',
                  'flex flex-col gap-10 lg:gap-15',
                )}
              >
                <div className="flex flex-col gap-7">
                  <div className="flex flex-col items-start gap-3 lg:gap-4">
                    <div className="flex flex-col items-start gap-5">
                      <StatusBadge />

                      <h1 className="text-2xl lg:text-4xl font-bold">
                        {initialLicense.title}
                      </h1>
                    </div>

                    <p className="text-gray-600 dark:text-gray-dark-300">
                      by{' '}
                      <span className="font-medium text-gray-900 dark:text-white">
                        {initialLicense.authors?.[0]?.name}
                      </span>
                    </p>
                  </div>

                  <Tags />

                  <p>
                    <span className="text-gray-600 dark:text-gray-dark-400">
                      Genres:
                    </span>{' '}
                    {initialLicense.genres?.map((c) => c.name).join(', ')}
                  </p>

                  {initialLicense?.description && (
                    <ReadMore className="line-clamp-2 lg:line-clamp-4 text-gray-800 dark:text-gray-dark-300">
                      {initialLicense.description}
                    </ReadMore>
                  )}
                </div>
              </div>

              <div
                className={twMerge(
                  'col-span-12 lg:col-span-4 hidden lg:col-start-9',
                  'hidden lg:flex flex-col gap-8 ',
                )}
              >
                <div
                  className={twMerge(
                    'h-[380px]',
                    'relative flex items-center justify-center',
                  )}
                >
                  <CoverImage />
                </div>

                <div
                  className={twMerge(
                    'flex flex-col gap-6',
                    'sticky top-[calc(var(--generic-header-height)+16px)]',
                  )}
                >
                  <PaymentArea />
                </div>
              </div>

              <div className="col-span-full">
                <SalesVolume />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={twMerge(
          'lg:hidden sticky w-full bottom-0 left-0 right-0 z-40 -mb-[var(--footer-top-margin)]',
        )}
      >
        <PaymentAreaMobile />
      </div>
    </LicenseDetailProvider>
  );
};
