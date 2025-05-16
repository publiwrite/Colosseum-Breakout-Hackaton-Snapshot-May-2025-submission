export function roundToNearest(num: number) {
  const factor = Math.pow(10, Math.floor(Math.log10(num)));
  return Math.floor(num / factor) * factor;
}
