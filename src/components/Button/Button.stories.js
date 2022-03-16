import EverliButton from "./Button.vue"

export default {
  title: "Components/Button",
  parameters: {
    layout: "fullscreen",
  },
}

export const Primary = () => ({
  components: { EverliButton },
  template: `<div style="padding: 16px; font-family: 'Fira Sans'" class="everli-design-system">
  <h2 style="margin-bottom: 20px">Primary button</h2>
  <p>Sizes</p>
  <div style="display: flex;align-items: center">
    <EverliButton style="margin: 16px 16px 16px 0" class="everli-button-large">Large</EverliButton>
    <EverliButton style="margin: 16px 16px 16px 0">Default</EverliButton>
    <EverliButton style="margin: 16px 16px 16px 0" class="everli-button-small">Small</EverliButton>
  </div>
  <p>Icon only sizes are always square</p>
  <div style="display: flex;align-items: center">
    <EverliButton icon="ico-info" style="margin: 16px 16px 16px 0" class="everli-button-large"></EverliButton>
    <EverliButton icon="ico-invoice" style="margin: 16px 16px 16px 0" class="everli-button-outline"></EverliButton>
    <EverliButton icon="ico-chat" style="margin: 16px 16px 16px 0" class="everli-button-small"></EverliButton>
  </div>
  <p>Styles</p>
  <div style="display: flex;align-items: center">
    <EverliButton style="margin: 16px 16px 16px 0" class="everli-button-fill">Fill</EverliButton>
    <EverliButton style="margin: 16px 16px 16px 0" class="everli-button-outline">Outline</EverliButton>
    <EverliButton style="margin: 16px 16px 16px 0" class="everli-button-flat">Flat</EverliButton>
  </div>
  <p>Content Variants</p>
  <div style="display: flex;align-items: center">
  <EverliButton icon="ico-cart"  style="margin: 16px 16px 16px 0">Cart</EverliButton>
  <EverliButton icon="ico-pos"  style="margin: 16px 16px 16px 0"></EverliButton>
  <EverliButton icon="ico-padlock"  style="margin: 16px 16px 16px 0" class="everli-button-outline"></EverliButton>
  <EverliButton icon="ico-chat"  style="margin: 16px 16px 16px 0" class="everli-button-flat"></EverliButton>
  </div>
  <p>States</p>
  <div style="display: flex;align-items: center">
  <EverliButton style="margin: 16px 16px 16px 0" class="everli-button-fill" disabled>Fill Disabled</EverliButton>
  <EverliButton style="margin: 16px 16px 16px  0" class="everli-button-outline" disabled>Outline Disabled</EverliButton>
  <EverliButton style="margin: 16px 16px 16px 0" class="everli-button-flat" disabled>Flat Disabled</EverliButton>
  </div>
  <p>Web specific</p>
  <EverliButton style="margin: 16px 0" class="everli-button-full" type="submit">Full width</EverliButton>
  <EverliButton style="margin: 16px 0" link="http://wordle.com" target="_blank">Anchor element</EverliButton>
  </div>`,
})

