import { commonViewport } from '@pw-fe-monorepo/configs/server';
import { OfflineBanner, TermlyConsentBanner } from '@pw-fe-monorepo/ui';
import { GlobalProviders } from '@pw-fe-monorepo/ui/server';
import { Footer } from '@rights/lib/components/footer';
import { Header } from '@rights/lib/components/header';
import { layoutMetadata } from '@rights/lib/utils/layout-metadata';

export const viewport = commonViewport;
export const dynamic = 'force-static';
export const revalidate = 3600;

export const metadata = layoutMetadata;

export default async function StaticRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlobalProviders initialSession={null} initialCartItems={[]}>
      <OfflineBanner />
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      <main className="workspace-body__main -mb-[var(--footer-top-margin)]">
        {children}
      </main>

      <Footer />
      <TermlyConsentBanner />
    </GlobalProviders>
  );
}
