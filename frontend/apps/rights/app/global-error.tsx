'use client';

import { GlobalError } from '@pw-fe-monorepo/ui';

export default function GlobalErrorPage({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return <GlobalError error={error} />;
}
