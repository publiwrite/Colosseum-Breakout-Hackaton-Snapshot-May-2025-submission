'use client';

import { StarIcon } from '@pw-fe-monorepo/ui';
import {
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { twMerge } from 'tailwind-merge';

export const RateSelect = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ value, onChange, defaultValue, ...props }, ref) => {
  const innerRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => innerRef.current!);

  const [localValue, setLocalValue] = useState(
    innerRef.current?.value || defaultValue || '0',
  );
  const [hoverValue, setHoverValue] = useState(localValue);

  useEffect(() => {
    if (value !== undefined) {
      setLocalValue(value);
    }
  }, [value]);

  useEffect(() => {
    if (innerRef.current?.value !== localValue) {
      setLocalValue(innerRef.current?.value || '0');
    }
  }, []);

  const handleStarClick = (star: number) => {
    const newValue = star.toString();
    setLocalValue(newValue);

    if (onChange) {
      const event = {
        target: {
          value: newValue,
          name: props.name,
        },
        currentTarget: innerRef.current,
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(event);
    }
  };

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const latestValue = +hoverValue || +localValue;

        return (
          <button
            type="button"
            key={star}
            onMouseEnter={() => setHoverValue(star)}
            onMouseLeave={() => setHoverValue(0)}
            onClick={() => handleStarClick(star)}
          >
            <StarIcon
              variant={latestValue >= star ? 'bulk' : 'twotone'}
              className={twMerge(
                'w-5 h-5 lg:w-6 lg:h-6',
                star > latestValue && 'fill-gray-300 dark:fill-gray-dark-600',
              )}
            />
          </button>
        );
      })}

      <input
        {...props}
        ref={innerRef}
        type="hidden"
        value={localValue}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </div>
  );
});

RateSelect.displayName = 'RateSelect';
