<template>
  <div class="magnifier-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <el-card shadow="hover">
          <div slot="header"><span>放大镜1</span></div>
          <vab-magnifier
            url="https://picsum.photos/960/540?random=1"
            type="circle"
          ></vab-magnifier>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <el-card shadow="hover">
          <div slot="header"><span>放大镜2</span></div>
          <vab-magnifier
            url="https://picsum.photos/960/540?random=2"
            type="square"
          ></vab-magnifier>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import VabMagnifier from "@/plugins/vabMagnifier.js";

export default {
  name: "Magnifier",
  components: {
    VabMagnifier,
  },
};
</script>
