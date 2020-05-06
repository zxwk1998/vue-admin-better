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
const tagAndTagSpacing = 5;

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
      let $wrap = $($scrollWrapper);
      const tagList = this.$parent.$refs.tag;

      let firstTag = null;
      let lastTag = null;

      if (tagList.length > 0) {
        firstTag = tagList[0];
        lastTag = tagList[tagList.length - 1];
      }

      if (firstTag === currentTag) {
        $wrap.animate({ scrollLeft: 0 }, 400);
      } else if (lastTag === currentTag) {
        $wrap.animate(
          { scrollLeft: $scrollWrapper.scrollWidth - $containerWidth + 15 },
          400
        );
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
          $wrap.animate(
            { scrollLeft: afterNextTagOffsetLeft - $containerWidth },
            400
          );
        } else if (beforePrevTagOffsetLeft < $scrollWrapper.scrollLeft) {
          $wrap.animate({ scrollLeft: beforePrevTagOffsetLeft }, 400);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.scroll-container {
  position: relative;
  width: 100%;
  min-height: 38px;
  overflow: hidden;
  white-space: nowrap;

  ::v-deep {
    .el-scrollbar__thumb {
      overflow-y: hidden;
    }
  }
}
</style>
