# design-system-frontend
Design System for the frontend

## How to start

### Use in component

```
import { EverliButton } from 'everli-design-system-frontend'

component: {
  EverliButton
}
```

### Use as plugin

```
import Vue from 'vue'
import EverliDesignSystem from 'everli-design-system-frontend'
Vue.use(EverliDesignSystem)

<everli-button>Submit</everli-button>
```

### Use styles only

```
@import "everli-design-system-frontend/dist/library/everli.css";
```

