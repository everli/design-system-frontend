import EdsIcon from "./EdsIcon.vue"

export default {
  title: "Icons/Icon",
}

export const Default = () => ({
  components: { EdsIcon },
  template: "<div><EdsIcon icon='logo-payment-amex' /></div>",
})

Default.story = {
  name: "Icon",
}
