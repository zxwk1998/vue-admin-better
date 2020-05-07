<template>
  <div class="index-container">
    <el-row :gutter="15">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-alert
          title="作者初衷：iView Pro要卖￥9999，layui Admin要卖￥2600，作者只好自己动手写一个分享给大家咯，免费的东西一定就差吗，一个人就一定比不过一个团队吗？我还那么年轻，我不会认输，在屏幕前驻足的你也不会轻易认输，对吧"
          :closable="false"
        >
        </el-alert>
        <br />
        <el-alert
          title="作者寄语：弱小的人才习惯嘲讽与否定，内心强大的人从不吝啬赞美与鼓励，我只是一条略懂前端的咸鱼，可我一直怀揣着改变世界的梦想，希望我们每个人，不管过程怎样，结局都是美好的"
          type="success"
          :closable="false"
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
          <byui-chart
            :autoresize="true"
            theme="byui-echarts-theme"
            :options="fwl"
          />
          <div class="bottom">
            <span
              >日均访问量:

              <byui-count
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
          <byui-chart
            :autoresize="true"
            theme="byui-echarts-theme"
            :options="sqs"
          />
          <div class="bottom">
            <span
              >总授权数:
              <byui-count
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
          <byui-chart
            :autoresize="true"
            theme="byui-echarts-theme"
            :options="cy"
            @zr:click="handleZrClick"
            @click="handleClick"
          />
          <div class="bottom">
            <span
              >词云数量:<byui-count
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
          <byui-chart
            :autoresize="true"
            theme="byui-echarts-theme"
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
          <div class="bottom-btn">
            <!--<a @click="handleChangeTheme">
              <el-button type="danger">修改主题和布局</el-button>
            </a>-->
            <a
              target="_blank"
              href="https://github.com/chuzhixin/vue-element-admin-beautiful"
            >
              <el-button type="primary">
                github下载源码点star（实时更新）
              </el-button>
            </a>
            <a
              target="_blank"
              href="https://gitee.com/chu1204505056/vue-admin-beautiful"
            >
              <el-button type="primary">码云下载源码</el-button>
            </a>
            <el-popover placement="top" width="250" trigger="hover">
              <p>
                插件市场评价给五星后加群送vue-admin-beautiful-template基础模板
              </p>
              <a
                slot="reference"
                target="_blank"
                href="https://ext.dcloud.net.cn/plugin?id=1476"
              >
                <el-button type="primary">插件市场下载源码</el-button>
              </a>
            </el-popover>
            <el-popover placement="top" width="250" trigger="hover">
              <p>
                谢谢您愿意支持开源，加群获取详细教程，群内提供vue-admin-beautiful-template基础模板
              </p>
              <el-image :src="require('@/assets/ewm.png')"></el-image>
              <a slot="reference" target="_blank">
                <el-button type="warning">QQ讨论群 972435319</el-button>
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
        <router-link :to="item.link">
          <el-card class="icon-panel" shadow="never">
            <byui-icon
              :style="{ color: item.color }"
              :icon="['fas', item.icon]"
            ></byui-icon>
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
          <el-alert
            title=" 其实人生改变命运的机会并没有太多，我们并不是不优秀，我们也并不是一无是处，我们也希望驻足山巅被众人仰望， 也许我们
            缺少的只是一个机会，缺少的只是生命中的导师，我希望这个框架帮助到更多的人，希望有一天，我们面试的时候不再胆怯，希望有一天别人看到的不仅仅是你的努力，还有你的功成名就，出人头地"
            type="success"
            :closable="false"
          >
          </el-alert>
          <br />
          <el-alert
            :closable="false"
            title="框架优势：mock数据自动导出无需配置；views，vuex，api支持自动生成；自动fixed问题代码，可以愉快的拥抱eslint"
            type="success"
          >
          </el-alert>
          <br />
          <el-alert
            :closable="false"
            title="鸣谢花裤衩、唐金州、贤心、element、ivew的开源项目给我带来的很多的灵感"
            type="success"
          >
          </el-alert>
          <br />
          <el-alert :closable="false" :title="userAgent" type="info">
          </el-alert>
          <br />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ByuiChart from "@/plugins/echarts";
import ByuiCount from "@/plugins/byuiCount";
import { dependencies, devDependencies } from "../../../package.json";
import { getList } from "@/api/changeLog";
import { getRepos, getStargazers } from "@/api/github";

export default {
  name: "Index",
  components: {
    ByuiChart,
    ByuiCount,
  },
  data() {
    return {
      updateTime: process.env.VUE_APP_UPDATE_TIME,
      nodeEnv: process.env.NODE_ENV,
      dependencies: dependencies,
      devDependencies: devDependencies,
      config1: {
        startVal: 0,
        endVal: 43,
        decimals: 0,
        prefix: "",
        suffix: "",
        separator: ",",
        duration: 3000,
      },
      config2: {
        startVal: 0,
        endVal: 82,
        decimals: 0,
        prefix: "",
        suffix: "",
        separator: ",",
        duration: 3000,
      },
      config3: {
        startVal: 0,
        endVal: 12,
        decimals: 0,
        prefix: "",
        suffix: "",
        separator: ",",
        duration: 3000,
      },

      //访问量
      fwl: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line",
          },
        },
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
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line",
          },
        },
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
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line",
          },
        },
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
      //其他信息
      userAgent: navigator.userAgent,
      //卡片图标
      iconList: [
        {
          icon: "video",
          title: "视频播放器",
          link: "/byui/player",
          color: "#ffc069",
        },
        {
          icon: "table",
          title: "表格",
          link: "/byui/table",
          color: "#5cdbd3",
        },
        {
          icon: "bullhorn",
          title: "XXX",
          link: "",
          color: "#ff85c0",
        },
        {
          icon: "book",
          title: "XXX",
          link: "",
          color: "#69c0ff",
        },

        {
          icon: "gift",
          title: "XXX",
          link: "",
          color: "#ffd666",
        },
        {
          icon: "laptop-code",
          title: "XXX",
          link: "",
          color: "#b37feb",
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
      /*getRepos({
                                              access_token: "1061286824f978ea3cf98b7b8ea26fe27ba7cea1",
                                            }).then((res) => {
                                              const per_page = res.stargazers_count;
                                              getStargazers({
                                                access_token: "1061286824f978ea3cf98b7b8ea26fe27ba7cea1",
                                                page: 1,
                                                per_page: res.per_page,
                                              }).then((res) => {
                                                alert(JSON.stringify(res));
                                              });
                                            });*/
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
      border-color: #e6e6e6;
      border-style: solid;
      border-width: 1px;

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
