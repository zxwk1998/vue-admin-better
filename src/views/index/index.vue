<template>
  <div class="index-container">
    <el-row :gutter="20">
      <el-col
        v-if="nodeEnv !== 'development'"
        :xs="24"
        :sm="24"
        :md="24"
        :lg="24"
        :xl="24"
      >
        <el-alert
          v-if="noticeList[0]"
          :title="noticeList[0].title"
          :closable="noticeList[0].closable"
        >
          <a
            target="_blank"
            href="https://github.com/chuzhixin/vue-admin-beautiful"
          >
            <img
              style="height: 100%; margin-right: 10px;"
              src="https://img.shields.io/github/stars/chuzhixin/vue-admin-beautiful?style=flat-square&label=Stars&logo=github"
            />
            <img
              style="height: 100%; margin-right: 10px;"
              src=" https://img.shields.io/badge/Visitors-79.3k/month-blue?style=flat-square&logo=Visual Studio Code"
            />
            <img
              style="height: 100%; margin-right: 10px;"
              src="https://img.shields.io/github/last-commit/chuzhixin/vue-admin-beautiful?style=flat-square&label=Last Commit&logo=vue.js"
            />
          </a>
        </el-alert>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
        <el-card shadow="never">
          <div slot="header">
            <span>访问量</span>
          </div>
          <vab-chart
            :autoresize="true"
            theme="vab-echarts-theme"
            :options="fwl"
          />
          <div class="bottom">
            <span
              >日均访问量:

              <vab-count
                :start-val="config1.startVal"
                :end-val="config1.endVal"
                :duration="config1.duration"
                :separator="config1.separator"
                :prefix="config1.prefix"
                :suffix="config1.suffix"
                :decimals="config1.decimals"
              />
            </span>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
        <el-card shadow="never">
          <div slot="header">
            <span>授权数</span>
          </div>
          <vab-chart
            :autoresize="true"
            theme="vab-echarts-theme"
            :options="sqs"
          />
          <div class="bottom">
            <span
              >总授权数:
              <vab-count
                :start-val="config2.startVal"
                :end-val="config2.endVal"
                :duration="config2.duration"
                :separator="config2.separator"
                :prefix="config2.prefix"
                :suffix="config2.suffix"
                :decimals="config2.decimals"
            /></span>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <el-card shadow="never">
          <div slot="header">
            <span>词云</span>
          </div>
          <vab-chart
            :autoresize="true"
            theme="vab-echarts-theme"
            :options="cy"
            @zr:click="handleZrClick"
            @click="handleClick"
          />
          <div class="bottom">
            <span
              >词云数量:<vab-count
                :start-val="config3.startVal"
                :end-val="config3.endVal"
                :duration="config3.duration"
                :separator="config3.separator"
                :prefix="config3.prefix"
                :suffix="config3.suffix"
                :decimals="config3.decimals"
            /></span>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="13" :xl="13">
        <el-card class="card" shadow="never">
          <div slot="header">
            <span>GDP分布图</span>
          </div>
          <vab-chart
            :autoresize="true"
            theme="vab-echarts-theme"
            :options="zgdt"
          />
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="11" :xl="11">
        <el-card class="card" shadow="never">
          <div slot="header">
            <span>更新日志</span>
            <div style="float: right;">部署时间:{{ updateTime }}</div>
          </div>
          <table class="table">
            <tr>
              <td>@vue/cli版本</td>
              <td>{{ devDependencies["@vue/cli-service"] }}</td>
              <td>vue版本</td>
              <td>{{ dependencies["vue"] }}</td>
            </tr>
            <tr>
              <td>vuex版本</td>
              <td>{{ dependencies["vuex"] }}</td>
              <td>vue-router版本</td>
              <td>{{ dependencies["vue-router"] }}</td>
            </tr>
            <tr>
              <td>element-ui版本</td>
              <td>{{ dependencies["element-ui"] }}</td>
              <td>axios版本</td>
              <td>{{ dependencies["axios"] }}</td>
            </tr>
            <tr>
              <td>eslint版本</td>
              <td>{{ devDependencies["eslint"] }}</td>
              <td>prettier版本</td>
              <td>{{ devDependencies["prettier"] }}</td>
            </tr>
            <tr>
              <td>sass版本</td>
              <td>{{ devDependencies["sass"] }}</td>
              <td>mockjs版本</td>
              <td>{{ devDependencies["mockjs"] }}</td>
            </tr>
            <tr>
              <td>zx-layouts版本</td>
              <td>{{ dependencies["zx-layouts"] }}</td>
              <td>lodash版本</td>
              <td>{{ dependencies["lodash"] }}</td>
            </tr>
          </table>

          <div v-if="nodeEnv !== 'development'" class="bottom-btn">
            <el-popover placement="top" width="250" trigger="hover">
              <p>
                这是一个付费群，谢谢您愿意支持开源，加群获取详细文档，群内提供vue-admin-beautiful-template基础模板
              </p>
              <el-image :src="require('@/assets/ewm.png')"></el-image>
              <a slot="reference" target="_blank">
                <el-button type="primary">QQ讨论群 972435319</el-button>
              </a>
            </el-popover>
            <a @click="handleChangeTheme">
              <el-button type="danger">修改主题和布局</el-button>
            </a>
            <a
              target="_blank"
              href="https://github.com/chuzhixin/vue-admin-beautiful"
            >
              <el-button type="warning">
                github下载源码点star（实时更新）
              </el-button>
            </a>
            <a
              target="_blank"
              href="https://gitee.com/chu1204505056/vue-admin-beautiful"
            >
              <el-button type="warning">码云下载源码点star</el-button>
            </a>
            <el-popover placement="top" width="250" trigger="hover">
              <p>
                谢谢您愿意支持开源，加群获取详细教程，群内提供vue-admin-beautiful-template基础模板
              </p>
              <el-image :src="require('@/assets/ewm.png')"></el-image>
              <a slot="reference" target="_blank">
                <el-button type="warning">文档</el-button>
              </a>
            </el-popover>
          </div>
        </el-card>
      </el-col>

      <el-col
        v-for="(item, index) in iconList"
        :key="index"
        :xs="12"
        :sm="6"
        :md="3"
        :lg="3"
        :xl="3"
      >
        <router-link :to="item.link" target="_blank">
          <el-card class="icon-panel" shadow="never">
            <vab-icon
              :style="{ color: item.color }"
              :icon="['fas', item.icon]"
            ></vab-icon>
            <p>{{ item.title }}</p>
          </el-card>
        </router-link>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-card class="card" shadow="never">
          <div slot="header">
            <span>更新日志</span>
          </div>
          <el-timeline :reverse="reverse">
            <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :timestamp="activity.timestamp"
              :color="activity.color"
            >
              {{ activity.content }}
            </el-timeline-item>
          </el-timeline>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-card shadow="never">
          <div slot="header">
            <span>其他信息</span>
          </div>
          <div style="text-align: center;">
            <vab-colorful-icon style="font-size: 140px;" icon-class="vab" />
            <h1 style="font-size: 30px;">vue-admin-beautiful</h1>
          </div>
          <div v-for="(item, index) in noticeList" :key="index">
            <el-alert
              v-if="index !== 0"
              :title="item.title"
              :type="item.type"
              :closable="item.closable"
            >
            </el-alert>
            <br />
          </div>
          <el-alert :closable="false" :title="userAgent" type="info">
          </el-alert>
          <br />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import VabChart from "@/plugins/echarts";
