export function base64ToUint8Array(base64String: string) {
  // Remove surrounding quotes if present
  const cleanedString = base64String.replace(/^"|"$/g, '');

  // Convert string to array of numbers
  const numbers = cleanedString.split(',').map((num) => parseInt(num, 10));

  // Create Uint8Array from the numbers
  const uint8Array = new Uint8Array(numbers);

  return uint8Array;
}
