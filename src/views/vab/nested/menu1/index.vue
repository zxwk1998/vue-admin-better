<template>
  <div class="menu1-container">
    <vab-page-header description="嵌套路由示例页面" :icon="['fas', 'sitemap']" title="嵌套路由 1" />

    <el-alert :closable="false" title="嵌套路由 1" type="success">
      <router-view />
    </el-alert>
  </div>
</template>

<script>
  import VabPageHeader from '@/components/VabPageHeader'

  export default {
    name: 'Menu1',
    components: {
      VabPageHeader,
    },
  }
</script>
