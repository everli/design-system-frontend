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
          additionalData: "@import './src/styles/variables.scss'; @import './src/styles/setup.scss';",
        }
      }
    }
  ],
  features: {
    postcss: false,
  }
}
