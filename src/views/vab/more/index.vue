<template>
  <div class="more-container">
    <el-divider content-position="left">
      看到这里，你心动了吗？如果你心动了那就加入我们的qq群吧（972435319），谢谢你愿意尊重作者的心血，希望我们每个人都变得优秀，如果你愿意跟随作者一起学习技术，作者QQ（1204505056白嫖党勿扰）
    </el-divider>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
        <el-card>
          <div slot="header">
            开源版本
            <el-button style="float: right; padding: 3px 0;" type="text"
              >永久免费 个人/商业使用
            </el-button>
          </div>
          <div>
            <ul>
              <li>永久开源免费</li>
              <li>保留控制台以及代码中的作者信息可免费商用</li>
              <li>
                开源地址
                <a
                  target="_blank"
                  href="https://github.com/chuzhixin/vue-admin-beautiful"
                  >支持白嫖，也请给个star</a
                >
              </li>
              <li>
                提供讨论群专属文档，QQ群 972435319
              </li>
            </ul>
            <img src="@/assets/ewm.png" alt="" />
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
        <el-card>
          <div slot="header">
            VIP群
            <el-button style="float: right; padding: 3px 0;" type="text"
              >￥100</el-button
            >
          </div>
          <div>
            <ul>
              <li>支持以上所有特权</li>
              <li>
                提供vip群专属文档及视频教程，可快速入手框架，包含打包优化，公共布局zx-layouts
                npm包本地化教程等
              </li>
              <li>QQ咨询 1204505056</li>
            </ul>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
        <el-card>
          <div slot="header">
            商业用途 完全自定义版权
            <el-button style="float: right; padding: 3px 0;" type="text"
              >￥299</el-button
            >
          </div>
          <div>
            <ul>
              <li>支持以上所有特权</li>
              <li>
                可随意变更版权，但仅限自己团队使用，一旦发现恶意传播，二次售卖，不再提供更新支持
              </li>
              <li>永久更新</li>
              <li>优先问题解答</li>
              <li>提供低价外包合作机会</li>
            </ul>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "More",
  components: {},
  data() {
    return { nodeEnv: process.env.NODE_ENV };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.more-container {
  ::v-deep {
    .el-card__body {
      > div {
        min-height: 70vh;
        padding: 20px;

        > ul {
          > li {
            line-height: 30px;
          }
        }

        > img {
          display: block;
          margin: 40px auto;
          border: 1px solid #dedede;
        }
      }
    }
  }
}
</style>
