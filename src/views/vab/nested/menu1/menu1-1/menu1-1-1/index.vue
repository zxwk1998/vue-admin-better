<template>
  <div class="menu1-1-1-container">
    <vab-page-header description="嵌套路由示例页面" :icon="['fas', 'sitemap']" title="嵌套路由 1-1-1" />

    <el-alert :closable="false" title="嵌套路由 1-1-1" type="success" />
  </div>
</template>

<script>
  import VabPageHeader from '@/components/VabPageHeader'

  export default {
    name: 'Menu111',
    components: {
      VabPageHeader,
    },
  }
</script>

<style lang="scss" scoped>
  [class*='-container'] {
    padding: 15px;
    background: $base-color-white;
  }
</style>
