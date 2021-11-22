const path = require("path")
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set("@", path.resolve(__dirname, "./src"))
  },
  configureWebpack: {
    output: {
      libraryExport: "default",
    },
  },
  css: {
    extract: false,
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/styles/main.scss")],
    },
  },
}
