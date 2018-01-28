var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: ['./index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'app/js'),
    publicPath: '/app/js/'
  },
  module: {
    rules: [
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
  devServer:{
  }
}
