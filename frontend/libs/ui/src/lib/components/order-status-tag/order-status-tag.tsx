import { OrderStatus } from '@pw-fe-monorepo/configs';
import { twMerge } from 'tailwind-merge';

export const OrderStatusTag = ({ tag }: { tag: `${OrderStatus}` }) => {
  const successClasses =
    'border-green-500 bg-green-100 dark:bg-green-200 text-green-900';
  const tags = {
    [OrderStatus.Completed]: {
      classes: successClasses,
      text: 'Completed',
    },
    [OrderStatus.Paid]: {
      classes: successClasses,
      text: 'Completed',
    },
    [OrderStatus.BalanceCalculated]: {
      classes: successClasses,
      text: 'Completed',
    },
    [OrderStatus.PartiallyRefunded]: {
      classes:
        'border-orange-500 bg-orange-100 dark:bg-orange-200 text-orange-900',
      text: 'Partially refunded',
    },
    [OrderStatus.PendingTransaction]: {
      classes: 'border-blue-500 bg-blue-100 dark:bg-blue-200 text-blue-900',
      text: 'Pending',
    },
    [OrderStatus.Open]: {
      classes:
        'border-orange-500 bg-orange-100 dark:bg-orange-200 text-orange-900',
      text: 'Draft',
    },
    [OrderStatus.PaymentFailed]: {
      classes: 'border-red-500 bg-red-100 dark:bg-red-200 text-red-900',
      text: 'Payment failed',
    },
  };

  return (
    <span
      className={twMerge(
        'rounded-md px-2 py-1',
        'text-xs lg:text-base border dark:border-transparent',
        tags[tag].classes,
      )}
    >
      {tags[tag].text}
    </span>
  );
};
