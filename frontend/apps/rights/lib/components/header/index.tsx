import { HeaderMenuButton, Logo } from '@pw-fe-monorepo/ui';
import { twMerge } from 'tailwind-merge';
import { AccountButton } from './account-button/account-button';
import { Links } from './links/links';

export const Header = async () => {
  return (
    <div
      id="inner-header"
      className={twMerge(
        'h-[var(--generic-header-height)] flex-shrink-0',
        'bg-white dark:bg-gray-dark-800',
        'border-b border-gray-300 dark:border-gray-dark-600',
      )}
    >
      <div
        className={twMerge(
          'container lg:px-6 h-full',
          'flex items-center justify-between gap-3 lg:gap-10',
        )}
      >
        <div className="2xl:flex-[0.5] flex items-center gap-5">
          <div className="inline-flex lg:hidden">
            <HeaderMenuButton>
              <div className="flex-1">
                <Links />
              </div>
            </HeaderMenuButton>
          </div>

          <div className="flex-shrink-0">
            <Logo />
          </div>

          <div className="hidden lg:block">
            <Links />
          </div>
        </div>

        <div className="2xl:flex-[0.5] flex items-center justify-end gap-6 lg:gap-8">
          <AccountButton />
        </div>
      </div>
    </div>
  );
};
