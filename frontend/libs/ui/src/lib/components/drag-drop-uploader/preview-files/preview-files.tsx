import {
  fileNameToPresignedUrlContentType,
  formatBytes,
} from '@pw-fe-monorepo/configs';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  CloseIcon,
  FileIcon,
} from '@pw-fe-monorepo/ui';
import { useEffect, useMemo, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { SmallButton } from '../../../primitives/button';

export const PreviewFiles = ({
  files,
  uploadProgresses,
  onDeleteClick,
}: {
  files: File[];
  uploadProgresses: string[];
  onDeleteClick: (file: File) => void;
}) => {
  // Robust object URL management
  const fileUrlsRef = useRef<{ file: File; url: string }[]>([]);

  // Create object URLs for current files
  const fileUrls = useMemo(() => {
    // Revoke URLs for files that are no longer present
    fileUrlsRef.current.forEach(({ file, url }) => {
      if (!files.includes(file)) {
        URL.revokeObjectURL(url);
      }
    });
    // Filter out removed files
    fileUrlsRef.current = fileUrlsRef.current.filter(({ file }) =>
      files.includes(file),
    );
    // Add new files
    files.forEach((file) => {
      if (!fileUrlsRef.current.find((fu) => fu.file === file)) {
        fileUrlsRef.current.push({ file, url: URL.createObjectURL(file) });
      }
    });
    return fileUrlsRef.current;
  }, [files]);

  // Cleanup all object URLs on unmount
  useEffect(() => {
    return () => {
      fileUrlsRef.current.forEach(({ url }) => URL.revokeObjectURL(url));
      fileUrlsRef.current = [];
    };
  }, []);

  return (
    <div
      className={twMerge(
        'rounded-lg py-3 px-4 m-2',
        'bg-gray-100 dark:bg-gray-dark-700',
        'flex flex-col gap-6',
      )}
    >
      {fileUrls.map(({ file, url }, index) => {
        const uploadProgress = Number(uploadProgresses?.[index] || '0');

        return (
          <div key={index} className="relative flex items-stretch gap-3">
            <SmallButton
              variant="secondary"
              className="absolute right-0 top-0"
              disabled={uploadProgress < 100 && uploadProgress > 0}
              onClick={() => onDeleteClick(file)}
            >
              <CloseIcon className="w-5 h-5 fill-black dark:fill-white" />
            </SmallButton>

            <div
              className={twMerge(
                'flex-shrink-0',
                'rounded-md w-16 h-[52px] p-2',
                'border border-gray-200 dark:border-gray-dark-600',
                'bg-white dark:bg-gray-dark-800',
                'flex items-center justify-center',
              )}
            >
              <Avatar className="rounded-none">
                <AvatarImage
                  src={url}
                  width={100}
                  height={100}
                  alt={file.name}
                  className="object-contain w-full h-auto max-h-full"
                />
                <AvatarFallback className="contents">
                  <FileIcon
                    className="size-10 fill-gray-500"
                    fileType={fileNameToPresignedUrlContentType(file.name)}
                    iconFontSize={64}
                  />
                </AvatarFallback>
              </Avatar>
            </div>

            <div className="min-w-0 flex-1 flex flex-col gap-3 line-clamp-1 mr-8">
              <div className="flex flex-col gap-1">
                <span className="font-medium">{file.name}</span>
                <span className="text-gray-700 dark:text-gray-dark-300">
                  {formatBytes(file.size)}
                </span>
              </div>

              {/* This is checking actual value of uploadProgresses[index] because it can be undefined */}
              {uploadProgresses?.[index] !== undefined && (
                <div className="flex items-center justify-between gap-3">
                  <div
                    className={twMerge(
                      'relative rounded-lg overflow-hidden',
                      'w-full h-1 ',
                      'bg-gray-200 dark:bg-gray-dark-600',
                    )}
                  >
                    <span
                      className="transition-max-width absolute h-full left-0 top-0 bg-blue-500 dark:bg-blue-300"
                      style={{
                        width: '100%',
                        maxWidth: `${uploadProgress}%`,
                      }}
                    ></span>
                  </div>
                  <span>{uploadProgress.toFixed(2)}%</span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
