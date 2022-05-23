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
      return [`eds-icon--${this.size}`, `eds-c-${this.color}`]
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
