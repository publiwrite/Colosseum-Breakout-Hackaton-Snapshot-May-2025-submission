import { dmSans } from '@pw-fe-monorepo/ui/server';
import '../global.css';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.className} workspace-body`}>{children}</body>
    </html>
  );
}
