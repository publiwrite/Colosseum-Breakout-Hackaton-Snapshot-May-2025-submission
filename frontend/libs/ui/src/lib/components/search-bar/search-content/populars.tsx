import { BookGenresContext, PwLink } from '@pw-fe-monorepo/ui';
import { useContext, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

const PopularButton = ({
  slug,
  onClick,
  children,
}: {
  slug: string;
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <PwLink
      href={`${process.env.NEXT_PUBLIC_MARKETPLACE_PROJECT_URL}/category/${slug}`}
      onClick={onClick}
      className={twMerge(
        'text-sm font-medium py-2 px-3 rounded-[40px]',
        'border border-gray-300 dark:border-transparent',
        'bg-transparent dark:bg-gray-dark-600',
      )}
    >
      {children}
    </PwLink>
  );
};

export const Populars = ({ onClick }: { onClick: () => void }) => {
  const { genres, fetchGenres } = useContext(BookGenresContext);

  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-4">
        <p className="font-medium">Categories</p>

        <div className="flex flex-wrap gap-3">
          {genres.map((genre) => (
            <PopularButton key={genre.id} slug={genre.slug} onClick={onClick}>
              {genre.name}
            </PopularButton>
          ))}
        </div>
      </div>

      {/* <hr />

      <div className="flex flex-col gap-4">
        <p className="font-medium">Popular Authors</p>

        <div className="flex flex-col items-start gap-5">
          <PwLink href="/search?q=javascript">Tony Faggioli</PwLink>
          <PwLink href="/search?q=javascript">Cara Natterson</PwLink>
          <PwLink href="/search?q=javascript">Cara Natterson</PwLink>
        </div>
      </div> */}
    </>
  );
};
