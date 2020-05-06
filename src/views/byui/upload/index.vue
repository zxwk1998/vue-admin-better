<template>
  <div class="upload-container">
    <el-divider content-position="left">演示环境可能无法模拟上传 </el-divider>
    <byui-upload
      ref="byuiUpload"
      url="/upload"
      name="file"
      :limit="50"
      :size="2"
    ></byui-upload>
    <el-button type="primary" @click="handleShow({ key: 'value' })"
      >模拟上传
    </el-button>
  </div>
</template>

<script>
import ByuiUpload from "@/components/ByuiUpload";

export default {
  name: "Upload",
  components: {
    ByuiUpload,
  },
  data() {
    return {};
  },
  methods: {
    handleShow(data) {
      this.$refs["byuiUpload"].handleShow(data);
    },
  },
};
</script>
