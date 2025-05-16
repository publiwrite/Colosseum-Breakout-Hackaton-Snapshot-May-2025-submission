'use client';

import Image from 'next/image';
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { twMerge } from 'tailwind-merge';

type ImageProps = React.ComponentPropsWithoutRef<typeof Image>;

export const PwImage = forwardRef<HTMLImageElement, ImageProps>(
  ({ className, onLoad, ...props }, ref) => {
    const imageRef = useRef<HTMLImageElement>(null);
    const [isImageLoading, setImageLoading] = useState(false);
    useImperativeHandle(ref, () => imageRef.current!);

    useEffect(() => {
      if (!imageRef.current?.complete) {
        setImageLoading(true);
      }
    }, []);

    return (
      <Image
        unoptimized
        ref={imageRef}
        onLoad={(e) => {
          setImageLoading(false);
          onLoad && onLoad(e);
        }}
        className={twMerge(
          'transform-gpu transition-all duration-500',
          isImageLoading ? 'blur' : 'blur-0',
          className,
        )}
        {...props}
      />
    );
  },
);
