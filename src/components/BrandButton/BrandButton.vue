<template>
  <EverliButton v-bind="componentProperties" class="eds-brand-button">
    <slot v-if="$slots.default">
      {{ $slots.default }}
    </slot>
  </EverliButton>
</template>

<script>
import EverliButton from "@/components/Button/Button.vue"

export default {
  name: "EverliBrandButton",
  components: {
    EverliButton,
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
    componentProperties() {
      return {
        enabled: this.enabled,
        text: this.text,
        variant: this.variant,
        buttonStyle: this.buttonStyle,
        size: this.size,
        link: this.link,
        icon: this.icon,
        iconAlignment: this.iconAlignment,
        contentDescription: this.contentDescription,
      }
    },
  },
}
</script>

<style lang="scss">
.eds-app .eds-button {
  &.eds-brand-button {
    &:active,
    &:hover {
      position: relative;
      overflow: hidden;

      ::after {
        display: block;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
        bottom: 0;
        right: 0;
        background: $eds-button-color-overlay-hover;
      }
    }

    &.eds-button-facebook {
      background: $eds-button-color-facebook-fill-background-default;

      &.eds-button-fill {
        background: $eds-button-color-facebook-fill-background-default;
      }

      &.eds-button-outline {
        &.eds-button-icon {
          .icon-wrapper {
            color: $eds-button-icon-color-facebook-outline;
          }
        }
      }
    }

    &.eds-button-google {
      background: $eds-button-color-google-fill-background-default;

      &.eds-button-fill {
        background: $eds-button-color-google-fill-background-default;
      }
    }

    &.eds-button-apple {
      background: $eds-button-color-apple-fill-background-default;

      &.eds-button-fill {
        background: $eds-button-color-apple-fill-background-default;
      }
    }

    &.eds-button-blik {
      background: $eds-button-color-blik-fill-background-default;

      &.eds-button-fill {
        background: $eds-button-color-blik-fill-background-default;
      }
    }

    &.eds-button-outline {
      background: $eds-button-primary-outline-background-default;
      border: 1px solid $eds-button-color-outline-border-dark;
      color: $eds-text-color-primary;
    }

    &.eds-button-disabled,
    &[disabled] {
      background: $eds-button-color-fill-background-disabled;
      color: $eds-button-text-color-disabled;
      cursor: default;

      &:hover,
      &:active {
        ::after {
          display: none;
        }
      }

      &.eds-button-icon {
        &.eds-button-blik,
        &.eds-button-google {
          .icon-wrapper {
            opacity: 0.4;
          }
        }
      }
    }

    &.eds-button-icon {
      &.eds-button-icon-content {
        border-radius: $eds-radius-full;
      }
    }
  }
}
</style>
