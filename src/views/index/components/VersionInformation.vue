<template>
  <a-alert
    :message="
      '欢迎体验全网首个基于 vue ' +
      dependencies['vue'] +
      ' + ant-design-vue ' +
      dependencies['ant-design-vue'] +
      ' 开发的admin框架vue-admin-beautiful-antdv，vue3.0的流畅超乎了我们的想象，感谢尤雨溪、唐金州的开源项目我带来的灵感和帮助，vue-admin-beautiful-antdv同时支持电脑、平板、手机，希望实现一套代码即可帮助中小微企业快速实现项目落地，帮助前端小白快速入门vue前端框架搭建技术，迅速在工作中占据主导地位。'
    "
    type="success"
    show-icon
  />

  <a-card class="version-information">
    <template v-slot:title>系统信息</template>
    <template v-slot:extra>
      <a href="#">部署时间{{ updateTime }}</a>
    </template>
    <div class="version-information-table">
      <table>
        <tr>
          <td>标星</td>
          <td>
            <a
              target="_blank"
              href="https://github.com/chuzhixin/vue-admin-beautiful/tree/vue3.0-antdv"
            >
              <img
                style="margin-right: 10px"
                src="https://img.shields.io/github/stars/chuzhixin/vue-admin-beautiful?style=flat-square&label=Stars&logo=github"
              />
            </a>
          </td>
          <td>下载量统计</td>
          <td>敬请期待！</td>
        </tr>
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
          <td>eslint-plugin-vue</td>
          <td>{{ devDependencies['eslint-plugin-vue'] }}</td>
          <td>axios</td>
          <td>{{ dependencies['axios'] }}</td>
        </tr>
        <tr>
          <td>babel-eslint</td>
          <td>{{ devDependencies['babel-eslint'] }}</td>
          <td>ant-design-vue</td>
          <td>{{ dependencies['ant-design-vue'] }}</td>
        </tr>
        <tr>
          <td>PRO版演示地址（付费版）</td>
          <td colspan="3">
            <a
              href="http://vue-admin-beautiful.com/vue-admin-beautiful-pro?hmsr=mwsqj&hmpl=&hmcu=&hmkw=&hmci="
            >
              点我
            </a>
          </td>
        </tr>
        <tr>
          <td>开源地址（切换分支可查看各个vue版本）</td>
          <td colspan="3">
            <a href="https://github.com/chuzhixin/vue-admin-beautiful">点我</a>
          </td>
        </tr>
        <tr>
          <td>v2.x版演示地址（MIT协议，商用免费）</td>
          <td colspan="3">
            <a
              href="http://vue-admin-beautiful.com/vue-admin-beautiful-element?hmsr=mwsqj&hmpl=&hmcu=&hmkw=&hmci="
            >
              点我
            </a>
          </td>
        </tr>
        <tr>
          <td>v3.element-plus MIT协议，商用免费）</td>
          <td colspan="3">
            <a
              href="http://vue-admin-beautiful.com/vue-admin-beautiful-element-plus?hmsr=mwsqj&hmpl=&hmcu=&hmkw=&hmci="
            >
              点我
            </a>
          </td>
        </tr>
        <tr>
          <td>v3.x版演示地址（antdv MIT协议，商用免费）</td>
          <td colspan="3">
            <a
              href="http://vue-admin-beautiful.com/vue-admin-beautiful-antdv?hmsr=mwsqj&hmpl=&hmcu=&hmkw=&hmci="
            >
              点我
            </a>
          </td>
        </tr>
        <tr>
          <td>官方QQ群</td>
          <td colspan="3">972435319、1139183756</td>
        </tr>
      </table>
    </div>
  </a-card>
</template>
<script>
  import { dependencies, devDependencies } from '*/package.json'

  export default {
    data() {
      return {
        updateTime: process.env.VUE_APP_UPDATE_TIME,
        dependencies: dependencies,
        devDependencies: devDependencies,
      }
    },
  }
</script>
<style lang="less" scoped>
  .version-information {
    margin-top: @vab-margin;
    &-table {
      width: 100%;
      overflow: scroll;
      table {
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
  }
</style>
