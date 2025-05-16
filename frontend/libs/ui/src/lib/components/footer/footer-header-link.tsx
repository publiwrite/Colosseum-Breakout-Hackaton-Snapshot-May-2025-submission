import Link from 'next/link';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export const footerLinkClasses = twMerge(
  'hover:underline',
  'font-medium text-gray-500 dark:text-gray-400',
);

export const FooterHeaderLink = forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<typeof Link>
>((props, ref) => {
  return (
    <Link
      ref={ref}
      {...props}
      className={twMerge(footerLinkClasses, props.className)}
    />
  );
});
