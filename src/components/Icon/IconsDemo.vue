<template>
  <div>
    <table>
      <tr v-for="(icon, index) in icons" :key="index">
        <td>
          <EdsIcon :icon="icon" :label="icon" />
        </td>
        <td>
          {{ icon }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import IconsList from "../../components/Icon/icons.json"
import EdsIcon from "../../components/Icon/EdsIcon.vue"

export default {
  components: { EdsIcon },
  computed: {
    icons() {
      return IconsList
    },
  },
}
</script>
