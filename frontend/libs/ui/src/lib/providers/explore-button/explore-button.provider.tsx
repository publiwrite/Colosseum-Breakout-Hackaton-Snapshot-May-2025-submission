'use client';

import {
  GetBestSellerBookEditionsQuery,
  useGetBestSellerBookEditions,
  useGetSpotlightAuthors,
} from '@pw-fe-monorepo/configs';
import { BookGenresContext, HeaderMenuContext } from '@pw-fe-monorepo/ui';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

type MenuItem = {
  label: string;
  errorMessage?: string;
  loading?: boolean;
  data?: { label: string; href: string }[];
};

export const ExploreButtonContext = createContext<{
  isDropdownOpen: boolean;
  menuItems: {
    topCategories: MenuItem;
    popularAuthors: MenuItem;
    bestSellerBooks: MenuItem;
  };
  setIsDropdownOpen: (isOpen: boolean) => void;
}>(null as any);

export function ExploreButtonProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isTopMenuOpen } = useContext(HeaderMenuContext);

  const { genres, fetchGenres } = useContext(BookGenresContext);
  const [getSpotlightAuthors, getSpotlightAuthorsResult] =
    useGetSpotlightAuthors();
  const [getBestSellerBookEditions, getBestSellerBookEditionsResult] =
    useGetBestSellerBookEditions();

  const randomGenres = useMemo(() => {
    return [...genres].sort(() => 0.5 - Math.random()).slice(0, 9);
  }, [genres]);

  const menuItems = useMemo(() => {
    const topCategories: MenuItem = {
      label: 'Top Categories',
      loading: randomGenres.length === 0,
      data: randomGenres.map((genre) => ({
        label: genre.name,
        href: `${process.env.NEXT_PUBLIC_MARKETPLACE_PROJECT_URL}/category/${genre.slug}`,
      })),
    };

    const {
      data: spotlightAuthorsData,
      loading: spotlightAuthorsLoading,
      error: spotlightAuthorsError,
    } = getSpotlightAuthorsResult;
    const { getSpotlightAuthors: spotlightAuthors } =
      spotlightAuthorsData || {};

    const {
      data: bestSellersData,
      loading: bestSellersLoading,
      error: bestSellersError,
    } = getBestSellerBookEditionsResult;
    const { getBestSellerBookEditions: bestSellers } = bestSellersData || {};

    let popularAuthors: MenuItem = {
      label: 'Popular Authors',
      loading: spotlightAuthorsLoading,
    };

    let bestSellerBooks: MenuItem = {
      label: 'Best Sellers',
      loading: bestSellersLoading,
    };

    if (spotlightAuthors && spotlightAuthors.length > 0) {
      popularAuthors.data = spotlightAuthors.map((author) => ({
        label: author.name,
        href: `${process.env.NEXT_PUBLIC_MARKETPLACE_PROJECT_URL}/author/${author.slug.name}`,
      }));
    }

    if (spotlightAuthorsError?.message) {
      popularAuthors.errorMessage = spotlightAuthorsError.message;
    }

    if (bestSellers && bestSellers.length > 0) {
      const allBestSellers = bestSellers.reduce(
        (acc, bestSeller) => [...acc, ...bestSeller.editions],
        [] as GetBestSellerBookEditionsQuery['getBestSellerBookEditions'][0]['editions'],
      );

      bestSellerBooks.data = allBestSellers.map((bestSeller) => ({
        label: bestSeller.book.title,
        href: `${process.env.NEXT_PUBLIC_MARKETPLACE_PROJECT_URL}/books/${bestSeller.id}`,
      }));
    }

    if (bestSellersError?.message) {
      bestSellerBooks.errorMessage = bestSellersError.message;
    }

    return {
      topCategories,
      bestSellerBooks,
      popularAuthors,
    };
  }, [
    randomGenres,
    getSpotlightAuthorsResult,
    getBestSellerBookEditionsResult,
  ]);

  useEffect(() => {
    if (isDropdownOpen || isTopMenuOpen) {
      getBestSellerBookEditions();
      fetchGenres();
      getSpotlightAuthors();
    }
  }, [isDropdownOpen, isTopMenuOpen]);

  const value = {
    isDropdownOpen,
    menuItems,
    setIsDropdownOpen,
  };

  return (
    <ExploreButtonContext.Provider value={value}>
      {children}
    </ExploreButtonContext.Provider>
  );
}
