const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
 mode: 'development',
 entry: './src/index.ts',
 output: {
  filename: 'main.js',
  path: path.resolve(__dirname, 'dist'),
 },
 resolve: {
  extensions: ['.ts', '.js'],
 },
 module: {
  rules: [
    {
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
      type: 'asset/resource',
    },
  ],
 },
    devServer: {
        static: path.join(__dirname, 'dist'), // This is the folder that will be served
        compress: true, // Enable gzip compression
        port: 8080, // Port number
        hot: true, // Enable hot module replacement
    },
 plugins: [
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css',
  }),
 ],
};

