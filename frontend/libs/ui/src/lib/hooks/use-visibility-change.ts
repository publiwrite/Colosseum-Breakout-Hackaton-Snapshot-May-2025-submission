'use client';

import { useEffect, useState } from 'react';

type VisibilityState = 'visible' | 'hidden' | undefined;

/**
 * Hook to detect document visibility changes (tab switching, window minimizing)
 * Returns the current document visibility state: 'visible', 'hidden', or undefined when SSR
 */
export const useVisibilityChange = () => {
  // Initialize with undefined to avoid hydration mismatch
  const [visibilityState, setVisibilityState] =
    useState<VisibilityState>(undefined);

  useEffect(() => {
    // Only run on client side
    if (typeof document !== 'undefined') {
      // Set initial state
      setVisibilityState(
        document.visibilityState === 'visible' ? 'visible' : 'hidden',
      );

      // Handler for visibility change events
      const handleVisibilityChange = () => {
        setVisibilityState(
          document.visibilityState === 'visible' ? 'visible' : 'hidden',
        );
      };

      // Add event listener
      document.addEventListener('visibilitychange', handleVisibilityChange);

      // Clean up
      return () => {
        document.removeEventListener(
          'visibilitychange',
          handleVisibilityChange,
        );
      };
    }
  }, []);

  return visibilityState;
};
