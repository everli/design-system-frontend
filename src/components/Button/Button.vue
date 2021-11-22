<template>
  <button class="everli-button">Hello from button</button>
</template>

<script>
alert("I am from library!")
export default {
  name: "EverliButton",
}
</script>

<style scoped lang="scss">
.everli-button {
  color: $c-green-100;
}
</style>