export const Special = () => ({
  components: { EverliButton },
  template: `<div style="padding: 16px; font-family: 'Fira Sans'" class="everli-design-system">
  <h2 style="margin-bottom: 20px">Special button</h2>
  <p>Sizes</p>
  <div style="display: flex;align-items: center">
    <EverliButton style="margin: 16px 16px 16px 0" variant="special" class="everli-button-large">Large</EverliButton>
    <EverliButton style="margin: 16px 16px 16px 0" variant="special">Default</EverliButton>
    <EverliButton style="margin: 16px 16px 16px 0" variant="special" class="everli-button-small">Small</EverliButton>
  </div>
  <p>Icon only sizes are always square</p>
  <div style="display: flex;align-items: center">
    <EverliButton icon="ico-info" style="margin: 16px 16px 16px 0" variant="special" class="everli-button-large"></EverliButton>
    <EverliButton icon="ico-invoice" style="margin: 16px 16px 16px 0" variant="special" class="everli-button-outline"></EverliButton>
    <EverliButton icon="ico-chat" style="margin: 16px 16px 16px 0" variant="special" class="everli-button-small"></EverliButton>
  </div>
  <p>Styles</p>
  <div style="display: flex;align-items: center">
    <EverliButton style="margin: 16px 16px 16px 0" variant="special" class="everli-button-fill">Fill</EverliButton>
    <EverliButton style="margin: 16px 16px 16px 0" variant="special" class="everli-button-outline">Outline</EverliButton>
    <EverliButton style="margin: 16px 16px 16px 0" variant="special" class="everli-button-flat">Flat</EverliButton>
  </div>
  <p>Content Variants</p>
  <div style="display: flex;align-items: center">
  <EverliButton icon="ico-padlock" variant="special" style="margin: 16px 16px 16px 0">With icon</EverliButton>
  <EverliButton icon="ico-pos" variant="special" style="margin: 16px 16px 16px 0"></EverliButton>
  <EverliButton icon="ico-remove" variant="special"  style="margin: 16px 16px 16px 0" class="everli-button-outline"></EverliButton>
  <EverliButton icon="ico-search" variant="special"  style="margin: 16px 16px 16px 0" class="everli-button-flat"></EverliButton>
  </div>
  <p>States</p>
  <div style="display: flex;align-items: center">
  <EverliButton variant="special" style="margin: 16px 16px 16px 0" class="everli-button-fill" disabled>Fill Disabled</EverliButton>
  <EverliButton variant="special" style="margin: 16px 16px 16px  0" class="everli-button-outline" disabled>Outline Disabled</EverliButton>
  <EverliButton variant="special" style="margin: 16px 16px 16px 0" class="everli-button-flat" disabled>Flat Disabled</EverliButton>
  </div>
  <p>Web specific</p>
  <EverliButton variant="special" style="margin: 16px 0" class="everli-button-full" type="submit">Full width</EverliButton>
  <EverliButton variant="special" style="margin: 16px 0" link="http://wordle.com" target="_blank">Anchor element</EverliButton>
  </div>`,
})

export const Link = () => ({
  components: { EverliButton },
  template: `<div style="padding: 16px; font-family: 'Fira Sans'" class="everli-design-system">
  <h2 style="margin-bottom: 20px">Special button</h2>
  <p>Sizes</p>
  <div style="display: flex;align-items: center">
    <EverliButton style="margin: 16px 16px 16px 0" variant="link" class="everli-button-large">Large</EverliButton>
    <EverliButton style="margin: 16px 16px 16px 0" variant="link">Default</EverliButton>
    <EverliButton style="margin: 16px 16px 16px 0" variant="link" class="everli-button-small">Small</EverliButton>
  </div>
  <p>Icon only sizes are always square</p>
  <div style="display: flex;align-items: center">
    <EverliButton icon="ico-info" style="margin: 16px 16px 16px 0" variant="link" class="everli-button-large"></EverliButton>
    <EverliButton icon="ico-invoice" style="margin: 16px 16px 16px 0" variant="link" class="everli-button-outline"></EverliButton>
    <EverliButton icon="ico-chat" style="margin: 16px 16px 16px 0" variant="link" class="everli-button-small"></EverliButton>
  </div>
  <p>Styles</p>
  <div style="display: flex;align-items: center">
   <p> Is this something that could be used as  <EverliButton variant="link" class="everli-button-flat">inline</EverliButton> link? </p>
  </div>
  <p>Content Variants</p>
  <div style="display: flex;align-items: center">
  <EverliButton icon="ico-search" variant="link"  style="margin: 16px 16px 16px 0" class="everli-button-flat"></EverliButton>
  </div>
  <p>States</p>
  <div style="display: flex;align-items: center">
  <EverliButton variant="link" style="margin: 16px 16px 16px 0" class="everli-button-flat" disabled>Flat Disabled</EverliButton>
  </div>
  </div>`,
})

export const DarkMode = () => ({
  components: { EverliButton },
  template: `<div style="background: #222; overflow: hidden; padding: 16px" class="everli-dark-mode">
  <EverliButton style="margin: 16px 0" class="everli-button-secondary">Secondary</EverliButton>
  </div>`,
})
