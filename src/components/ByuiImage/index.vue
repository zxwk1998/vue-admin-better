<template>
  <div class="byui-image__outter">
    <el-image
      :src="bigSrc"
      fit="cover"
      style="width: 100%; height: 100%;"
      @click="clickBig"
    ></el-image>
    <el-image
      :src="smallSrc"
      class="byui-image__outter__small"
      fit="cover"
      @click="clickSmall"
    ></el-image>
    <span class="byui-image__outter__percent">{{ percent }}%</span>
  </div>
</template>

<script>
export default {
  name: "ByuiImage",
  components: {},
  props: {
    bigSrc: {
      type: String,
      default: "",
    },
    smallSrc: {
      type: String,
      default: "",
    },
    percent: {
      type: Number,
      default: 97,
    },
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    clickBig() {
      this.$emit("clickBig");
    },
    clickSmall() {
      this.$emit("clickSmall");
    },
  },
};
</script>

<style lang="scss" scoped>
.byui-image {
  &__outter {
    position: relative;
    width: 100%;
    height: 100%;

    ::v-deep {
      img {
        border-radius: $base-border-radius;
      }
    }

    &__small {
      position: absolute;
      width: 80px;
      height: 100px;
      top: 0;
      right: 0;
      border-radius: $base-border-radius;
      border-left: 1px solid $base-color-white;
      border-bottom: 1px solid $base-color-white;
    }

    &__percent {
      position: absolute;
      display: inline-block;
      bottom: 0;
      right: 0;
      min-width: 50px;
      height: 25px;
      line-height: 25px;
      text-align: center;
      color: $base-color-white;
      border-radius: $base-border-radius;
      background-color: $base-color-red;
      border-radius: $base-border-radius;
    }
  }
}
</style>
