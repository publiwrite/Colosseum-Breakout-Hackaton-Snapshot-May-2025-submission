'use client';

import { DateRenderer } from '@pw-fe-monorepo/ui';

export const FooterYear = () => {
  return <DateRenderer>{new Date().getFullYear()}</DateRenderer>;
};
