<template>
  <img
    v-if="isExternal"
    :src="styleExternalIcon"
    class="svg-external-icon svg-icon"
    v-on="$listeners"
  />
  <svg v-else :class="svgClass" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
  import { isExternal } from '@/utils/validate'

  export default {
    name: 'VabColorfulIcon',
    props: {
      iconClass: {
        type: String,
        required: true,
      },
      className: {
        type: String,
        default: '',
      },
    },
    computed: {
      isExternal() {
        return isExternal(this.iconClass)
      },
      iconName() {
        return `#colorful-icon-${this.iconClass}`
      },
      svgClass() {
        if (this.className) {
          return 'svg-icon ' + this.className
        } else {
          return 'svg-icon'
        }
      },
      styleExternalIcon() {
        return this.iconClass
      },
    },
  }
</script>

<style lang="scss" scoped>
  .svg-icon {
    width: 1em;
    height: 1em;
    overflow: hidden;
    vertical-align: -0.15em;
    fill: currentColor;

    &:hover {
      opacity: 0.8;
    }
  }

  .svg-external-icon {
    display: inline-block;
  }
</style>
