import EverliButton from "./Button.vue"

export default {
  title: "Components/Button",
  parameters: {
    layout: "fullscreen",
  },
}

export const Primary = () => ({
  components: { EverliButton },
  template: `<div style="padding: 16px; font-family: 'Fira Sans'; max-width: 600px" class="eds-app">
  <h2 style="margin-bottom: 20px">Primary button</h2>
  <p>Sizes</p>
  <div style="display: flex;align-items: center">
    <EverliButton style="margin: 16px 16px 16px 0" class="eds-button-large">Large</EverliButton>
    <EverliButton style="margin: 16px 16px 16px 0">Default</EverliButton>
    <EverliButton style="margin: 16px 16px 16px 0" class="eds-button-small">Small</EverliButton>
  </div>
  <p>Icon only sizes are always square</p>
  <div style="display: flex;align-items: center">
    <EverliButton icon="ico-info" style="margin: 16px 16px 16px 0" class="eds-button-large"></EverliButton>
    <EverliButton icon="ico-invoice" style="margin: 16px 16px 16px 0" class="eds-button-outline"></EverliButton>
    <EverliButton icon="ico-chat" style="margin: 16px 16px 16px 0" class="eds-button-small"></EverliButton>
  </div>
  <p>Styles</p>
  <div style="display: flex;align-items: center">
    <EverliButton style="margin: 16px 16px 16px 0" class="eds-button-fill">Fill</EverliButton>
    <EverliButton style="margin: 16px 16px 16px 0" class="eds-button-outline">Outline</EverliButton>
    <EverliButton style="margin: 16px 16px 16px 0" class="eds-button-flat">Flat</EverliButton>
  </div>
  <p>Content Variants</p>
  <div style="display: flex;align-items: center">
  <EverliButton icon="ico-cart"  style="margin: 16px 16px 16px 0">Cart</EverliButton>
  <EverliButton icon="ico-pos"  style="margin: 16px 16px 16px 0"></EverliButton>
  <EverliButton icon="ico-padlock"  style="margin: 16px 16px 16px 0" class="eds-button-outline"></EverliButton>
  <EverliButton icon="ico-chat"  style="margin: 16px 16px 16px 0" class="eds-button-flat"></EverliButton>
  </div>
  <p>States</p>
  <div style="display: flex;align-items: center">
  <EverliButton style="margin: 16px 16px 16px 0" class="eds-button-fill" disabled>Fill Disabled</EverliButton>
  <EverliButton style="margin: 16px 16px 16px  0" class="eds-button-outline" disabled>Outline Disabled</EverliButton>
  <EverliButton style="margin: 16px 16px 16px 0" class="eds-button-flat" disabled>Flat Disabled</EverliButton>
  </div>
  <p>Web specific</p>
  <EverliButton style="margin: 16px 0" class="eds-button-full" type="submit">Full width</EverliButton>
  <EverliButton style="margin: 16px 0" link="http://wordle.com" target="_blank">Anchor element</EverliButton>
  </div>`,
})

