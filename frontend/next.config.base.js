const withSentryConfigOptions = {
  org: 'amaranthine-labs-ltd',
  project: 'pw-web',
  silent: true,
  telemetry: false,
  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,
  // Automatically annotate React components to show their full name in breadcrumbs and session replay
  reactComponentAnnotation: {
    enabled: true,
  },
  // Hides source maps from generated client bundles
  hideSourceMaps: true,
  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,
};

// Enable only if NOT local
const optimizePackageImports =
  process.env.NEXT_PUBLIC_ENVIRONMENT !== 'local'
    ? [
        '@pw-fe-monorepo/ui',
        '@pw-fe-monorepo/ui/server',
        '@pw-fe-monorepo/configs',
        '@pw-fe-monorepo/configs/server',
      ]
    : undefined;

module.exports = {
  withSentryConfigOptions,
  optimizePackageImports,
};
