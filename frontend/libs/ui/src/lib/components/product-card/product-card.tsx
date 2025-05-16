'use client';

import {
  ProductCardItem,
  convertCentsToPriceTag,
  getAsset,
  getDynamicCdnUrl,
} from '@pw-fe-monorepo/configs';
import { Slot } from '@radix-ui/react-slot';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, {
  createContext,
  forwardRef,
  useContext,
  useMemo,
  useRef,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { buttonVariants } from '../../primitives/button';
import { LayoutContext } from '../../providers/layout';
import { PwImage } from '../pw-image';
import './product-card.scss';

const ProductCardContext = createContext<{
  productCardItem: ProductCardItem;
  currentLayout: 'horizontal' | 'vertical';
}>(null as any);

export const ProductCard = forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<typeof Link> & {
    asChild?: boolean;
    productCardItem: ProductCardItem;
    forcedLayout?: 'vertical' | 'horizontal';
  }
>(
  (
    { asChild, productCardItem, forcedLayout, children, className, ...props },
    ref,
  ) => {
    const { layout } = useContext(LayoutContext);

    const currentLayout = forcedLayout || layout;

    const value = {
      productCardItem,
      currentLayout,
    };

    const Comp = asChild ? Slot : Link;

    return (
      <ProductCardContext.Provider value={value}>
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
      </ProductCardContext.Provider>
    );
  },
);

export const ProductCardImage = forwardRef<
  HTMLImageElement,
  Partial<React.ComponentPropsWithoutRef<typeof Image>>
>((props, ref) => {
  const { productCardItem, currentLayout } = useContext(ProductCardContext);

  const publicationCoverAsset = useMemo(
    () => getAsset('cover', productCardItem?.assets),
    [productCardItem],
  );

  return (
    <span
      className={twMerge(
        'product-card__image-wrapper',
        currentLayout === 'vertical'
          ? 'product-card__image-wrapper--vertical'
          : 'product-card__image-wrapper--horizontal',
      )}
    >
      <span className={twMerge('product-card__inner-wrapper')}>
        <PwImage
          ref={ref}
          {...props}
          fill
          loading="lazy"
          className="!w-auto !h-full !m-auto !object-contain"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL={productCardItem?.blurHashedCoverUrl}
          src={getDynamicCdnUrl(publicationCoverAsset?.key)!}
          alt={productCardItem.title}
        />
      </span>
    </span>
  );
});

export const ProductCardContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  const { currentLayout } = useContext(ProductCardContext);

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

      {currentLayout === 'horizontal' && <ProductCardDescription />}
    </span>
  );
});

export const ProductCardTitle = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ children, className, ...props }, ref) => {
  const { productCardItem: product, currentLayout } =
    useContext(ProductCardContext);

  return (
    <span
      ref={ref}
      className={twMerge(
        'product-card__title',
        currentLayout === 'vertical'
          ? 'product-card__title--vertical'
          : 'product-card__title--horizontal',
        className,
      )}
      {...props}
    >
      {children || product.title}
    </span>
  );
});

export const ProductCardAuthors = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & { as?: 'a' | 'span' | 'button' }
>(({ children, className, as, ...props }, ref) => {
  const router = useRouter();
  const { productCardItem: product } = useContext(ProductCardContext);

  return (
    <span
      ref={ref}
      className={twMerge('product-card__authors', className)}
      {...props}
    >
      <span>by</span>
      {product?.authors?.map((author, index) => {
        const buttonRef = useRef<HTMLButtonElement>(null);
        const link = `${process.env.NEXT_PUBLIC_MARKETPLACE_PROJECT_URL}/author/${author.slug.name}`;

        return (
          <React.Fragment key={`${author.slug.name}-${product.bookEditionId}`}>
            {as === 'span' ? (
              <span>{author.name}</span>
            ) : as === 'a' ? (
              <Link
                href={link}
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className={twMerge(
                  buttonVariants({ variant: 'tertiary' }),
                  'text-start !inline',
                )}
              >
                {author.name}
              </Link>
            ) : (
              <span
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    buttonRef.current?.click();
                  }
                }}
                className={twMerge(
                  buttonVariants({ variant: 'tertiary' }),
                  'text-start !inline',
                )}
              >
                <button
                  ref={buttonRef}
                  className="contents"
                  onClick={(event) => {
                    event.preventDefault();
                    router.push(link);
                  }}
                >
                  {author.name}
                </button>
              </span>
            )}

            {(product?.authors?.length || 0) > 1 &&
              index + 1 !== product?.authors?.length &&
              ','}
          </React.Fragment>
        );
      })}
      {(product?.authors?.length || 0) > 1 && <span>et al.</span>}
    </span>
  );
});

export const ProductCardBadges = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  const { currentLayout } = useContext(ProductCardContext);

  return (
    <span
      ref={ref}
      className={twMerge(
        'product-card__badges',
        currentLayout === 'vertical'
          ? 'product-card__badges--vertical'
          : 'product-card__badges--horizontal',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
});

export const ProductCardBadge = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  const { currentLayout } = useContext(ProductCardContext);

  return (
    <span
      ref={ref}
      className={twMerge(
        'product-card__badge',
        currentLayout === 'vertical'
          ? 'product-card__badge--vertical'
          : 'product-card__badge--horizontal',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
});

export const ProductCardPrice = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ children, className, ...props }, ref) => {
  const { productCardItem: product, currentLayout } =
    useContext(ProductCardContext);

  if (!product.minPrice && product.minPrice !== 0) {
    return null;
  }

  return (
    <span
      ref={ref}
      className={twMerge(
        'product-card__price-wrapper',
        currentLayout === 'vertical'
          ? 'product-card__price-wrapper--vertical'
          : 'product-card__price-wrapper--horizontal',
        className,
      )}
      {...props}
    >
      {product.minPrice !== product.maxPrice && 'from '}
      <span
        className={twMerge(
          'product-card__price',
          currentLayout === 'vertical'
            ? 'product-card__price--vertical'
            : 'product-card__price--horizontal',
        )}
      >
        {convertCentsToPriceTag(product.minPrice, { useFreeLabel: true })}
      </span>
    </span>
  );
});

const ProductCardDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ children, className, ...props }, ref) => {
  const { productCardItem: product, currentLayout } =
    useContext(ProductCardContext);

  return (
    <span
      ref={ref}
      className={twMerge(
        'product-card__description',
        currentLayout === 'vertical'
          ? 'product-card__description--vertical'
          : 'product-card__description--horizontal',
        className,
      )}
      {...props}
    >
      {children || product.bookEditionDescription}
    </span>
  );
});
