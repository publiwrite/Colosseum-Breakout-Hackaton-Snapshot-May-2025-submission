import {
  calculatePaperDimensions,
  ManuscriptPaperSizeEntity,
  PapersizeFormatter,
} from '@pw-fe-monorepo/configs';
import { forwardRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import './paper-size-option.scss';
export const PaperSizeOption = forwardRef<
  HTMLInputElement,
  Omit<UseFormRegisterReturn, 'ref'> & {
    watchValue: string;
    layoutClassName: string;
    size: ManuscriptPaperSizeEntity;
  }
>((props, ref) => {
  const { watchValue, layoutClassName, disabled, size, ...register } = props;

  return (
    <label className={twMerge('paper-size-label', disabled && 'disabled')}>
      <input
        ref={ref}
        type="radio"
        className="opacity-0 absolute"
        value={size.id}
        id={size.id}
        disabled={disabled}
        {...register}
      />

      <span
        className={twMerge(
          'paper-size-label__wrapper',
          watchValue === size.id && 'paper-size-label__wrapper--selected',
        )}
      >
        <span className="relative block w-full h-full">
          <span
            style={{
              position: 'absolute',
              ...calculatePaperDimensions(size.width, size.height, size.unit),
            }}
            className="left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
          >
            <div
              className={twMerge(
                'border border-gray-200 dark:border-gray-dark-600',
                'bg-white dark:bg-gray-dark-800',
                'w-full h-full',
                'shadow-lg',
                watchValue === size.id && 'border-purple-400',
              )}
            ></div>
          </span>
        </span>
      </span>

      <span className="paper-size-label__text-wrapper">
        <span className="paper-size-label__text-wrapper__name">
          {size.name}
        </span>
        <span className="paper-size-label__text-wrapper__size">
          {PapersizeFormatter(
            size.width,
            size.height,
            size.unit as any,
            size.unit as any,
          )}
          <br />
          {PapersizeFormatter(
            size.width,
            size.height,
            size.unit as any,
            'inches',
          )}
        </span>
      </span>
    </label>
  );
});
