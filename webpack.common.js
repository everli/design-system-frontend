const path = require("path")
const webpack = require("webpack")
const npmCfg = require("./package.json")
const projectRoot = path.resolve(__dirname, "./")

const { VueLoaderPlugin } = require("vue-loader")

const banner = [
  "everli-design-system v" + npmCfg.version,
  "(c) " + new Date().getFullYear() + " " + npmCfg.author,
  npmCfg.homepage,
].join("\n")

module.exports = {
  entry: ["./src/components/"],
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "everli-design-system.js",
    library: "EverliDesignSystem",
    libraryTarget: "umd",
  },
  resolve: {
    extensions: [".js", ".vue"],
    modules: [path.join(__dirname, "node_modules")],
    alias: {
      vue: "@vue/runtime-dom",
    },
  },
  resolveLoader: {
    modules: [path.join(__dirname, "node_modules")],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                useBuiltIns: "usage",
              },
            ],
          ],
          comments: false,
        },
        include: projectRoot,
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "sass-loader",
          },
          {
            loader: "style-resources-loader",
            options: {
              patterns: [path.resolve(__dirname, "./src/styles/main.scss")],
            },
          },
        ],
      },
    ],
  },
  plugins: [new webpack.BannerPlugin(banner), new VueLoaderPlugin()],
}
