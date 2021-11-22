import * as evComponents from "./components"

const install = (Vue) => {
  // Use Components
  Object.values(evComponents).forEach((evComponent) => {
    Vue.use(evComponent)
  })
}

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue)
}

export default install

export { default as evButton } from "./components/Button"
