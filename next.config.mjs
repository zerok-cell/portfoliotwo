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
        },
        ".scss":{
          loaders:['sass-loader'],



          as:'*.css'
        },


      }

    },
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
  webpack: (config) => { config.resolve.alias['@styles'] = path.resolve(__dirname, './styles'); config.resolve.alias['@components'] = path.resolve(__dirname, './components'); return config; },

});
