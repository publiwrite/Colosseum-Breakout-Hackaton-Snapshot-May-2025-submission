'use client';

import { DateRenderer } from '../../date-renderer';

export const FooterYear = () => {
  return <DateRenderer>{new Date().getFullYear()}</DateRenderer>;
};
