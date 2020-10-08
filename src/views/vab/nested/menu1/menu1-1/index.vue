<template>
  <div class="menu1-1-container">
    <el-alert :closable="false" title="嵌套路由 1-1" type="success">
      <router-view />
    </el-alert>
  </div>
</template>
<style lang="scss" scoped>
  [class*='-container'] {
    padding: 15px;
    background: $base-color-white;
  }
</style>
