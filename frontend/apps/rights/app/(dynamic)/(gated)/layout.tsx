import { getServerSession } from '@pw-fe-monorepo/configs/server';
import { Redirect } from '@pw-fe-monorepo/ui';

export default async function GatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session) {
    return <Redirect url={`${process.env.NEXT_PUBLIC_RIGHTS_PROJECT_URL}`} />;
  }

  return <>{children}</>;
}
