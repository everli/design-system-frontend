<template>
  <component :is="iconName" :class="customClass" :aria-label="label" />
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
    color: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "medium",
    },
  },
  computed: {
    iconName() {
      if (this.icon) {
        return () => import(/* webpackMode: "eager" */ `./${this.icon}.vue`)
      }
      return null
    },
    customClass() {
      const classes = [`eds-icon--${this.size}`]

      if (this.color) {
        classes.push(`eds-c-${this.color}`)
      }

      return classes
    },
  },
}
</script>

<style lang="scss">
.eds-app .eds-icon {
  fill: currentColor;

  &.eds-icon--small {
    width: 18px;
    height: 18px;
  }
}
</style>
