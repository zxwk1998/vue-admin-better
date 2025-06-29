<template>
  <div class="errorLog-container">
    <vab-page-header
      description="错误日志收集和展示功能，会在顶部navbar上显示错误信息"
      :icon="['fas', 'exclamation-triangle']"
      title="错误日志"
    />

    <el-divider content-position="left">这里会在顶部navbar上模拟一个控制台错误日志</el-divider>
    <el-button type="primary" @click="handleError">点击模拟一个zxwk1998jiayou的错误</el-button>
    <error-test v-if="show" />
  </div>
</template>

<script>
  import ErrorTest from './components/ErrorTest'
  import VabPageHeader from '@/components/VabPageHeader'

  export default {
    name: 'ErrorLog',
    components: {
      ErrorTest,
      VabPageHeader,
    },
    data() {
      return { show: false }
    },
    methods: {
      handleError() {
        this.show = true
      },
    },
  }
</script>
