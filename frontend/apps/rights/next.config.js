//@ts-check
const { composePlugins, withNx } = require('@nx/next');
const {
  optimizePackageImports,
  withSentryConfigOptions,
} = require('../../next.config.base');
const { withSentryConfig } = require('@sentry/nextjs');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  experimental: {
    instrumentationHook: process.env.NEXT_PUBLIC_ENVIRONMENT !== 'local',
    optimizePackageImports,
  },
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'cdn.development.publiwrite.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.stage.publiwrite.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.publiwrite.com',
      },
    ],
  },
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  withBundleAnalyzer,
  // @ts-ignore
  (config) => withSentryConfig(config, withSentryConfigOptions),
];

module.exports = composePlugins(...plugins)(nextConfig);
