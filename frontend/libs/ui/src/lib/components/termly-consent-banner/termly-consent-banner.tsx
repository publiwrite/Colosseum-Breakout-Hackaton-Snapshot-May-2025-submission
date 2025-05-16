'use client';

import Script from 'next/script';
import { useMemo } from 'react';

type TermlyEventCallback = (data: { [key: string]: string }) => void;

declare global {
  interface Window {
    Termly?: {
      initialize: () => void;
      on: (event: string, callback: TermlyEventCallback) => void;
      off: (event: string, callback: TermlyEventCallback) => void;
    };
  }
}

const SCRIPT_SRC_BASE = 'https://app.termly.io';
const TERMLY_WEBSITE_UUID = 'dd2764a9-4aa1-429e-9975-41284f57988c';
const TERMLY_SNIPPET_ELEMENT_ID = 'termly-code-snippet-support';

export const TermlyConsentBanner = ({
  masterConsentsOrigin,
}: {
  masterConsentsOrigin?: string;
}) => {
  const scriptSrc = useMemo(() => {
    const src = new URL(SCRIPT_SRC_BASE);
    src.pathname = `/resource-blocker/${TERMLY_WEBSITE_UUID}`;

    // Autoblocker off
    src.searchParams.set('autoBlock', 'off');

    // Subdomains will work as one peace with this
    if (masterConsentsOrigin) {
      // Manually append the parameter to prevent URL encoding
      return `${src.toString()}&masterConsentsOrigin=${masterConsentsOrigin}`;
    }

    return src.toString();
  }, [masterConsentsOrigin]);

  /**
   * BUG FIX
   * termly does not properly work with multiple sub-domains
   * hence we automatically hide the banner, if consent haven't been given
   * then we show it to user to prevent flicker at the first sight.
   */
  function onTermlyLoaded() {
    const handleConsent = (data: { [key: string]: string }) => {
      const termlyElement = document.getElementById(TERMLY_SNIPPET_ELEMENT_ID);

      if (!data.consentState && termlyElement) {
        termlyElement.style.display = 'block';
      }
    };

    window.Termly?.on('consent', handleConsent);

    return () => {
      window.Termly?.off('consent', handleConsent);
    };
  }

  return (
    <>
      <style jsx global>{`
        #termly-code-snippet-support {
          display: none;
        }

        .dark {
          #termly-code-snippet-support {
            > div > div {
              --termly-theme-background-color: #000 !important;
              --termly-theme-button-background-color: #fff !important;
              --termly-theme-button-text-color: #000 !important;
              --termly-theme-color: #fff !important;
            }

            div[aria-label='Cookie Consent Preferences'] {
              background: black !important;
              color: white !important;

              p,
              h1,
              span,
              label,
              h2,
              .termly-styles-body-d84321 {
                color: white !important;
              }

              svg g {
                fill: white !important;
              }

              div.termly-styles-root-be197e {
                background: black !important;

                button {
                  background: white !important;
                  color: black !important;
                }
              }
            }

            div[aria-label='Cookie Consent Prompt'],
            div[aria-label='Cookie Details'] {
              background: black !important;
              color: white !important;

              div > div > div {
                background: transparent !important;

                button:not([data-tid='banner-accept']) {
                  background: black !important;
                  color: white !important;
                  border: 1px solid white !important;
                }

                button[data-tid='banner-accept'] {
                  background: white !important;
                  color: black !important;
                }
              }
            }
          }
        }
      `}</style>
      <Script
        id="termly-consent-banner"
        src={scriptSrc}
        onLoad={onTermlyLoaded}
        // strategy="beforeInteractive"
      />
    </>
  );
};
