import { getManuscriptPublishingAssetDownloadUrlClientAction } from '../../actions';
import { Asset, AssetType } from '../../apollo';
import { downloadFileFromUrl } from '../browser';
import { getAsset } from './get-asset';

export async function downloadManuscriptPublishingAsset(
  assetType: AssetType,
  assets?: Pick<Asset, 'id' | 'key' | 'type'>[] | null,
) {
  const asset = getAsset(assetType, assets);

  if (!asset) {
    return;
  }

  const url = await getManuscriptPublishingAssetDownloadUrlClientAction(
    asset.id,
  );

  downloadFileFromUrl(url, asset.id);
}
