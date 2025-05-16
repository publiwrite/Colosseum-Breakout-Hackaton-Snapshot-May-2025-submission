export const timeoutPromise = <T>(
  promise: Promise<T>,
  ms: number = 10000,
  errorMessage: string = 'Promise timed out',
): Promise<T> => {
  const timeout = new Promise<never>((_, reject) => {
    setTimeout(() => {
      reject(new Error(errorMessage));
    }, ms);
  });

  return Promise.race([promise, timeout]);
};
