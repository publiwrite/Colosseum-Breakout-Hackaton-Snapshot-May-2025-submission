import { MouseEvent } from 'react';
import { twMerge } from 'tailwind-merge';
import { CloseIcon } from '../../icons/close';

export const TagItem = ({
  text,
  onDelete,
}: {
  text: string;
  onDelete: (e: MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <div
      className={twMerge(
        'rounded-3xl py-1 pl-4 pr-3',
        'flex items-center gap-2',
        'text-sm',
        'bg-gray-200 dark:bg-gray-dark-600 text-black dark:text-white',
        'border border-gray-300 dark:border-gray-dark-500',
      )}
    >
      {text}

      <button type="button" onClick={onDelete}>
        <CloseIcon className="w-4 h-4 fill-black dark:fill-white" />
      </button>
    </div>
  );
};
