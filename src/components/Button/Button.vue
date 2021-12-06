<template>
  <button class="everli-button c-black-100" @click="handleClick">
    <slot /> Hello
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
