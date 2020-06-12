<template>
  <div class="index-container">
    <el-row :gutter="15">
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
              style="height: 100%;"
              src="https://img.shields.io/github/stars/chuzhixin/vue-admin-beautiful?style=social"
            />
          </a>
        </el-alert>
        <br />
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
      <el-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
        <el-card class="card" shadow="never">
          <div slot="header">
            <span>销售量/签单量</span>
          </div>
          <vab-chart
            :autoresize="true"
            theme="vab-echarts-theme"
            :options="xsl"
          />
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
        <el-card class="card" shadow="never">
          <div slot="header">
            <span>更新日志</span>
            <div style="float: right;">部署时间:{{ updateTime }}</div>
          </div>
          <table class="table">
            <tr>
              <td>@vue/cli版本</td>
              <td>{{ devDependencies["@vue/cli-service"] }}</td>
            </tr>
            <tr>
              <td>vue版本</td>
              <td>{{ dependencies.vue }}</td>
            </tr>
            <tr>
              <td>vuex版本</td>
              <td>{{ dependencies.vuex }}</td>
            </tr>
            <tr>
              <td>vue-router版本</td>
              <td>{{ dependencies["vue-router"] }}</td>
            </tr>
            <tr>
              <td>element-ui版本</td>
              <td>{{ dependencies["element-ui"] }}</td>
            </tr>
            <tr>
              <td>axios版本</td>
              <td>{{ dependencies.axios }}</td>
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
              <el-button type="warning">码云下载源码</el-button>
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
      <el-col v-if="nodeEnv !== 'development'" :span="24">
        <el-alert
          title="beautiful boys and girls欢迎加入vue-admin-beautifulQQ群：972435319，群内提供文档教程，如果你觉得框架一文不值，请勿加群"
          :closable="false"
        >
        </el-alert>
        <br />
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
        <app-link :to="item.link" target="_blank">
          <el-card class="icon-panel" shadow="never">
            <vab-icon
              :style="{ color: item.color }"
              :icon="['fas', item.icon]"
            ></vab-icon>
            <p>{{ item.title }}</p>
          </el-card>
        </app-link>
      </el-col>
      <el-col
        v-if="nodeEnv !== 'development'"
        :xs="24"
        :sm="24"
        :md="12"
        :lg="12"
        :xl="12"
      >
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
      <el-col
        v-if="nodeEnv !== 'development'"
        :xs="24"
        :sm="24"
        :md="12"
        :lg="12"
        :xl="12"
      >
        <el-card shadow="never">
          <div slot="header">
            <span>其他信息</span>
          </div>
          <!--  <el-alert
            :closable="false"
            title="2020年5月12日，不同寻常的一天，汶川大地震的12周年，被社区一名叫做812770127@qq.com的网友骂的狗血淋头，说这是一个抄袭的项目，这是一个一点技术含量都没有的项目，没关系，我把这段话一直留在这里，总有一天你会看到这个你曾经不屑一顾的框架发展壮大，谢谢你的嘲讽让我变得强大"
            type="error"
          >
          </el-alert>
          <br /> -->
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
import VabCount from "@/plugins/vabCount";
import { dependencies, devDependencies } from "../../../package.json";
import { getList } from "@/api/changeLog";
import { getNoticeList } from "@/api/notice";
import { getRepos, getStargazers } from "@/api/github";
import AppLink from "@/layouts/components/Link";
export default {
  name: "Index",
  components: {
    VabChart,
    VabCount,
    AppLink,
  },
  data() {
    return {
      updateTime: process.env.VUE_APP_UPDATE_TIME,
      nodeEnv: process.env.NODE_ENV,
      dependencies: dependencies,
      devDependencies: devDependencies,
      config1: {
        startVal: 0,
        endVal: this.$baseLodash.random(1000, 20000),
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
            name: "访问量",
            type: "line",
            data: [10, 52, 20, 33, 39, 33, 22],
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
      //销售量
      xsl: {
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
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月",
            ],
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
            name: "销售量",
            type: "line",
            data: [10, 52, 20, 33, 39, 33, 22, 10, 22, 23, 13, 29],
            smooth: true,
            areaStyle: {},
          },
          {
            name: "签单量",
            type: "line",
            data: [20, 12, 30, 23, 31, 13, 32, 12, 12, 13, 13, 29],
            smooth: true,
            areaStyle: {},
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
          title: "XXX",
          link: "",
          color: "#69c0ff",
        },
        {
          icon: "bullhorn",
          title: "XXX",
          link: "",
          color: "#ff85c0",
        },
        {
          icon: "gift",
          title: "XXX",
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
  mounted() {},
  methods: {
    handleClick(e) {
      this.$baseMessage(`点击了${e.name},这里可以写跳转`);
    },
    handleZrClick(e) {},
    handleChangeTheme() {
      this.$baseEventBus.$emit("theme");
    },
    fetchData() {
      getList().then((res) => {
        res.data.map((item, index) => {
          if (index === res.data.length - 1) {
            item.color = "#0bbd87";
          }
        });
        this.activities = res.data;
      });
      getNoticeList().then((res) => {
        this.noticeList = res.data;
      });
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
  ::v-deep {
    .el-card__body {
      .echarts {
        width: 100%;
        height: 140px;
      }
    }
  }

  .card {
    min-height: 395px;

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
    height: 40px;
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

      &:first-child {
        width: 50%;
        text-align: right;
      }
    }
  }

  .icon-panel {
    text-align: center;
    cursor: pointer;

    svg {
      font-size: 40px;
    }

    p {
      margin-top: 20px;
    }
  }

  .bottom-btn {
    float: right;
    margin-top: 5px;

    button {
      margin: 5px 0 5px 10px;
    }
  }
}
</style>
