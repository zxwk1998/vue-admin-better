<template>
  <vue-waterfall-easy
    :height="height"
    :imgs-arr="imgsArr"
    :max-cols="maxCols"
    @scrollReachBottom="waterfallFunction"
  ></vue-waterfall-easy>
</template>
<script>
import vueWaterfallEasy from "vue-waterfall-easy";

export default {
  name: "ByuiWaterfall",
  components: {
    vueWaterfallEasy,
  },
  props: {
    scrollReachBottom: {
      type: Number, //底部回调
      default: null,
    },
    width: {
      type: Number, // 容器宽度
      default: null,
    },
    height: {
      type: [Number, String], // 容器高度
      default: 500,
    },
    reachBottomDistance: {
      type: Number, // 滚动触底距离，触发加载新图片
      default: 20,
    },
    loadingDotCount: {
      type: Number, // loading 点数
      default: 3,
    },
    loadingDotStyle: {
      type: Object,
      default: null,
    },
    gap: {
      type: Number, // .img-box 间距
      default: 15,
    },
    mobileGap: {
      type: Number,
      default: 8,
    },
    maxCols: {
      type: Number,
      default: 6,
    },
    imgsArr: {
      type: Array,
      required: true,
    },
    srcKey: {
      type: String,
      default: "src",
    },
    hrefKey: {
      type: String,
      default: "href",
    },
    imgWidth: {
      type: Number,
      default: 240,
    },
    isRouterLink: {
      type: Boolean,
      default: false,
    },
    linkRange: {
      type: String, // card | img | custom 自定义通过slot自定义链接范围
      default: "card",
    },
    loadingTimeOut: {
      type: Number, // 预加载事件小于500毫秒就不显示加载动画，增加用户体验
      default: 500,
    },
    cardAnimationClass: {
      type: [String],
      default: "default-card-animation",
    },
    enablePullDownEvent: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    waterfallFunction() {
      this.$emit("waterfallFunction");
    },
  },
};
</script>
<style>
.vue-waterfall-easy-container > .loading.ball-beat > .dot {
  background-color: #409eff !important;
}
</style>
