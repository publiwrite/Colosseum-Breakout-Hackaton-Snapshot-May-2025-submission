export function formatNumber(value: number): string | number {
  return Number.isInteger(value) ? value : value.toFixed(2);
}
