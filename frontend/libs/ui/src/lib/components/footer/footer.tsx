import {
  PRIVACY_POLICY_LINK,
  RETURN_POLICY_LINK,
  TERMS_OF_SERVICE_LINK,
} from '@pw-fe-monorepo/configs';
import { buttonVariants } from '@pw-fe-monorepo/ui/server';
import {
  FaExternalLinkAlt,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { twMerge } from 'tailwind-merge';
import { Logo } from '../logo';
import { ThemeButton } from '../theme-button';
import { FooterHeaderLink, footerLinkClasses } from './footer-header-link';
import { FooterYear } from './footer-year/footer-year';

const HeaderColumn = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        'col-span-3 md:col-span-2 flex flex-col gap-4',
        className,
      )}
    >
      {children}
    </div>
  );
};

const HeaderHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h5 className="text-gray-900 dark:text-white text-lg font-semibold">
      {children}
    </h5>
  );
};

export async function Footer({
  accountLinks,
}: {
  accountLinks: React.ReactNode;
}) {
  return (
    <footer
      className={twMerge(
        'bg-white dark:bg-gray-dark-800',
        'mt-[var(--footer-top-margin)] py-12 lg:py-16',
        'border-t border-gray-200 dark:border-gray-dark-700',
      )}
    >
      <div className="container flex flex-col gap-8 md:gap-12 lg:gap-16">
        <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12">
          <div
            className={twMerge(
              'w-full col-span-6 md:col-span-8 lg:col-span-3',
              'flex flex-wrap flex-row lg:flex-col items-center lg:items-start justify-between lg:justify-start',
              'gap-6 md:gap-12 lg:gap-6',
              'mb-8 lg:mb-0',
            )}
          >
            <div className="flex flex-col gap-1">
              <Logo />

              <span className="text-gray-600 dark:text-gray-300">
                Transform ideas into books
              </span>
            </div>

            <ThemeButton />
          </div>

          <HeaderColumn>
            <HeaderHeading>Platform</HeaderHeading>

            <FooterHeaderLink
              href={`${process.env.NEXT_PUBLIC_MARKETPLACE_PROJECT_URL}/explore/books`}
            >
              Marketplace
            </FooterHeaderLink>
            <FooterHeaderLink
              href={`${process.env.NEXT_PUBLIC_DASHBOARD_PROJECT_URL}`}
            >
              Author Dashboard
            </FooterHeaderLink>
          </HeaderColumn>

          <HeaderColumn>
            <HeaderHeading>Resources</HeaderHeading>

            <FooterHeaderLink
              href="https://blog.publiwrite.com"
              target="_blank"
              className="flex items-center gap-1"
            >
              Blog
              <FaExternalLinkAlt className="w-3 h-3" />
            </FooterHeaderLink>
            <FooterHeaderLink
              href="https://helpdesk.publiwrite.com"
              rel="nofollow noopener noreferrer"
              target="_blank"
              className="flex items-center gap-1"
            >
              Helpdesk
              <FaExternalLinkAlt className="w-3 h-3" />
            </FooterHeaderLink>
          </HeaderColumn>

          <HeaderColumn>
            <HeaderHeading>Account</HeaderHeading>

            {accountLinks}

            <a
              href="#"
              className={twMerge(
                footerLinkClasses,
                'termly-display-preferences',
              )}
            >
              Consent Preferences
            </a>
          </HeaderColumn>

          <HeaderColumn className="lg:col-span-3">
            <HeaderHeading>Community</HeaderHeading>

            <div className="flex items-center gap-3 flex-wrap">
              <a
                href="https://x.com/PubliWrite"
                target="_blank"
                className={buttonVariants({
                  variant: 'secondary',
                  size: 'icon',
                })}
              >
                <RiTwitterXFill className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/publiwrite"
                target="_blank"
                className={buttonVariants({
                  variant: 'secondary',
                  size: 'icon',
                })}
              >
                <FaInstagram className="w-5 h-5" />
              </a>

              <a
                href="https://www.tiktok.com/@publiwrite"
                target="_blank"
                className={buttonVariants({
                  variant: 'secondary',
                  size: 'icon',
                })}
              >
                <FaTiktok className="w-4 h-4" />
              </a>

              <a
                href="https://www.facebook.com/people/PubliWrite/61557506506906/"
                target="_blank"
                className={buttonVariants({
                  variant: 'secondary',
                  size: 'icon',
                })}
              >
                <FaFacebook className="w-5 h-5" />
              </a>

              {/* <a
                href="https://www.reddit.com/user/PubliWrite/"
                target="_blank"
                className={buttonVariants({
                  variant: 'secondary',
                  size: 'icon',
                })}
              >
                <FaReddit className="w-5 h-5" />
              </a> */}
            </div>
          </HeaderColumn>
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
