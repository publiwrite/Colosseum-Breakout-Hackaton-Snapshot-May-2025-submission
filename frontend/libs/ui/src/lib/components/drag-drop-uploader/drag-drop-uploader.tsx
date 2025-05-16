'use client';

import { CloseIcon, DocumentUploadIcon } from '@pw-fe-monorepo/ui';
import {
  ChangeEvent,
  DragEvent,
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { CSSTransition } from 'react-transition-group';
import { twMerge } from 'tailwind-merge';
import useDragAndDrop from '../../hooks/use-drag-drop';
import { PreviewFiles } from './preview-files/preview-files';

type DragDropUploaderProps = React.ComponentPropsWithoutRef<'input'> & {
  uploadProgresses?: string[];
  description?: string;
  errorMessage?: string;
  errorMessageDescription?: string;
};

export const DragDropUploader = forwardRef<
  HTMLInputElement,
  DragDropUploaderProps
>((props, ref) => {
  const id = useId();
  const nodeRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => inputRef.current!);
  const { dragOver, setDragOver, onDragOver, onDragLeave } = useDragAndDrop();
  const {
    uploadProgresses,
    description,
    errorMessage,
    errorMessageDescription,
    className,
    disabled,
    onChange,
    ...restProps
  } = props;

  const [previewFiles, setPreviewFiles] = useState<File[]>([]);
  const [animatePreview, setAnimatePreview] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimatePreview(!!previewFiles?.length);
    }, 50);
  }, [previewFiles]);

  const onDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files.length) {
      const transfer = new DataTransfer();
      transfer.items.add(e.dataTransfer.files[0]);

      // Multiple check
      const files = inputRef.current?.multiple
        ? e.dataTransfer.files
        : transfer.files;

      inputRef.current!.files = files;
      inputRef.current!.dispatchEvent(new Event('change', { bubbles: true }));
    }
    setDragOver(false);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files?.length) {
      inputRef.current!.files = e.target.files;
      setPreviewFiles(Array.from(e.target.files));
      onChange?.(e);
    }
  };

  const deleteFile = (file: File) => {
    const newFiles = previewFiles.filter((f) => f !== file);
    setPreviewFiles(newFiles);

    const data = new DataTransfer();
    newFiles.forEach((f) => data.items.add(f));

    inputRef.current!.files = data.files;
    inputRef.current!.dispatchEvent(new Event('change', { bubbles: true }));
  };

  return (
    <div
      className={twMerge(
        'flex flex-col h-full',
        'rounded-xl p-6',
        'bg-white dark:bg-gray-dark-800',
        className,
      )}
    >
      <label
        htmlFor={id}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className={twMerge(
          'cursor-pointer rounded-lg px-4 py-8 lg:py-28',
          'h-full flex flex-col items-center justify-center gap-3',
          'transition-colors',
          'border-2 border-dashed border-gray-300 dark:border-gray-dark-600',
          'hover:border-gray-400 dark:hover:border-gray-dark-500',
          'focus-within:border-blue-500 dark:focus-within:border-blue-300',
          disabled && 'opacity-50 cursor-not-allowed',
          dragOver && 'border-purple-500 dark:border-purple-300',
          errorMessage && '!border-red-600 dark:!border-red-300',
        )}
      >
        {errorMessage ? (
          <span className="w-10 h-10 lg:w-12 lg:h-12 bg-red-100 rounded-full flex items-center justify-center">
            <CloseIcon className="fill-red-500 dark:fill-red-700" />
          </span>
        ) : (
          <DocumentUploadIcon className="w-8 h-8 lg:w-12 lg:h-12 stroke-black dark:stroke-white" />
        )}

        <span className="flex flex-col items-center gap-1">
          <span className="text-sm lg:text-lg font-medium text-center">
            {dragOver ? (
              'Drop the file here'
            ) : errorMessage ? (
              errorMessage
            ) : (
              <>
                Drag and drop here or{' '}
                <span className="text-blue-500 dark:text-blue-300 hover:underline">
                  Browse
                </span>
              </>
            )}
          </span>

          <span className="text-gray-700 dark:text-gray-dark-300 text-center">
            {errorMessageDescription || description}
          </span>

          {errorMessage && (
            <span className="text-blue-500 dark:text-blue-300 text-center hover:underline">
              {previewFiles.length ? 'Upload New File' : 'Upload File'}
            </span>
          )}
        </span>

        <input
          ref={inputRef}
          type="file"
          id={id}
          {...restProps}
          disabled={disabled}
          onChange={handleFileChange}
          className="sr-only"
        />
      </label>

      <CSSTransition
        timeout={150}
        nodeRef={nodeRef}
        unmountOnExit
        in={!!previewFiles?.length}
      >
        <div
          ref={nodeRef}
          className={twMerge(
            'transform-gpu transition-grid-template-rows grid grid-rows-[0fr] mt-5',
            animatePreview && 'grid-rows-[1fr]',
          )}
        >
          <div className="overflow-hidden">
            <PreviewFiles
              files={Array.from(previewFiles || [])}
              uploadProgresses={uploadProgresses || []}
              onDeleteClick={deleteFile}
            />
          </div>
        </div>
      </CSSTransition>
    </div>
  );
});
