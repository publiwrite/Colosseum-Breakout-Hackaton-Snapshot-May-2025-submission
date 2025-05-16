import { Asset, AssetType } from '../../apollo';

export const getAsset = <T extends Pick<Asset, 'key' | 'type' | 'id'>>(
  assetType: `${AssetType}`,
  assets?: T[] | null,
) => {
  return assets?.find((asset) => asset.type === assetType);
};
