'use client';

import { convertCentsToPriceTag } from '@pw-fe-monorepo/configs';
import {
  buttonVariants,
  PwLink,
  Table,
  TableBody,
  TableCell,
  TableEmpty,
  TableHead,
  TableHeadCell,
  TableRow,
} from '@pw-fe-monorepo/ui';
import {
  IPFS_URL,
  SOLANA_P_NFT_URL,
  SOLANA_TX_URL,
} from '@rights/lib/constants/urls';
import { format } from 'date-fns/format';
import { useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { LicenseDetailContext } from '../provider/license-detail.provider';

export const SalesVolume = () => {
  const { isUserOwnsThisLicense, bookLicenseSales, loading } =
    useContext(LicenseDetailContext);

  if (loading) {
    return null;
  }

  if (!isUserOwnsThisLicense) {
    return null;
  }

  return (
    <div className="flex flex-col gap-8 lg:gap-14">
      <div
        className={twMerge(
          'flex flex-col gap-5',
          'rounded-2xl border border-gray-400 dark:border-gray-dark-600',
          'p-6 max-w-md',
        )}
      >
        <p className="text-gray-600 dark:text-gray-dark-300">Sales volume</p>

        <p className="text-lg font-bold">
          {convertCentsToPriceTag(bookLicenseSales?.volume || 0, {
            currency: 'USDC',
          })}
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <p className="text-gray-600 dark:text-gray-dark-300">Orders</p>

        <Table>
          <TableHead>
            <TableRow>
              {/* <TableHeadCell>Order ID</TableHeadCell> */}
              <TableHeadCell>Agreement</TableHeadCell>
              <TableHeadCell>Payment transaction</TableHeadCell>
              <TableHeadCell>Solana pNft</TableHeadCell>
              <TableHeadCell>Created at</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookLicenseSales?.orders.map((order) => {
              return (
                <TableRow key={order.id}>
                  {/* <TableCell>
                  {order.id}
                </TableCell> */}
                  <TableCell className="p-5">
                    <PwLink
                      href={`${IPFS_URL}${order.signedTemplateIpfsCid}`}
                      title={`${order.signedTemplateIpfsCid}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={buttonVariants({ variant: 'tertiary' })}
                    >
                      <span className="max-w-64 truncate">
                        {order.signedTemplateIpfsCid}
                      </span>
                    </PwLink>
                  </TableCell>
                  <TableCell className="p-5">
                    <PwLink
                      href={`${SOLANA_TX_URL}${order.postPaymentTxSignature}`}
                      title={`${order.postPaymentTxSignature}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={buttonVariants({ variant: 'tertiary' })}
                    >
                      <span className="max-w-64 truncate">
                        {order.postPaymentTxSignature}
                      </span>
                    </PwLink>
                  </TableCell>
                  <TableCell className="p-5">
                    <PwLink
                      href={`${SOLANA_P_NFT_URL}${order.solanaPNftAddress}`}
                      title={`${order.solanaPNftAddress}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={buttonVariants({ variant: 'tertiary' })}
                    >
                      <span className="max-w-64 truncate">
                        {order.solanaPNftAddress}
                      </span>
                    </PwLink>
                  </TableCell>
                  <TableCell className="p-5">
                    <span className="max-w-64 truncate">
                      {format(order.createdAt, 'dd MMM, hh:mm a')}
                    </span>
                  </TableCell>
                </TableRow>
              );
            })}

            {bookLicenseSales?.orders.length === 0 && (
              <TableEmpty>No sales volume found</TableEmpty>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
