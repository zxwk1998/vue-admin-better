<template>
  <div class="errorLog-container">
    <el-divider content-position="left"
      >这里会在顶部navbar上模拟一个控制台错误日志</el-divider
    >
    <error-test />
  </div>
</template>

<script>
import ErrorTest from "./components/ErrorTest";

export default {
  name: "ErrorLog",
  components: { ErrorTest },
};
</script>
<style lang="scss" scoped></style>
