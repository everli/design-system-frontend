import EdsButton from "./EdsButton.vue"

export default {
  title: "Components/Button",
  parameters: {
    layout: "fullscreen",
  },
}

export const Primary = () => ({
  components: { EdsButton },
  template: `<div style="padding: 16px; font-family: 'Fira Sans'; max-width: 600px" class="eds-app">
  <h2 style="margin-bottom: 20px">Primary button</h2>
  <p>Sizes</p>
  <div style="display: flex;align-items: center">
    <EdsButton style="margin: 16px 16px 16px 0" class="eds-button-large">Large</EdsButton>
    <EdsButton style="margin: 16px 16px 16px 0">Default</EdsButton>
    <EdsButton style="margin: 16px 16px 16px 0" class="eds-button-small">Small</EdsButton>
  </div>
  <p>Icon only sizes are always square</p>
  <div style="display: flex;align-items: center">
    <EdsButton icon="ico-info" style="margin: 16px 16px 16px 0" class="eds-button-large"></EdsButton>
    <EdsButton icon="ico-invoice" style="margin: 16px 16px 16px 0" class="eds-button-outline"></EdsButton>
    <EdsButton icon="ico-chat" style="margin: 16px 16px 16px 0" class="eds-button-small"></EdsButton>
  </div>
  <p>Styles</p>
  <div style="display: flex;align-items: center">
    <EdsButton style="margin: 16px 16px 16px 0" class="eds-button-fill">Fill</EdsButton>
    <EdsButton style="margin: 16px 16px 16px 0" class="eds-button-outline">Outline</EdsButton>
    <EdsButton style="margin: 16px 16px 16px 0" class="eds-button-flat">Flat</EdsButton>
  </div>
  <p>Content Variants</p>
  <div style="display: flex;align-items: center">
  <EdsButton icon="ico-cart"  style="margin: 16px 16px 16px 0">Cart</EdsButton>
  <EdsButton icon="ico-pos"  style="margin: 16px 16px 16px 0"></EdsButton>
  <EdsButton icon="ico-padlock"  style="margin: 16px 16px 16px 0" class="eds-button-outline"></EdsButton>
  <EdsButton icon="ico-chat"  style="margin: 16px 16px 16px 0" class="eds-button-flat"></EdsButton>
  </div>
  <p>States</p>
  <div style="display: flex;align-items: center">
  <EdsButton style="margin: 16px 16px 16px 0" class="eds-button-fill" disabled>Fill Disabled</EdsButton>
  <EdsButton style="margin: 16px 16px 16px  0" class="eds-button-outline" disabled>Outline Disabled</EdsButton>
  <EdsButton style="margin: 16px 16px 16px 0" class="eds-button-flat" disabled>Flat Disabled</EdsButton>
  </div>
  <p>Web specific</p>
  <EdsButton style="margin: 16px 0" class="eds-button-full" type="submit">Full width</EdsButton>
  <EdsButton style="margin: 16px 0" link="http://wordle.com" target="_blank">Anchor element</EdsButton>
  </div>`,
})

