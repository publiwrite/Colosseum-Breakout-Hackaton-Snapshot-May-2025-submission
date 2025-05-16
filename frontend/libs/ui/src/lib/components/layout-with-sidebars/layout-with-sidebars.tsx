import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import './layout-with-sidebars.css';

export const LayoutWithSidebars = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={twMerge(
        'lg:container lg:max-w-full flex lg:gap-4 h-full overflow-hidden',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});

export const LayoutWithSidebarsMain = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <main
      ref={ref}
      className={twMerge(
        'flex-1 min-w-0 overflow-hidden',
        'rounded-tl-2xl lg:rounded-2xl',
        'bg-gray-200 dark:bg-gray-dark-900',
        className,
      )}
      {...props}
    >
      {children}
    </main>
  );
});

export const LayoutWithSidebarsLeft = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <aside
      ref={ref}
      className={twMerge(
        'relative h-full flex-shrink-0 hidden lg:block',
        'lg:w-[var(--left-bar-width)]',
        'overflow-y-auto',
        className,
      )}
      {...props}
    >
      {children}
    </aside>
  );
});

export const LayoutWithSidebarsMobileBar = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <aside
      ref={ref}
      className={twMerge(
        'flex-shrink-0 lg:hidden',
        'w-[var(--generic-mobile-sidebar-width)]',
        className,
      )}
      {...props}
    >
      {children}
    </aside>
  );
});

export const LayoutWithSidebarsRight = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <aside
      ref={ref}
      className={twMerge(
        'relative h-full flex-shrink-0 hidden lg:block',
        'lg:w-[var(--right-bar-width)]',
        'overflow-y-auto',
        className,
      )}
      {...props}
    >
      {children}
    </aside>
  );
});
