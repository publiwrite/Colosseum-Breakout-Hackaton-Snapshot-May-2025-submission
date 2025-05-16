/**
 * Checks if a string is a valid UUID (v4)
 * @param str String to validate
 * @returns boolean indicating if string is a valid UUID
 */
export const isUuid = (str: string): boolean => {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(str);
};
