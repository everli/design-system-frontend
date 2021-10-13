<template>
  <component
    :is="tag"
    :href="buttonHref"
    :disabled="disabled"
    :class="buttonClass"
    :type="buttonType"
    :style="buttonStyle"
    :target="anchorTarget"
    class="vader-button"
    @click="handleClick"
  >
    <span v-if="iconClass" class="icon-wrapper">
      <span class="icon" :class="iconClass" />
    </span>

    <template v-if="buttonText">
      {{ buttonText }}
    </template>

    <slot v-else-if="$slots.default" />
  </component>
</template>

<script>
export default {
  name: "VaderButton",
  props: {
    widgetData: {
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
    isDisabled: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
      default: null,
    },
    iconClass: {
      type: String,
      default: "",
    },
  },
  computed: {
    /**
     * @description Returns button class name
     *
     * @returns {Object}
     */
    buttonClass() {
      let styleClass = (this.widgetData && this.widgetData.style) || ""

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
      return this.widgetData && this.widgetData.link
        ? this.widgetData.link
        : this.href
    },
    /**
     * @description Get the anchor target.
     *
     * @returns {String}
     */
    anchorTarget() {
      return this.widgetData?.anchor_target || "_self"
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
      return this.widgetData && this.widgetData.button
        ? this.widgetData.button
        : ""
    },
    /**
     * @description Returns button tag
     *
     * @returns {String}
     */
    tag() {
      return !this.buttonHref ||
        (this.widgetData && this.widgetData.modal_trigger)
        ? "button"
        : "a"
    },
    /**
     * @description Returns button custom style
     *
     * @returns {Object}
     */
    buttonStyle() {
      return {
        color: this.widgetData && this.widgetData.color,
      }
    },
  },
  methods: {
    /**
     * @description Emit click event on click and send tracking information if
     * provided.
     */
    handleClick() {
      this.$emit("click")

      if (
        this.widgetData &&
        this.widgetData.tracking &&
        this.widgetData.tracking.length
      ) {
        this.sendTracking(this.widgetData.tracking)
      }
    },
  },
}
</script>

<style scoped lang="scss">
.vader-button {
  color: #eee;
}
</style>
