import { z } from 'zod';

export const fileSchema = ({
  acceptedMimeTypes,
  acceptedMimeTypesErrorMessage,
  fieldName,
  optional,
}: {
  acceptedMimeTypes?: string[];
  acceptedMimeTypesErrorMessage?: string;
  fieldName: string;
  optional?: boolean;
}) => {
  const baseSchema = z
    .custom<FileList>()
    .transform((files) => (files?.length ? files[0] : undefined))
    // .refine(
    //   (file) => (file ? file.size <= maxFileSizeInBytes : true),
    //   `Max image size is ${formatBytes(maxFileSizeInBytes)}.`,
    // )
    .refine((file) => {
      if (!acceptedMimeTypes) return true;
      return file ? acceptedMimeTypes.includes(file.type) : true;
    }, acceptedMimeTypesErrorMessage || 'Invalid file type');

  return optional
    ? baseSchema.optional()
    : baseSchema.refine((file) => !!file, `${fieldName} is required`);
};
