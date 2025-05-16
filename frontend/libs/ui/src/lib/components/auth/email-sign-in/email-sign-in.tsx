import { twMerge } from 'tailwind-merge';
import { TermsConditionsLink } from '../shared';
import { EmailPasswordForm } from './email-password-form/email-password-form';
import { SignInWithGoogleButton } from './sign-in-with-google-button';

export const EmailSignIn = ({ callbackUrl }: { callbackUrl?: string }) => {
  return (
    <div className="flex flex-col gap-6">
      <EmailPasswordForm callbackUrl={callbackUrl} />

      <span
        className={twMerge([
          'text-center text-gray-700 dark:text-gray-dark-300',
          'flex items-center justify-center',
          'before:bg-gray-300 after:bg-gray-300 dark:before:bg-gray-dark-600 dark:after:bg-gray-dark-600',
          'before:mr-4 after:ml-4',
          "before:content-[''] after:content-[''] before:flex-1 after:flex-1 before:h-px after:h-px",
        ])}
      >
        or
      </span>

      <SignInWithGoogleButton callbackUrl={callbackUrl} />

      <TermsConditionsLink />
    </div>
  );
};
