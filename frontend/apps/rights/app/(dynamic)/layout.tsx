import { titleGenerator } from '@pw-fe-monorepo/configs';
import {
  commonViewport,
  getCurrentUserServerAction,
  getServerSession,
} from '@pw-fe-monorepo/configs/server';
import {
  OfflineBanner,
  SignOut,
  TermlyConsentBanner,
} from '@pw-fe-monorepo/ui';
import { GlobalProviders } from '@pw-fe-monorepo/ui/server';
import { Footer } from '@rights/lib/components/footer';
import { Header } from '@rights/lib/components/header';
import { RightsProviders } from '@rights/lib/providers/providers';
import { layoutMetadata } from '@rights/lib/utils/layout-metadata';
import { Metadata } from 'next';

export const metadata = layoutMetadata;

export const viewport = commonViewport;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (session?.error === 'RefreshAccessTokenError') {
    return <SignOut />;
  }

  const user = await getCurrentUserServerAction();

  return (
    <GlobalProviders initialSession={session} initialCartItems={[]} user={user}>
      <RightsProviders>
        <OfflineBanner />
        <div className="sticky top-0 z-50">
          <Header />
        </div>

        <main className="workspace-body__main -mb-[var(--footer-top-margin)]">
          {children}
        </main>

        <Footer />
        <TermlyConsentBanner />
      </RightsProviders>
    </GlobalProviders>
  );
}
