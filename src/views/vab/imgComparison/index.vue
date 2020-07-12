<template>
  <div class="image-comparison-container">
    <el-row :gutter="20">
      <el-col
        v-for="(item, index) in 24"
        :key="index"
        :xs="24"
        :sm="24"
        :md="12"
        :lg="8"
        :xl="8"
      >
        <vab-comparison
          :id="'silder-' + index"
          style="margin-bottom: 12px;"
          :width="comparison.width"
          :height="comparison.height"
          :src1="comparison.src1"
          :src2="comparison.src2"
          :start="random(20, 80)"
        ></vab-comparison>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import VabComparison from "@/plugins/vabComparison";
import { random } from "@/utils";

export default {
  name: "ImgComparison",
  components: { VabComparison },
  data() {
    return {
      comparison: {
        width: "100%",
        height: "auto",
        src1: require("@/assets/comparison/left.jpg"),
        src2: require("@/assets/comparison/right.jpg"),
        start: random(0, 100),
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    random(m, n) {
      return random(m, n).toString();
    },
  },
};
</script>
