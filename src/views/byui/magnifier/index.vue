<template>
  <div class="magnifier-container">
    <el-row :gutter="15">
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <el-card shadow="hover">
          <div slot="header"><span>放大镜1</span></div>
          <byui-magnifier
            url="http://p5.qhimg.com/t01cda6297b033f789f.jpg"
            type="circle"
          ></byui-magnifier>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <el-card shadow="hover">
          <div slot="header"><span>放大镜2</span></div>
          <byui-magnifier
            url="http://p5.qhimg.com/t01cda6297b033f789f.jpg"
            type="square"
          ></byui-magnifier>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ByuiMagnifier from "@/plugins/byuiMagnifier.js";

export default {
  name: "Magnifier",
  components: {
    ByuiMagnifier,
  },
};
</script>
<style lang="scss" scoped></style>
