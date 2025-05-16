import { PwImage } from '@pw-fe-monorepo/ui';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export const FeaturedBox = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    title: string;
    description: string;
    image: string;
  }
>(({ title, description, image, className, ...props }, ref) => {
  return (
    <div
      className={twMerge(
        'bg-gray-100 dark:bg-gray-dark-700 p-4 lg:p-8 lg:pt-4 rounded-lg',
        className,
      )}
      ref={ref}
      {...props}
    >
      <PwImage
        src={image}
        alt={title}
        width={316}
        height={316}
        className="max-w-[158px] aspect-square object-contain -ml-4"
      />

      <div className="flex flex-col gap-2">
        <h2 className="text-lg lg:text-2xl font-semibold">{title}</h2>
        <p className="text-gray-700 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
});
