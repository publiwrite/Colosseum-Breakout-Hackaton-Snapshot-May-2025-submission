/**
 * @description Compare two timestamps in milliseconds or seconds
 */
export function compareTimestamps(ts1: number, ts2: number) {
  // Convert timestamps to milliseconds if they are in seconds
  if (ts1 < 1e10) ts1 *= 1000; // 1e10 is 10^10, a threshold to check if ts1 is in seconds
  if (ts2 < 1e10) ts2 *= 1000; // 1e10 is 10^10, a threshold to check if ts2 is in seconds

  // Compare the two timestamps
  if (ts1 < ts2) return -1;
  if (ts1 > ts2) return 1;
  return 0;
}
