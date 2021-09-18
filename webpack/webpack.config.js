const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// https://webpack.kr/configuration/

module.exports = {
  mode: "development",
  entry: {
    index: "./source/index.js",
    about: "./source/about.js",
  }, // 시작파일
  output: {
    path: path.resolve(__dirname, "public"), // 최종 bundle 파일경로
    filename: "[name]_bundle.js", // 각각의 entry [name] (hash, id, chunkhash ....)
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // 'style-loader'가 먼저 오고 그 뒤에 'css-loader'가 따라오게
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./source/index.html",
      filename: "./index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./source/about.html",
      filename: "./about.html",
      chunks: ["about"],
    }),
  ],
};
