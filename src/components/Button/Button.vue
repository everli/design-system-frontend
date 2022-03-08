<template>
  <component
    :is="tag"
    :href="link"
    :disabled="!enabled"
    :class="buttonClass"
    class="everli-button"
    @click.stop="handleClick"
  >
    <template v-if="icon">
      <span class="icon-wrapper">
        <template v-if="designSystemIcon">
          <SvgSprite />
          <svg class="everli-icon-wrapper" :aria-label="contentDescription">
            <use :xlink:href="`#${icon}`"></use>
          </svg>
        </template>

        <template v-else>
          <!-- temporary fallback to handle current icon set from Everli -->
          <span class="icon" :class="icon" :aria-label="contentDescription" />
        </template>
      </span>
    </template>

    <template v-if="text">
      {{ text }}
    </template>

    <slot v-else-if="$slots.default" />
  </component>
</template>

<script>
import SvgSprite from "@/components/SvgSprite/symbol/svg/sprite.symbol.vue"

export default {
  name: "EverliButton",
  components: {
    SvgSprite,
  },
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
    size: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
    contentDescription: {
      type: String,
      default: "",
    },
  },
  computed: {
    /**
     * @description Returns button class name
     *
     * @returns {Array}
     */
    buttonClass() {
      return [
        { "`everli-button-${this.variant}`": this.variant },
        { "`everli-button-${this.size}`": this.size },
        { "everli-button-link": this.link },
        { "everli-button-icon": this.icon },
      ]
    },
    /**
     * @description Returns button tag
     *
     * @returns {String}
     */
    tag() {
      return this.link ? "a" : "button"
    },
    /**
     * @description Is the icon design-system icon?
     * Design System icons contains ico- prefix.
     *
     * @returns {boolean}
     */
    designSystemIcon() {
      return this.icon.indexOf("ico-") > -1
    },
  },
  methods: {
    /**
     * @description Emit click event with link value as param
     */
    handleClick() {
      this.$emit("click", this.link)
    },
  },
}
</script>

<style lang="scss">
.everli-design-system .everli-button {
  @include button-text-medium;

  background: $button-primary-background-default;
  border-radius: $button-radius;
  box-sizing: border-box;
  color: $button-primary-text;
  display: block;
  height: $button-size-medium;
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

  &.everli-button-link {
    align-content: center;
    align-items: center;
    display: flex;
    justify-content: center;

    &:hover {
      color: $button-primary-text;
      text-decoration: none;
    }
  }

  &.everli-button-icon {
    align-items: center;
    display: flex;
    justify-content: center;

    .icon-wrapper {
      display: block;
      height: 24px;
      margin-right: 8px;
      width: 24px;
    }
  }

  &.everli-button-disabled,
  &[disabled] {
    background: $button-primary-background-disabled;
    color: $button-primary-text-disabled;
    cursor: default;
  }

  &.everli-button-small {
    @include button-text-small;

    height: $button-size-small;
  }

  &.everli-button-large {
    @include button-text-large;

    height: $button-size-large;
  }

  &.everli-button-secondary {
    background: $button-secondary-background-default;
    border: 1px solid $button-secondary-border;
    color: $button-secondary-text;

    &:hover {
      background: $button-secondary-background-hover;
    }
  }

  &.everli-button-ghost {
    background: $button-ghost-background-default;
    color: $button-ghost-text;

    &:hover {
      background: $button-ghost-background-hover;
    }
  }

  &.everli-button-full {
    max-width: 100%;
    width: 100%;
  }

  .everli-icon-wrapper {
    height: 24px;
    width: 24px;
  }

  .everli-icon {
    fill: currentColor;
  }
}
</style>

<style lang="scss">
// Dark MODE handling
.everli-dark-mode {
  .everli-button {
    &.everli-button-secondary {
      background: $dark-button-secondary-background-default;
      border-color: $dark-button-secondary-border;
      color: $dark-button-secondary-text;

      &:hover {
        background: $dark-button-secondary-background-hover;
      }
    }
  }
}
</style>
