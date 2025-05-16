import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type EmptyListStateProps = React.HTMLAttributes<HTMLDivElement> & {
  heading: string;
  description: string;
};

export const EmptyListState = forwardRef<HTMLDivElement, EmptyListStateProps>(
  ({ className, heading, description, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          'flex flex-col items-center justify-center gap-4',
          className,
        )}
        {...props}
      >
        <div className="flex flex-col items-center justify-center gap-1">
          <p className="text-lg lg:text-2xl font-bold text-center">{heading}</p>
          <p className="text-sm lg:text-lg text-center">{description}</p>
        </div>

        {children}
      </div>
    );
  },
);