export const Special = () => ({
  components: { EverliButton },
  template: `<div style="padding: 16px; font-family: 'Fira Sans'; max-width: 600px" class="eds-app">
  <h2 style="margin-bottom: 20px">Special button</h2>
  <p>Sizes</p>
  <div style="display: flex;align-items: center">
    <EverliButton style="margin: 16px 16px 16px 0" variant="special" class="eds-button-large">Large</EverliButton>
    <EverliButton style="margin: 16px 16px 16px 0" variant="special">Default</EverliButton>
    <EverliButton style="margin: 16px 16px 16px 0" variant="special" class="eds-button-small">Small</EverliButton>
  </div>
  <p>Icon only sizes are always square</p>
  <div style="display: flex;align-items: center">
    <EverliButton icon="ico-info" style="margin: 16px 16px 16px 0" variant="special" class="eds-button-large"></EverliButton>
    <EverliButton icon="ico-invoice" style="margin: 16px 16px 16px 0" variant="special" class="eds-button-outline"></EverliButton>
    <EverliButton icon="ico-chat" style="margin: 16px 16px 16px 0" variant="special" class="eds-button-small"></EverliButton>
  </div>
  <p>Styles</p>
  <div style="display: flex;align-items: center">
    <EverliButton style="margin: 16px 16px 16px 0" variant="special" class="eds-button-fill">Fill</EverliButton>
    <EverliButton style="margin: 16px 16px 16px 0" variant="special" class="eds-button-outline">Outline</EverliButton>
    <EverliButton style="margin: 16px 16px 16px 0" variant="special" class="eds-button-flat">Flat</EverliButton>
  </div>
  <p>Content Variants</p>
  <div style="display: flex;align-items: center">
  <EverliButton icon="ico-padlock" variant="special" icon-alignment="right" style="margin: 16px 16px 16px 0">With icon</EverliButton>
  <EverliButton icon="ico-pos" variant="special" style="margin: 16px 16px 16px 0"></EverliButton>
  <EverliButton icon="ico-remove" variant="special"  style="margin: 16px 16px 16px 0" class="eds-button-outline"></EverliButton>
  <EverliButton icon="ico-search" variant="special"  style="margin: 16px 16px 16px 0" class="eds-button-flat"></EverliButton>
  </div>
  <p>States</p>
  <div style="display: flex;align-items: center">
  <EverliButton variant="special" style="margin: 16px 16px 16px 0" class="eds-button-fill" disabled>Fill Disabled</EverliButton>
  <EverliButton variant="special" style="margin: 16px 16px 16px  0" class="eds-button-outline" disabled>Outline Disabled</EverliButton>
  <EverliButton variant="special" style="margin: 16px 16px 16px 0" class="eds-button-flat" disabled>Flat Disabled</EverliButton>
  </div>
  <p>Web specific</p>
  <EverliButton variant="special" style="margin: 16px 0" class="eds-button-full" type="submit">Full width</EverliButton>
  <EverliButton variant="special" style="margin: 16px 0" link="http://wordle.com" target="_blank">Anchor element</EverliButton>
  </div>`,
})

export const Link = () => ({
  components: { EverliButton },
  template: `<div style="padding: 16px; font-family: 'Fira Sans'; max-width: 600px" class="eds-app">
  <h2 style="margin-bottom: 20px">Link button</h2>
  <p>Sizes</p>
  <div style="display: flex;align-items: center">
    <EverliButton style="margin: 16px 16px 16px 0" variant="link" class="eds-button-large">Large</EverliButton>
    <EverliButton style="margin: 16px 16px 16px 0" variant="link">Default</EverliButton>
    <EverliButton style="margin: 16px 16px 16px 0" variant="link" class="eds-button-small">Small</EverliButton>
  </div>
  <p>Icons</p>
  <div style="display: flex;align-items: center">
    <EverliButton icon="ico-info" style="margin: 16px 16px 16px 0" variant="link" class="eds-button-large"></EverliButton>
    <EverliButton icon="ico-invoice" style="margin: 16px 16px 16px 0" variant="link" class="eds-button-outline"></EverliButton>
    <EverliButton icon="ico-chat" style="margin: 16px 16px 16px 0" variant="link" class="eds-button-small"></EverliButton>
  </div>
  <p>Styles</p>
  <div style="align-items: center;margin-bottom: 16px">
    <EverliButton variant="link">Flat</EverliButton>
  </div>
  <p>Content Variants</p>
  <div style="display: flex;align-items: center">
  <EverliButton icon="ico-cart" variant="link"  style="margin: 16px 16px 16px 0" class="eds-button-flat">Cart</EverliButton>
  <EverliButton icon="ico-search" variant="link"  style="margin: 16px 16px 16px 0" class="eds-button-flat"></EverliButton>
  </div>
  <p>States</p>
  <div style="display: flex;align-items: center">
  <EverliButton variant="link" style="margin: 16px 16px 16px 0" class="eds-button-flat" disabled>Flat Disabled</EverliButton>
  </div>
  </div>`,
})
