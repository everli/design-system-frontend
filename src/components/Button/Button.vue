<template>
  <component
    :is="tag"
    :href="buttonHref"
    :disabled="disabled"
    :class="buttonClass"
    :type="buttonType"
    :style="buttonStyle"
    :target="anchorTarget"
    class="everli-button"
    @click="handleClick"
  >
    <template v-if="buttonText">
      {{ buttonText }}
    </template>

    <slot v-else-if="$slots.default" />
  </component>
</template>

<script>
export default {
  name: "EverliButton",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    type: {
      type: String,
      default: "button",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
      default: null,
    },
  },
  computed: {
    /**
     * @description Returns button class name
     *
     * @returns {Object}
     */
    buttonClass() {
      let styleClass = (this.data && this.data.style) || ""

      return [
        { "is-disabled": this.isDisabled },
        { "with-icon": this.iconClass },
        styleClass,
      ]
    },
    /**
     * @description Returns href link
     *
     * @returns {String}
     */
    buttonHref() {
      return this.data && this.data.link ? this.data.link : this.href
    },
    /**
     * @description Get the anchor target.
     *
     * @returns {String}
     */
    anchorTarget() {
      return this.data?.anchor_target || "_self"
    },
    /**
     * @description Returns button type based on the button tag
     *
     * @returns {String}
     */
    buttonType() {
      return !this.buttonHref ? this.type : ""
    },
    /**
     * @description Returns button text (from props or slot)
     *
     * @returns {String}
     */
    buttonText() {
      return this.data && this.data.button ? this.data.button : ""
    },
    /**
     * @description Returns button tag
     *
     * @returns {String}
     */
    tag() {
      return this.isButtonElement ? "button" : "a"
    },
    /**
     * @description Returns if rendered element is a button
     *
     * @returns {Boolean}
     */
    isButtonElement() {
      return !this.buttonHref || (this.data && this.data.modal_trigger)
    },
  },
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
    background: $button-primary-hover-background;
  }

  &.disabled,
  &[disabled] {
    background: $button-primary-disabled-background;
    color: $button-primary-disabled-color;
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
      background: $button-secondary-hover-background;
    }
  }

  &.ghost {
    background: $button-ghost-background;
    color: $button-ghost-color;

    &:hover {
      background: $button-ghost-hover-background;
    }
  }

  &.full {
    max-width: 100%;
    width: 100%;
  }
}
</style>
