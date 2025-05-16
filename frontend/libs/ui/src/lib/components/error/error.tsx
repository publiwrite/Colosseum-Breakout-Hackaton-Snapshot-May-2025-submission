'use client';

import * as Sentry from '@sentry/nextjs';
import { useEffect } from 'react';
import { Button } from '../../primitives/button';

export const ErrorPage = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  useEffect(() => {
    if (error.name === 'ChunkLoadError') {
      window.location.reload();
    }
  }, []);

  useEffect(() => {
    // Log the error to Sentry
    Sentry.captureException(error);
  }, [error]);

  if (error.name === 'ChunkLoadError') {
    return null;
  }

  return (
    <div className="h-full flex items-center justify-center my-auto py-8">
      <div className="container max-w-3xl flex flex-col items-start gap-4 lg:gap-8 my-auto">
        <h1 className="text-5xl font-bold">Something gone wrong!</h1>

        <p>{error.message}</p>

        <p>If you think there is a problem, you can visit our help center.</p>

        <Button onClick={() => reset()}>Click here to retry</Button>
      </div>
    </div>
  );
};
