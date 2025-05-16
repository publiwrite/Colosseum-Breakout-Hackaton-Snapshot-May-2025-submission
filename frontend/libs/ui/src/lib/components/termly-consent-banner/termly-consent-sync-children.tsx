'use client';

import Script from 'next/script';

const marketplaceProjectUrl = new URL(
  `${process.env.NEXT_PUBLIC_MARKETPLACE_PROJECT_URL}`,
);
const marketplaceProjectUrlHost = marketplaceProjectUrl.host;

export const TermlyConsentSyncChildren = () => {
  return (
    <>
      <Script
        id="termly-consent-sync-children"
        strategy="beforeInteractive"
        data-termly-config="true"
      >
        {`
          window.TERMLY_CUSTOM_BLOCKING_MAP = {
            '${marketplaceProjectUrlHost}': 'essential',
          };
        `}
      </Script>
      <iframe
        src={`${process.env.NEXT_PUBLIC_MARKETPLACE_PROJECT_URL}/termly-consent-sync`}
        style={{ display: 'none' }}
      ></iframe>
    </>
  );
};
