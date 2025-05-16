'use client';

import * as React from 'react';
import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { twMerge } from 'tailwind-merge';

// Context to manage the active tab state
type TabbedButtonContextType = {
  activeValue: string;
  setActiveValue: (value: string) => void;
  registerButton: (
    value: string,
    ref: React.RefObject<HTMLButtonElement>,
  ) => void;
  buttonRefs: Map<string, React.RefObject<HTMLButtonElement>>;
};

const TabbedButtonContext = createContext<TabbedButtonContextType | undefined>(
  undefined,
);

type TabbedButtonRootProps = React.HTMLAttributes<HTMLDivElement> & {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
};

// Root component that provides context
export const TabbedButtonRoot = forwardRef<
  HTMLDivElement,
  TabbedButtonRootProps
>(
  (
    { defaultValue, value, onValueChange, className, children, ...props },
    ref,
  ) => {
    const [activeValue, setActiveValueState] = useState<string>(
      defaultValue || value || '',
    );
    const buttonRefs = useRef<Map<string, React.RefObject<HTMLButtonElement>>>(
      new Map(),
    );

    // Handle controlled component case
    useEffect(() => {
      if (value !== undefined) {
        setActiveValueState(value);
      }
    }, [value]);

    const setActiveValue = useCallback(
      (newValue: string) => {
        if (value === undefined) {
          setActiveValueState(newValue);
        }
        onValueChange?.(newValue);
      },
      [onValueChange, value],
    );

    const registerButton = useCallback(
      (buttonValue: string, ref: React.RefObject<HTMLButtonElement>) => {
        buttonRefs.current.set(buttonValue, ref);
      },
      [],
    );

    return (
      <TabbedButtonContext.Provider
        value={{
          activeValue,
          setActiveValue,
          registerButton,
          buttonRefs: buttonRefs.current,
        }}
      >
        <div ref={ref} {...props} className={twMerge('inline-flex', className)}>
          {children}
        </div>
      </TabbedButtonContext.Provider>
    );
  },
);

type TabbedButtonBaseProps = {
  children: React.ReactNode;
  className?: string;
};

// Container component with the animated background
export const TabbedButtonBase = ({
  children,
  className,
}: TabbedButtonBaseProps) => {
  const context = useContext(TabbedButtonContext);
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    transform: 'translateX(0)',
    height: 0,
  });

  if (!context) {
    throw new Error('TabbedButtonBase must be used within a TabbedButtonRoot');
  }

  // Update indicator position when active button changes
  useEffect(() => {
    const activeButtonRef = context.buttonRefs.get(context.activeValue);
    if (activeButtonRef?.current) {
      const buttonRect = activeButtonRef.current.getBoundingClientRect();
      const parentRect =
        activeButtonRef.current.parentElement?.getBoundingClientRect();

      if (parentRect) {
        const leftOffset = buttonRect.left - parentRect.left;
        setIndicatorStyle({
          width: buttonRect.width,
          transform: `translateX(${leftOffset}px)`,
          height: buttonRect.height,
        });
      }
    }
  }, [context.activeValue, context.buttonRefs]);

  return (
    <div
      className={twMerge(
        'flex relative h-10 p-1',
        'rounded-full shadow-sm overflow-hidden',
        'border border-gray-300 dark:border-gray-dark-600',
        className,
      )}
    >
      {/* Active Background Indicator */}
      <div
        className={twMerge(
          'absolute left-0 top-1 bottom-1 rounded-full bg-purple-600 z-0',
          'transform-gpu transition-all duration-300 ease-in-out',
        )}
        style={{
          width: `${indicatorStyle.width}px`,
          transform: indicatorStyle.transform,
          height: 'calc(100% - 8px)', // Use calc for consistent height regardless of button height
        }}
      />
      {children}
    </div>
  );
};

type TabbedButtonProps = {
  value: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  onClick?: () => void;
};

// Individual button component
export const TabbedButton = ({
  value,
  children,
  className,
  title,
  onClick,
}: TabbedButtonProps) => {
  const context = useContext(TabbedButtonContext);
  const buttonRef = useRef<HTMLButtonElement>(null);

  if (!context) {
    throw new Error('TabbedButton must be used within a TabbedButtonRoot');
  }

  const isActive = context.activeValue === value;

  // Register this button with the context
  useEffect(() => {
    context.registerButton(value, buttonRef);
  }, [context, value]);

  const handleClick = () => {
    context.setActiveValue(value);
    onClick?.();
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      title={title}
      className={twMerge(
        'flex-1 flex items-center justify-center',
        'relative z-10 rounded-full',
        'transition-colors duration-200',
        'text-sm font-medium',
        'px-6',
        isActive
          ? 'text-white'
          : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white',
        className,
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
