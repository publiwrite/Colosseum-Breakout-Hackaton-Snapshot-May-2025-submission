import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export const ColouredBackground = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={twMerge(
        'relative overflow-hidden bg-white dark:bg-gray-dark-900',
        className,
      )}
    >
      <div className="absolute bottom-[10%] left-[-20%] aspect-square w-1/2 bg-[radial-gradient(circle,rgba(255,255,240,1)_0%,rgba(255,255,255,0)_60%)] dark:bg-[radial-gradient(circle,rgba(70,25,1,1)_0%,rgba(0,0,0,0)_60%)]"></div>
      <div className="absolute bottom-[20%] right-0 aspect-square w-1/2 bg-[radial-gradient(circle,rgba(255,253,230,1)_0%,rgba(255,255,255,0)_60%)] dark:bg-[radial-gradient(circle,rgba(70,25,1,1)_0%,rgba(0,0,0,0)_60%)]"></div>

      <div className="relative z-10">{children}</div>
    </div>
  );
});
