<template>
  <div class="loading-container">
    <vab-page-header description="多种加载效果展示，包含传统loading和多彩loading" :icon="['fas', 'spinner']" title="加载组件" />
    <el-divider content-position="left">传统loading</el-divider>
    <el-button type="primary" @click="handleLoading()">默认效果</el-button>
    <el-button type="primary" @click="handleLoading(1)">效果1</el-button>
    <el-button type="primary" @click="handleLoading(2)">效果2</el-button>
    <el-button type="primary" @click="handleLoading(3)">效果3</el-button>
    <el-button type="primary" @click="handleLoading(4)">效果4</el-button>
    <el-button type="primary" @click="handleLoading(5)">效果5</el-button>
    <el-button type="primary" @click="handleLoading(6)">效果6</el-button>
    <el-button type="primary" @click="handleLoading(7)">效果7</el-button>
    <el-button type="primary" @click="handleLoading(8)">效果8</el-button>
    <el-button type="primary" @click="handleLoading(9)">效果9</el-button>
    <br />
    <br />
    <br />
    <el-divider content-position="left">多彩loading</el-divider>
    <el-button type="primary" @click="handleColorfullLoading(1)">效果1</el-button>
    <el-button type="primary" @click="handleColorfullLoading(2)">效果2</el-button>
    <el-button type="primary" @click="handleColorfullLoading(3)">效果3</el-button>
    <el-button type="primary" @click="handleColorfullLoading(4)">效果4</el-button>
  </div>
</template>

<script>
  import VabPageHeader from '@/components/VabPageHeader'

  export default {
    name: 'Loading',
    components: {
      VabPageHeader,
    },
    data() {
      return {}
    },
    methods: {
      handleLoading(index) {
        const Loading = this.$baseLoading(index)
        setTimeout(() => {
          Loading.close()
        }, 3000)
      },
      handleColorfullLoading(index) {
        const Loading = this.$baseColorfullLoading(index)
        setTimeout(() => {
          Loading.close()
        }, 3000)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .loading-container {
    ::v-deep {
      .el-button {
        margin-top: 10px;
        margin-right: 10px;
        margin-left: 0;
      }

      .el-button + .el-button {
        margin-right: 10px;
        margin-left: 0;
      }
    }
  }
</style>
