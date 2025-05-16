import { buttonVariants, PwLink } from '@pw-fe-monorepo/ui';
import { twMerge } from 'tailwind-merge';
import { InfoCircleIcon } from '../../icons';

export const InfoNote = ({
  text,
  helpdeskLink,
  helpdeskMessage = 'For more details, visit our',
}: {
  text: React.ReactNode;
  helpdeskLink?: string;
  helpdeskMessage?: string;
}) => {
  return (
    <div className="flex">
      <span className="rounded-lg mr-2">
        <InfoCircleIcon className="w-5 h-5 stroke-blue-700 dark:stroke-blue-300" />
      </span>
      <p className="text-sm text-gray-700 dark:text-gray-dark-300">
        {text}
        {helpdeskLink && (
          <>
            {' '}
            {helpdeskMessage}
            {'  '}
            <PwLink
              href={helpdeskLink}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className={twMerge(
                buttonVariants({ variant: 'tertiary' }),
                '!text-sm',
              )}
            >
              Help Center
            </PwLink>
          </>
        )}
      </p>
    </div>
  );
};
