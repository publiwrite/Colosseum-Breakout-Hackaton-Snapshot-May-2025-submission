import { Redirect } from '@pw-fe-monorepo/ui';

export default function ExploreLicences() {
  return (
    <Redirect
      url={`${process.env.NEXT_PUBLIC_RIGHTS_PROJECT_URL}/explore/licenses`}
    />
  );
}
