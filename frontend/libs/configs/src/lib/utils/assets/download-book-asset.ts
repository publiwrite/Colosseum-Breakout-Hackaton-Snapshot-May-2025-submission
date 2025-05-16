import { getPublicationAssetClientAction } from '../../actions';
import { GetPublicationAssetInput } from '../../apollo';
import { downloadFileFromUrl } from '../browser';

export async function downloadBookAsset({
  publicationId,
  format,
}: GetPublicationAssetInput) {
  const url = await getPublicationAssetClientAction({ publicationId, format });

  downloadFileFromUrl(url, publicationId);
}
