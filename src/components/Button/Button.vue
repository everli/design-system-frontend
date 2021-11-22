<template>
  <button class="everli-button" @click="handleClick">
    <slot />
  </button>
</template>

<script>
export default {
  name: "EverliButton",
  methods: {
    /**
     * @description
     */
    handleClick() {
      this.$emit("click")
    },
  },
}
</script>

<style scoped lang="scss">
.everli-button {
  color: $c-green-100;
}
</style>
