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
      default: "primary",
    },
    buttonStyle: {
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
    iconAlignment: {
      type: String,
      default: "left",
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
      const buttonClasses = [this.buttonStyle, this.variant, this.size]

      const classes = buttonClasses.map((key) => {
        return key ? `everli-button-${key}` : null
      })

      if (this.link) {
        classes.push("everli-button-anchor")
      }

      if (this.icon) {
        classes.push("everli-button-icon")
      }

      if (!this.text && !this.$slots.default) {
        classes.push("everli-button-icon-content")
      }

      return classes
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

  border-radius: $radius-medium;
  box-sizing: border-box;
  color: $button-primary-text;
  display: block;
  outline: none;
  padding: $button-padding;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s;

  &:focus {
    outline: 3px solid $color-border-focus;
  }

  &.everli-button-primary {
    background: $button-primary-fill-background-default;

    &:hover,
    &:active {
      background: $button-primary-fill-background-hover;
    }

    &.everli-button-fill {
      background: $button-primary-fill-background-default;

      &:hover,
      &:active {
        background: $button-primary-fill-background-hover;
      }

      &.everli-button-disabled,
      &[disabled] {
        background: $button-color-fill-background-disabled;
      }
    }

    &.everli-button-outline {
      background: $button-primary-outline-background-default;
      border: 1px solid $button-primary-outline-border-default;
      color: $text-color-primary;

      &:hover,
      &:active {
        background: $button-primary-outline-background-hover;
      }

      &.everli-button-disabled,
      &[disabled] {
        border-color: $button-color-outline-border-disabled;
        color: $button-text-color-disabled;

        &:hover,
        &:active {
          background: $button-primary-outline-background-default;
        }
      }
    }

    &.everli-button-flat {
      background: $button-color-transparent-background;
      border: none;
      color: $text-color-primary;

      &:hover,
      &:active {
        background: $button-primary-flat-background-hover;
      }

      &.everli-button-disabled,
      &[disabled] {
        color: $button-text-color-disabled;

        &:hover,
        &:active {
          background: $button-color-transparent-background;
        }
      }
    }
  }

  &.everli-button-special {
    background: $button-special-fill-background-default;

    &:hover,
    &:active {
      background: $button-special-fill-background-hover;
    }

    &.everli-button-fill {
      background: $button-special-fill-background-default;

      &:hover,
      &:active {
        background: $button-special-fill-background-hover;
      }

      &.everli-button-disabled,
      &[disabled] {
        background: $button-color-fill-background-disabled;
      }
    }

    &.everli-button-outline {
      background: $button-special-outline-background-default;
      border: 1px solid $button-special-outline-border-default;
      color: $text-color-special;

      &:hover,
      &:active {
        background: $button-special-outline-background-hover;
      }

      &.everli-button-disabled,
      &[disabled] {
        border-color: $button-color-outline-border-disabled;
        color: $button-text-color-disabled;

        &:hover,
        &:active {
          background: $button-special-outline-background-default;
        }
      }
    }

    &.everli-button-flat {
      background: $button-color-transparent-background;
      border: none;
      color: $text-color-special;

      &:hover,
      &:active {
        background: $button-special-flat-background-hover;
      }

      &.everli-button-disabled,
      &[disabled] {
        color: $button-text-color-disabled;

        &:hover,
        &:active {
          background: $button-color-transparent-background;
        }
      }
    }
  }

  &.everli-button-link {
    background: none;
    color: $button-text-color-link-default;
    padding-left: 0;
    padding-right: 0;
    min-width: auto;

    &:hover,
    &:active {
      background: none;
      color: $button-text-color-link-hover;
    }

    &.everli-button-large {
      @include button-text-link-large;
    }

    &.everli-button-fill {
      background: none;
      border: none;
    }

    &.everli-button-flat {
      background: none;
      border: none;

      &:hover,
      &:active {
        background: none;
      }

      &.everli-button-disabled,
      &[disabled] {
        color: $button-text-color-disabled;

        &:hover,
        &:active {
          background: $button-color-transparent-background;
        }
      }
    }
  }

  &.everli-button-disabled,
  &[disabled] {
    color: $button-text-color-disabled;
    cursor: default;
  }

  &.everli-button-anchor {
    align-content: center;
    align-items: center;
    display: flex;
    justify-content: center;

    &:hover,
    &:active {
      color: $button-primary-text;
      text-decoration: none;
    }
  }

  &.everli-button-icon {
    align-items: center;
    display: flex;
    justify-content: center;

    .everli-icon {
      fill: currentColor;
    }

    .everli-icon-wrapper {
      height: 24px;
      width: 24px;
    }

    .icon-wrapper {
      display: block;
      height: 24px;
      margin-right: 8px;
      width: 24px;
    }

    &.everli-button-icon-content {
      min-width: auto;
      padding: 0;
      width: $button-size-medium;
      height: $button-size-medium;

      &.everli-button-large {
        width: $button-size-large;
        height: $button-size-large;
      }

      &.everli-button-small {
        height: $button-size-small;
        width: $button-size-small;

        .everli-icon-wrapper {
          width: 18px;
          height: 18px;
        }

        .icon-wrapper {
          width: 18px;
          height: 18px;
        }
      }

      .icon-wrapper {
        margin-right: 0;
      }
    }
  }

  &.everli-button-small {
    @include button-text-small;

    padding: 6px 12px;
  }

  &.everli-button-large {
    @include button-text-large;

    padding-top: 12px;
    padding-bottom: 12px;
  }

  &.everli-button-full {
    max-width: 100%;
    width: 100%;
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

      &:hover,
      &:active {
        background: $dark-button-secondary-background-hover;
      }
    }
  }
}
</style>
