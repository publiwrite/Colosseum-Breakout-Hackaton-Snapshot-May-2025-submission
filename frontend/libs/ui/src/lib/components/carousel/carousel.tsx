'use client';

import { AngleUpIcon } from '@pw-fe-monorepo/ui';
import {
  createContext,
  forwardRef,
  RefObject,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { CSSTransition } from 'react-transition-group';
import { twMerge } from 'tailwind-merge';

const CarouselContext = createContext<{
  showLeftArrow: boolean;
  showRightArrow: boolean;
  wrapperRef: RefObject<HTMLDivElement>;
  setShowLeftArrow: (value: boolean) => void;
  setShowRightArrow: (value: boolean) => void;
}>(null as any);

const scroll = (
  direction: 'left' | 'right',
  wrapperRef: RefObject<HTMLDivElement>,
) => {
  if (!wrapperRef.current) return;

  const scrollAmount = window.innerWidth / 2;
  wrapperRef.current.scrollBy({
    left: direction === 'left' ? -scrollAmount : scrollAmount,
    behavior: 'smooth',
  });
};

export const Carousel = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const value = {
    showLeftArrow,
    showRightArrow,
    wrapperRef,
    setShowLeftArrow,
    setShowRightArrow,
  };

  return (
    <CarouselContext.Provider value={value}>
      <div {...props} className={twMerge('max-w-full relative', className)}>
        {children}
      </div>
    </CarouselContext.Provider>
  );
});

export const CarouselSlide = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  const { wrapperRef, setShowLeftArrow, setShowRightArrow } =
    useContext(CarouselContext);
  useImperativeHandle(ref, () => wrapperRef.current!);

  useEffect(() => {
    if (!wrapperRef.current) return;

    // Initial check
    handleScroll();

    wrapperRef.current.addEventListener('scroll', handleScroll);

    return () => {
      wrapperRef.current?.removeEventListener('scroll', handleScroll);
    };
  }, [wrapperRef.current]);

  const handleScroll = useCallback(() => {
    if (!wrapperRef.current) return;

    const { scrollLeft, scrollWidth, offsetWidth } = wrapperRef.current;

    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft + offsetWidth < scrollWidth);
  }, []);

  return (
    <div
      ref={wrapperRef}
      {...props}
      className={twMerge(
        'relative flex flex-nowrap gap-4 lg:gap-8 overflow-x-auto no-scrollbar',
        'snap-mandatory snap-x',
        className,
      )}
    >
      {children}
    </div>
  );
});

export const CarouselItem = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={twMerge('snap-always snap-center shrink-0', className)}
    >
      {children}
    </div>
  );
});

export const CarouselRightArrow = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const arrowRef = useRef<HTMLDivElement>(null);
  const { wrapperRef, showRightArrow } = useContext(CarouselContext);

  return (
    <CSSTransition
      in={showRightArrow}
      nodeRef={arrowRef}
      timeout={150}
      unmountOnExit
    >
      <div ref={arrowRef} {...props} className="contents">
        <div
          data-state={showRightArrow ? 'open' : 'closed'}
          className={twMerge(
            'absolute right-0 top-0 bottom-0 z-[2]',
            'bg-gradient-to-l from-gray-100 dark:from-gray-dark-900 to-transparent',
            'w-[15%] lg:w-[5%]',
            'data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=closed]:fade-out',
          )}
        ></div>
        <div
          className={twMerge(
            'absolute right-0 -mt-4 z-[3]',
            'top-1/2 !-translate-y-1/2 !translate-x-[5px]',
            className,
          )}
        >
          <button
            data-state={showRightArrow ? 'open' : 'closed'}
            onClick={() => scroll('right', wrapperRef)}
            className={twMerge(
              'flex items-center justify-center p-1',
              'rounded-full border border-gray-200 dark:border-gray-dark-600',
              'bg-white dark:bg-gray-dark-800',
              'shadow-md hover:shadow-lg',
              'animate-in fade-in-0 zoom-in-75 transform-gpu',
              'data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=closed]:fade-out',
            )}
          >
            <AngleUpIcon className="w-4 h-4 fill-black dark:fill-white rotate-90" />
          </button>
        </div>
      </div>
    </CSSTransition>
  );
});

export const CarouselLeftArrow = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const arrowRef = useRef<HTMLDivElement>(null);
  const { wrapperRef, showLeftArrow } = useContext(CarouselContext);

  return (
    <CSSTransition
      in={showLeftArrow}
      nodeRef={arrowRef}
      timeout={150}
      unmountOnExit
    >
      <div ref={arrowRef} {...props} className="contents">
        <div
          data-state={showLeftArrow ? 'open' : 'closed'}
          className={twMerge(
            'absolute left-0 top-0 bottom-0 z-[3]',
            'bg-gradient-to-r from-gray-100 dark:from-gray-dark-900 to-transparent',
            'w-[15%] lg:w-[5%]',
            'data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=closed]:fade-out',
          )}
        ></div>
        <div
          className={twMerge(
            'absolute left-0 -mt-4 z-[4]',
            'top-1/2 !-translate-y-1/2 !translate-x-[5px]',
            className,
          )}
        >
          <button
            data-state={showLeftArrow ? 'open' : 'closed'}
            onClick={() => scroll('left', wrapperRef)}
            className={twMerge(
              'flex items-center justify-center p-1',
              'rounded-full border border-gray-200 dark:border-gray-dark-600',
              'bg-white dark:bg-gray-dark-800',
              'shadow-md hover:shadow-lg',
              'animate-in fade-in-0 zoom-in-75 transform-gpu',
              'data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=closed]:fade-out',
            )}
          >
            <AngleUpIcon className="w-4 h-4 fill-black dark:fill-white -rotate-90" />
          </button>
        </div>
      </div>
    </CSSTransition>
  );
});
