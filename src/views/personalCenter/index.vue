<template>
  <div class="personalCenter-container">
    <el-tabs :tab-position="tabPosition">
      <el-tab-pane label="个人简介">个人简介</el-tab-pane>
      <el-tab-pane label="基本设置">基本设置</el-tab-pane>
      <el-tab-pane label="安全设置">安全设置</el-tab-pane>
      <el-tab-pane label="账户绑定">安全设置</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "PersonalCenter",
  data() {
    return {
      tabPosition: "left",
    };
  },
  created() {},
  methods: {},
};
</script>
