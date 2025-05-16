import {
  ProductCardAuthorsSkeletonLoader,
  ProductCardContentSkeletonLoader,
  ProductCardImageSkeletonLoader,
  ProductCardSkeletonLoader,
  ProductCardTitleSkeletonLoader,
} from '@pw-fe-monorepo/ui';

export const LicenseCardLoading = ({ count = 5 }: { count?: number }) => {
  return Array.from({ length: count }).map((_, index) => (
    <ProductCardSkeletonLoader key={index} forcedLayout="vertical">
      <ProductCardImageSkeletonLoader />

      <ProductCardContentSkeletonLoader>
        <ProductCardTitleSkeletonLoader />
        <ProductCardAuthorsSkeletonLoader />
      </ProductCardContentSkeletonLoader>
    </ProductCardSkeletonLoader>
  ));
};
