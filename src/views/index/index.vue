<template>
  <div class="index-container">
    <el-row :gutter="20">
      <el-col :lg="24" :md="24" :sm="24" :xl="24" :xs="24">
        <el-alert v-if="noticeList">
          <div style="display: flex; align-items: center; justify-content: center">
            <a href="https://github.com/zxwk1998/vue-admin-better" target="_blank">
              <img
                src="https://img.shields.io/github/stars/zxwk1998/vue-admin-better?style=flat-square&label=Stars&logo=github"
                style="margin-right: 10px"
              />
            </a>
            <p v-html="noticeList.notice"></p>
          </div>
        </el-alert>
      </el-col>
      <el-col :lg="6" :md="12" :sm="24" :xl="6" :xs="24">
        <el-card shadow="never">
          <div slot="header">
            <span>访问量</span>
          </div>
          <vab-chart autoresize :option="fwl" />
          <div class="bottom">
            <span>
              日均访问量:

              {{ config1.endVal }}
            </span>
          </div>
        </el-card>
      </el-col>
      <el-col :lg="6" :md="12" :sm="24" :xl="6" :xs="24">
        <el-card shadow="never">
          <div slot="header">
            <span>授权数</span>
          </div>
          <vab-chart autoresize :option="sqs" />
          <div class="bottom">
            <span>
              总授权数:
              {{ config2.endVal }}
            </span>
          </div>
        </el-card>
      </el-col>

      <el-col v-for="(item, index) in iconList" :key="index" :lg="3" :md="3" :sm="6" :xl="3" :xs="12">
        <router-link target="_blank" :to="item.link">
          <el-card class="icon-panel" shadow="never">
            <vab-icon :icon="['fas', item.icon]" :style="{ color: item.color }" />
            <p>{{ item.title }}</p>
          </el-card>
        </router-link>
      </el-col>

      <el-col :lg="11" :md="24" :sm="24" :xl="11" :xs="24">
        <el-card class="card" shadow="never">
          <div slot="header">
            <span>依赖信息</span>
            <!-- <div style="float: right">部署时间:{{ updateTime }}</div> -->
          </div>

          <table class="table">
            <tr>
              <td>@vue/cli版本</td>
              <td>{{ devDependencies['@vue/cli-service'] }}</td>
              <td>vue版本</td>
              <td>{{ dependencies['vue'] }}</td>
            </tr>
            <tr>
              <td>vuex版本</td>
              <td>{{ dependencies['vuex'] }}</td>
              <td>vue-router版本</td>
              <td>{{ dependencies['vue-router'] }}</td>
            </tr>
            <tr>
              <td>element-ui版本</td>
              <td>{{ dependencies['element-ui'] }}</td>
              <td>axios版本</td>
              <td>{{ dependencies['axios'] }}</td>
            </tr>
            <tr>
              <td>eslint版本</td>
              <td>{{ devDependencies['eslint'] }}</td>
              <td>prettier版本</td>
              <td>{{ devDependencies['prettier'] }}</td>
            </tr>
            <tr>
              <td>sass版本</td>
              <td>{{ devDependencies['sass'] }}</td>
              <td>mockjs版本</td>
              <td>{{ dependencies['mockjs'] }}</td>
            </tr>
            <tr>
              <td>layouts版本</td>
              <td>{{ dependencies['layouts'] }}</td>
              <td>lodash版本</td>
              <td>{{ dependencies['lodash'] }}</td>
            </tr>
          </table>
          <br />
          <el-alert :closable="false" :title="userAgent" type="info" />
          <br />
        </el-card>
      </el-col>
      <el-col :lg="13" :md="13" :sm="24" :xl="13" :xs="24">
        <el-card shadow="never">
          <div slot="header">
            <span>其他信息</span>
          </div>
          <div style="text-align: center">
            <vab-colorful-icon icon-class="vab" style="font-size: 140px" />
            <h1 style="font-size: 30px">vue-admin-better</h1>
          </div>
          <div class="bottom-btn">
            <el-popover placement="top" trigger="hover" width="250">
              <p>
                请我们喝杯咖啡，付款后联系qq
                783963206，我们将邀请您加入我们的讨论群，谢谢您愿意支持开源，加群获取文档、及基础模板，群内大佬众多，希望能帮到大家（如情况不允许，请勿勉强）。
              </p>
              <el-image :src="require('@/assets/zfb_kf.jpg')" />
              <a slot="reference" target="_blank">
                <el-button type="primary">QQ讨论群、基础版、文档</el-button>
              </a>
            </el-popover>
            <a href="https://github.com/zxwk1998/vue-admin-better" target="_blank">
              <el-button type="plain">vue2.x版本 github下载源码点star</el-button>
            </a>
            <a href="https://gitee.com/chu1204505056/vue-admin-better" target="_blank">
              <el-button type="plain">vue2.x版本 码云下载源码点star</el-button>
            </a>
            <a href="https://github.com/zxwk1998/vue-admin-arco" target="_blank">
              <el-button type="plain">vue3.x版本 github下载源码点star</el-button>
            </a>
            <a href="https://vuejs-core.cn/admin-pro" target="_blank">
              <el-button type="primary">Admin Pro ￥699</el-button>
            </a>
            <a href="https://vuejs-core.cn/admin-plus" target="_blank">
              <el-button type="primary">Admin Plus ￥799</el-button>
            </a>
            <a href="https://vuejs-core.cn/shop-vite" target="_blank">
              <el-button type="success">Shop Vite ￥1899</el-button>
            </a>
            <a @click="handleChangeTheme">
              <el-button type="danger">修改主题和布局</el-button>
            </a>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import VabChart from '@/plugins/echarts'
  import { dependencies, devDependencies } from '../../../package.json'
  import { getNoticeList } from '@/api/notice'

  export default {
    name: 'Index',
    components: {
      VabChart,
    },
    data() {
      return {
        timer: 0,
        updateTime: process.env.VUE_APP_UPDATE_TIME,
        nodeEnv: process.env.NODE_ENV,
        dependencies: dependencies,
        devDependencies: devDependencies,
        config1: {
          startVal: 0,
          endVal: this.$baseLodash.random(20000, 60000),
          decimals: 0,
          prefix: '',
          suffix: '',
          separator: ',',
          duration: 8000,
        },
        config2: {
          startVal: 0,
          endVal: this.$baseLodash.random(1000, 20000),
          decimals: 0,
          prefix: '',
          suffix: '',
          separator: ',',
          duration: 8000,
        },
        config3: {
          startVal: 0,
          endVal: this.$baseLodash.random(1000, 20000),
          decimals: 0,
          prefix: '',
          suffix: '',
          separator: ',',
          duration: 8000,
        },

        //访问量
        fwl: {
          color: ['#1890FF', '#36CBCB', '#4ECB73', '#FBD437', '#F2637B', '#975FE5'],
          backgroundColor: 'rgba(252,252,252,0)',
          grid: {
            top: '4%',
            left: '2%',
            right: '4%',
            bottom: '0%',
            containLabel: true,
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: [],
              axisTick: {
                alignWithLabel: true,
              },
            },
          ],
          yAxis: [
            {
              type: 'value',
            },
          ],
          series: [
            {
              name: '访问量',
              type: 'line',
              data: [],
              smooth: true,
              areaStyle: {},
            },
          ],
        },
        //授权数
        sqs: {
          color: ['#1890FF', '#36CBCB', '#4ECB73', '#FBD437', '#F2637B', '#975FE5'],
          backgroundColor: 'rgba(252,252,252,0)',
          grid: {
            top: '4%',
            left: '2%',
            right: '4%',
            bottom: '0%',
            containLabel: true,
          },
          xAxis: [
            {
              type: 'category',
              /*boundaryGap: false,*/
              data: ['0时', '4时', '8时', '12时', '16时', '20时', '24时'],
              axisTick: {
                alignWithLabel: true,
              },
            },
          ],
          yAxis: [
            {
              type: 'value',
            },
          ],
          series: [
            {
              name: '授权数',
              type: 'bar',
              barWidth: '60%',
              data: [10, 52, 20, 33, 39, 33, 22],
            },
          ],
        },

        //更新日志
        reverse: true,
        activities: [],
        noticeList: [],
        //其他信息
        userAgent: navigator.userAgent,
        //卡片图标
        iconList: [
          {
            icon: 'video',
            title: '视频播放器',
            link: 'https://vuejs-core.cn/shop-vite',
            color: '#ffc069',
          },
          {
            icon: 'table',
            title: '表格',
            link: 'https://vuejs-core.cn/shop-vite',
            color: '#5cdbd3',
          },
          {
            icon: 'laptop-code',
            title: '源码',
            link: 'https://github.com/zxwk1998/vue-admin-better',
            color: '#b37feb',
          },
          {
            icon: 'book',
            title: '书籍',
            link: 'https://vuejs-core.cn/shop-vite',
            color: '#69c0ff',
          },
          {
            icon: 'bullhorn',
            title: '公告',
            link: 'https://vuejs-core.cn/shop-vite',
            color: '#ff85c0',
          },
          {
            icon: 'gift',
            title: '礼物',
            link: 'https://vuejs-core.cn/shop-vite',
            color: '#ffd666',
          },

          {
            icon: 'balance-scale-left',
            title: '公平的世界',
            link: 'https://vuejs-core.cn/shop-vite',
            color: '#ff9c6e',
          },
          {
            icon: 'coffee',
            title: '休息一下',
            link: 'https://vuejs-core.cn/shop-vite',
            color: '#95de64',
          },
        ],
      }
    },
    created() {
      this.fetchData()
    },
    beforeDestroy() {
      clearInterval(this.timer)
    },
    mounted() {
      let base = +new Date(2020, 1, 1)
      let oneDay = 24 * 3600 * 1000
      let date = []

      let data = [Math.random() * 1500]
      let now = new Date(base)

      const addData = (shift) => {
        now = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/')
        date.push(now)
        data.push(this.$baseLodash.random(20000, 60000))

        if (shift) {
          date.shift()
          data.shift()
        }

        now = new Date(+new Date(now) + oneDay)
      }

      for (let i = 1; i < 6; i++) {
        addData()
      }
      addData(true)
      this.fwl.xAxis[0].data = date
      this.fwl.series[0].data = data
      this.timer = setInterval(() => {
        addData(true)
        this.fwl.xAxis[0].data = date
        this.fwl.series[0].data = data
      }, 3000)
    },
    methods: {
      handleClick(e) {
        this.$baseMessage(`点击了${e.name},这里可以写跳转`)
      },
      handleZrClick() {},
      handleChangeTheme() {
        this.$baseEventBus.$emit('theme')
      },
      async fetchData() {
        const res = await getNoticeList()
        this.noticeList = res.data
      },
    },
  }
