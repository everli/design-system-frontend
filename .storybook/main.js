module.exports = {
  stories: [
    "../src/**/**/*.stories.js"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: '@storybook/preset-scss',
      options: {
        sassLoaderOptions: {
          additionalData: "@import './src/styles/setup.scss'; @import './src/styles/main.scss';",
        }
      }
    }
  ],
  features: {
    postcss: false,
  }
}
