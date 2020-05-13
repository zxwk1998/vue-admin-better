<template>
  <div id="slideVerify" class="slide-verify" onselectstart="return false;">
    <canvas ref="canvas" class="canvas" :width="w" :height="h"></canvas>
    <div class="slide-verify-refresh-icon" @click="refresh"></div>
    <canvas
      ref="block"
      :width="w"
      :height="h"
      class="slide-verify-block"
    ></canvas>
    <!-- container -->
    <div
      class="slide-verify-slider"
      :class="{
        'container-active': containerActive,
        'container-success': containerSuccess,
        'container-fail': containerFail,
      }"
    >
      <div class="slide-verify-slider-mask" :style="{ width: sliderMaskWidth }">
        <!-- slider -->
        <div
          class="slide-verify-slider-mask-item"
          :style="{ left: sliderLeft }"
          @mousedown="sliderDown"
          @touchstart="touchStartEvent"
          @touchmove="touchMoveEvent"
          @touchend="touchEndEvent"
        >
          <!-- <div class="slide-verify-slider-mask-item-icon"></div> -->
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <span class="slide-verify-slider-text">{{ sliderText }}</span>
    </div>
  </div>
</template>
<script>
const PI = Math.PI;
function sum(x, y) {
  return x + y;
}
function square(x) {
  return x * x;
}
export default {
  name: "SlideVerify",
  props: {
    l: {
      type: Number,
      default: 42,
    },
    r: {
      type: Number,
      default: 10,
    },
    w: {
      type: Number,
      default: 310,
    },
    h: {
      type: Number,
      default: 155,
    },
    sliderText: {
      type: String,
      default: "Slide filled right",
    },
  },
  data() {
    return {
      containerActive: false,
      containerSuccess: false,
      containerFail: false,
      canvasCtx: null,
      blockCtx: null,
      block: null,
      block_x: undefined,
      block_y: undefined,
      L: this.l + this.r * 2 + 3,
      img: undefined,
      originX: undefined,
      originY: undefined,
      isMouseDown: false,
      trail: [],
      sliderLeft: 0,
      sliderMaskWidth: 0,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.initDom();
      this.initImg();
      this.bindEvents();
    },
    initDom() {
      this.block = this.$refs.block;
      this.canvasCtx = this.$refs.canvas.getContext("2d");
      this.blockCtx = this.block.getContext("2d");
    },
    initImg() {
      const img = this.createImg(() => {
        this.drawBlock();
        this.canvasCtx.drawImage(img, 0, 0, this.w, this.h);
        this.blockCtx.drawImage(img, 0, 0, this.w, this.h);
        let { block_x: x, block_y: y, r, L } = this;
        let _y = y - r * 2 - 1;
        let ImageData = this.blockCtx.getImageData(x, _y, L, L);
        this.block.width = L;
        this.blockCtx.putImageData(ImageData, 0, _y);
      });
      this.img = img;
    },
    drawBlock() {
      this.block_x = this.getRandomNumberByRange(
        this.L + 10,
        this.w - (this.L + 10)
      );
      this.block_y = this.getRandomNumberByRange(
        10 + this.r * 2,
        this.h - (this.L + 10)
      );
      this.draw(this.canvasCtx, this.block_x, this.block_y, "fill");
      this.draw(this.blockCtx, this.block_x, this.block_y, "clip");
    },
    draw(ctx, x, y, operation) {
      let { l, r } = this;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.arc(x + l / 2, y - r + 2, r, 0.72 * PI, 2.26 * PI);
      ctx.lineTo(x + l, y);
      ctx.arc(x + l + r - 2, y + l / 2, r, 1.21 * PI, 2.78 * PI);
      ctx.lineTo(x + l, y + l);
      ctx.lineTo(x, y + l);
      ctx.arc(x + r - 2, y + l / 2, r + 0.4, 2.76 * PI, 1.24 * PI, true);
      ctx.lineTo(x, y);
      ctx.lineWidth = 2;
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
      ctx.stroke();
      ctx[operation]();
      ctx.globalCompositeOperation = "xor";
    },
    createImg(onload) {
      const img = document.createElement("img");
      img.crossOrigin = "Anonymous";
      img.onload = onload;
      img.onerror = () => {
        img.src = this.getRandomImg();
      };
      img.src = this.getRandomImg();
      return img;
    },
    getRandomImg() {
      return (
        "https://picsum.photos/350/170/?image=" +
        this.getRandomNumberByRange(0, 50)
      );
    },
    getRandomNumberByRange(start, end) {
      return Math.round(Math.random() * (end - start) + start);
    },
    refresh() {
      this.reset();
      this.$emit("refresh");
    },
    sliderDown(event) {
      this.originX = event.clientX;
      this.originY = event.clientY;
      this.isMouseDown = true;
    },
    touchStartEvent(e) {
      this.originX = e.changedTouches[0].pageX;
      this.originY = e.changedTouches[0].pageY;
      this.isMouseDown = true;
    },
    bindEvents() {
      document.addEventListener("mousemove", (e) => {
        if (!this.isMouseDown) return false;
        const moveX = e.clientX - this.originX;
        const moveY = e.clientY - this.originY;
        if (moveX < 0 || moveX + 38 >= this.w) return false;
        this.sliderLeft = moveX + "px";
        let blockLeft = ((this.w - 40 - 20) / (this.w - 40)) * moveX;
        this.block.style.left = blockLeft + "px";
        this.containerActive = true;
        this.sliderMaskWidth = moveX + "px";
        this.trail.push(moveY);
      });
      document.addEventListener("mouseup", (e) => {
        if (!this.isMouseDown) return false;
        this.isMouseDown = false;
        if (e.clientX === this.originX) return false;
        this.containerActive = false;
        const { spliced, TuringTest } = this.verify();
        if (spliced) {
          if (TuringTest) {
            this.containerSuccess = true;
            this.$emit("success");
          } else {
            this.containerFail = true;
            this.sliderText = "try again";
            this.reset();
          }
        } else {
          this.containerFail = true;
          this.$emit("fail");
          setTimeout(() => {
            this.reset();
          }, 1000);
        }
      });
    },
    touchMoveEvent(e) {
      if (!this.isMouseDown) return false;
      const moveX = e.changedTouches[0].pageX - this.originX;
      const moveY = e.changedTouches[0].pageY - this.originY;
      if (moveX < 0 || moveX + 38 >= this.w) return false;
      this.sliderLeft = moveX + "px";
      let blockLeft = ((this.w - 40 - 20) / (this.w - 40)) * moveX;
      this.block.style.left = blockLeft + "px";
      this.containerActive = true;
      this.sliderMaskWidth = moveX + "px";
      this.trail.push(moveY);
    },
    touchEndEvent(e) {
      if (!this.isMouseDown) return false;
      this.isMouseDown = false;
      if (e.changedTouches[0].pageX === this.originX) return false;
      this.containerActive = false;
      const { spliced, TuringTest } = this.verify();
      if (spliced) {
        if (TuringTest) {
          this.containerSuccess = true;
          this.$emit("success");
        } else {
          this.containerFail = true;
          this.sliderText = "try again";
          this.reset();
        }
      } else {
        this.containerFail = true;
        this.$emit("fail");
        setTimeout(() => {
          this.reset();
        }, 1000);
      }
    },
    verify() {
      const arr = this.trail;
      const average = arr.reduce(sum) / arr.length;
      const deviations = arr.map((x) => x - average);
      const stddev = Math.sqrt(deviations.map(square).reduce(sum) / arr.length);
      const left = parseInt(this.block.style.left);
      return {
        spliced: Math.abs(left - this.block_x) < 10,
        TuringTest: average !== stddev,
      };
    },
    reset() {
      this.containerActive = false;
      this.containerSuccess = false;
      this.containerFail = false;
      this.sliderLeft = 0;
      this.block.style.left = 0;
      this.sliderMaskWidth = 0;
      let { w, h } = this;
      this.canvasCtx.clearRect(0, 0, w, h);
      this.blockCtx.clearRect(0, 0, w, h);
      this.block.width = w;
      this.img.src = this.getRandomImg();
    },
  },
};
</script>
<style lang="scss" scoped>
.slide-verify {
  position: relative;
  width: 350px;
}

