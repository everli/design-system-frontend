import EverliButton from "./Button.vue"

export default {
  title: "Atoms/Button",
}

export const Default = () => ({
  components: { EverliButton },
  template: `<div>
  <EverliButton style="margin: 16px 0">Default</EverliButton>
  <EverliButton style="margin: 16px 0" class="small">Small</EverliButton>
  <EverliButton style="margin: 16px 0" class="large">Large</EverliButton>
  <EverliButton style="margin: 16px 0" disabled>Disabled</EverliButton>
  <EverliButton style="margin: 16px 0" class="secondary">Secondary</EverliButton>
  <EverliButton style="margin: 16px 0" class="ghost">Ghost</EverliButton>
  <EverliButton style="margin: 16px 0" class="full" type="submit">Full width</EverliButton>
  <EverliButton style="margin: 16px 0" link="http://wordle.com" target="_blank">Anchor element</EverliButton>
  </div>`,
})
