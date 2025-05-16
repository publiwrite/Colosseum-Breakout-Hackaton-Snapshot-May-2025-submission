import {
  UserFragmentFragment,
  getUserTitleHeading,
} from '@pw-fe-monorepo/configs';
import { VariantProps } from 'class-variance-authority';
import { avatarVariants } from '../../primitives/avatar';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../primitives/tooltip';
import { UserAvatarWithColor } from '../user-avatar-with-color/user-avatar-with-color';

export const StackedCollaborators = ({
  avatarSize = 'medium',
  users,
}: {
  avatarSize?: VariantProps<typeof avatarVariants>['size'];
  users: UserFragmentFragment[];
}) => {
  return (
    <div className="flex items-center -space-x-4">
      {users?.map((user) => (
        <div className="inline-flex" key={user?.id}>
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger>
                <UserAvatarWithColor size={avatarSize} user={user} />
              </TooltipTrigger>
              <TooltipContent align="center">
                <p className="text-center">{getUserTitleHeading(user)}</p>
                <p className="text-xs text-center">{user?.profile?.email}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      ))}
    </div>
  );
};
