const path = require('path');

module.exports = {
  mode: 'none',
  devtool: 'source-map',
  entry: './src/index.tsx',
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  output: {
    path: path.resolve('public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.ts$|tsx/,
        use: {
          loader: 'babel-loader',
        },
        exclude: '/node_modules/',
      },
    ],
  },
};
