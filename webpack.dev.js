import { merge } from 'webpack-merge';
import common from './webpack.common.js';

export default merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    historyApiFallback: true,
    hot: true,
    port: 3000,
    open: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    compress: true,
  },
  stats: {
    errorDetails: true,
  },
});
