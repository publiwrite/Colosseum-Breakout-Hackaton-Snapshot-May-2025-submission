/**
 * Generic fetch with retry function that handles any fetch operation with configurable retry logic
 * @param fetcher - A function that performs the fetch operation
 * @param shouldRetry - A function that determines if retry should continue based on the response or error
 * @param options - Optional configuration for retry behavior
 *   - onRetry: (attempt, responseOrError) => void
 * @returns Promise with the result of the fetcher function
 */
export const fetchWithRetry = async <F extends () => Promise<any>>(
  fetcher: F,
  shouldRetry: (result: Awaited<ReturnType<F>> | Error) => boolean = () =>
    false,
  options: {
    maxRetries?: number;
    retryDelay?: number;
    onRetry?: (
      attempt: number,
      responseOrError: Awaited<ReturnType<F>> | Error,
    ) => void;
    signal?: AbortSignal;
  } = {},
): Promise<Awaited<ReturnType<F>>> => {
  const { maxRetries = 30, retryDelay = 1000, onRetry, signal } = options;
  let retries = 0;
  let lastResult: Awaited<ReturnType<F>> | null = null;
  let lastError: Error | null = null;

  // Helper to check for abort
  const throwIfAborted = () => {
    if (signal?.aborted) {
      throw new DOMException('Aborted', 'AbortError');
    }
  };

  while (retries < maxRetries) {
    throwIfAborted();
    try {
      const result = await fetcher();
      lastResult = result;

      // If shouldRetry returns false, we're done
      if (!shouldRetry(result)) {
        return result;
      }
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));

      // If shouldRetry returns false for this error, don't retry
      if (!shouldRetry(lastError)) {
        throw lastError;
      }
    }

    // Increment retry counter and call onRetry callback if provided
    retries++;
    if (onRetry) {
      if (lastResult !== null) {
        onRetry(retries, lastResult);
      } else if (lastError) {
        onRetry(retries, lastError);
      }
    }

    // Wait before next retry if not the last attempt
    if (retries < maxRetries) {
      // Wait, but abortable
      await new Promise((resolve, reject) => {
        const timeout = setTimeout(resolve, retryDelay);
        if (signal) {
          const onAbort = () => {
            clearTimeout(timeout);
            signal.removeEventListener('abort', onAbort);
            reject(new DOMException('Aborted', 'AbortError'));
          };
          signal.addEventListener('abort', onAbort);
        }
      });
      throwIfAborted();
    }
  }

  // If we've exhausted retries and have a result, return it
  if (lastResult !== null) {
    return lastResult;
  }

  // Otherwise throw the last error
  throw (
    lastError || new Error('Max retries reached with no successful response')
  );
};
