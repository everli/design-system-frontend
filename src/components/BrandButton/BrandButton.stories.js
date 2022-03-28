import EverliBrandButton from "./BrandButton.vue"

export default {
  title: "Components/BrandButton",
  parameters: {
    layout: "fullscreen",
  },
}

export const Facebook = () => ({
  components: { EverliBrandButton },
  template: `<div style="padding: 16px; font-family: 'Fira Sans'; max-width: 600px" class="eds-app">
  <h2 style="margin-bottom: 20px">Primary button</h2>
  <p>Sizes</p>
  <div style="display: flex;align-items: center">
    <EverliBrandButton variant="facebook" style="margin: 16px 16px 16px 0" class="eds-button-large">Large</EverliBrandButton>
    <EverliBrandButton variant="facebook" style="margin: 16px 16px 16px 0">Default</EverliBrandButton>
    <EverliBrandButton variant="facebook" style="margin: 16px 16px 16px 0" class="eds-button-small">Small</EverliBrandButton>
  </div>
  <p>Icon only sizes are always square</p>
  <div style="display: flex;align-items: center">
    <EverliBrandButton variant="facebook" icon="ico-info" style="margin: 16px 16px 16px 0" class="eds-button-large"></EverliBrandButton>
    <EverliBrandButton variant="facebook" icon="ico-invoice" style="margin: 16px 16px 16px 0" class="eds-button-outline"></EverliBrandButton>
    <EverliBrandButton variant="facebook" icon="ico-chat" style="margin: 16px 16px 16px 0" class="eds-button-small"></EverliBrandButton>
  </div>
  <p>Styles</p>
  <div style="display: flex;align-items: center">
    <EverliBrandButton variant="facebook" style="margin: 16px 16px 16px 0" class="eds-button-fill">Fill</EverliBrandButton>
    <EverliBrandButton variant="facebook" style="margin: 16px 16px 16px 0" class="eds-button-outline">Outline</EverliBrandButton>
    <EverliBrandButton variant="facebook" style="margin: 16px 16px 16px 0" class="eds-button-flat">Flat</EverliBrandButton>
  </div>
  <p>Content Variants</p>
  <div style="display: flex;align-items: center">
  <EverliBrandButton variant="facebook" icon="ico-cart"  style="margin: 16px 16px 16px 0">Cart</EverliBrandButton>
  <EverliBrandButton variant="facebook" icon="ico-pos"  style="margin: 16px 16px 16px 0"></EverliBrandButton>
  <EverliBrandButton variant="facebook" icon="ico-padlock"  style="margin: 16px 16px 16px 0" class="eds-button-outline"></EverliBrandButton>
  <EverliBrandButton variant="facebook" icon="ico-chat"  style="margin: 16px 16px 16px 0" class="eds-button-flat"></EverliBrandButton>
  </div>
  <p>States</p>
  <div style="display: flex;align-items: center">
  <EverliBrandButton variant="facebook" style="margin: 16px 16px 16px 0" class="eds-button-fill" disabled>Fill Disabled</EverliBrandButton>
  <EverliBrandButton variant="facebook" style="margin: 16px 16px 16px  0" class="eds-button-outline" disabled>Outline Disabled</EverliBrandButton>
  <EverliBrandButton variant="facebook" style="margin: 16px 16px 16px 0" class="eds-button-flat" disabled>Flat Disabled</EverliBrandButton>
  </div>
  <p>Web specific</p>
  <EverliBrandButton variant="facebook" style="margin: 16px 0" class="eds-button-full" type="submit">Full width</EverliBrandButton>
  <EverliBrandButton variant="facebook" style="margin: 16px 0" link="http://wordle.com" target="_blank">Anchor element</EverliBrandButton>
  </div>`,
})

