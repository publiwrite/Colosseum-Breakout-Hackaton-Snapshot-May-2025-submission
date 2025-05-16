'use client';

import { ViewMode } from '@pw-fe-monorepo/configs';
import { Fragment, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { SegmentedSelector } from '../../components';
import { BookIcon, Edit2Icon, VariantIconProps } from '../../icons';
import { Button } from '../../primitives/button';
import { ErrorMessage, FormGroup } from '../../primitives/forms';
import { ViewModeSelectDialogContext } from './view-mode-select-dialog.provider';

const options = [
  {
    value: ViewMode.Author,
    label: 'Writing',
    Icon: Edit2Icon,
  },
  {
    value: ViewMode.Reader,
    label: 'Reading',
    Icon: BookIcon,
  },
  {
    value: ViewMode.Both,
    label: 'Both',
    Icon: (props: VariantIconProps) => (
      <span className="relative w-24 h-24">
        <BookIcon
          {...props}
          className={twMerge('absolute top-2 left-2', props.className)}
        />
        <Edit2Icon
          {...props}
          className={twMerge('absolute right-2 bottom-2', props.className)}
        />
      </span>
    ),
  },
];

export const ViewModeSelect = () => {
  const { formMethods, onSubmit } = useContext(ViewModeSelectDialogContext);

  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = formMethods;

  return (
    <div className="flex flex-col gap-6">
      <p className="text-2xl font-bold text-black dark:text-white">
        Welcome to PubliWrite!
      </p>
      <p className="text-gray-700 dark:text-gray-dark-300">
        Where stories are born and books find their readers. Write, publish, and
        read — all in one place
      </p>

      <hr />

      <div className="flex flex-col gap-2">
        <p className="text-lg font-medium text-black dark:text-white">
          Choose your focus
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-dark-300">
          How will you use PubliWrite? You can always change that later
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-1 flex flex-col gap-6"
      >
        <div className="flex flex-col gap-5 lg:gap-10">
          <FormGroup>
            <div className="flex flex-col lg:flex-row items-stretch gap-4">
              {options.map((option, i) => {
                const isSelected = watch('viewMode') === option.value;

                return (
                  <Fragment key={i}>
                    <SegmentedSelector
                      {...register('viewMode')}
                      className={twMerge('flex-1')}
                      value={option.value}
                      Media={
                        <option.Icon
                          variant={isSelected ? 'bulk' : 'twotone'}
                          className={twMerge(
                            'w-12 h-12',
                            isSelected
                              ? 'fill-purple-500 dark:fill-purple-200'
                              : 'stroke-black dark:stroke-white',
                          )}
                        />
                      }
                    >
                      {option.label}
                    </SegmentedSelector>
                  </Fragment>
                );
              })}
            </div>

            {errors.viewMode && (
              <ErrorMessage message={errors.viewMode.message} />
            )}
          </FormGroup>
        </div>

        <hr />

        <Button type="submit" className="lg:self-end">
          Get started
        </Button>
      </form>
    </div>
  );
};