.slide-verify-block {
  position: absolute;
  top: 0;
  left: 0;
}

.slide-verify-slider {
  position: relative;
  width: 352px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #f7f9fa;
  border: 1px solid #e4e7eb;
}

.canvas {
  border: 1px solid #e4e7eb;
}

.slide-verify-slider-mask {
  position: absolute;
  top: 0;
  left: 0;
  background: #d1e9fe;
}

.slide-verify-slider-mask-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 38px;
  height: 38px;
  color: $base-color-white;
  cursor: pointer;
  background: $base-color-blue;
  transition: background 0.2s linear;
}

.slide-verify-slider-mask-item:hover {
  background: $base-color-blue;
}

.slide-verify-slider-mask-item:hover .slide-verify-slider-mask-item-icon {
  background-position: 0 -13px;
}

.container-active .slide-verify-slider-mask-item {
}

.container-active .slide-verify-slider-mask {
}

.container-success .slide-verify-slider-mask-item {
  color: $base-color-white;
  background-color: $base-color-green !important;
}

.container-success .slide-verify-slider-mask {
  background-color: #d2f4ef;
}

.container-success .slide-verify-slider-mask-item-icon {
  background-position: 0 0 !important;
}

.container-fail .slide-verify-slider-mask-item {
  color: $base-color-white;
  background-color: $base-color-red !important;
}

.container-fail .slide-verify-slider-mask {
  background-color: #fce1e1;
}

.container-fail .slide-verify-slider-mask-item-icon {
  top: 14px;
  background-position: 0 -82px !important;
}

.container-active .slide-verify-slider-text,
.container-success .slide-verify-slider-text,
.container-fail .slide-verify-slider-text {
  display: none;
}

.el-icon-arrow-right {
  margin-top: 12px;
  font-size: 20px;
}

.slide-verify-slider-mask-item:hover .el-icon-arrow-right {
  color: #fff;
}
</style>
