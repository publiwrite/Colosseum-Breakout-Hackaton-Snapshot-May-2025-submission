'use client';

import type { GetMyBasketClientActionType } from '@pw-fe-monorepo/configs';
import {
  convertCentsToPriceTag,
  getAsset,
  getDynamicCdnUrl,
  getPublicationFormatLabel,
  isPhysicalFormat,
} from '@pw-fe-monorepo/configs';
import {
  Button,
  DottedHorizontalList,
  PwImage,
  QuantitySelector,
  ThrashIcon,
  useDebounce,
} from '@pw-fe-monorepo/ui';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export const CartItemBase = ({
  item,
  loading,
  onQuantityChange,
  onRemoveClick,
}: {
  item: GetMyBasketClientActionType[number];
  loading?: boolean;
  onQuantityChange?: (quantity: number) => void;
  onRemoveClick?: () => void;
}) => {
  const [localQuantity, setLocalQuantity] = useState(item.quantity);

  const isPhysicalBook = useMemo(
    () => isPhysicalFormat(item.publicationsListing.publication.format),
    [item.publicationsListing.publication.format],
  );

  useEffect(() => {
    setLocalQuantity(item.quantity);
  }, [item.quantity]);

  const debouncedUpdateCountOnCart = useDebounce(
    async ({ quantity }: { quantity: number }) => onQuantityChange?.(quantity),
    500,
  );

  return (
    <div
      className={twMerge(
        'flex items-stretch gap-4 transition-opacity',
        loading && 'opacity-40 pointer-events-none',
      )}
    >
      <div className={twMerge('shrink-0 relative w-[104px]')}>
        <Link
          target="_blank"
          href={`${process.env.NEXT_PUBLIC_MARKETPLACE_PROJECT_URL}/books/${item.publicationsListing.publication.bookEdition.id}`}
        >
          <PwImage
            fill
            className="w-full h-full !object-contain"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL={
              item.publicationsListing.publication?.blurHashedCoverUrl
            }
            src={
              getDynamicCdnUrl(
                getAsset('cover', item.publicationsListing.publication?.assets)
                  ?.key,
              )!
            }
            alt={item.publicationsListing.publication.bookEdition.book.title}
          />
        </Link>
      </div>

      <div className="flex flex-col items-start gap-4">
        <div className="flex flex-col gap-1">
          <Link
            target="_blank"
            href={`${process.env.NEXT_PUBLIC_MARKETPLACE_PROJECT_URL}/books/${item.publicationsListing.publication.bookEdition.id}`}
            className="text-lg font-bold hover:underline"
          >
            {item.publicationsListing.publication.bookEdition.book.title}
          </Link>

          <p className="text-gray-600 dark:text-gray-dark-300">
            {item.publicationsListing.publication.bookEdition.authors.map(
              (author) => (
                <Link
                  key={author.slug.name}
                  target="_blank"
                  href={`${process.env.NEXT_PUBLIC_MARKETPLACE_PROJECT_URL}/author/${author.slug.name}`}
                  className="hover:underline"
                >
                  {author.name}
                </Link>
              ),
            )}
          </p>

          <DottedHorizontalList className="text-gray-600 dark:text-gray-dark-300 text-sm">
            <p>
              {getPublicationFormatLabel(
                item.publicationsListing.publication.format,
              )}
            </p>

            {/* <p>
              {item.publicationsListing.publication.bookEdition.edition.name}
            </p> */}
          </DottedHorizontalList>

          <p className="text-lg font-bold mt-2">
            {convertCentsToPriceTag(
              item.publicationsListing.priceInCents || 0,
              { useFreeLabel: true },
            )}
          </p>
        </div>

        {onRemoveClick && isPhysicalBook && (
          <QuantitySelector
            value={localQuantity}
            onChange={async (event) => {
              const newValue = Number(event.target.value);
              setLocalQuantity(newValue);
              debouncedUpdateCountOnCart({ quantity: newValue });
            }}
          />
        )}
      </div>

      <Button
        variant="secondary"
        size="icon"
        onClick={onRemoveClick}
        className="self-center"
      >
        <ThrashIcon className="w-5 h-5 stroke-black dark:stroke-white" />
      </Button>
    </div>
  );
};
