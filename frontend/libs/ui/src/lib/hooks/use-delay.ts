'use client';

import { useEffect, useState } from 'react';

interface UseDelayOptions<T> {
  value: T;
  delayTime?: number;
  shouldDelay?: (prev: T, current: T) => boolean;
}

export function useDelay<T>({
  value,
  delayTime = 300,
  shouldDelay = () => false,
}: UseDelayOptions<T>) {
  const [delayedValue, setDelayedValue] = useState(value);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (shouldDelay(delayedValue, value)) {
      timeoutId = setTimeout(() => {
        setDelayedValue(value);
      }, delayTime);
    } else {
      setDelayedValue(value);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delayTime, shouldDelay, delayedValue]);

  return delayedValue;
}
