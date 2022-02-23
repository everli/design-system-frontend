const path = require("path")

module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [
        path.resolve(__dirname, "./src/styles/reset.scss"),
        path.resolve(__dirname, "./src/styles/main.scss"),
        path.resolve(__dirname, "./src/styles/settings/fonts.scss"),
      ],
    },
  },
  css: {
    extract: process.env.MODE ? true : false,
  },
}
