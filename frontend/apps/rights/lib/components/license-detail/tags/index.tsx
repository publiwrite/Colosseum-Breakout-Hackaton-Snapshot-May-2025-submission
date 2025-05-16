'use client';

import { twMerge } from 'tailwind-merge';

import { typeOfRightsToReadableWord } from '@pw-fe-monorepo/configs';
import { buttonVariants } from '@pw-fe-monorepo/ui';
import {
  BTC_INSCRIPTION_URL,
  SOLANA_P_NFT_URL,
} from '@rights/lib/constants/urls';
import { useContext } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { LicenseDetailContext } from '../provider/license-detail.provider';
import { TagBox } from './tag-box';

export const Tags = () => {
  const { isUserAlreadyPurchased, license, solanaPNftAddress } =
    useContext(LicenseDetailContext);

  return (
    <div
      className={twMerge(
        'grid grid-cols-2',
        'lg:flex lg:flex-wrap lg:justify-between',
        'gap-x-12 gap-y-5',
      )}
    >
      <TagBox
        heading="BTC inscription"
        desc={
          !!license.btcInscriptionId ? (
            <a
              className={buttonVariants({ variant: 'tertiary' })}
              href={`${BTC_INSCRIPTION_URL}${license.btcInscriptionId}`}
              target="_blank"
              rel="noreferrer"
            >
              {license.btcInscriptionId}
            </a>
          ) : (
            <AiOutlineLoading3Quarters className="w-4 h-4 fill-black dark:fill-white animate-spin" />
          )
        }
      />

      {isUserAlreadyPurchased && (
        <TagBox
          heading="Solana pNft"
          desc={
            !!solanaPNftAddress ? (
              <a
                className={buttonVariants({ variant: 'tertiary' })}
                href={`${SOLANA_P_NFT_URL}${solanaPNftAddress}`}
                target="_blank"
                rel="noreferrer"
              >
                {solanaPNftAddress}
              </a>
            ) : (
              <AiOutlineLoading3Quarters className="w-4 h-4 fill-black dark:fill-white animate-spin" />
            )
          }
        />
      )}

      <TagBox
        heading="Commercial use"
        desc={license.isForCommercialUse ? 'Yes' : 'No'}
      />

      <TagBox
        heading="Type of rights"
        desc={typeOfRightsToReadableWord(license.typeOfRights)}
      />

      {license.isbn && <TagBox heading="ISBN" desc={license.isbn} />}

      {!!license.metadata?.pages && (
        <TagBox heading="Pages" desc={license.metadata?.pages} />
      )}

      {!!license.metadata?.tokens && (
        <TagBox
          heading="Tokens"
          desc={license.metadata?.tokens?.toLocaleString()}
        />
      )}

      <TagBox
        heading="Author"
        desc={license?.authors?.map((author) => author.name).join(', ')}
      />
    </div>
  );
};
