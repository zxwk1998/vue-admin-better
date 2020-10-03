<template>
  <div class="index-container">
    <h3>
      欢迎体验全网首个基于vue3.0开发的vue
      admin框架vue-admin-beautiful-mini，vue3.0的流畅超乎了我们的想象。。。
    </h3>
    <a-card class="version-information" title="">
      <template v-slot:extra>
        <a href="#">部署时间:{{ updateTime }}</a>
      </template>
      <table class="table">
        <tr>
          <td>vue</td>
          <td>{{ dependencies["vue"] }}</td>
          <td>@vue/cli</td>
          <td>{{ devDependencies["@vue/cli-service"] }}</td>
        </tr>
        <tr>
          <td>vuex</td>
          <td>{{ dependencies["vuex"] }}</td>
          <td>vue-router</td>
          <td>{{ dependencies["vue-router"] }}</td>
        </tr>
        <tr>
          <td>eslint-plugin-vue</td>
          <td>{{ devDependencies["eslint-plugin-vue"] }}</td>
          <td>axios</td>
          <td>{{ dependencies["axios"] }}</td>
        </tr>
        <tr>
          <td>babel-eslint</td>
          <td>{{ devDependencies["babel-eslint"] }}</td>
          <td>ant-design-vue</td>
          <td>{{ dependencies["ant-design-vue"] }}</td>
        </tr>
        <tr>
          <td>PRO版演示地址</td>
          <td colspan="3">
            <a
              href="https://chu1204505056.gitee.io/vue-admin-beautiful-pro/#/index"
            >
              https://chu1204505056.gitee.io/vue-admin-beautiful-pro/#/index
            </a>
          </td>
        </tr>
        <tr>
          <td>官方QQ群</td>
          <td colspan="3">972435319、1139183756</td>
        </tr>
      </table>
    </a-card>
  </div>
</template>
<script>
  import { dependencies, devDependencies } from "*/package.json";

  export default {
    data() {
      return {
        updateTime: process.env.VUE_APP_UPDATE_TIME,
        dependencies: dependencies,
        devDependencies: devDependencies,
      };
    },
  };
</script>
<style lang="less" scoped>
  .version-information {
    .table {
      width: 100%;
      color: #666;
      border-collapse: collapse;
      background-color: #fff;

      td {
        position: relative;
        padding: 9px 15px;
        font-size: 14px;
        line-height: 20px;
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
