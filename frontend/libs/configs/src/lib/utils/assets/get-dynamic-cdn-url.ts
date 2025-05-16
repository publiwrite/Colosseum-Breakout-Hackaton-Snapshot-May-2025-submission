export const getDynamicCdnUrl = (path?: string | null) => {
  return path ? `${process.env.NEXT_PUBLIC_CDN_URL}/${path}` : undefined;
};
