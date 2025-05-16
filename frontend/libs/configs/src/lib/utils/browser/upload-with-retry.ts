export const uploadWithRetry = async (
  url: string,
  init: RequestInit,
  onProgress?: (progress: number) => void,
) => {
  const maxRetries = 5;
  let retries = 0;
  let response;

  while (retries < maxRetries) {
    try {
      if (onProgress) {
        // Use XMLHttpRequest for progress tracking
        return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.open(init.method || 'PUT', url);

          // Set headers
          Object.entries(init.headers || {}).forEach(([key, value]) => {
            xhr.setRequestHeader(key, value as string);
          });

          xhr.upload.onprogress = (event) => {
            if (event.lengthComputable) {
              const progress = (event.loaded / event.total) * 100;
              onProgress(progress);
            }
          };

          xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
              resolve(xhr);
            } else {
              reject(new Error(`HTTP Error: ${xhr.status}`));
            }
          };

          xhr.onerror = () => {
            reject(new Error('Network Error'));
          };

          xhr.send(init.body as any);
        });
      } else {
        // Use fetch for non-progress tracking uploads
        response = await fetch(url, init);
        if (response.ok) {
          return response;
        }
      }
    } catch (error) {
      console.error('Error uploading file', error);
    }
    retries++;
  }
  return response;
};