export const Special = () => ({
  components: { EdsButton },
  template: `<div style="padding: 16px; font-family: 'Fira Sans'; max-width: 600px" class="eds-app">
  <h2 style="margin-bottom: 20px">Special button</h2>
  <p>Sizes</p>
  <div style="display: flex;align-items: center">
    <EdsButton style="margin: 16px 16px 16px 0" variant="special" class="eds-button-large">Large</EdsButton>
    <EdsButton style="margin: 16px 16px 16px 0" variant="special">Default</EdsButton>
    <EdsButton style="margin: 16px 16px 16px 0" variant="special" class="eds-button-small">Small</EdsButton>
  </div>
  <p>Icon only sizes are always square</p>
  <div style="display: flex;align-items: center">
    <EdsButton icon="ico-info" style="margin: 16px 16px 16px 0" variant="special" class="eds-button-large"></EdsButton>
    <EdsButton icon="ico-invoice" style="margin: 16px 16px 16px 0" variant="special" class="eds-button-outline"></EdsButton>
    <EdsButton icon="ico-chat" style="margin: 16px 16px 16px 0" variant="special" class="eds-button-small"></EdsButton>
  </div>
  <p>Styles</p>
  <div style="display: flex;align-items: center">
    <EdsButton style="margin: 16px 16px 16px 0" variant="special" class="eds-button-fill">Fill</EdsButton>
    <EdsButton style="margin: 16px 16px 16px 0" variant="special" class="eds-button-outline">Outline</EdsButton>
    <EdsButton style="margin: 16px 16px 16px 0" variant="special" class="eds-button-flat">Flat</EdsButton>
  </div>
  <p>Content Variants</p>
  <div style="display: flex;align-items: center">
  <EdsButton icon="ico-padlock" variant="special" icon-alignment="right" style="margin: 16px 16px 16px 0">With icon</EdsButton>
  <EdsButton icon="ico-pos" variant="special" style="margin: 16px 16px 16px 0"></EdsButton>
  <EdsButton icon="ico-remove" variant="special"  style="margin: 16px 16px 16px 0" class="eds-button-outline"></EdsButton>
  <EdsButton icon="ico-search" variant="special"  style="margin: 16px 16px 16px 0" class="eds-button-flat"></EdsButton>
  </div>
  <p>States</p>
  <div style="display: flex;align-items: center">
  <EdsButton variant="special" style="margin: 16px 16px 16px 0" class="eds-button-fill" disabled>Fill Disabled</EdsButton>
  <EdsButton variant="special" style="margin: 16px 16px 16px  0" class="eds-button-outline" disabled>Outline Disabled</EdsButton>
  <EdsButton variant="special" style="margin: 16px 16px 16px 0" class="eds-button-flat" disabled>Flat Disabled</EdsButton>
  </div>
  <p>Web specific</p>
  <EdsButton variant="special" style="margin: 16px 0" class="eds-button-full" type="submit">Full width</EdsButton>
  <EdsButton variant="special" style="margin: 16px 0" link="http://wordle.com" target="_blank">Anchor element</EdsButton>
  </div>`,
})

export const Link = () => ({
  components: { EdsButton },
  template: `<div style="padding: 16px; font-family: 'Fira Sans'; max-width: 600px" class="eds-app">
  <h2 style="margin-bottom: 20px">Link button</h2>
  <p>Sizes</p>
  <div style="display: flex;align-items: center">
    <EdsButton style="margin: 16px 16px 16px 0" variant="link" class="eds-button-large">Large</EdsButton>
    <EdsButton style="margin: 16px 16px 16px 0" variant="link">Default</EdsButton>
    <EdsButton style="margin: 16px 16px 16px 0" variant="link" class="eds-button-small">Small</EdsButton>
  </div>
  <p>Icons</p>
  <div style="display: flex;align-items: center">
    <EdsButton icon="ico-info" style="margin: 16px 16px 16px 0" variant="link" class="eds-button-large"></EdsButton>
    <EdsButton icon="ico-invoice" style="margin: 16px 16px 16px 0" variant="link" class="eds-button-outline"></EdsButton>
    <EdsButton icon="ico-chat" style="margin: 16px 16px 16px 0" variant="link" class="eds-button-small"></EdsButton>
  </div>
  <p>Styles</p>
  <div style="align-items: center;margin-bottom: 16px">
    <EdsButton variant="link">Flat</EdsButton>
  </div>
  <p>Content Variants</p>
  <div style="display: flex;align-items: center">
  <EdsButton icon="ico-cart" variant="link"  style="margin: 16px 16px 16px 0" class="eds-button-flat">Cart</EdsButton>
  <EdsButton icon="ico-search" variant="link"  style="margin: 16px 16px 16px 0" class="eds-button-flat"></EdsButton>
  </div>
  <p>States</p>
  <div style="display: flex;align-items: center">
  <EdsButton variant="link" style="margin: 16px 16px 16px 0" class="eds-button-flat" disabled>Flat Disabled</EdsButton>
  </div>
  </div>`,
})
