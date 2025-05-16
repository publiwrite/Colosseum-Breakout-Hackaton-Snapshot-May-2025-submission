'use client';

import { useEffect, useState } from 'react';

export function useSessionStorage<T>(
  key: string,
  initialValue?: T,
): [T | undefined, (value: T) => void, () => void] {
  // Get from sessionStorage then parse stored json or return initialValue
  const readValue = (): T | undefined => {
    if (typeof window === 'undefined') return initialValue;
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.warn(`Error reading sessionStorage key \"${key}\":`, error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState<T | undefined>(readValue);

  // Update state if key or initialValue changes
  useEffect(() => {
    setStoredValue(readValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  // Set value in state and sessionStorage
  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      if (typeof window !== 'undefined') {
        window.sessionStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.warn(`Error setting sessionStorage key \"${key}\":`, error);
    }
  };

  // Remove value from state and sessionStorage
  const removeValue = () => {
    try {
      setStoredValue(undefined);
      if (typeof window !== 'undefined') {
        window.sessionStorage.removeItem(key);
      }
    } catch (error) {
      console.warn(`Error removing sessionStorage key \"${key}\":`, error);
    }
  };

  return [storedValue, setValue, removeValue];
}
