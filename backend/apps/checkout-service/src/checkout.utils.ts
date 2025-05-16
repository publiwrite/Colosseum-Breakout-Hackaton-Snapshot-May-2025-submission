import { PublicationWithEditionData } from './checkout.interfaces';
import { EnvironmentType } from '@lib/common';
import { RepeatOptions } from 'bullmq';
import { PaymentType } from '@prisma-clients/main';

export const createOrderName = (
  orderId: string,
  listings: PublicationWithEditionData[],
) => {
  if (listings.length === 1) {
    return `Order ${orderId} | ${listings[0].publication.bookEdition.book.title} | PW`;
  }

  return `Order ${orderId} | ${listings.length} books | PW`;
};

export const createOrderDescription = (
  orderId: string,
  listings: PublicationWithEditionData[],
  paymentType: PaymentType,
) => {
  switch (paymentType) {
    case PaymentType.HELIO:
      return `Order number: ${orderId} \n
        Books: \n
        ${listings.map((listing) => `- ${listing.publication.bookEdition.book.title}`).join('\n')} \n
        If you have any questions or need assistance, feel free to contact us at info@publiwrite.com.
      `;
    default: {
      return `The order number is ${orderId}. \n If you have any questions or need assistance, feel free to contact us at info@publiwrite.com.`;
    }
  }
};

export const getCheckOrdersRepeatOptions = (
  environment: EnvironmentType,
): RepeatOptions => {
  switch (environment) {
    case EnvironmentType.development:
    case EnvironmentType.staging:
      return { pattern: '*/5 * * * *' }; // every 5 minutes
    case EnvironmentType.production:
      return { pattern: '0 */6 * * *' }; // every 6 hours
    default:
      return { pattern: '*/1 * * * *' }; // every minute
  }
};
