<template>
  <div class="amap-container">
    <div id="amap" class="container">
      <el-amap vid="amapDemo"></el-amap>
    </div>
  </div>
</template>

<script>
export default {
  name: "Amap",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.amap-container {
  .container {
    width: 100%;
    height: calc(100vh - 214px);
  }
}
</style>
