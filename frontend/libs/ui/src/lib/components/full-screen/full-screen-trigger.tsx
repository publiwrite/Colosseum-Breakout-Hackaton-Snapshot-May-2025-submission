'use client';

import { forwardRef, useContext, useEffect } from 'react';
import { CloseIcon, FullScreenIcon } from '../../icons';
import { SmallButton, SmallButtonProps } from '../../primitives/button';
import { FullScreenContext } from './full-screen.provider';

export const FullScreenTrigger = forwardRef<
  HTMLButtonElement,
  SmallButtonProps
>(({ variant = 'secondary', onClick, ...props }, ref) => {
  const { setIsFullScreen, isFullScreen } = useContext(FullScreenContext);

  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFullScreen(false);
      }
    };

    if (isFullScreen) {
      window.addEventListener('keydown', handleEscapeKey);
    } else {
      window.removeEventListener('keydown', handleEscapeKey);
    }

    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isFullScreen]);

  return (
    <SmallButton
      ref={ref}
      {...props}
      variant={variant}
      onClick={(e) => {
        onClick?.(e);

        setIsFullScreen(!isFullScreen);
      }}
    >
      {isFullScreen ? (
        <CloseIcon className="w-6 h-6 fill-black dark:fill-white" />
      ) : (
        <FullScreenIcon className="w-6 h-6 stroke-black dark:stroke-white" />
      )}
    </SmallButton>
  );
});
