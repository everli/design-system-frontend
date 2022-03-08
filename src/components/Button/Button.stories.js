import EverliButton from "./Button.vue"

export default {
  title: "Components/Button",
  parameters: {
    layout: "fullscreen",
  },
}

export const LightMode = () => ({
  components: { EverliButton },
  template: `<div style="padding: 16px" class="everli-design-system">
  <EverliButton style="margin: 16px 0">Default</EverliButton>
  <EverliButton style="margin: 16px 0" class="everli-button-small">Small</EverliButton>
  <EverliButton style="margin: 16px 0" class="everli-button-large">Large</EverliButton>
  <EverliButton style="margin: 16px 0" disabled>Disabled</EverliButton>
  <EverliButton style="margin: 16px 0" class="everli-button-secondary">Secondary</EverliButton>
  <EverliButton style="margin: 16px 0" class="everli-button-ghost">Ghost</EverliButton>
  <EverliButton icon="ico-chat"  style="margin: 16px 0">With icon</EverliButton>
  <EverliButton style="margin: 16px 0" class="everli-button-full" type="submit">Full width</EverliButton>
  <EverliButton style="margin: 16px 0" link="http://wordle.com" target="_blank">Anchor element</EverliButton>
  </div>`,
})

export const DarkMode = () => ({
  components: { EverliButton },
  template: `<div style="background: #222; overflow: hidden; padding: 16px" class="everli-dark-mode">
  <EverliButton style="margin: 16px 0" class="everli-button-secondary">Secondary</EverliButton>
  </div>`,
})
