import { NavLink } from '@pw-fe-monorepo/ui';
import { SellRights } from './sell-rights';

export const Links = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-6">
      <NavLink href="/explore/licenses">Marketplace</NavLink>

      <SellRights />

      <NavLink
        href="https://helpdesk.publiwrite.com/en/category/licensing-1wumtyn/"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        Helpdesk
      </NavLink>
    </div>
  );
};
