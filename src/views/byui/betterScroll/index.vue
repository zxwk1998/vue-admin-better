<template>
  <div class="better-scroll-container">
    <el-row :gutter="15">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <p>滚动时间 ms</p>
        <el-slider v-model="time" :min="100" :max="3000"></el-slider>
        <el-button-group>
          <el-button @click="handleScrollTo(100)">滚动到100像素位置</el-button>
          <el-button @click="handleScrollTo(300)">滚动到300像素位置</el-button>
        </el-button-group>
        <el-button-group>
          <el-button @click="handleScrollBy(50)">向下滚动50像素</el-button>
          <el-button @click="handleScrollBy(-50)">向上滚动50像素</el-button>
        </el-button-group>
        <el-button-group>
          <el-button @click="handleScrollToElement(4)">滚动到第四个</el-button>
          <el-button @click="handleScrollToElement(14)"
            >滚动到第十四个
          </el-button>
          <el-button @click="handleScrollToElement(24)"
            >滚动到第二十四个
          </el-button>
        </el-button-group>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <ul ref="wrapper">
          <li v-for="n in 100" :ref="`bs-item-${n}`" :key="n">n : {{ n }}</li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "BetterScroll",
  data() {
    return {
      time: 300,
      BS: null,
    };
  },
  mounted() {
    this.scrollInit();
  },
  beforeDestroy() {
    this.scrollDestroy();
  },
  methods: {
    handleScrollTo(y) {
      this.BS.scrollTo(0, -y, this.time);
    },
    handleScrollBy(y) {
      this.BS.scrollBy(0, -y, this.time);
    },
    handleScrollToElement(n) {
      this.BS.scrollToElement("#" + this.$refs[`bs-item-${n}`], this.time);
    },
    scrollInit() {
      this.BS = new BScroll(this.$refs["wrapper"], {
        mouseWheel: true,
        scrollbar: {
          fade: true,
          interactive: false,
        },
      });
    },
    scrollDestroy() {
      if (this.BS) {
        this.BS.destroy();
      }
    },
  },
};
</script>
