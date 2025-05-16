import { z } from 'zod';
import { formatBytes } from '../utils';

export const singleOptionalPdfSchema = (maxFileSizeInBytes: number) =>
  z
    .custom<FileList>()
    .optional()
    .transform((files) => (files?.length ? files[0] : undefined))
    .refine(
      (file) => (file ? file.size <= maxFileSizeInBytes : true),
      `Max image size is ${formatBytes(maxFileSizeInBytes)}.`,
    )
    .refine(
      (file) => (file ? ['application/pdf'].includes(file.type) : true),
      `Only .pdf files are supported.`,
    );

export const singleRequiredPdfSchema = (
  maxFileSizeInBytes: number,
  fieldName: string,
) =>
  z
    .custom<FileList>()
    .transform((files) => (files?.length ? files[0] : undefined))
    .refine(
      (file) => (file ? file.size <= maxFileSizeInBytes : true),
      `Max image size is ${formatBytes(maxFileSizeInBytes)}.`,
    )
    .refine(
      (file) => (file ? ['application/pdf'].includes(file.type) : true),
      `Only .pdf formats are supported.`,
    )
    .refine((file) => !!file, `${fieldName} is required`);
