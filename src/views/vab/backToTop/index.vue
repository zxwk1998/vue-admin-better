<template>
  <div class="back-to-top-container">
    <vab-page-header description="页面滚动时显示返回顶部按钮，提升用户体验" :icon="['fas', 'arrow-up']" title="返回顶部" />

    <div v-for="(item, index) in 100" :key="index" style="padding: 20px">测试滚轮显示返回顶部-{{ index }}</div>
    <!-- <el-tooltip placement="top" content="返回顶部"><vab-back-to-top transition-name="fade" /></el-tooltip> -->
  </div>
</template>

<script>
  import VabPageHeader from '@/components/VabPageHeader'

  export default {
    name: 'BackToTop',
    components: {
      VabPageHeader,
    },
    data() {
      return {}
    },
  }
</script>
<style lang="scss" scoped>
  .placeholder-container div {
    margin: 10px;
  }
</style>
