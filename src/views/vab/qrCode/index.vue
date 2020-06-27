<template>
  <div class="qr-code-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
        <el-card shadow="hover">
          <div slot="header"><span>二维码示例</span></div>
          <a target="_blank" :href="url">
            <vab-qr-code :image-path="imagePath" :url="url"></vab-qr-code>
          </a>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import VabQrCode from "@/components/VabQrCode";

export default {
  name: "QrCode",
  components: {
    VabQrCode,
  },
  data() {
    return {
      url: "https://www.baidu.com",
      imagePath: require("@/assets/qr_logo/lqr_logo.png"),
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.qr-code-container {
  ::v-deep {
    .el-card__body {
      display: flex;
      align-content: center;
      justify-content: center;
    }
  }
}
</style>
