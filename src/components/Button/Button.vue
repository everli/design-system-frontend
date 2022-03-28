<template>
  <component
    :is="tag"
    :href="link"
    :disabled="!enabled"
    :class="buttonClass"
    class="eds-button"
    @click.stop="handleClick"
  >
    <template v-if="icon">
      <span class="icon-wrapper">
        <template v-if="designSystemIcon">
          <SvgSprite />
          <svg class="eds-icon-wrapper" :aria-label="contentDescription">
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
      default: "fill",
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
        return key ? `eds-button-${key}` : null
      })

      if (this.link) {
        classes.push("eds-button-anchor")
      }

      if (this.icon) {
        classes.push("eds-button-icon")
      }

      if (this.icon && this.iconAlignment) {
        classes.push(`eds-icon-${this.iconAlignment}`)
      }

      if (!this.text && !this.$slots.default) {
        classes.push("eds-button-icon-content")
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
.eds-app .eds-button {
  @include button-text-medium;

  border-radius: $eds-radius-medium;
  box-sizing: border-box;
  color: $eds-button-primary-text;
  display: block;
  outline: none;
  padding: $eds-button-padding;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s;

  &:focus {
    outline: 3px solid $eds-color-border-focus;
  }

  &.eds-button-primary {
    background: $eds-button-primary-fill-background-default;

    &:hover,
    &:active {
      background: $eds-button-primary-fill-background-hover;
    }

    &.eds-button-fill {
      background: $eds-button-primary-fill-background-default;

      &:hover,
      &:active {
        background: $eds-button-primary-fill-background-hover;
      }

      &.eds-button-disabled,
      &[disabled] {
        background: $eds-button-color-fill-background-disabled;
      }
    }

    &.eds-button-outline {
      background: $eds-button-primary-outline-background-default;
      border: 1px solid $eds-button-primary-outline-border-default;
      color: $eds-text-color-primary;

      &:hover,
      &:active {
        background: $eds-button-primary-outline-background-hover;
      }

      &.eds-button-disabled,
      &[disabled] {
        border-color: $eds-button-color-outline-border-disabled;
        color: $eds-button-text-color-disabled;

        &:hover,
        &:active {
          background: $eds-button-primary-outline-background-default;
        }
      }
    }

    &.eds-button-flat {
      background: $eds-button-color-transparent-background;
      border: none;
      color: $eds-text-color-primary;

      &:hover,
      &:active {
        background: $eds-button-primary-flat-background-hover;
      }

      &.eds-button-disabled,
      &[disabled] {
        color: $eds-button-text-color-disabled;

        &:hover,
        &:active {
          background: $eds-button-color-transparent-background;
        }
      }
    }
  }

  &.eds-button-special {
    background: $eds-button-special-fill-background-default;

    &:hover,
    &:active {
      background: $eds-button-special-fill-background-hover;
    }

    &.eds-button-fill {
      background: $eds-button-special-fill-background-default;

      &:hover,
      &:active {
        background: $eds-button-special-fill-background-hover;
      }

      &.eds-button-disabled,
      &[disabled] {
        background: $eds-button-color-fill-background-disabled;
      }
    }

    &.eds-button-outline {
      background: $eds-button-special-outline-background-default;
      border: 1px solid $eds-button-special-outline-border-default;
      color: $eds-text-color-special;

      &:hover,
      &:active {
        background: $eds-button-special-outline-background-hover;
      }

      &.eds-button-disabled,
      &[disabled] {
        border-color: $eds-button-color-outline-border-disabled;
        color: $eds-button-text-color-disabled;

        &:hover,
        &:active {
          background: $eds-button-special-outline-background-default;
        }
      }
    }

    &.eds-button-flat {
      background: $eds-button-color-transparent-background;
      border: none;
      color: $eds-text-color-special;

      &:hover,
      &:active {
        background: $eds-button-special-flat-background-hover;
      }

      &.eds-button-disabled,
      &[disabled] {
        color: $eds-button-text-color-disabled;

        &:hover,
        &:active {
          background: $eds-button-color-transparent-background;
        }
      }
    }
  }

  &.eds-button-link {
    background: none;
    color: $eds-button-text-color-link-default;
    padding-left: 0;
    padding-right: 0;
    min-width: auto;

    &:hover,
    &:active {
      background: none;
      color: $eds-button-text-color-link-hover;
    }

    &.eds-button-large {
      @include button-text-link-large;
    }

    &.eds-button-fill {
      background: none;
      border: none;
    }

    &.eds-button-flat {
      background: none;
      border: none;

      &:hover,
      &:active {
        background: none;
      }

      &.eds-button-disabled,
      &[disabled] {
        color: $eds-button-text-color-disabled;

        &:hover,
        &:active {
          background: $eds-button-color-transparent-background;
        }
      }
    }
  }

  &.eds-button-disabled,
  &[disabled] {
    color: $eds-button-text-color-disabled;
    cursor: default;
  }

  &.eds-button-anchor {
    align-content: center;
    align-items: center;
    display: flex;
    justify-content: center;

    &:hover,
    &:active {
      color: $eds-button-primary-text;
      text-decoration: none;
    }
  }

  &.eds-button-icon {
    align-items: center;
    display: flex;
    justify-content: center;

    &.eds-icon-left {
      flex-direction: row;
    }

    &.eds-icon-right {
      flex-direction: row-reverse;

      .icon-wrapper {
        margin-left: 8px;
        margin-right: 0;
      }
    }

    .eds-icon {
      fill: currentColor;
    }

    .eds-icon-wrapper {
      height: 24px;
      width: 24px;
    }

    .icon-wrapper {
      display: block;
      height: 24px;
      margin-right: 8px;
      width: 24px;
    }

    &.eds-button-icon-content {
      min-width: auto;
      padding: 0;
      width: $eds-button-size-medium;
      height: $eds-button-size-medium;

      &.eds-button-large {
        width: $eds-button-size-large;
        height: $eds-button-size-large;
      }

      &.eds-button-small {
        height: $eds-button-size-small;
        width: $eds-button-size-small;

        .eds-icon-wrapper {
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

  &.eds-button-small {
    @include button-text-small;

    padding: 6px 12px;
  }

  &.eds-button-large {
    @include button-text-large;

    padding-top: 12px;
    padding-bottom: 12px;
  }

  &.eds-button-full {
    max-width: 100%;
    width: 100%;
  }
}
</style>

<style lang="scss">
// Dark MODE handling
.eds-dark-mode {
  .eds-button {
    &.eds-button-secondary {
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
