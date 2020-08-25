<template>
  <div class="back-to-top-container">
    <div v-for="(item, index) in 100" :key="index" style="padding: 20px">
      测试滚轮显示返回顶部-{{ index }}
    </div>
    <!-- <el-tooltip placement="top" content="返回顶部"><vab-back-to-top transition-name="fade" /></el-tooltip> -->
  </div>
</template>

<script>
  export default {
    name: "BackToTop",
    data() {
      return {};
    },
  };
</script>
<style lang="scss" scoped>
  .placeholder-container div {
    margin: 10px;
  }
</style>
