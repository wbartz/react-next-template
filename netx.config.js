const withPlugins = require('next-composer-plugins');
const optimizedImages = require('next-optimized-images');
const withImages = require('next-images');
const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withPlugins([
  [
    withImages({
      esModule: true,
    }),
  ],
  optimizedImages,
  nextEnv,
  dotenvLoad,
  [withBundleAnalyzer({})],
]);
