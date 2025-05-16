import { SearchIcon, gtmEcommerceEvent } from '@pw-fe-monorepo/ui';
import { useRouter } from 'next/navigation';
import { FocusEvent, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { Schema, SearchBarContext } from '../provider/provider';
import './search-input.scss';

export const SearchInput = ({
  onSubmit,
  onFocus,
}: {
  onSubmit: () => void;
  onFocus: (e: FocusEvent<HTMLInputElement, Element>) => void;
}) => {
  const router = useRouter();
  const { register, handleSubmit } = useContext(SearchBarContext);

  const handleInternalSubmit = async (data: Schema) => {
    router.push(
      `${process.env.NEXT_PUBLIC_MARKETPLACE_PROJECT_URL}/search?q=${data.search}`,
    );
    onSubmit();

    // Trigger search event
    gtmEcommerceEvent('search', {
      search_term: data.search,
    });
  };

  return (
    <div className="search-input-wrapper">
      <form className="w-full" onSubmit={handleSubmit(handleInternalSubmit)}>
        <input
          {...register('search')}
          type="text"
          autoComplete="off"
          className={twMerge(
            'w-full h-full outline-none',
            'font-medium placeholder:font-normal bg-transparent',
            'px-2 py-1.5 pl-10 lg:pl-2 lg:pr-10',
          )}
          placeholder="Enter a title, author, or genre to start exploring..."
          onFocus={onFocus}
        />

        <input type="submit" className="hidden" />
      </form>

      <div
        className={twMerge(
          'pointer-events-none',
          'absolute left-2 lg:left-auto lg:right-2 top-0 bottom-0',
          'flex items-center justify-center',
        )}
      >
        <SearchIcon className="w-6 h-6 stroke-black dark:stroke-white" />
      </div>
    </div>
  );
};
