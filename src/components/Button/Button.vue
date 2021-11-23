<template>
  <div>SLIDER SUCCO</div>
</template>

<script>
export default {
  name: "slide",
  props: ["title"],
  data() {
    return {
      width: null,
    }
  },
}
</script>

<style lang="scss">
.VueCarousel-slide {
  flex-basis: inherit;
  flex-grow: 0;
  flex-shrink: 0;
  user-select: none;
  backface-visibility: hidden;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  outline: none;
}

.VueCarousel-slide-adjustableHeight {
  display: table;
  flex-basis: auto;
  width: 100%;
}
</style>
