'use client';

import { useEffect, useState } from 'react';
import { useDebounce } from './use-debounce';

type UseScreenWidthOptions = {
  /**
   * Debounce time in milliseconds
   * @default 200
   */
  debounceTime?: number;
};

export const useScreenWidth = (options: UseScreenWidthOptions = {}) => {
  const { debounceTime = 200 } = options;

  // Initialize with undefined to avoid hydration mismatch
  const [screenWidth, setScreenWidth] = useState<number | undefined>(undefined);

  // Using debounce to prevent excessive re-renders
  const debouncedHandleResize = useDebounce(() => {
    setScreenWidth(window.innerWidth);
  }, debounceTime);

  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      // Set initial width
      setScreenWidth(window.innerWidth);

      // Add event listener
      window.addEventListener('resize', debouncedHandleResize);

      // Clean up
      return () => {
        window.removeEventListener('resize', debouncedHandleResize);
      };
    }
  }, [debouncedHandleResize]);

  return screenWidth;
};
