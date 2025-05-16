'use client';

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from '../../primitives/button';

type Props = React.HTMLAttributes<HTMLDivElement>;

export const ReadMore = forwardRef<HTMLDivElement, Props>(
  ({ className, children, ...props }, ref) => {
    const [isReadMore, setIsReadMore] = useState(false);
    const [isClamped, setIsClamped] = useState(false);

    const innerRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => innerRef.current!, []);

    useEffect(() => {
      if (innerRef.current) {
        const { clientHeight, scrollHeight } = innerRef.current;
        setIsClamped(scrollHeight > clientHeight);
      }
    }, [children]);

    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };

    return (
      <div className="flex flex-col items-start gap-1.5">
        <div
          ref={innerRef}
          className={twMerge(
            'line-clamp-2',
            className,
            isReadMore && '!line-clamp-none',
          )}
          {...props}
        >
          {children}
        </div>

        {isClamped && (
          <Button variant="tertiary" onClick={toggleReadMore}>
            {!isReadMore ? 'Read More' : 'Read Less'}
          </Button>
        )}
      </div>
    );
  },
);
