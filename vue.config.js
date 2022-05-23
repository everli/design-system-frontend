const path = require("path")

module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [
        !process.env.LIBRARY
          ? path.resolve(__dirname, "./src/styles/setup.scss")
          : "",
        path.resolve(__dirname, "./src/styles/main.scss"),
      ],
      resolveUrl: false,
    },
  },
  css: {
    extract: process.env.LIBRARY ? true : false,
  },
}
