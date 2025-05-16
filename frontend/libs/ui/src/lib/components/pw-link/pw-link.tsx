'use client';

import Link from 'next/link';
import { forwardRef } from 'react';

type LinkProps = React.ComponentProps<typeof Link>;

export const PwLink = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { children, prefetch, ...restProps } = props;

  return (
    <Link {...restProps} prefetch={false} ref={ref}>
      {children}
    </Link>
  );
});
