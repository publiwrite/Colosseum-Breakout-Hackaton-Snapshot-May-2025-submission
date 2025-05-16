'use client';

import { twMerge } from 'tailwind-merge';
import { useScreenSize } from '../../hooks';
import { AngleUpIcon } from '../../icons/angle-up';
import { Button, buttonVariants } from '../../primitives/button';

export const Pagination = ({
  total,
  itemPerPage,
  currentPageIndex,
  onPageIndexChange,
}: {
  total: number;
  itemPerPage: number;
  currentPageIndex: number;
  onPageIndexChange: (newPageIndex: number) => void;
}) => {
  const isLgOrAbove = useScreenSize('lg');
  const TRIMMED_PAGE_COUNT = isLgOrAbove ? 2 : 1;

  const totalPagesArr = [...Array(Math.ceil(total / itemPerPage)).keys()];
  const totalNumberOfPages = totalPagesArr.length;
  const previousTrimmedPages = totalPagesArr.slice(
    Math.max(currentPageIndex - TRIMMED_PAGE_COUNT, 0),
    currentPageIndex,
  );
  const nextTrimmedPages = totalPagesArr.slice(
    currentPageIndex + 1,
    Math.min(currentPageIndex + 1 + TRIMMED_PAGE_COUNT, totalNumberOfPages),
  );

  return (
    <div className="flex items-center justify-center gap-5">
      <Button
        variant="secondary"
        size="icon"
        disabled={currentPageIndex === 0}
        className="shrink-0"
        onClick={() =>
          currentPageIndex > 0 && onPageIndexChange(currentPageIndex - 1)
        }
      >
        <AngleUpIcon className="-rotate-90 w-5 h-5 fill-black dark:fill-white" />
      </Button>

      {isLgOrAbove && currentPageIndex + 1 > TRIMMED_PAGE_COUNT * 2 && (
        <>
          <Button
            variant="secondary"
            size="icon"
            className="shrink-0"
            onClick={() => onPageIndexChange(0)}
          >
            1
          </Button>
          <div>...</div>
        </>
      )}

      {previousTrimmedPages.map((previousTrimmedPageIndex) => (
        <Button
          key={previousTrimmedPageIndex}
          variant="secondary"
          size="icon"
          className="shrink-0"
          onClick={() => onPageIndexChange(previousTrimmedPageIndex)}
        >
          {previousTrimmedPageIndex + 1}
        </Button>
      ))}

      <label
        className={twMerge(
          buttonVariants({ variant: 'primary', size: 'icon' }),
          'shrink-0',
        )}
      >
        {currentPageIndex + 1}
      </label>

      {nextTrimmedPages.map((nextTrimmedPageIndex) => (
        <Button
          key={nextTrimmedPageIndex}
          variant="secondary"
          size="icon"
          className="shrink-0"
          onClick={() => onPageIndexChange(nextTrimmedPageIndex)}
        >
          {nextTrimmedPageIndex + 1}
        </Button>
      ))}

      {isLgOrAbove &&
        currentPageIndex < totalNumberOfPages - TRIMMED_PAGE_COUNT * 2 && (
          <>
            <div>...</div>
            <Button
              variant="secondary"
              size="icon"
              className="shrink-0"
              onClick={() => onPageIndexChange(totalNumberOfPages - 1)}
            >
              {totalNumberOfPages}
            </Button>
          </>
        )}

      <Button
        variant="secondary"
        size="icon"
        disabled={currentPageIndex === totalNumberOfPages - 1}
        className="shrink-0"
        onClick={() =>
          currentPageIndex < totalNumberOfPages - 1 &&
          onPageIndexChange(currentPageIndex + 1)
        }
      >
        <AngleUpIcon className="rotate-90 w-5 h-5 fill-black dark:fill-white" />
      </Button>
    </div>
  );
};
