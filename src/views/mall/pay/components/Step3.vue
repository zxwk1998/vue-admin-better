<template>
  <el-form ref="form" :model="form" :rules="rules" label-width="120px">
    <el-form-item label-width="0">
      <byui-icon
        style="font-size: 30px; color: green; text-align: center;"
        :icon="['fas', 'check-circle']"
      ></byui-icon>
    </el-form-item>
    <el-form-item label="付款账户：">
      {{ infoData.payAccount }}
    </el-form-item>
    <el-form-item label="收款账户：">
      {{ infoData.gatheringAccount }}
    </el-form-item>
    <el-form-item label="收款人姓名：">
      {{ infoData.gatheringName }}
    </el-form-item>
    <el-form-item label="转账金额：">
      <strong>
        {{ infoData.price }}
      </strong>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handlePrev">再转一笔</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  props: {
    infoData: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      form: {
        password: "123456",
      },
      rules: {
        password: [
          { required: true, message: "请输入支付密码", trigger: "blur" },
        ],
      },
      loading: false,
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true;
          setTimeout(() => {
            this.$emit("change-step", 3);
            this.loading = false;
          }, 2000);
        } else {
          this.loading = false;
        }
      });
    },
    handlePrev() {
      this.$emit("change-step", 1);
    },
  },
};
</script>
