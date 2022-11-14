const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry : "./src/app.js",
    output : {
        globalObject: "this",
        path : path.resolve(__dirname,"dist"),
        filename : "[name].js"
    },
    module : {
        rules : [
            {
                test : /\.css$/,
                use : [
                    {
                        loader : "style-loader"
                    },
                    {
                        loader : "css-loader"
                    }
                ]
            },
            {
                test : /\.(png|svg|jpg|jpeg|gif)$/i,
                use : [
                    {
                        loader : "file-loader",
                        options : {
                            name : '[name].[ext]',
                            outputPath : 'assets/images'
                        },

                    }
                ]
            }
        ]
    },
    plugins : [
        new htmlWebpackPlugin({
            template : "./src/index.html",
            filename : "index.html"
        })
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
}