<template>
  <div>
    <div class="pay-top-content">
      <vab-icon :icon="['fas', 'check-circle']" class="pay-success"></vab-icon>
      <p>支付成功</p>
    </div>
    <el-form
      ref="form"
      :model="form"
      :rules="rules"
      class="pay-bottom"
      label-width="120px"
    >
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
    </el-form>
    <div class="pay-button-group">
      <el-button type="primary" @click="handlePrev">再转一笔</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      infoData: {
        type: Object,
        default: () => {
          return {}
        },
      },
    },
    data() {
      return {
        form: {
          password: '123456',
        },
        rules: {
          password: [
            { required: true, message: '请输入支付密码', trigger: 'blur' },
          ],
        },
        loading: false,
      }
    },
    methods: {
      handleSubmit() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.loading = true
            setTimeout(() => {
              this.$emit('change-step', 3)
              this.loading = false
            }, 2000)
          } else {
            this.loading = false
          }
        })
      },
      handlePrev() {
        this.$emit('change-step', 1)
      },
    },
  }
</script>
<style lang="scss" scoped>
  .pay-top-content {
    text-align: center;

    .pay-success {
      display: block;
      margin: 20px auto 5px auto;
      font-size: 40px;
      color: $base-color-green;
    }
  }

  .pay-bottom {
    padding: 20px;
    margin-top: 20px;
    background: #f5f7f8;
    border: 1px dashed $base-color-gray;
  }

  .pay-button-group {
    display: block;
    margin: 20px auto;
    text-align: center;
  }
</style>
