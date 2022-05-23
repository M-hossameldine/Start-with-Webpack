// require the default path module to access the file location and make changes to the file location
const path = require('path');
// to generate an HTML file to be used for serving bundled javascript file/files
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //This property defines where the application starts (root of dependency graph)
  entry: './src/index.js',

  //This property defines the file path and the file name which will be used for deploying the bundled file
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },

  //Setup loaders
  // This to specify what webpack should do for a specific type for file
  // Webpack only understands JavaScript and JSON, if there is any onther languages in your project, this would be the place to specify what to do with that new language
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  // Setup plugin to use a HTML file for serving bundled js files
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
