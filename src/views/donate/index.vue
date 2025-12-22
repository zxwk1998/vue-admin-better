<template>
  <div class="donate-container">
    <div class="donate-header">
      <h1>感谢您的支持</h1>
      <p>您的捐赠将帮助我们持续改进和维护这个开源项目</p>
      <p>每一份支持都是对我们最大的鼓励 💖</p>
    </div>

    <div class="donate-content">
      <div class="payment-method">
        <h3>支付宝捐赠</h3>
        <div class="qr-code-container">
          <img src="@/assets/zfb_kf.jpg" alt="支付宝收款码" class="qr-code" />
        </div>
        <p class="instruction">请扫描上方二维码进行捐赠</p>

        <div>
          请我们喝杯咖啡，打赏后请联系 QQ 783963206
          邀请您进入讨论群（不管您请还是不请，您都可以享受到开源的代码，感谢您的支持和信任，群内提供 vue-admin-better
          基础版本、开发工具自动配置教程及项目开发文档。
        </div>
        <div>当前项目禁止用于黄赌毒等危害国家安全与稳定的网站</div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DonatePage',
    data() {
      return {
        // 可以添加捐赠相关的状态数据
      }
    },
    methods: {
      // 可以添加捐赠相关的方法
    },
  }
</script>

<style scoped>
  .donate-container {
    margin: 0 auto;
    padding: 40px 20px;
  }

  .donate-header {
    text-align: center;
    margin-bottom: 40px;
  }

  .donate-header h1 {
    color: #1890ff;
    font-size: 32px;
    margin-bottom: 16px;
  }

  .donate-header p {
    color: #666;
    font-size: 18px;
  }

  .donate-content {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 40px;
    margin-bottom: 40px;
  }

  .payment-method {
    background: #fff;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    flex: 1;
    min-width: 300px;
  }

  .payment-method h3 {
    color: #333;
    margin-bottom: 20px;
    font-size: 20px;
  }

  .qr-code-container {
    margin-bottom: 20px;
  }

  .qr-code {
    max-width: 200px;
    height: auto;
    border-radius: 8px;
    border: 1px solid #e8e8e8;
  }

  .instruction {
    color: #666;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    .donate-content {
      flex-direction: column;
      align-items: center;
    }

    .payment-method {
      width: 100%;
      max-width: 400px;
    }
  }
</style>
