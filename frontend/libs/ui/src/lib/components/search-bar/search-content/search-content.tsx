'use client';

import { useContext } from 'react';
import { SearchBarContext } from '../provider/provider';
import { Populars } from './populars';

export const SearchContent = ({ onClick }: { onClick: () => void }) => {
  const { watch } = useContext(SearchBarContext);

  return (
    <div>
      {!watch('search')?.length ? (
        <Populars onClick={onClick} />
      ) : watch('search')?.length >= 3 ? (
        <p>
          Press enter to search for{' '}
          <span className="font-bold">{watch('search')}</span>
        </p>
      ) : (
        'Please type at least 3 characters to begin your search'
      )}
    </div>
  );
};
