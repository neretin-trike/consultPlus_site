var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: ['webpack-dev-server/client', 'webpack/hot/dev-server.js', './app/js/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'app/js'),
  },
  module: {
    loaders: [
        {
            test : /\.styl$/, 
            // use: ExtractTextPlugin.extract(
            //     {
            //         fallback: 'style-loader',
            //         use: [
            //             {
            //                 loader: 'css-loader',
            //                 options: {
            //                     url: false,
            //                     minimize: false,
            //                     sourceMap: false
            //                 }
            //             }, 
            //             {
            //                 loader: 'stylus-loader',
            //                 options: {
            //                     sourceMap: false
            //                 }
            //             }
            //           ]
            //     })
            loader: 'style-loader!css-loader!stylus-loader?resolve url'
        }
      ]
    },
  plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('../css/style.css')
  ],
  devServer: {
    port: 10000,
    // contentBase: __dirname + '/app',
    hot: true,
  },
}
