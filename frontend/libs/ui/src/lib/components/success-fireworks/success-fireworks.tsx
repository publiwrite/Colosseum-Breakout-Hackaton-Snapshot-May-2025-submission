import { CheckIcon } from '@pw-fe-monorepo/ui';
import { Fireworks } from './fireworks/fireworks';

export const SuccessFireworks = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return (
    <div className="relative flex flex-col items-center gap-8">
      <Fireworks />

      <div className="flex items-center justify-center bg-green-200 dark:text-green-700 rounded-full w-24 h-24 lg:w-32 lg:h-32">
        <CheckIcon className="w-10 h-10 lg:w-14 lg:h-14 fill-green-500 dark:fill-green-600" />
      </div>

      {children}
    </div>
  );
};
