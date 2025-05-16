'use client';

import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { twMerge } from 'tailwind-merge';
import { useNetwork } from '../../hooks';

export const OfflineBanner = () => {
  const isOnline = useNetwork();
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in={!isOnline}
      timeout={1700}
      nodeRef={nodeRef}
      unmountOnExit
    >
      <div
        ref={nodeRef}
        className={twMerge(
          'fixed bottom-0 left-0 right-0 z-[99999]',
          isOnline
            ? 'animate-out slide-out-to-bottom duration-700 delay-1000'
            : 'animate-in slide-in-from-bottom duration-700',
        )}
      >
        <p
          className={twMerge(
            'flex items-center justify-center',
            'w-full h-full p-4',
            'font-medium text-white',
            isOnline
              ? 'bg-green-400 dark:bg-green-300'
              : 'bg-red-500 dark:bg-red-400',
          )}
        >
          {isOnline ? 'You are back online!' : 'You are offline!'}
        </p>
      </div>
    </CSSTransition>
  );
};
