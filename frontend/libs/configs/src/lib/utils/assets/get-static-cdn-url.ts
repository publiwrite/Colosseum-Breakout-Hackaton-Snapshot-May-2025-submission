export const getStaticCdnUrl = (path?: string | null) => {
  return path
    ? `${process.env.NEXT_PUBLIC_STATIC_ASSETS_URL}/${path}`
    : undefined;
};
