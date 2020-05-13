<template>
  <div class="verify-container">
    <byui-verify
      ref="slideDiv"
      :w="350"
      :slider-text="text"
      :h="175"
      @success="handleSuccess"
      @fail="handleError"
    ></byui-verify>
  </div>
</template>

<script>
import ByuiVerify from "@/plugins/byuiVerify";
export default {
  name: "Verify",
  components: { ByuiVerify },
  data() {
    return {
      text: "向右滑动",
    };
  },
  created() {},
  mounted() {},
  methods: {
    handleSuccess() {
      this.$baseMessage("校验成功", "success");
    },
    handleError() {
      this.$baseMessage("校验失败", "error");
    },
  },
};
</script>
