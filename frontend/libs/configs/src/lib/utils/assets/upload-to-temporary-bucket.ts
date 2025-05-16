import { toast } from 'sonner';
import { generateUploadPreSignedUrlClientAction } from '../../actions';
import { uploadWithRetry } from '../browser';
import { fileNameToPresignedUrlContentType } from '../converters';

/**
 * Uploads a file to a temporary bucket and returns the key of the uploaded file.
 * @param file The file to upload.
 * @param onProgress Optional callback to track upload progress (0-100)
 * @returns The key of the uploaded file.
 */
export const uploadToTemporaryBucket = async (
  file: File,
  onProgress?: (progress: number) => void,
): Promise<string | undefined> => {
  try {
    const urlResponse = await generateUploadPreSignedUrlClientAction({
      contentType: fileNameToPresignedUrlContentType(file.name),
    });

    if (!urlResponse.key) {
      throw new Error('No key returned');
    }

    await uploadWithRetry(
      urlResponse.url,
      {
        method: 'PUT',
        body: file,
        headers: {
          'Content-Type': file.type,
        },
      },
      onProgress,
    );

    return urlResponse.key;
  } catch (error) {
    const err = error as Error;
    toast.error(err.message || 'Something went wrong');
  }
};
