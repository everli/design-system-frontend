import Button from "./Button.vue"

export default {
  title: "Atoms/Button",
}

export const Default = () => ({
  components: { Button },
  template: `<div>
  <Button style="margin: 16px 0">Default</Button>
  <Button style="margin: 16px 0" class="small">Small</Button>
  <Button style="margin: 16px 0" class="large">Large</Button>
  <Button style="margin: 16px 0" disabled>Disabled</Button>
  <Button style="margin: 16px 0" class="secondary">Secondary</Button>
  <Button style="margin: 16px 0" class="ghost">Ghost</Button>
  </div>`,
})
