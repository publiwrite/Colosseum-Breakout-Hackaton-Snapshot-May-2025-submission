'use server';

import { revalidatePath } from 'next/cache';

export async function revalidateClientCache(
  path: string,
  type: 'layout' | 'page' = 'page',
) {
  revalidatePath(path, type);
}
