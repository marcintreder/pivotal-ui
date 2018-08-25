const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    compress: true
  },
  module: {
    rules: [
      {
        use: ['babel-loader'],
        test: /\.js?$/,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        use: ['file-loader'],
        test: /\.(jpe?g|png|gif)$/i
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              emitFile: true,
              outputPath: './fonts/'
            }
          }
        ]
      },
      {
        use: ['raw-loader'],
        test: /\.svg$/
      }
    ]
  },
  plugins: [new ExtractTextPlugin({ filename: 'styles.css' })]
};
