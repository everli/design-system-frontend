import Vue from "vue"
import EverliButton from "@/components/Button/Button.vue"

const EverliDesignSystem = {
  EverliButton,
}

const requireComponent = require.context("./", true, /[A-Z]\w+\.(vue)$/)
EverliDesignSystem.install = () =>
  requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName)
    const component = componentConfig.default || componentConfig

    EverliDesignSystem[component.name] = component

    Vue.component(component.name, component)
  })

// Automatically install Keen UI if Vue is available globally
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(EverliDesignSystem)
}

export default EverliDesignSystem

export { EverliButton }
