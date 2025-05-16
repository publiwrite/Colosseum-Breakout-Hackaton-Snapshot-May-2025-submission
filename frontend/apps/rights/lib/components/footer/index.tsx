import {
  PRIVACY_POLICY_LINK,
  RETURN_POLICY_LINK,
  TERMS_OF_SERVICE_LINK,
} from '@pw-fe-monorepo/configs';
import { Logo, ThemeButton } from '@pw-fe-monorepo/ui';
import { twMerge } from 'tailwind-merge';
import { FooterHeaderLink } from './footer-header-link';
import { FooterYear } from './footer-year/footer-year';

export async function Footer() {
  return (
    <footer
      className={twMerge(
        'bg-white dark:bg-gray-dark-800',
        'mt-[var(--footer-top-margin)] py-8',
        'border-t border-gray-200 dark:border-gray-dark-700',
      )}
    >
      <div className="container flex flex-col gap-4">
        <div className={twMerge('w-full')}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Logo />

            <ThemeButton />
          </div>
        </div>

        <div
          className={twMerge(
            'flex flex-col md:flex-row items-center justify-between gap-4 pt-4 md:pt-6',
            'border-t border-gray-200 dark:border-gray-700',
          )}
        >
          <p className="text-sm text-center text-gray-600 dark:text-gray-400">
            Copyright ⓒ <FooterYear /> PUBLIWRITE.COM, All rights reserved
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6">
            <FooterHeaderLink
              href={RETURN_POLICY_LINK}
              className="text-sm"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Return policy
            </FooterHeaderLink>
            <FooterHeaderLink
              href={TERMS_OF_SERVICE_LINK}
              className="text-sm"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Terms of service
            </FooterHeaderLink>
            <FooterHeaderLink
              href={PRIVACY_POLICY_LINK}
              className="text-sm"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Privacy policy
            </FooterHeaderLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
