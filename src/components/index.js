import EdsButton from "./Button/EdsButton.vue"
import EdsBrandButton from "./BrandButton/EdsBrandButton.vue"
import EdsIcon from "./Icon/EdsIcon.vue"

const install = function (Vue) {
  Vue.component("eds-button", EdsButton)
  Vue.component("eds-brand-button", EdsBrandButton)
  Vue.component("eds-icon", EdsIcon)
}

export default {
  install,
}

export { EdsButton, EdsBrandButton, EdsIcon }
