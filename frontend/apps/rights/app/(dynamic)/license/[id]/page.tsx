import {
  getAsset,
  getDynamicCdnUrl,
  titleGenerator,
} from '@pw-fe-monorepo/configs';
import { getBookLicenseByIdServerAction } from '@pw-fe-monorepo/configs/server';
import { LicenseDetail } from '@rights/lib/components/license-detail';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: { [key: string]: string };
}): Promise<Metadata> {
  const license = await getBookLicenseByIdServerAction(params.id);

  return {
    title: titleGenerator(license?.title ?? ''),
    description: license?.description,
    openGraph: {
      images: getDynamicCdnUrl(getAsset('cover', license?.assets)?.key),
    },
  };
}

export default async function LicenseDetailPage({
  params,
}: {
  params: { [key: string]: string };
}) {
  const license = await getBookLicenseByIdServerAction(params.id);

  if (!license) {
    notFound();
  }

  return <LicenseDetail initialLicense={license} />;
}
