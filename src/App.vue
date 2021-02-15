<template>
  <div id="vue-admin-beautiful">
    <a-config-provider :locale="zh_CN">
      <router-view />
    </a-config-provider>
  </div>
</template>
<script>
  import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN'
  import moment from 'moment'
  import 'moment/locale/zh-cn'
  moment.locale('zh-cn')
  export default {
    name: 'App',
    data() {
      return {
        zh_CN,
      }
    },
  }
</script>
<style lang="less">
  @import '~@/vab/styles/vab.less';
</style>
