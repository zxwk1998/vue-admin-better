<template>
  <div>
    <el-scrollbar
      ref="scrollContainer"
      :vertical="false"
      class="scroll-container"
    >
      <slot />
    </el-scrollbar>
  </div>
</template>

<script>
const tagAndTagSpacing = 4;

export default {
  name: "ScrollPane",
  data() {
    return {
      left: 0,
      width: 0,
    };
  },
  computed: {
    scrollWrapper() {
      return this.$refs.scrollContainer.$refs.wrap;
    },
  },
  mounted() {},
  methods: {
    moveToTarget(currentTag) {
      const $container = this.$refs.scrollContainer.$el;
      const $containerWidth = $container.offsetWidth;
      const $scrollWrapper = this.scrollWrapper;
      const tagList = this.$parent.$refs.tag;

      let firstTag = null;
      let lastTag = null;

      if (tagList.length > 0) {
        firstTag = tagList[0];
        lastTag = tagList[tagList.length - 1];
      }

      if (firstTag === currentTag) {
        $scrollWrapper.scrollLeft = 0;
      } else if (lastTag === currentTag) {
        $scrollWrapper.scrollLeft =
          $scrollWrapper.scrollWidth - $containerWidth;
      } else {
        const currentIndex = tagList.findIndex((item) => item === currentTag);
        const prevTag = tagList[currentIndex - 1];
        const nextTag = tagList[currentIndex + 1];

        const afterNextTagOffsetLeft =
          nextTag.$el.offsetLeft + nextTag.$el.offsetWidth + tagAndTagSpacing;

        const beforePrevTagOffsetLeft =
          prevTag.$el.offsetLeft - tagAndTagSpacing;

        if (
          afterNextTagOffsetLeft >
          $scrollWrapper.scrollLeft + $containerWidth
        ) {
          $scrollWrapper.scrollLeft = afterNextTagOffsetLeft - $containerWidth;
        } else if (beforePrevTagOffsetLeft < $scrollWrapper.scrollLeft) {
          $scrollWrapper.scrollLeft = beforePrevTagOffsetLeft;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.scroll-container {
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 38px;
}
</style>
