import { twMerge } from 'tailwind-merge';

export const AuthHeading = ({
  heading,
  description,
  supportSection,
  supportLink,
}: {
  heading: string;
  description: string;
  supportSection?: string;
  supportLink?: string;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold text-black dark:text-white">
        {heading}
      </h1>

      <p className="text-gray-700 dark:text-gray-dark-300">{description}</p>

      {supportSection && supportLink && (
        <div className="text-gray-700 dark:text-gray-dark-300">
          {supportSection}{' '}
          <a
            className={twMerge(
              'hover:underline',
              'text-blue-600 dark:text-blue-200',
              'hover:text-blue-500 dark:hover:text-blue-100',
              'active:text-blue-700 dark:active:text-blue-300',
            )}
            href={supportLink}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Help Center
          </a>
        </div>
      )}
    </div>
  );
};
