import { twMerge } from 'tailwind-merge';

export const MobileBarButton = ({
  tabName,
  active,
  children,
  onClick,
}: {
  tabName?: string;
  active: boolean;
  children: React.ReactElement;
  onClick: (tab?: string) => void;
}) => {
  return (
    <button
      type="button"
      onClick={() => onClick(active ? undefined : tabName)}
      className={twMerge(
        'p-3 rounded-lg',
        active && 'bg-gray-200 dark:bg-gray-dark-700',
      )}
    >
      {children}
    </button>
  );
};
