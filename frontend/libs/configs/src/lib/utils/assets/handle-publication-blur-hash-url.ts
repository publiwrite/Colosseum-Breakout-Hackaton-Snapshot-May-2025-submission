import { getAsset, getPlaceholderImage } from '@pw-fe-monorepo/configs';

export async function handlePublicationBlurHashUrl<
  T extends { assets?: { key: string; type: string; id: string }[] | null },
>(publication: T): Promise<T & { blurHashedCoverUrl?: string }> {
  if (!publication?.assets) return publication;

  const coverAsset = getAsset('cover', publication?.assets);
  if (!coverAsset?.key) return publication;

  const blurHashUrl = await getPlaceholderImage(coverAsset.key);
  return {
    ...publication,
    blurHashedCoverUrl: blurHashUrl,
  };
}
