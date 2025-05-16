import {
  ACCEPTED_DOCUMENT_FILE_EXTENSIONS,
  ACCEPTED_DOCUMENT_TYPES,
  currencySchema,
  fileSchema,
  TypeOfRights,
} from '@pw-fe-monorepo/configs';
import { PublicKey } from '@solana/web3.js';
import { z } from 'zod';

export const licenseFormSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  description: z.string().min(1, { message: 'Description is required' }),
  authorName: z.string().min(1, { message: 'Author is required' }),
  genresIds: z
    .string()
    .array()
    .min(1, { message: 'At least one genre is required' }),
  manuscriptAsset: fileSchema({
    acceptedMimeTypes: ACCEPTED_DOCUMENT_TYPES,
    acceptedMimeTypesErrorMessage: `Only ${ACCEPTED_DOCUMENT_FILE_EXTENSIONS.join(', ')} documents are supported`,
    fieldName: 'Document',
  }),
  coverAsset: fileSchema({
    fieldName: 'Cover image',
  }),
  priceInCents: currencySchema,
  ownerWalletAddress: z
    .string()
    .min(1, { message: 'Wallet address is required' })
    .refine(
      (value) => {
        try {
          new PublicKey(value);
          return true;
        } catch (error) {
          return false;
        }
      },
      { message: 'Invalid Solana wallet address' },
    ),
  isbn: z.string().optional(),
  isForCommercialUse: z.boolean(),
  typeOfRights: z
    .nativeEnum(TypeOfRights, {
      errorMap: (issue, ctx) => ({
        message: 'Please select at least one',
      }),
    })
    .array(),
  agreement: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to the terms' }),
  }),
  terms: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to the terms' }),
  }),
});
