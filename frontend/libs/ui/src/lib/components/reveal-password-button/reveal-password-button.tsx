'use client';

import { forwardRef, useEffect, useState } from 'react';
import { RxEyeClosed } from 'react-icons/rx';
import { EyeIcon } from '../../icons/eye';

type RevealPasswordButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  onVisibilityChange?: (visible: boolean) => void;
};

export const RevealPasswordButton = forwardRef<
  HTMLButtonElement,
  RevealPasswordButtonProps
>(({ children, onClick, onVisibilityChange, ...props }, ref) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    onVisibilityChange?.(passwordVisible);
  }, []);

  return (
    <button
      ref={ref}
      type="button"
      {...props}
      onClick={(e) => {
        setPasswordVisible(!passwordVisible);
        onClick?.(e);
        onVisibilityChange?.(!passwordVisible);
      }}
    >
      {!passwordVisible ? (
        <EyeIcon className="w-6 h-6 fill-black dark:fill-white" />
      ) : (
        <RxEyeClosed className="w-6 h-6 fill-black dark:fill-white" />
      )}
    </button>
  );
});
