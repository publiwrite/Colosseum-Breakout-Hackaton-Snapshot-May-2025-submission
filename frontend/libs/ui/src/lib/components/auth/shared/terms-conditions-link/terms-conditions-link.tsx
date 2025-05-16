import {
  PRIVACY_POLICY_LINK,
  TERMS_OF_SERVICE_LINK,
} from '@pw-fe-monorepo/configs';
import { buttonVariants } from '@pw-fe-monorepo/ui';
import { twMerge } from 'tailwind-merge';

export const TermsConditionsLink = () => {
  return (
    <p className="text-gray-700 dark:text-gray-dark-300 block text-center">
      By continuing, you agree to PubliWrite’s&nbsp;
      <a
        href={TERMS_OF_SERVICE_LINK}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className={twMerge(buttonVariants({ variant: 'tertiary' }), '!inline')}
      >
        Terms of service
      </a>
      &nbsp;and&nbsp;
      <a
        href={PRIVACY_POLICY_LINK}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className={twMerge(buttonVariants({ variant: 'tertiary' }), '!inline')}
      >
        Privacy policy.
      </a>
    </p>
  );
};
