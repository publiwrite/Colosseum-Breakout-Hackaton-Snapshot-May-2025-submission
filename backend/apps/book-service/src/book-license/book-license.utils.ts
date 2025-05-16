import { v4 as uuidV4 } from 'uuid';
import { BookLicense } from './entities/book-license.entity';
import { BookLicenseMetadataEntity } from './entities/book-license-metadata.entity';
import { R_TypeOfRights } from '@prisma-clients/main';
import { BookLicenseOrder } from './entities/book-license-order.entity';
import { replaceSpecialCharacters } from '@lib/common';

export const buildBookLicenseCoverKey = (
  bookLicenseId: string,
  fileExt: string,
): string => `licenses/${bookLicenseId}/cover/${uuidV4()}.${fileExt}`;

export const buildBookLicenseManuscriptKey = (
  bookLicenseId: string,
  fileExt: string,
): string => `licenses/${bookLicenseId}/assets/${uuidV4()}.${fileExt}`;

export const buildBookLicenseTemplateKey = (bookLicenseId: string): string =>
  `licenses/${bookLicenseId}/templates/${uuidV4()}.pdf`;

export const buildBookLicenseCertificateKey = (
  bookLicenseOrderId: string,
): string => `licenses/${bookLicenseOrderId}/certificate/${uuidV4()}.pdf`;

export const generateBookLicenseInscriptionContent = (
  license: BookLicense,
  metadata: BookLicenseMetadataEntity,
) => {
  return {
    title: replaceSpecialCharacters(license.title),
    description: replaceSpecialCharacters(license.description),
    authors: license.authors.map((author) =>
      replaceSpecialCharacters(author.name),
    ),
    metadata: {
      ...(metadata?.pages && {
        pages: metadata.pages,
      }),
      tokens: metadata.tokens,
      contentHash: replaceSpecialCharacters(metadata.hash),
    },
    inscriptionStandard: 'Ordinals',
  };
};
export function generateSolanaPnftMetadataContent(
  license: BookLicense,
  metadata: BookLicenseMetadataEntity,
  order: BookLicenseOrder,
  authorAddress: string,
  coverCid: string,
  coverImageMimeType: string,
  symbol: string,
  sellerFeeBasisPoints: number,
) {
  const typesOfRights: string[] = mapTypeOfRightsEnumToStringArray(
    license.typeOfRights,
  );
  const signedAgreementUrl = `ipfs://${order.signedTemplateIpfsCid}`;
  return {
    name: license.title,
    symbol,
    description: `License for ${license.title} | ${typesOfRights.join(', ')}`,
    image: `ipfs://${coverCid}`,
    seller_fee_basis_points: sellerFeeBasisPoints,
    attributes: [
      { trait_type: 'BTC Inscription ID', value: license.btcInscriptionId },
      { trait_type: 'Signed Agreement', value: signedAgreementUrl },
      {
        trait_type: 'Type of Rights',
        value: typesOfRights,
      },
      {
        trait_type: 'Commercial Use',
        value: mapBooleanToYesOrNo(license.isForCommercialUse),
      },
      ...(metadata.pages != null
        ? [{ trait_type: 'Pages', value: metadata.pages }]
        : []),
      { trait_type: 'Tokens', value: metadata.tokens },
      { trait_type: 'Content Hash', value: metadata.hash },
    ],
    properties: {
      files: [
        { uri: `ipfs://${coverCid}`, type: coverImageMimeType },
        {
          uri: signedAgreementUrl,
          type: 'application/pdf',
        },
      ],
      category: 'document',
      creators: [
        {
          address: authorAddress,
          share: 100,
          verified: true,
        },
      ],
    },
  };
}

const mapBooleanToYesOrNo = (value: boolean) => (value ? 'Yes' : 'No');

const mapTypeOfRightsEnumToStringArray = (
  typeOfRights: R_TypeOfRights,
): string[] => {
  switch (typeOfRights) {
    case R_TypeOfRights.TRAINING_RIGHTS:
      return ['Training rights'];
    case R_TypeOfRights.REFERENCE_RIGHTS:
      return ['Reference rights'];
    case R_TypeOfRights.BOTH:
      return ['Training rights', 'Reference rights'];
  }
};
