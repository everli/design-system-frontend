<template>
  <component :is="iconName" :aria-label="label" />
</template>

<script>
export default {
  name: "EdsIcon",
  props: {
    icon: {
      type: String,
      default: "ico-action-more",
    },
    label: {
      type: String,
      default: "",
    },
  },
  computed: {
    iconName() {
      if (this.icon) {
        return () => import(`./${this.icon}.vue`)
      }
      return null
    },
  },
}
</script>

<style lang="scss">
.eds-app .eds-icon {
}
</style>
