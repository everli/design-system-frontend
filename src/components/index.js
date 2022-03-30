// @ts-nocheck
import EverliButton from "./Button/Button.vue"

const install = function (Vue) {
  Vue.component("eds-button", EverliButton)
}

export default {
  install,
}

export { EverliButton }
