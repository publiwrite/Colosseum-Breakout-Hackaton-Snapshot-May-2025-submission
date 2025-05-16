import { buttonVariants, PwLink } from '@pw-fe-monorepo/ui';
import { Fragment } from 'react';
import { twMerge } from 'tailwind-merge';

type Links = {
  href?: string;
  label: string;
};

export const Breadcrumb = ({
  items,
  className,
}: {
  items: Links[];
  className: string;
}) => {
  return (
    <div
      className={twMerge(
        'flex flex-nowrap items-center justify-start gap-1 shrink-0 overflow-x-auto',
        'text-xl lg:text-2xl',
      )}
    >
      {items.map((item, index) => (
        <Fragment key={index}>
          {items.length - 1 === index ? (
            <span
              className={twMerge(
                buttonVariants({ variant: 'tertiary' }),
                className,
                'opacity-80 pointer-events-none shrink-0',
              )}
            >
              {item.label}
            </span>
          ) : (
            <PwLink
              href={item.href!}
              className={twMerge(
                buttonVariants({ variant: 'tertiary' }),
                className,
                'shrink-0',
              )}
            >
              {item.label}
            </PwLink>
          )}

          {index < items.length - 1 && (
            <span
              className={twMerge(
                buttonVariants({ variant: 'tertiary' }),
                className,
              )}
            >
              {'>'}
            </span>
          )}
        </Fragment>
      ))}
    </div>
  );
};
