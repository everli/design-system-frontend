import Vue from "vue"

const Components = {}

const requireComponent = require.context("./", true, /[A-Z]\w+\.(vue|js)$/)

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName)
  const component = componentConfig.default || componentConfig

  Components[component.name] = component

  Vue.component(component.name, component)
})

export default Components
