<template>
  <div class="more-container">
    <el-row :gutter="20">
      <el-col :lg="8" :md="24" :sm="24" :xl="8" :xs="24">
        <el-card>
          <div slot="header">
            开源版本
            <el-button style="float: right; padding: 3px 0" type="text">永久免费 个人/商业使用</el-button>
          </div>
          <div>
            <ul>
              <li>永久开源免费，支持横纵布局切换</li>
              <li>
                保留浏览器控制台打印即可免费商用，页面中的作者信息可全部去除，无需保留，可快速入手框架，包含打包优化，公共外框布局layout本地化及自定义教程，如需自定义版权及作者信息￥299（自愿原则）
              </li>
              <li>
                开源地址
                <a href="https://github.com/chuzhixin/vue-admin-beautiful" target="_blank">如果有幸帮到了你，麻烦给个star</a>
              </li>
              <li>提供讨论群专属文档，QQ群 972435319、1139183756</li>
            </ul>
          </div>
        </el-card>
      </el-col>
      <el-col :lg="8" :md="24" :sm="24" :xl="8" :xs="24">
        <el-card>
          <div slot="header">
            VIP群
            <el-button style="float: right; padding: 3px 0" type="text">￥100（2021年1月起不再提供此服务）</el-button>
          </div>
          <div>
            <ul>
              <li>为避免引起误解，不再针对开源用户提供付费vip群</li>
            </ul>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'More',
    components: {},
    data() {
      return { nodeEnv: process.env.NODE_ENV }
    },
    created() {},
    mounted() {},
    methods: {},
  }
</script>
<style lang="scss" scoped>
  .more-container {
    ::v-deep {
      .el-card__body {
        > div {
          min-height: 220px;
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