</script>
<style lang="scss" scoped>
  .index-container {
    padding: 0 !important;
    margin: 0 !important;
    background: #f5f7f8 !important;

    ::v-deep {
      .el-alert {
        padding: $base-padding;

        &--info.is-light {
          min-height: 82px;
          padding: $base-padding;
          margin-bottom: 15px;
          color: #909399;
          background-color: $base-color-white;
          border: 1px solid #ebeef5;
        }
      }

      .el-card__body {
        .echarts {
          width: 100%;
          height: 115px;
        }
      }
    }

    .card {
      ::v-deep {
        .el-card__body {
          .echarts {
            width: 100%;
            height: 305px;
          }
        }
      }
    }

    .bottom {
      padding-top: 20px;
      margin-top: 5px;
      color: #595959;
      text-align: left;
      border-top: 1px solid $base-border-color;
    }

    .table {
      width: 100%;
      color: #666;
      border-collapse: collapse;
      background-color: #fff;

      td {
        position: relative;
        min-height: 20px;
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

    .icon-panel {
      height: 117px;
      text-align: center;
      cursor: pointer;

      svg {
        font-size: 40px;
      }

      p {
        margin-top: 10px;
      }
    }

    .bottom-btn {
      button {
        margin: 5px 10px 15px 0;
      }
    }
  }
</style>
