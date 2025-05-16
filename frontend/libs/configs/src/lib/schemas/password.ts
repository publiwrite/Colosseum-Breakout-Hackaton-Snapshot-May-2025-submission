import { z } from 'zod';

export const passwordSchema = z
  .string()
  .min(8, { message: 'Password must be at least 8 characters long' })
  .refine(
    (value) => /[A-Z]/.test(value),
    'Password must contain at least one uppercase letter',
  )
  .refine(
    (value) => /[a-z]/.test(value),
    'Password must contain at least one lowercase letter',
  )
  .refine(
    (value) => /\d/.test(value),
    'Password must contain at least one number',
  )
  .refine(
    (value) => /[!@#$%^&*()_+=[{\]};:<>|./?,-]/.test(value),
    'Password must contain at least one special character',
  );
