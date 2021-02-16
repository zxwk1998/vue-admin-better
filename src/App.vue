<template>
  <div id="vue-admin-beautiful">
    <a-config-provider :locale="locale">
      <router-view />
    </a-config-provider>
  </div>
</template>
<script>
  import zhCN from 'ant-design-vue/es/locale/zh_CN'

  export default {
    name: 'App',
    data() {
      return {
        locale: zhCN,
      }
    },
  }
</script>
<style lang="less">
  @import '~@/vab/styles/vab.less';
</style>
