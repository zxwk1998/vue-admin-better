<template>
  <div>
    <el-form ref="form" :model="form" :rules="rules" label-width="120px">
      <el-form-item label-width="0">
        <el-alert show-icon>
          确认转账后，资金将直接打入对方账户，无法退回。
        </el-alert>
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
      <el-form-item label="支付密码：" prop="password">
        <el-input v-model="form.password" type="password" />
      </el-form-item>
    </el-form>
    <div class="pay-button-group">
      <el-button type="primary" :loading="loading" @click="handleSubmit">
        提交
      </el-button>
      <el-button @click="handlePrev">上一步</el-button>
    </div>
  </div>
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
<style lang="scss" scoped>
  .pay-button-group {
    display: block;
    margin: 20px auto;
    text-align: center;
  }
</style>
