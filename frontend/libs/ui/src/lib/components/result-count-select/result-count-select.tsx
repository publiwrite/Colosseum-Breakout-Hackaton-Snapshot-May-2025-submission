'use client';

import { PresetListCounts } from '@pw-fe-monorepo/configs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@pw-fe-monorepo/ui';
import { SelectProps } from '@radix-ui/react-select';
import { forwardRef } from 'react';

export const ResultCountSelect = forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    return (
      <div className="flex items-center gap-4">
        <span className="text-gray-700 dark:text-gray-dark-300">Show</span>
        <Select {...props}>
          <SelectTrigger className="w-full lg:w-24">
            <SelectValue placeholder="Count" />
          </SelectTrigger>
          <SelectContent>
            {PresetListCounts.map((count) => (
              <SelectItem key={count} value={count.toString()}>
                {count}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  },
);
