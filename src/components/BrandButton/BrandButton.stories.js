import EverliBrandButton from "./BrandButton.vue"

export default {
  title: "Components/BrandButton",
  parameters: {
    layout: "fullscreen",
  },
}

export const BrandButton = () => ({
  components: { EverliBrandButton },
  data() {
    return {
      variant: "facebook",
    }
  },
  computed: {
    icon() {
      return this.variant === "blik"
        ? "logo-payment-blik"
        : `logo-ext-${this.variant}`
    },
  },
  template: `<div style="padding: 16px; font-family: 'Fira Sans'; max-width: 600px" class="eds-app">
  <h2 style="margin-bottom: 20px">Brand button</h2>
  <div style="margin: 20px 0">
  <p style="margin-bottom:5px">Select Brand variant</p>
  <select v-model="variant" style="border: 1px solid #ddd; border-radius: 3px; padding: 5px 10px">
    <option value="facebook">Facebook</option>
    <option value="google">Google</option>
    <option value="apple">Apple</option>
    <option value="blik">Blik</option>
  </select>
  </div>
  <p>Style</p>
  <div style="display: flex;align-items: center">
    <EverliBrandButton :variant="variant" :icon="icon"  style="margin: 16px 16px 16px 0" class="eds-button-fill">Fill</EverliBrandButton>
    <EverliBrandButton :variant="variant" :icon="icon"  style="margin: 16px 16px 16px 0" class="eds-button-outline">Outline</EverliBrandButton>
  </div>
  <p>Size</p>
  <div style="display: flex;align-items: center">
    <EverliBrandButton :variant="variant" :icon="icon"  style="margin: 16px 16px 16px 0" class="eds-button-large">Large</EverliBrandButton>
    <EverliBrandButton :variant="variant" :icon="icon" style="margin: 16px 16px 16px 0">Default</EverliBrandButton>
  </div>
  <p>Content variant</p>
  <div style="display: flex;align-items: center">
  <EverliBrandButton :variant="variant" :icon="icon" style="margin: 16px 16px 16px 0" class="eds-button-small"></EverliBrandButton>
    <EverliBrandButton :variant="variant" :icon="icon" style="margin: 16px 16px 16px 0" class="eds-button-large"></EverliBrandButton>
    <EverliBrandButton :variant="variant" :icon="icon"  style="margin: 16px 16px 16px 0" class="eds-button-outline"></EverliBrandButton>
  </div>
  <p>Disabled</p>
  <div style="display: flex;align-items: center">
  <EverliBrandButton :variant="variant" :icon="icon" disabled style="margin: 16px 16px 16px 0">Disabled</EverliBrandButton>
  </div>
  
  `,
})
