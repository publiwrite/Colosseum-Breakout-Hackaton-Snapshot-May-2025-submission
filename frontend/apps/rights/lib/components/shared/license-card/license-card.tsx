import {
  GetBookLicenseByIdClientActionType,
  licenseToProductCardItem,
} from '@pw-fe-monorepo/configs';
import {
  AiIcon,
  ProductCard,
  ProductCardAuthors,
  ProductCardBadge,
  ProductCardBadges,
  ProductCardContent,
  ProductCardImage,
  ProductCardPrice,
  ProductCardTitle,
  Tag,
} from '@pw-fe-monorepo/ui';

export const LicenseCard = ({
  license,
}: {
  license: GetBookLicenseByIdClientActionType;
}) => {
  return (
    <ProductCard
      key={license.id}
      forcedLayout="vertical"
      productCardItem={licenseToProductCardItem(license)}
      href={`${process.env.NEXT_PUBLIC_RIGHTS_PROJECT_URL}/license/${license.id}`}
    >
      <ProductCardImage />

      <ProductCardBadges>
        <ProductCardBadge className="!p-0">
          <Tag color="blue" size="small" className="flex items-center gap-1">
            <AiIcon className="w-4 h-4 fill-[currentColor]" />
            AI Training
          </Tag>
        </ProductCardBadge>
      </ProductCardBadges>

      <ProductCardContent>
        <ProductCardTitle />
        <ProductCardAuthors as="span" />

        <ProductCardPrice />
      </ProductCardContent>
    </ProductCard>
  );
};
