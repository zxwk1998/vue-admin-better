<template>
  <div class="upload-container">
    <vab-page-header description="文件上传组件，支持拖拽上传、进度显示等功能" :icon="['fas', 'cloud-upload-alt']" title="文件上传" />

    <el-divider content-position="left">演示环境可能无法模拟上传</el-divider>
    <vab-upload ref="vabUpload" :limit="50" name="file" :size="2" url="/upload" />
    <el-button type="primary" @click="handleShow({ key: 'value' })">模拟上传</el-button>
  </div>
</template>

<script>
  import VabUpload from '@/components/VabUpload'
  import VabPageHeader from '@/components/VabPageHeader'

  export default {
    name: 'Upload',
    components: {
      VabUpload,
      VabPageHeader,
    },
    data() {
      return {}
    },
    methods: {
      handleShow(data) {
        this.$refs['vabUpload'].handleShow(data)
      },
    },
  }
</script>
