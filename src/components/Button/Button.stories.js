import EverliButton from "./Button.vue"

export default {
  title: "Atoms/Button",
  parameters: {
    layout: "fullscreen",
  },
}

export const LightMode = () => ({
  components: { EverliButton },
  template: `<div style="padding: 16px">
  <EverliButton style="margin: 16px 0">Default</EverliButton>
  <EverliButton style="margin: 16px 0" class="small">Small</EverliButton>
  <EverliButton style="margin: 16px 0" class="large">Large</EverliButton>
  <EverliButton style="margin: 16px 0" disabled>Disabled</EverliButton>
  <EverliButton style="margin: 16px 0" class="secondary">Secondary</EverliButton>
  <EverliButton style="margin: 16px 0" class="ghost">Ghost</EverliButton>
  <EverliButton icon-name="ico-checkmark"  style="margin: 16px 0">With icon</EverliButton>
  <EverliButton style="margin: 16px 0" class="full" type="submit">Full width</EverliButton>
  <EverliButton style="margin: 16px 0" link="http://wordle.com" target="_blank">Anchor element</EverliButton>
  </div>`,
})

export const DarkMode = () => ({
  components: { EverliButton },
  template: `<div style="background: #222; overflow: hidden; padding: 16px" class="everli-dark-mode">
  <EverliButton style="margin: 16px 0" class="secondary">Secondary</EverliButton>
  </div>`,
})
