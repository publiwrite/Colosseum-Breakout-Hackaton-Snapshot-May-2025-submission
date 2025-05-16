import { ReviewStatus } from '@pw-fe-monorepo/configs';
import { Tag } from '../tag';

export const ReviewStatusTag = ({ tag }: { tag: `${ReviewStatus}` }) => {
  const tags: Record<
    ReviewStatus,
    { color: 'green' | 'blue' | 'orange' | 'red'; text: string }
  > = {
    [ReviewStatus.Pending]: {
      color: 'orange',
      text: 'Pending approval',
    },
    [ReviewStatus.Rejected]: {
      color: 'red',
      text: 'Requires changes',
    },
    [ReviewStatus.Approved]: {
      color: 'green',
      text: 'Approved',
    },
  };

  return <Tag color={tags[tag].color}>{tags[tag].text}</Tag>;
};
