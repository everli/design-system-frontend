<template>
  <component
    :is="tag"
    :href="link"
    :disabled="!enabled"
    :class="buttonClass"
    class="everli-button"
    @click.stop="handleClick"
  >
    <template v-if="iconName">
      <span class="icon-wrapper">
        <SvgSprite v-once />
        <svg class="everli-icon">
          <use :xlink:href="`#${iconName}`"></use>
        </svg>
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
  },
  computed: {
    /**
     * @description Returns button class name
     *
     * @returns {Array}
     */
    buttonClass() {
      return [
        this.variant,
        this.size,
        { link: this.link },
        { "with-icon": this.icon },
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
  },
  methods: {
    /**
     * @description Emit click event
     */
    handleClick() {
      this.$emit("click", this.link)
    },
  },
}
</script>

<style scoped lang="scss">
.everli-button {
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

  &.link {
    align-content: center;
    align-items: center;
    display: flex;
  }

  &.with-icon {
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0 auto;

    .icon-wrapper {
      display: block;
      height: 24px;
      margin-right: 8px;
      width: 24px;
    }
  }

  &.disabled,
  &[disabled] {
    background: $button-primary-background-disabled;
    color: $button-primary-text-disabled;
    cursor: default;
  }

  &.small {
    @include button-text-small;

    height: $button-size-small;
  }

  &.large {
    @include button-text-large;

    height: $button-size-large;
  }

  &.secondary {
    background: $button-secondary-background-default;
    border: 1px solid $button-secondary-border;
    color: $button-secondary-text;

    &:hover {
      background: $button-secondary-background-hover;
    }
  }

  &.ghost {
    background: $button-ghost-background-default;
    color: $button-ghost-text;

    &:hover {
      background: $button-ghost-background-hover;
    }
  }

  &.full {
    max-width: 100%;
    width: 100%;
  }

  .everli-icon {
    width: 24px;
    height: 24px;
  }
}
</style>

<style lang="scss">
.everli-icon {
  fill: currentColor;
}

.everli-dark-mode {
  .everli-button {
    &.secondary {
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
