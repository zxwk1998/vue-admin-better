<template>
  <div class="verify-container">
    <vab-verify
      ref="slideDiv"
      :w="350"
      :slider-text="text"
      :h="175"
      @success="handleSuccess"
      @fail="handleError"
    ></vab-verify>
  </div>
</template>

<script>
import VabVerify from "@/plugins/vabVerify";
export default {
  name: "Verify",
  components: { VabVerify },
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
