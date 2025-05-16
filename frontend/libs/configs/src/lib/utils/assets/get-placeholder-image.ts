import { IS_LOCAL } from '../../constants';
import { emptyBase64 } from './empty-base-64';

function _bufferToBase64(buffer: Buffer): string {
  return `data:image/png;base64,${buffer.toString('base64')}`;
}

function _getImageOptionsBase64Encoded({
  bucket,
  key,
}: {
  bucket: string;
  key: string;
}) {
  const imageRequest = JSON.stringify({
    bucket,
    key,
    edits: {
      resize: {
        width: 50,
        fit: 'contain',
      },
      blur: 1,
      webp: true,
      jpeg: true,
      png: true,
    },
  });
  return Buffer.from(imageRequest).toString('base64');
}

/**
 *
 * @param filepath  The path to the image file e.g `static/marketplace/images/authors-light.jpg`
 * @param bucket  Default value is `${process.env.NEXT_PUBLIC_GENERIC_PUBLIC_BUCKET}` - which is used for selling product images
 * @returns  Base64 string of the image
 */
export async function getPlaceholderImage(
  filepath: string,
  bucket = `${process.env.NEXT_PUBLIC_GENERIC_PUBLIC_BUCKET}`,
) {
  /**
   * If the image is from the private bucket, that means it's a product image
   * and it's not available in all environments.
   */
  const isImageFromEnvSpecificBucket =
    bucket === process.env.NEXT_PUBLIC_GENERIC_PUBLIC_BUCKET;

  if (IS_LOCAL && isImageFromEnvSpecificBucket) {
    return emptyBase64;
  }

  const imageOptionsEncoded = _getImageOptionsBase64Encoded({
    bucket,
    key: filepath,
  });
  const imageBaseUrl = isImageFromEnvSpecificBucket
    ? process.env.NEXT_PUBLIC_CDN_URL
    : process.env.NEXT_PUBLIC_STATIC_ASSETS_URL;

  const url = `${imageBaseUrl}/${imageOptionsEncoded}`;

  try {
    const response = await fetch(url);
    const buffer = Buffer.from(await response.arrayBuffer());

    return _bufferToBase64(buffer);
  } catch {
    return emptyBase64;
  }
}
