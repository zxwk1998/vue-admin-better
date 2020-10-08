<template>
  <div class="upload-container">
    <el-divider content-position="left">演示环境可能无法模拟上传</el-divider>
    <vab-upload
      ref="vabUpload"
      url="/upload"
      name="file"
      :limit="50"
      :size="2"
    ></vab-upload>
    <el-button type="primary" @click="handleShow({ key: 'value' })">
      模拟上传
    </el-button>
  </div>
</template>

<script>
  import VabUpload from '@/components/VabUpload'

  export default {
    name: 'Upload',
    components: {
      VabUpload,
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
