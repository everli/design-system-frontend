# design-system-frontend
Everli Design System for the frontend

## Installation
Add this script to package.json for the node_modules installation 
`"preinstall": "npx npm-force-resolutions"`


``` bash
npm install everli/design-system-frontend#v0.0.1
```

# Usage

### Global

Install Everli Design System globally:

``` js
import Vue from 'vue';
import EverliDesignSystem from 'everli-design-system-frontend';
Vue.use(EverliDesignSystem);
```
This will make all Everli Design System components available to all components within your Vue app.

### Local

Include the component directly into your component using import:

``` js
import { EverliButton } from 'everli-design-system-frontend'
export default {
  ...
  components: {
    EverliButton
  }
  ...
};
```
### Use styles only with static HTML or in non-Vue environment

``` js
@import "everli-design-system-frontend/dist/library/everli.css";
```

---
# Theming

Design System is using the Everli theme by default (see more here https://zeroheight.com/54055050e/p/35100d-colors/b/23f4cb). Theme consists style rules which are defined by Design Tokens. These tokens are simple SCSS/CSS variables - which allows to overwrite any default value with custom one. 

Be default - importing Design System (as stated in #Usage section) allows you to use Design System components as-is. If you want to customize Design System you can use Design Tokens to change the colors and other exposed theme elements. 

## Modes - light and dark
Design system themes supports light and dark mode. Each component includes dark-mode definitions which can be turned on by passing `everli-dark-mode` class to the application wrapper HTML tag. 

## Using design tokens in action
To be able to use design tokens you will have to manually import and build the main sass file.

First, if you want to target particular component, import it directly as Vue component 
```js
import EverliButton from 'everli-design-system-frontend/src/components/Button/Button'
```

Import `main.scss` file as a part of the app bundler

Nuxt config
```js
styleResources: {
  scss: [
    '~assets/custom_app_variables.scss',
    '~node_modules/everli-design-system-frontend/src/styles/main.scss'
  ]
}
```

Vue cli config
```js
pluginOptions: {
  'style-resources-loader': {
    preProcessor: 'scss',
    patterns: [
      path.resolve(__dirname, `./assets/custom_app_variables.scss`),
      path.resolve(
        __dirname,
        './node_modules/everli-design-system-frontend/src/styles/main.scss'
      )
    ]
  }
```

Storybook
```js
use: ['style-loader', 'css-loader', 'sass-loader', {
  loader: 'style-resources-loader',
  options: {
      patterns: [
        path.resolve(__dirname, `../assets/custom_app_variables.scss`),
        path.resolve(__dirname, '../node_modules/everli-design-system-frontend/src/styles/main.scss')
      ]
  }
```

This way, you will be able to overwrite variables values
```css
$eds-button-primary-background-default: blue; // all primary buttons will now how blue background color
$eds-button-primary-background-hover: red;
```

### Custom imports

Design System contains resources (fonts) and some browser reset (reset.css) declararions. By default - they are not availble via main import and they have to be manually imported. This is due to the fact that Everli Design System will be used in currently working apps which already have the fonts/reset definitions.

Fonts

```css
@font-face {
  font-family: 'Isidora';
  font-weight: 600;
  src: url('node_modules/everli-design-system-frontend/src/static/fonts/isidora/isidora-soft-semibold.eot'); /* IE9 Compat Modes */
  src: url('node_modules/everli-design-system-frontend/src/static/fonts/isidora/isidora-soft-semibold.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('node_modules/everli-design-system-frontend/src/static/fonts/isidora/isidora-soft-semibold.woff2') format('woff2'), /* Super Modern Browsers */
  url('node_modules/everli-design-system-frontend/src/static/fonts/isidora/isidora-soft-semibold.woff') format('woff') /* Pretty Modern Browsers */
}

@font-face {
  font-family: 'Isidora';
  font-weight: 700;
  src: url('node_modules/everli-design-system-frontend/src/static/fonts/isidora/isidora-soft-bold.eot'); /* IE9 Compat Modes */
  src: url('node_modules/everli-design-system-frontend/src/static/fonts/isidora/isidora-soft-bold.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('node_modules/everli-design-system-frontend/src/static/fonts/isidora/isidora-soft-bold.woff2') format('woff2'), /* Super Modern Browsers */
  url('node_modules/everli-design-system-frontend/src/static/fonts/isidora/isidora-soft-bold.woff') format('woff') /* Pretty Modern Browsers */
}
```

Reset.css

```css
@import './node_modules/everli-design-system-frontend/src/styles/reset.scss'
```
