const path = require("path")
module.exports = {
  configureWebpack: {
    output: {
      libraryExport: "default",
    },
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/styles/main.scss")],
    },
  },
}
