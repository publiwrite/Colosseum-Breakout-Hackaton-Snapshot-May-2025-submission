import {
  PUBLISHING_STATUS_COLORS,
  PublishingStatus,
} from '@pw-fe-monorepo/configs';
import { twMerge } from 'tailwind-merge';

export const PublishingStatusTag = ({
  tag,
}: {
  tag: `${PublishingStatus}`;
}) => {
  const tags = {
    [PublishingStatus.Approved]: {
      classes: PUBLISHING_STATUS_COLORS.APPROVED,
      text: 'Approved',
    },
    [PublishingStatus.Published]: {
      classes: PUBLISHING_STATUS_COLORS.PUBLISHED,
      text: 'Published',
    },
    [PublishingStatus.Pending]: {
      classes: PUBLISHING_STATUS_COLORS.PENDING,
      text: 'Pending approval',
    },
    [PublishingStatus.Rejected]: {
      classes: PUBLISHING_STATUS_COLORS.REJECTED,
      text: 'Requires changes',
    },
    [PublishingStatus.Processing]: {
      classes: PUBLISHING_STATUS_COLORS.PROCESSING,
      text: 'Processing',
    },
    [PublishingStatus.Draft]: {
      classes: PUBLISHING_STATUS_COLORS.DRAFT,
      text: 'Draft',
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
