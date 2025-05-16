export const formatBytes = (sizeInBytes: number) => {
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let unitIndex = 0;
  let size = sizeInBytes;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }

  // Switch to the next unit if the value is 100 or greater
  if (size >= 100 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }

  const roundedSize = Number(size.toPrecision(2));

  return `${roundedSize}${units[unitIndex]}`;
};
