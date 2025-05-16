import { twMerge } from 'tailwind-merge';

export const editorNavbarTabsTriggerStyle = twMerge(
  'z-0 flex-1 flex flex-col items-center gap-1 rounded-lg pt-3 pb-2 group',
  'data-[state=active]:relative data-[state=active]:z-10',
  'bg-gray-100 dark:bg-gray-dark-800',
  'data-[state=active]:bg-gray-200 dark:data-[state=active]:bg-gray-dark-700',
  'hover:bg-gray-200 dark:hover:bg-gray-dark-700',
  'active:!bg-gray-300 dark:active:!bg-gray-dark-900',
  'focus:outline-none focus:ring-inset focus:ring focus:ring-blue-200 dark:focus:ring-blue-900',
);

export const editorSubTabsTriggerStyle = twMerge(
  'z-0 flex-1 flex flex-col items-center gap-1 pt-3 pb-2 group',
  'border-b border-gray-400 dark:border-white/20',
  'text-gray-600 dark:text-gray-dark-300',
  'hover:text-black dark:hover:text-white',
  'data-[state=active]:relative data-[state=active]:z-10',
  'data-[state=active]:text-black dark:data-[state=active]:text-white',
  'data-[state=active]:border-b-2 data-[state=active]:border-black dark:data-[state=active]:border-white',
  'hover:border-black dark:hover:border-white',
  'focus:outline-none focus:ring-inset focus:ring focus:ring-blue-200 dark:focus:ring-blue-900',
);
