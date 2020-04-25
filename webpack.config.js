const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const srcDir = path.resolve(__dirname, 'src');
const distDir = path.resolve(__dirname, 'dist');

module.exports = {
  entry: {
    content: path.join(srcDir, 'content'),
    settings: path.join(srcDir, 'settings'),
    background: path.join(srcDir, 'background')
  },
  output: {
    path: distDir,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(srcDir, 'settings', 'index.html'),
      filename: path.join(distDir, 'settings.html'),
      inject: false
    }),
  ]
};
