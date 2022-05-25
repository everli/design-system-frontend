const path = require("path")

module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [
        path.resolve(__dirname, "./src/styles/variables.scss"),
        !process.env.LIBRARY
          ? path.resolve(__dirname, "./src/styles/setup.scss")
          : "",
      ],
      resolveUrl: false,
    },
  },
  css: {
    extract: process.env.LIBRARY ? true : false,
  },
}
