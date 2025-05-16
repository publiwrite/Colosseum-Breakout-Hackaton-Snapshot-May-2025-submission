'use client';

import {
  TextareaHTMLAttributes,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { twMerge } from 'tailwind-merge';

export const SelfAdjustTextarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, rows, onChange, ...props }, ref) => {
  const innerRef = useRef<HTMLTextAreaElement | null>(null);
  useImperativeHandle(ref, () => innerRef.current!, []);

  const handleChange = () => {
    if (!innerRef || !innerRef.current) return;

    const { current: textAreaRef } = innerRef;

    textAreaRef.style.height = 'auto';
    const scrollHeight = textAreaRef.scrollHeight;

    textAreaRef.style.height = scrollHeight + 'px';
  };

  useEffect(() => {
    if (innerRef && innerRef.current) {
      handleChange();
    }
  }, [innerRef, props.value]);

  return (
    <textarea
      ref={innerRef}
      rows={rows || 1}
      {...props}
      className={twMerge(
        'bg-transparent border-none outline-none text-black dark:text-white resize-none',
        className,
      )}
      onChange={(e) => {
        handleChange();
        onChange && onChange(e);
      }}
    />
  );
});
