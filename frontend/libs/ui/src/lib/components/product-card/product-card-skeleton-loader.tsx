'use client';

import { Slot } from '@radix-ui/react-slot';
import Image from 'next/image';
import React, { createContext, forwardRef, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { LayoutContext } from '../../providers/layout';
import './product-card.scss';

const ProductCardSkeletonLoaderContext = createContext<{
  currentLayout: 'horizontal' | 'vertical';
}>(null as any);

export const ProductCardSkeletonLoader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
    forcedLayout?: 'vertical' | 'horizontal';
  }
>(({ asChild, forcedLayout, children, className, ...props }, ref) => {
  const { layout } = useContext(LayoutContext);

  const currentLayout = forcedLayout || layout;

  const value = {
    currentLayout,
  };

  const Comp = asChild ? Slot : 'div';

  return (
    <ProductCardSkeletonLoaderContext.Provider value={value}>
      <Comp
        ref={ref}
        className={twMerge(
          'product-card',
          currentLayout === 'vertical'
            ? 'product-card--vertical'
            : 'product-card--horizontal',
          className,
        )}
        {...props}
      >
        {children}
      </Comp>
    </ProductCardSkeletonLoaderContext.Provider>
  );
});

export const ProductCardImageSkeletonLoader = forwardRef<
  HTMLImageElement,
  Partial<React.ComponentPropsWithoutRef<typeof Image>>
>((props, ref) => {
  const { currentLayout } = useContext(ProductCardSkeletonLoaderContext);

  return (
    <span
      className={twMerge(
        'product-card__image-wrapper skeleton-loader rounded-lg',
        currentLayout === 'vertical'
          ? 'product-card__image-wrapper--vertical'
          : 'product-card__image-wrapper--horizontal',
      )}
    >
      <span className={twMerge('product-card__inner-wrapper')}>
        <span className="w-48 h-48"></span>
      </span>
    </span>
  );
});

export const ProductCardContentSkeletonLoader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  const { currentLayout } = useContext(ProductCardSkeletonLoaderContext);

  return (
    <span
      ref={ref}
      className={twMerge(
        'product-card__content',
        currentLayout === 'vertical'
          ? 'product-card__content--vertical'
          : 'product-card__content--horizontal',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
});

export const ProductCardTitleSkeletonLoader = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ children, className, ...props }, ref) => {
  const { currentLayout } = useContext(ProductCardSkeletonLoaderContext);

  return (
    <p
      ref={ref}
      className={twMerge(
        'product-card__title skeleton-loader rounded-lg',
        currentLayout === 'vertical'
          ? 'product-card__title--vertical'
          : 'product-card__title--horizontal',
        className,
      )}
      {...props}
    >
      {children || 'Title'}
    </p>
  );
});

export const ProductCardAuthorsSkeletonLoader = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ children, className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={twMerge(
        'product-card__authors skeleton-loader rounded-lg',
        className,
      )}
      {...props}
    >
      by loading...
    </p>
  );
});

export const ProductCardPriceSkeletonLoader = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ children, className, ...props }, ref) => {
  const { currentLayout } = useContext(ProductCardSkeletonLoaderContext);

  return (
    <p
      ref={ref}
      className={twMerge(
        'product-card__price-wrapper skeleton-loader rounded-lg',
        currentLayout === 'vertical'
          ? 'product-card__price-wrapper--vertical'
          : 'product-card__price-wrapper--horizontal',
        className,
      )}
      {...props}
    >
      {/* removed for the time being, as we only have 1 variant in product detail page. */}
      {/* from{' '} */}
      <span
        className={twMerge(
          'product-card__price',
          currentLayout === 'vertical'
            ? 'product-card__price--vertical'
            : 'product-card__price--horizontal',
        )}
      >
        $1.23
      </span>
    </p>
  );
});
