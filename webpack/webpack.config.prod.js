const path = require("path");

// https://webpack.kr/configuration/

module.exports = {
  mode: "production",
  entry: "./source/index.js", // 시작파일
  output: {
    path: path.resolve(__dirname, "public"), // 최종 bundle 파일경로
    filename: "index_bundle.js",
  },
};
