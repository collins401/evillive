
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var vue = require("vue-loader");

module.exports = {
    entry: './app/main.js',
    output: {
        filename: 'app.js'
    },
     watch: true,
       module: {
    loaders: [
        {
           test: /\.vue$/, loader: vue.withLoaders({
             css: ExtractTextPlugin.extract("css"),
             stylus: ExtractTextPlugin.extract("css!stylus")
           })
         },
      //{ test: /\.css$/, loader: "style-loader!css-loader" }, // use ! to chain loaders
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }, // inline base64 URLs for <=8k images, direct URLs for the rest
      { test: /\.ttf$/,    loader: "file?mimetype=application/octet-stream" },
      { test: /\.eot$/,    loader: "file" },
      { test: /\.svg$/,    loader: "file?mimetype=image/svg+xml" },
      { test: /\.woff$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2$/, loader: "url-loader?limit=10000&mimetype=application/font-woff2" }
    ]
  },
};

