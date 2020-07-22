<template>
  <div class="vab-image__outter">
    <el-image
      :src="bigSrc"
      fit="cover"
      style="width: 100%; height: 100%;"
      @click="clickBig"
    ></el-image>
    <el-image
      :src="smallSrc"
      class="vab-image__outter__small"
      fit="cover"
      @click="clickSmall"
    ></el-image>
    <span class="vab-image__outter__percent">{{ percent }}%</span>
  </div>
</template>

<script>
  export default {
    name: "VabImage",
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
  .vab-image {
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
        top: 0;
        right: 0;
        width: 80px;
        height: 100px;
        border-bottom: 1px solid $base-color-white;
        border-left: 1px solid $base-color-white;
        border-radius: $base-border-radius;
      }

      &__percent {
        position: absolute;
        right: 0;
        bottom: 0;
        display: inline-block;
        min-width: 50px;
        height: 25px;
        line-height: 25px;
        color: $base-color-white;
        text-align: center;
        background-color: $base-color-red;
        border-radius: $base-border-radius;
      }
    }
  }
</style>
