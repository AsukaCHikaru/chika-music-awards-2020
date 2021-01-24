import * as webpack from "webpack";
import { resolve } from "path";
import { VueLoaderPlugin } from "vue-loader";

const config: webpack.Configuration = {
  mode: "development",
  entry: "./src/index.ts",
  context: resolve(__dirname),
  output: {
    filename: "main.js",
    path: resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.json",
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".vue", ".json"],
  },
  plugins: [new VueLoaderPlugin()],
  devtool: "source-map",
  devServer: {
    contentBase: resolve(__dirname, "public"),
    port: 3000,
    open: true,
  },
};

export default config;
