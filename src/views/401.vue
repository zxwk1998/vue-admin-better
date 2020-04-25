<template>
  <div class="error-container">
    <div class="error-content">
      <el-row :gutter="15">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div class="pic-error">
            <img
              alt="401"
              class="pic-error-parent"
              src="@/assets/error_images/401.png"
            />
            <img
              alt="401"
              class="pic-error-child left"
              src="@/assets/error_images/cloud.png"
            />
            <img
              alt="401"
              class="pic-error-child"
              src="@/assets/error_images/cloud.png"
            />
            <img
              alt="401"
              class="pic-error-child"
              src="@/assets/error_images/cloud.png"
            />
          </div>
        </el-col>

        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div class="bullshit">
            <div class="bullshit-oops">{{ oops }}</div>
            <div class="bullshit-headline">{{ headline }}</div>
            <div class="bullshit-info">{{ info }}</div>
            <a class="bullshit-return-home" href="#/index">
              {{ jumpTime }}s&nbsp;{{ btn }}
            </a>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page401",
  data() {
    return {
      jumpTime: 5,
      oops: "抱歉!",
      headline: "您没有操作权限...",
      info: "当前帐号没有操作权限,请联系管理员。",
      btn: "返回",
      timer: 0,
    };
  },
  mounted() {
    this.timeChange();
    $("body").css("background", "#fff");
  },
  beforeDestroy() {
    clearInterval(this.timer);
    $("body").css("background", "#f2f2f2");
  },
  methods: {
    timeChange() {
      this.timer = setInterval(() => {
        if (this.jumpTime) {
          this.jumpTime--;
        } else {
          this.$router.push({ path: "/" });
          this.$store.dispatch("tagsView/delOthersViews", {
            path: "/",
          });
          clearInterval(this.timer);
        }
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.error-container {
  transform: translate(-50%, -50%);
  position: absolute;
  top: 40%;
  left: 50%;

  .error-content {
    .pic-error {
      position: relative;
      float: left;
      width: 120%;
      overflow: hidden;

      &-parent {
        width: 100%;
      }

      &-child {
        position: absolute;

        &.left {
          width: 80px;
          top: 17px;
          left: 220px;
          opacity: 0;
          animation-name: cloudLeft;
          animation-duration: 2s;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
          animation-delay: 1s;
        }

        &.mid {
          width: 46px;
          top: 10px;
          left: 420px;
          opacity: 0;
          animation-name: cloudMid;
          animation-duration: 2s;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
          animation-delay: 1.2s;
        }

        &.right {
          width: 62px;
          top: 100px;
          left: 500px;
          opacity: 0;
          animation-name: cloudRight;
          animation-duration: 2s;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
          animation-delay: 1s;
        }

        @keyframes cloudLeft {
          0% {
            top: 17px;
            left: 220px;
            opacity: 0;
          }
          20% {
            top: 33px;
            left: 188px;
            opacity: 1;
          }
          80% {
            top: 81px;
            left: 92px;
            opacity: 1;
          }
          100% {
            top: 97px;
            left: 60px;
            opacity: 0;
          }
        }
        @keyframes cloudMid {
          0% {
            top: 10px;
            left: 420px;
            opacity: 0;
          }
          20% {
            top: 40px;
            left: 360px;
            opacity: 1;
          }
          70% {
            top: 130px;
            left: 180px;
            opacity: 1;
          }
          100% {
            top: 160px;
            left: 120px;
            opacity: 0;
          }
        }
        @keyframes cloudRight {
          0% {
            top: 100px;
            left: 500px;
            opacity: 0;
          }
          20% {
            top: 120px;
            left: 460px;
            opacity: 1;
          }
          80% {
            top: 180px;
            left: 340px;
            opacity: 1;
          }
          100% {
            top: 200px;
            left: 300px;
            opacity: 0;
          }
        }
      }
    }

    .bullshit {
      position: relative;
      float: left;
      width: 300px;
      padding: 30px 0;
      overflow: hidden;

      &-oops {
        font-size: 32px;
        font-weight: bold;
        line-height: 40px;
        color: $base-color-blue;
        opacity: 0;
        margin-bottom: 20px;
        animation-name: slideUp;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
      }

      &-headline {
        font-size: 20px;
        line-height: 24px;
        color: #222;
        font-weight: bold;
        opacity: 0;
        margin-bottom: 10px;
        animation-name: slideUp;
        animation-duration: 0.5s;
        animation-delay: 0.1s;
        animation-fill-mode: forwards;
      }

      &-info {
        font-size: 13px;
        line-height: 21px;
        color: $base-color-gray;
        opacity: 0;
        margin-bottom: 30px;
        animation-name: slideUp;
        animation-duration: 0.5s;
        animation-delay: 0.2s;
        animation-fill-mode: forwards;
      }

      &-return-home {
        display: block;
        float: left;
        width: 110px;
        height: 36px;
        background: $base-color-blue;
        border-radius: 100px;
        text-align: center;
        color: #ffffff;
        opacity: 0;
        font-size: 14px;
        line-height: 36px;
        cursor: pointer;
        animation-name: slideUp;
        animation-duration: 0.5s;
        animation-delay: 0.3s;
        animation-fill-mode: forwards;
      }

      @keyframes slideUp {
        0% {
          transform: translateY(60px);
          opacity: 0;
        }
        100% {
          transform: translateY(0);
          opacity: 1;
        }
      }
    }
  }
}
</style>
