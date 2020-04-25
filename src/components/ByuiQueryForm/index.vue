<template>
  <el-row :gutter="0" class="byui-query-form">
    <slot></slot>
  </el-row>
</template>

<script>
export default {
  name: "ByuiQueryForm",
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@mixin panel {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
.byui-query-form {
  margin-bottom: 10px;
  ::v-deep {
    .top-panel {
      @include panel;
    }

    .bottom-panel {
      @include panel;
      border-top: 1px solid #dcdfe6;
      padding-top: 14px;
    }

    .left-panel {
      @include panel;
      .el-button {
        margin: 5px;
      }
    }

    .right-panel {
      @include panel;
      justify-content: flex-end;
      .el-form-item {
        margin: 5px;
      }
    }
  }
}
</style>
