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
    &.eds-button-outline {
      border-color: $eds-button-color-outline-border-dark;
    }

    &:hover {
      background: $eds-button-color-overlay-hover;
    }

    &.eds-button-facebook {
      background: $eds-button-color-facebook-fill-background-default;

      &.eds-button-fill {
        background: $eds-button-color-facebook-fill-background-default;
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

    &.eds-button-icon {
      &.eds-button-icon-content {
        border-radius: $eds-radius-full;
      }
    }
  }
}
</style>
