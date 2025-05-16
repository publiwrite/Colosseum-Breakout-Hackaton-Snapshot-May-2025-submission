import { EcommerceItem } from '@pw-fe-monorepo/ui';

export function getTotalValueFromEcommerceItems(items: EcommerceItem[]) {
  return items.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0,
  );
}
