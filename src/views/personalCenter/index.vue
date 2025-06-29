<template>
  <div class="personalCenter-container">
    <vab-page-header description="个人信息管理，包含个人简介、基本设置、安全设置等" :icon="['fas', 'user-cog']" title="个人中心" />

    <el-tabs :tab-position="tabPosition">
      <el-tab-pane label="个人简介">个人简介</el-tab-pane>
      <el-tab-pane label="基本设置">基本设置</el-tab-pane>
      <el-tab-pane label="安全设置">安全设置</el-tab-pane>
      <el-tab-pane label="账户绑定">安全设置</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import VabPageHeader from '@/components/VabPageHeader'

  export default {
    name: 'PersonalCenter',
    components: {
      VabPageHeader,
    },
    data() {
      return {
        tabPosition: 'left',
      }
    },
    created() {},
    methods: {},
  }
</script>
