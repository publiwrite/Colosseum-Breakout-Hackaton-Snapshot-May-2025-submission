import { twMerge } from 'tailwind-merge';
import { DangerIcon } from '../../../icons/danger';

export const ErrorMessage = ({
  message,
  className,
}: {
  message?: string;
  className?: string;
}) => {
  if (!message) return null;

  return (
    <p
      className={twMerge(
        'flex items-start gap-2',
        'text-sm lg:text-base',
        'text-red-500 dark:text-red-300 font-medium',
        className,
      )}
    >
      <DangerIcon className="w-5 h-5 shrink-0 mt-[2px] stroke-red-500 dark:stroke-red-300" />

      <span className="mt-0.5 lg:mt-0">{message}</span>
    </p>
  );
};
