const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const ESLintPlugin = require("eslint-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin")


module.exports = merge(common,{
    mode : "development",
    plugins : [new ESLintPlugin],
    module : {
      rules: [
        {
          test: /\.js(js)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    },
    resolve: {
      extensions: ['*','.js']
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin({
        test: /\.js(\?.*)?$/i,
      })]
    }
});