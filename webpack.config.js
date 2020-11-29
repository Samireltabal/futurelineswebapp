const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    teacher: './src/js/teacher.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    // new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    //  new HtmlWebpackPlugin({
    //     title: 'Development',
    //  }),
    //  new HtmlWebpackPlugin({
    //   filename: 'teacher.html',
    //   title: 'Custom template using Handlebars',
    //   template: './src/pages/teacher.html'
    // })
   ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader','css-loader','sass-loader']
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'fonts',
        },
      },
    ],
  },
};