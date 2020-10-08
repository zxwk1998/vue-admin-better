<template>
  <a-sub-menu :key="item.fullPath">
    <template v-slot:title>
      <span class="anticon">
        <vab-icon :icon="item.meta.icon"></vab-icon>
      </span>
      <span>{{ item.meta.title }}</span>
    </template>
    <slot></slot>
  </a-sub-menu>
</template>

<script>
  import VabIcon from '@/layout/vab-icon'
  export default {
    name: 'Submenu',
    components: { VabIcon },
    props: {
      item: {
        type: Object,
        default() {
          return null
        },
      },
      routeChildren: {
        type: Object,
        default() {
          return null
        },
      },
    },
    methods: {},
  }
</script>
