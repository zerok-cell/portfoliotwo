import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer({
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    turbo:{
      moduleIdStrategy: 'deterministic',
      rules:{
        ".svg":{
          loaders:['@svgr/webpack'],
          as:"*.js"
        }
      }
    },
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
});
