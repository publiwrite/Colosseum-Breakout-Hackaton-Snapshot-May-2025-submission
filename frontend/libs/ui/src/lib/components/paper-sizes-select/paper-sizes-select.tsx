'use client';

import { forwardRef, useContext, useEffect } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { useMounted } from '../../hooks';
import { ManuscriptPaperSizesContext } from '../../providers';
import { PaperSizeOption } from './paper-size-option/paper-size-option';
import { PaperSizeOptionSkeletonLoader } from './paper-size-option/paper-size-option-skeleton-loader';

export const PaperSizesSelect = forwardRef<
  HTMLInputElement,
  Omit<UseFormRegisterReturn, 'ref'> & {
    watchValue: string;
    layoutClassName: string;
    showOnlyWatchValue?: boolean;
  }
>((props, ref) => {
  const { watchValue, layoutClassName, showOnlyWatchValue, ...register } =
    props;

  const mounted = useMounted();
  const {
    paperSizes: data,
    loading,
    fetchPaperSizes,
  } = useContext(ManuscriptPaperSizesContext);

  const paperSizes = showOnlyWatchValue
    ? data?.filter((size) => size.id === watchValue)
    : data;

  useEffect(() => {
    fetchPaperSizes();
  }, []);

  return (
    <div className={layoutClassName}>
      {(!mounted || loading) &&
        Array.from({ length: 10 }).map((_, index) => (
          <PaperSizeOptionSkeletonLoader key={index} />
        ))}

      {paperSizes?.map((size) => (
        <PaperSizeOption
          ref={ref}
          key={size.id}
          layoutClassName={layoutClassName}
          size={size}
          watchValue={watchValue}
          {...register}
        />
      ))}
    </div>
  );
});
