import { format, isValid, parse } from 'date-fns';
import { z } from 'zod';

export const dobSchema = z
  .string()
  .or(z.literal(''))
  .optional()
  .transform((val, ctx) => {
    if (!val) return val;

    const parsedDate = parse(val, 'dd/MM/yyyy', new Date());

    if (
      !isValid(parsedDate) ||
      parsedDate.getFullYear() < 1900 ||
      parsedDate.getFullYear() > new Date().getFullYear()
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.invalid_date,
        message: 'Invalid date format',
      });
      return z.NEVER;
    }

    const forcedUTCDate = new Date(
      `${format(parsedDate, 'yyyy-MM-dd')}T00:00:00.000Z`,
    );

    return forcedUTCDate.toISOString();
  });
