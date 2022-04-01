<template>
  <div>
    <EverliSvgSprite />
    <table>
      <tr v-for="(icon, index) in icons" :key="index">
        <td>
          <svg :aria-label="icon">
            <use :xlink:href="`#${icon}`"></use>
          </svg>
        </td>
        <td>
          {{ icon }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import EverliSvgSprite from "../../components/Icons/symbol/svg/sprite.symbol.vue"
import IconsList from "../../components/Icons/icons.json"

export default {
  components: { EverliSvgSprite },
  computed: {
    icons() {
      const iconTransformed = IconsList.map((icon) =>
        icon.split("icons/")[1].replace(".svg", "")
      )

      return iconTransformed
    },
  },
}
</script>
