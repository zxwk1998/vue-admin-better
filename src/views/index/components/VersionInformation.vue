<template>
  <el-card class="version-information" shadow="hover">
    <template #header>
      <vab-icon icon="information-line" />
      信息
      <el-tag class="card-header-tag">部署时间:{{ updateTime }}</el-tag>
    </template>
    <el-scrollbar>
      <table class="table">
        <tr>
          <td>vue</td>
          <td>{{ dependencies['vue'] }}</td>
          <td>@vue/cli</td>
          <td>{{ devDependencies['@vue/cli-service'] }}</td>
        </tr>
        <tr>
          <td>vuex</td>
          <td>{{ dependencies['vuex'] }}</td>
          <td>vue-router</td>
          <td>{{ dependencies['vue-router'] }}</td>
        </tr>
        <tr>
          <td>element-ui</td>
          <td>{{ dependencies['element-ui'] }}</td>
          <td>axios</td>
          <td>{{ dependencies['axios'] }}</td>
        </tr>
        <tr>
          <td>授权渠道</td>
          <td colspan="3">
            <el-popover trigger="hover" width="400">
              <div style="text-align: center">
                <el-image
                  :src="require('@/assets/zfb_699.jpg')"
                  style="width: 200px"
                />
                <p style="font-size: 13px">
                  付款后加QQ 1204505056
                  获取下载权限，是否购买pro填是即可(赠送VIP专属问题解答群，包含PRO详细文档、PRO基础版源码、PRO标准版源码、绑定git后拥有随时克隆及更新权限，拥有完整的登录鉴权和前后端多种配置的动态路由流程，仅限自己及团队使用，源码不得二次出售转卖，恶意分享取消使用资格
                  )
                </p>
              </div>
              <template #reference>
                <a
                  target="_blank"
                  href="https://chu1204505056.gitee.io/authorization"
                >
                  <el-button style="margin-left: 10px" type="primary">
                    PRO付费版本 购买源码 ￥699
                  </el-button>
                </a>
              </template>
            </el-popover>
            <el-popover trigger="hover" width="400">
              <div style="text-align: center">
                <el-image
                  :src="require('@/assets/zfb_799.jpg')"
                  style="width: 200px"
                />
                <p style="font-size: 13px">
                  付款后加QQ 1204505056
                  获取下载权限，是否购买pro填是即可(赠送VIP专属问题解答群，包含Plus详细文档、Plus基础版源码、Plus标准版源码、绑定git后拥有随时克隆及更新权限，拥有完整的登录鉴权和前后端多种配置的动态路由流程，仅限自己及团队使用，源码不得二次出售转卖，恶意分享取消使用资格
                  )
                </p>
              </div>
              <template #reference>
                <a
                  target="_blank"
                  href="https://chu1204505056.gitee.io/authorization"
                >
                  <el-button style="margin-left: 10px" type="primary">
                    Plus付费版本 购买源码 ￥799
                  </el-button>
                </a>
              </template>
            </el-popover>
            <el-popover trigger="hover" width="400">
              <div style="text-align: center">
                <el-image
                  :src="require('@/assets/zfb_100.jpg')"
                  style="width: 200px"
                />
                <p style="font-size: 13px">
                  付款后加QQ 1204505056
                  获取VIP群加群资格，是否购买VIP填是即可(包含开源版及PRO版技术支持、开源版及PRO版问题解答、开源版详细文档，PRO版用户(已付699)无需购买此项!!!(此项不包含PRO版源码))
                </p>
              </div>
              <template #reference>
                <el-button style="margin-left: 10px" type="primary">
                  开源版技术支持
                </el-button>
              </template>
            </el-popover>
            <a
              href="https://github.com/chuzhixin/vue-admin-beautiful/"
              target="_blank"
            >
              <el-button style="margin-left: 10px" type="warning">
                开源免费版
              </el-button>
            </a>
          </td>
        </tr>
      </table>
    </el-scrollbar>
  </el-card>
</template>

<script>
  import { dependencies, devDependencies } from '../../../../package.json'

  export default {
    data() {
      return {
        updateTime: process.env.VUE_APP_UPDATE_TIME,
        dependencies,
        devDependencies,
      }
    },
  }
</script>

<style lang="scss" scoped>
  .version-information {
    .table {
      width: 100%;
      color: #666;
      border-collapse: collapse;
      background-color: #fff;

      td {
        position: relative;
        padding: 9px 15px;
        overflow: hidden;
        font-size: 14px;
        line-height: 20px;
        text-overflow: ellipsis;
        white-space: nowrap;
        border: 1px solid #e6e6e6;

        &:nth-child(odd) {
          width: 20%;
          text-align: right;
          background-color: #f7f7f7;
        }
      }
    }
  }
</style>