export const Google = () => ({
  components: { EverliBrandButton },
  template: `<div style="padding: 16px; font-family: 'Fira Sans'; max-width: 600px" class="eds-app">
  <h2 style="margin-bottom: 20px">Special button</h2>
  <p>Sizes</p>
  <div style="display: flex;align-items: center">
    <EverliBrandButton style="margin: 16px 16px 16px 0" variant="google" class="eds-button-large">Large</EverliBrandButton>
    <EverliBrandButton style="margin: 16px 16px 16px 0" variant="google">Default</EverliBrandButton>
    <EverliBrandButton style="margin: 16px 16px 16px 0" variant="google" class="eds-button-small">Small</EverliBrandButton>
  </div>
  <p>Icon only sizes are always square</p>
  <div style="display: flex;align-items: center">
    <EverliBrandButton icon="ico-info" style="margin: 16px 16px 16px 0" variant="google" class="eds-button-large"></EverliBrandButton>
    <EverliBrandButton icon="ico-invoice" style="margin: 16px 16px 16px 0" variant="google" class="eds-button-outline"></EverliBrandButton>
    <EverliBrandButton icon="ico-chat" style="margin: 16px 16px 16px 0" variant="google" class="eds-button-small"></EverliBrandButton>
  </div>
  <p>Styles</p>
  <div style="display: flex;align-items: center">
    <EverliBrandButton style="margin: 16px 16px 16px 0" variant="google" class="eds-button-fill">Fill</EverliBrandButton>
    <EverliBrandButton style="margin: 16px 16px 16px 0" variant="google" class="eds-button-outline">Outline</EverliBrandButton>
    <EverliBrandButton style="margin: 16px 16px 16px 0" variant="google" class="eds-button-flat">Flat</EverliBrandButton>
  </div>
  <p>Content Variants</p>
  <div style="display: flex;align-items: center">
  <EverliBrandButton icon="ico-padlock" variant="google" icon-alignment="right" style="margin: 16px 16px 16px 0">With icon</EverliBrandButton>
  <EverliBrandButton icon="ico-pos" variant="google" style="margin: 16px 16px 16px 0"></EverliBrandButton>
  <EverliBrandButton icon="ico-remove" variant="google"  style="margin: 16px 16px 16px 0" class="eds-button-outline"></EverliBrandButton>
  <EverliBrandButton icon="ico-search" variant="google"  style="margin: 16px 16px 16px 0" class="eds-button-flat"></EverliBrandButton>
  </div>
  <p>States</p>
  <div style="display: flex;align-items: center">
  <EverliBrandButton variant="google" style="margin: 16px 16px 16px 0" class="eds-button-fill" disabled>Fill Disabled</EverliBrandButton>
  <EverliBrandButton variant="google" style="margin: 16px 16px 16px  0" class="eds-button-outline" disabled>Outline Disabled</EverliBrandButton>
  <EverliBrandButton variant="google" style="margin: 16px 16px 16px 0" class="eds-button-flat" disabled>Flat Disabled</EverliBrandButton>
  </div>
  <p>Web specific</p>
  <EverliBrandButton variant="google" style="margin: 16px 0" class="eds-button-full" type="submit">Full width</EverliBrandButton>
  <EverliBrandButton variant="google" style="margin: 16px 0" link="http://wordle.com" target="_blank">Anchor element</EverliBrandButton>
  </div>`,
})

export const Apple = () => ({
  components: { EverliBrandButton },
  template: `<div style="padding: 16px; font-family: 'Fira Sans'; max-width: 600px" class="eds-app">
  <h2 style="margin-bottom: 20px">Link button</h2>
  <p>Sizes</p>
  <div style="display: flex;align-items: center">
    <EverliBrandButton style="margin: 16px 16px 16px 0" variant="apple" class="eds-button-large">Large</EverliBrandButton>
    <EverliBrandButton style="margin: 16px 16px 16px 0" variant="apple">Default</EverliBrandButton>
    <EverliBrandButton style="margin: 16px 16px 16px 0" variant="apple" class="eds-button-small">Small</EverliBrandButton>
  </div>
  <p>Icons</p>
  <div style="display: flex;align-items: center">
    <EverliBrandButton icon="ico-info" style="margin: 16px 16px 16px 0" variant="apple" class="eds-button-large"></EverliBrandButton>
    <EverliBrandButton icon="ico-invoice" style="margin: 16px 16px 16px 0" variant="apple" class="eds-button-outline"></EverliBrandButton>
    <EverliBrandButton icon="ico-chat" style="margin: 16px 16px 16px 0" variant="apple" class="eds-button-small"></EverliBrandButton>
  </div>
  <p>Styles</p>
  <div style="align-items: center;margin-bottom: 16px">
    <EverliBrandButton variant="apple">Flat</EverliBrandButton>
  </div>
  <p>Content Variants</p>
  <div style="display: flex;align-items: center">
  <EverliBrandButton icon="ico-cart" variant="apple"  style="margin: 16px 16px 16px 0" class="eds-button-flat">Cart</EverliBrandButton>
  <EverliBrandButton icon="ico-search" variant="apple"  style="margin: 16px 16px 16px 0" class="eds-button-flat"></EverliBrandButton>
  </div>
  <p>States</p>
  <div style="display: flex;align-items: center">
  <EverliBrandButton variant="apple" style="margin: 16px 16px 16px 0" class="eds-button-flat" disabled>Flat Disabled</EverliBrandButton>
  </div>
  </div>`,
})
