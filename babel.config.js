module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: ["last 2 versions", "IE 11"],
        },
        useBuiltIns: "usage",
      },
    ],
    "@vue/cli-plugin-babel/preset",
  ],
  plugins: [
    ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-proposal-private-methods", { loose: true }],
  ],
}
