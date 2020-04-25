<template>
  <el-col :xs="24" :sm="24" :md="24" :lg="span" :xl="span">
    <div class="right-panel">
      <slot></slot>
    </div>
  </el-col>
</template>

<script>
export default {
  name: "ByuiQueryFormRightPanel",
  props: {
    span: {
      type: Number,
      default: 12,
    },
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
