import { z } from 'zod';
import {
  ACCEPTED_IMAGE_TYPES,
  SUPPORTED_IMAGE_FILE_EXTENSIONS,
} from '../constants';
import { formatBytes } from '../utils';

export const singleOptionalImageSchema = (maxFileSizeInBytes: number) =>
  z
    .custom<FileList>()
    .optional()
    .transform((files) => (files?.length ? files[0] : undefined))
    .refine(
      (file) => (file ? file.size <= maxFileSizeInBytes : true),
      `Max image size is ${formatBytes(maxFileSizeInBytes)}.`,
    )
    .refine(
      (file) => (file ? ACCEPTED_IMAGE_TYPES.includes(file.type) : true),
      `Only ${SUPPORTED_IMAGE_FILE_EXTENSIONS} formats are supported.`,
    );

export const singleRequiredImageSchema = (
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
      (file) => (file ? ACCEPTED_IMAGE_TYPES.includes(file.type) : true),
      `Only ${SUPPORTED_IMAGE_FILE_EXTENSIONS} formats are supported.`,
    )
    .refine((file) => !!file, `${fieldName} is required`);
