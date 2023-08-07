<template>
  <el-card class="version-information" shadow="hover">
    <template #header>
      <vab-icon icon="information-line" />
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
            <a href="https://vue-admin-beautiful.com/authorization" target="_blank">
              <el-button style="margin-left: 10px" type="primary">
                PRO付费版本 购买源码 ￥699
              </el-button>
            </a>
            <a href="https://vue-admin-beautiful.com/authorization" target="_blank">
              <el-button style="margin-left: 10px" type="primary">
                Plus付费版本 购买源码 ￥799
              </el-button>
            </a>
            <a href="https://github.com/chuzhixin/vue-admin-beautiful/" target="_blank">
              <el-button style="margin-left: 10px" type="warning">开源免费版</el-button>
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
