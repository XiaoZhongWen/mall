/*
 * @Author: 肖仲文 xiaozhongwen@mye.hk
 * @Date: 2023-03-13 16:28:01
 * @LastEditors: 肖仲文 xiaozhongwen@mye.hk
 * @LastEditTime: 2023-03-15 09:28:57
 * @FilePath: /mall/src/webpack.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  mode: "development",
  entry: {
    index: "./src/pages/index/index.js",
  },
  output: {
    path: resolve("dist"),
    filename: "js/[name].js",
  },
  devtool: "cheap-module-eval-source-map",
  resolve: {
    extensions: [".js"],
    alias: {
      api: resolve("src/api"),
      fonts: resolve("src/assets/fonts"),
      images: resolve("src/assets/images"),
      styles: resolve("src/assets/styles"),
      components: resolve("src/components"),
      pages: resolve("src/pages"),
    },
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.art$/,
        loader: "art-template-loader",
      },

      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "images/[name].[ext]",
          esModule: false,
        },
      },

      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "fonts/[name].[ext]",
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/pages/index/index.art",
    }),
  ],
};
