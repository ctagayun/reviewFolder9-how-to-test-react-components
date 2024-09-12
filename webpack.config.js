const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    static: path.resolve(__dirname, './dist'),
    hot: true,
  },
};

// Next, let's inform Webpack in our webpack.config.js file about files with 
// the JSX extension to make sure that they run through the transpiling step as well:
// Add: 
//     test: /\.(js|jsx)$/,
//      extensions: ['*', '.js', '.jsx'],

// plugins: [new webpack.HotModuleReplacementPlugin()],
// devServer: {
//   static: path.resolve(__dirname, './dist'),
//   hot: true,