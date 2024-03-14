const path = require("path");
module.exports = {
  entry: "./src/index.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      ,
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
      { test: /\.(png|jpeg|jpg|svg)$/, type: "asset/resource" },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    static: { directory: path.join(__dirname, "public") },
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
};
