# design-system-frontend
Everli Design System for the frontend

## Installation

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

