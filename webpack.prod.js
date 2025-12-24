import { merge } from 'webpack-merge';
import common from './webpack.common.js';
import TerserPlugin from 'terser-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';

export default merge(common, {
  mode: 'production',
  devtool: 'source-map',

  output: {
    filename: '[name].[contenthash:8].js',
    chunkFilename: '[name].[contenthash:8].chunk.js',
    assetModuleFilename: 'assets/[name].[contenthash:8][ext]',
    clean: true,
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],

    moduleIds: 'deterministic',
    runtimeChunk: 'single',

    splitChunks: {
      chunks: 'all',
      maxSize: 244000,
    },
  },

  plugins: [
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
});
