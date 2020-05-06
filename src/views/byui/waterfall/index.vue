<template>
  <div class="waterfall-container">
    <el-row :gutter="15">
      <el-col :span="24">
        <el-divider content-position="left">
          瀑布屏占用网络带宽较大,加载稍慢...
        </el-divider>
      </el-col>
      <el-col :span="24">
        <byui-waterfall
          :height="height"
          :imgs-arr="imgsArr"
          @waterfallFunction="getData"
        ></byui-waterfall>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getWaterfallList } from "@/api/waterfall.js";
import ByuiWaterfall from "@/components/ByuiWaterfall";

export default {
  name: "Waterfall",
  components: {
    ByuiWaterfall,
  },
  data() {
    return {
      group: 0,
      pullDownDistance: 0,
      imgsArr: [],
      height: 0,
    };
  },
  created() {
    this.getData();
    this.height = this.$baseTableHeight();
  },
  methods: {
    getData() {
      getWaterfallList({
        group: this.group,
      }).then((res) => {
        this.group++;
        /* if (this.group === 10) {
                      this.$refs.waterfall.waterfallOver();
                      return;
                    } */
        this.imgsArr = this.imgsArr.concat(res.data);
      });
    },
  },
};
</script>
