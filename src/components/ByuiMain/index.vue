<template>
  <div class="byui-main">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "ByuiMain",
};
</script>
<style lang="scss" scoped>
.byui-main {
  margin-left: auto;
  margin-right: auto;
}
</style>
