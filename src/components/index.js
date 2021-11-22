import Vue from "vue"
import Button from "@/components/Button/Button.vue"

const EverliDesignSystem = {
  Button,
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
  window.Vue.use(EverliDesignSystem, window.EverliDesignSystemConfig)
}

export default EverliDesignSystem

export { Button }
