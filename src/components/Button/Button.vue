<template>
  <component
    :is="tag"
    :href="link"
    :disabled="!enabled"
    :class="buttonClass"
    class="everli-button"
    @click="handleClick"
  >
    <template v-if="text">
      {{ text }}
    </template>

    <slot v-else-if="$slots.default" />
  </component>
</template>

<script>
export default {
  name: "EverliButton",
  props: {
    enabled: {
      type: Boolean,
      default: true,
    },
    text: {
      type: String,
      default: "",
    },
    variant: {
      type: String,
      default: "",
    },
    style: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: null,
    },
  },
  computed: {
    /**
     * @description Returns button class name
     *
     * @returns {Array}
     */
    buttonClass() {
      return [this.variant, this.style, { link: this.link }]
    },
    /**
     * @description Returns button tag
     *
     * @returns {String}
     */
    tag() {
      return this.link ? "a" : "button"
    },
  },
  methods: {
    /**
     * @description Emit click event
     */
    handleClick() {
      this.$emit("click")
    },
  },
}
</script>

<style scoped lang="scss">
.everli-button {
  background: $button-primary-background;
  border-radius: $button-radius;
  box-sizing: border-box;
  color: $button-primary-color;
  display: block;
  font-family: $f-family-primary;
  font-size: 15px;
  font-weight: $f-weight-semi;
  height: $button-size-default;
  line-height: 24px;
  min-width: 112px;
  outline: none;
  padding: $button-padding;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    background: $button-primary-background-hover;
  }

  &.link {
    align-content: center;
    align-items: center;
    display: flex;
    float: left;
  }

  &.disabled,
  &[disabled] {
    background: $button-primary-background-disabled;
    color: $button-primary-color-disabled;
    cursor: default;
  }

  &.small {
    font-size: 14px;
    height: $button-size-small;
    line-height: 22px;
  }

  &.large {
    font-size: 23px;
    height: $button-size-large;
    line-height: 32px;
  }

  &.secondary {
    background: $button-secondary-background;
    border: 1px solid $button-secondary-border;
    color: $button-secondary-color;

    &:hover {
      background: $button-secondary-background-hover;
    }
  }

  &.ghost {
    background: $button-ghost-background;
    color: $button-ghost-color;

    &:hover {
      background: $button-ghost-background-hover;
    }
  }

  &.full {
    max-width: 100%;
    width: 100%;
  }
}
</style>
