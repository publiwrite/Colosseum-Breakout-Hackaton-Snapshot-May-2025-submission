'use client';

import { useTheme } from 'next-themes';
import { Toaster as Sonner } from 'sonner';
import { twMerge } from 'tailwind-merge';
import { CheckIcon } from '../../icons/check';
import { CloseIcon } from '../../icons/close';
import { DangerIcon } from '../../icons/danger';
import { InfoCircleIcon } from '../../icons/info-circle';
import { buttonVariants } from '../button';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="max-w-md w-full"
      visibleToasts={3}
      closeButton={true}
      icons={{
        success: (
          <span className="p-2 rounded-lg bg-green-100">
            <CheckIcon className="w-5 h-5 fill-green-700" />
          </span>
        ),
        warning: (
          <span className="p-2 rounded-lg bg-orange-100">
            <DangerIcon className="w-5 h-5 stroke-orange-700" />
          </span>
        ),
        info: (
          <span className="p-2 rounded-lg bg-blue-100">
            <InfoCircleIcon className="w-5 h-5 stroke-blue-700" />
          </span>
        ),
        error: (
          <span className="p-2 rounded-lg bg-red-100">
            <CloseIcon className="w-5 h-5 fill-red-700" />
          </span>
        ),
      }}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: twMerge(
            'pointer-events-auto',
            'dark w-full flex items-start',
            'bg-gray-800 text-white rounded-lg',
            'font-medium text-base lg:text-xl',
            'px-2 lg:px-3 py-2 lg:py-3',
          ),
          success: twMerge('gap-3 lg:gap-4'),
          warning: twMerge('gap-3 lg:gap-4'),
          info: twMerge('gap-3 lg:gap-4'),
          error: twMerge('gap-3 lg:gap-4'),
          icon: 'w-auto h-auto m-0',
          content: 'mt-1.5 lg:mt-0.5',
          closeButton: twMerge(
            'shrink-0 bg-gray-800 border border-gray-700 hover:!bg-gray-700 hover:!border-gray-600',
          ),
          actionButton: twMerge(
            'mt-1 lg:mt-0.5 shrink-0',
            buttonVariants({ variant: 'tertiary' }),
          ),
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