import { dependencies, devDependencies } from "../../../package.json";
import { getList } from "@/api/changeLog";
import { getNoticeList } from "@/api/notice";
import { getRepos, getStargazers } from "@/api/github";
export default {
  name: "Index",
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
        prefix: "",
        suffix: "",
        separator: ",",
        duration: 8000,
      },
      config2: {
        startVal: 0,
        endVal: this.$baseLodash.random(1000, 20000),
        decimals: 0,
        prefix: "",
        suffix: "",
        separator: ",",
        duration: 8000,
      },
      config3: {
        startVal: 0,
        endVal: this.$baseLodash.random(1000, 20000),
        decimals: 0,
        prefix: "",
        suffix: "",
        separator: ",",
        duration: 8000,
      },

      //访问量
      fwl: {
        grid: {
          top: "4%",
          left: "2%",
          right: "4%",
          bottom: "0%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: [],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "访问量",
            type: "line",
            data: [],
            smooth: true,
            areaStyle: {},
          },
        ],
      },
      //授权数
      sqs: {
        grid: {
          top: "4%",
          left: "2%",
          right: "4%",
          bottom: "0%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            /*boundaryGap: false,*/
            data: ["0时", "4时", "8时", "12时", "16时", "20时", "24时"],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "授权数",
            type: "bar",
            barWidth: "60%",
            data: [10, 52, 20, 33, 39, 33, 22],
          },
        ],
      },
      //词云
      cy: {
        grid: {
          top: "4%",
          left: "2%",
          right: "4%",
          bottom: "0%",
        },
        series: [
          {
            type: "wordCloud",
            gridSize: 15,
            sizeRange: [12, 40],
            rotationRange: [0, 0],
            width: "100%",
            height: "100%",
            textStyle: {
              normal: {
                color() {
                  const arr = [
                    "#1890FF",
                    "#36CBCB",
                    "#4ECB73",
                    "#FBD437",
                    "#F2637B",
                    "#975FE5",
                  ];
                  let index = Math.floor(Math.random() * arr.length);
                  return arr[index];
                },
              },
            },
            data: [
              {
                name: "vue-admin-beautiful",
                value: 15000,
              },
              {
                name: "element",
                value: 10081,
              },
              {
                name: "beautiful",
                value: 9386,
              },

              {
                name: "vue",
                value: 6500,
              },
              {
                name: "chuzhixin",
                value: 6000,
              },
              {
                name: "good",
                value: 4500,
              },
              {
                name: "success",
                value: 3800,
              },
              {
                name: "never",
                value: 3000,
              },
              {
                name: "boy",
                value: 2500,
              },
              {
                name: "girl",
                value: 2300,
              },
              {
                name: "github",
                value: 2000,
              },
              {
                name: "hbuilder",
                value: 1900,
              },
              {
                name: "dcloud",
                value: 1800,
              },
              {
                name: "china",
                value: 1700,
              },
              {
                name: "1204505056",
                value: 1600,
              },
              {
                name: "972435319",
                value: 1500,
              },
              {
                name: "young",
                value: 1200,
              },
              {
                name: "old",
                value: 1100,
              },
              {
                name: "vuex",
                value: 900,
              },
              {
                name: "router",
                value: 800,
              },
              {
                name: "money",
                value: 700,
              },
              {
                name: "qingdao",
                value: 800,
              },
              {
                name: "yantai",
                value: 9000,
              },
              {
                name: "author is very cool",
                value: 9200,
              },
            ],
          },
        ],
      },
      //中国地图
      zgdt: {
        title: {
          text: "2099年全国GDP分布",
          subtext: "数据来自vue-admin-beautiful杜撰",
        },
        tooltip: {
          trigger: "item",
        },
        dataRange: {
          orient: "horizontal",
          min: 0,
          max: 55000,
          text: ["高", "低"],
          splitNumber: 0,
        },
        series: [
          {
            name: "2099年全国GDP分布",
            type: "map",
            roam: false,
            zoom: 1.25,
            mapType: "china",
            mapLocation: {
              x: "center",
            },
            selectedMode: "multiple",
            itemStyle: {
              normal: {
                label: {
                  show: false,
                },
              },
              emphasis: {
                label: {
                  show: true,
                },
              },
            },
            data: [
              { name: "西藏", value: 605.83 },
              { name: "青海", value: 1670.44 },
              { name: "宁夏", value: 2102.21 },
              { name: "海南", value: 2522.66 },
              { name: "甘肃", value: 5020.37 },
              { name: "贵州", value: 5701.84 },
              { name: "新疆", value: 6610.05 },
              { name: "云南", value: 8893.12 },
              { name: "重庆", value: 10011.37 },
              { name: "吉林", value: 10568.83 },
              { name: "山西", value: 11237.55 },
              { name: "天津", value: 11307.28 },
              { name: "江西", value: 11702.82 },
              { name: "广西", value: 11720.87 },
              { name: "陕西", value: 12512.3 },
              { name: "黑龙江", value: 12582 },
              { name: "内蒙古", value: 14359.88 },
              { name: "安徽", value: 15300.65 },
              { name: "北京", value: 16251.93 },
              { name: "福建", value: 17560.18 },
              { name: "上海", value: 19195.69 },
              { name: "湖北", value: 19632.26 },
              { name: "湖南", value: 19669.56 },
              { name: "四川", value: 21026.68 },
              { name: "辽宁", value: 22226.7 },
              { name: "河北", value: 24515.76 },
              { name: "河南", value: 26931.03 },
              { name: "浙江", value: 32318.85 },
              { name: "山东", value: 45361.85, selected: true },
              { name: "江苏", value: 49110.27 },
              { name: "广东", value: 53210.28 },
            ],
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
          icon: "video",
          title: "视频播放器",
          link: "/vab/player",
          color: "#ffc069",
        },
        {
          icon: "table",
          title: "表格",
          link: "/vab/table/comprehensiveTable",
          color: "#5cdbd3",
        },
        {
          icon: "laptop-code",
          title: "源码",
          link: "https://github.com/chuzhixin/vue-admin-beautiful",
          color: "#b37feb",
        },
        {
          icon: "book",
          title: "书籍",
          link: "",
          color: "#69c0ff",
        },
        {
          icon: "bullhorn",
          title: "公告",
          link: "",
          color: "#ff85c0",
        },
        {
          icon: "gift",
          title: "礼物",
          link: "",
          color: "#ffd666",
        },

        {
          icon: "balance-scale-left",
          title: "公平的世界",
          link: "",
          color: "#ff9c6e",
        },
        {
          icon: "coffee",
          title: "休息一下",
          link: "",
          color: "#95de64",
        },
      ],
    };
  },
  created() {
    this.fetchData();
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  mounted() {
    let base = +new Date(2020, 1, 1);
    let oneDay = 24 * 3600 * 1000;
    let date = [];

    let data = [Math.random() * 1500];
    let now = new Date(base);

    const addData = (shift) => {
      now = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/");
      date.push(now);
      data.push(this.$baseLodash.random(20000, 60000));

      if (shift) {
        date.shift();
        data.shift();
      }

      now = new Date(+new Date(now) + oneDay);
    };

    for (let i = 1; i < 6; i++) {
      addData();
    }
    addData(true);
    this.fwl.xAxis[0].data = date;
    this.fwl.series[0].data = data;
    this.timer = setInterval(() => {
      addData(true);
      this.fwl.xAxis[0].data = date;
      this.fwl.series[0].data = data;
    }, 3000);
  },
  methods: {
    handleClick(e) {
      this.$baseMessage(`点击了${e.name},这里可以写跳转`);
    },
    handleZrClick(e) {},
    handleChangeTheme() {
      this.$baseEventBus.$emit("theme");
    },
    async fetchData() {
      const { data } = await getList();
      data.map((item, index) => {
        if (index === data.length - 1) {
          item.color = "#0bbd87";
        }
      });
      this.activities = data;
      const res = await getNoticeList();
      this.noticeList = res.data;
      /* getRepos({
        token: "1061286824f978ea3cf98b7b8ea26fe27ba7cea1",
      }).then((res) => {
        const per_page = Math.ceil(res.data.stargazers_count / 100);
        alert(per_page);
        getStargazers({
          token: "1061286824f978ea3cf98b7b8ea26fe27ba7cea1",
          page: 1,
          per_page: res.per_page,
        }).then((res) => {
          alert(JSON.stringify(res));
        });
      }); */
    },
  },
};
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
        height: 125px;
      }
    }
  }

  .card {
    min-height: 420px;

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
    height: 100px;
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
    margin-top: 5px;

    button {
      margin: 5px 10px 5px 0;
    }
  }
}
</style>
