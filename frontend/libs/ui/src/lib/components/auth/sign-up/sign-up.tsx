import { TermsConditionsLink } from '@pw-fe-monorepo/ui';
import { twMerge } from 'tailwind-merge';
import { Form } from './form/form';
import { SignUpWithGoogleButton } from './sign-up-with-google-button';

export const SignUp = ({
  email,
  source,
  callbackUrl,
  onSignUpComplete,
}: {
  email?: string;
  source: 'modal' | 'page';
  callbackUrl?: string;
  onSignUpComplete?: () => void;
}) => {
  return (
    <div className="flex flex-col gap-6">
      <Form
        defaultValues={{ email }}
        source={source}
        onSignUpComplete={onSignUpComplete}
      />

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

      <SignUpWithGoogleButton source={source} callbackUrl={callbackUrl} />

      <TermsConditionsLink />
    </div>
  );
};
