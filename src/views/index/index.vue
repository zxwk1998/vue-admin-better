<template>
  <div class="index-container">
    <el-row :gutter="15">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-alert
          title="鸣谢：花裤衩、唐金州、贤心的开源项目让我学到了很多知识也迸发了很多的灵感"
          :closable="false"
        >
        </el-alert>
        <br />
        <el-alert
          title="作者寄语：世间本无事，庸人自扰之，框架发布以来，免不了质疑和嘲笑，但我从未放弃，我只是一条略懂前端的咸鱼，可我一直怀揣着改变世界的梦想，希望我们每个人，不管过程怎样，结局都是美好的"
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
            <span>版本信息</span>
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
                github下载源码点star
              </el-button>
            </a>
            <a target="_blank" href="https://ext.dcloud.net.cn/plugin?id=1476">
              <el-button type="primary"
                >国内源码下载通道（记得给个好评）
              </el-button>
            </a>
            <el-popover placement="top" width="250" trigger="hover">
              <p>
                群内自取
              </p>
              <a slot="reference" target="_blank">
                <el-button type="warning">文档</el-button>
              </a>
            </el-popover>
            <el-popover placement="top" width="250" trigger="hover">
              <p>
                谢谢您愿意支持开源
              </p>
              <el-image :src="require('@/assets/ewm.png')"></el-image>
              <a slot="reference" target="_blank">
                <el-button type="warning">官方讨论群 972435319</el-button>
              </a>
            </el-popover>
            <!-- <el-popover placement="top" width="250" trigger="hover">
              <p>
                谢谢您愿意支持开源 群主每周在线授课 每天在线答疑
                你会得到意想不到的收获
              </p>
              <p>第一步微信支付联系群主qq1204505056获取秘钥</p>
              <el-image :src="require('@/assets/ewm_wx.png')"></el-image>
              <p>第二步愉快的加群讨论学习</p>
              <el-image :src="require('@/assets/ewm_vip.png')"></el-image>
              <a slot="reference" target="_blank">
                <el-button type="warning">VIP授课群 氪金用户进</el-button>
              </a>
            </el-popover>-->
            <a
              target="_blank"
              href="http://chu1204505056.gitee.io/vue-admin-beautiful-template"
            >
              <el-button type="primary">基础模板 </el-button>
            </a>
          </div>
        </el-card>
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
          <el-alert title="重磅基础模板已发布" type="success" :closable="false">
            <a
              target="_blank"
              href="https://chu1204505056.gitee.io/vue-admin-beautiful-template"
            >
              vue-admin-beautiful-template</a
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
          <el-alert :closable="false" :title="userAgent" type="info">
          </el-alert>
          <br />
          <el-alert
            :closable="false"
            title="在这里你能学到更多的知识，包括eslint自动的修复而不是手动--fix(千万不要去掉规范，规范是每个人必备的技能)，包括组件的快速搭建与入手，你的所有问题都会第一时间得到解答，你同时还可以获得一手的学习资料，不要去相信网上好几年前的教程，对技术没有任何的提升，这里有更多的注册码与激活工具，保证你的开发坏境实时保持最新，当然一切都是你的自愿原则，你来或者不来，我都会在那里，开源还是会继续，你还是可以享受到最新的开源代码, 你相信吗？未来要和你共度一生的那个人，其实在与你相同的时间里，也忍受着同样的孤独，那个人一定也怀着满心的期待，拥着一腔孤勇，穿过茫茫人海，也要来与你相见。"
            type="warning"
          >
          </el-alert>
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
    },
  },
};
</script>

<style lang="scss" scoped>
.index-container {
  ::v-deep {
    .el-card__body {
      min-height: 200px;

      .echarts {
        width: 100%;
        height: 140px;
      }
    }
  }

  .card {
    ::v-deep {
      .el-card__body {
        min-height: 340px;
        height: auto;

        .echarts {
          width: 100%;
          height: 300px;
        }
      }
    }
  }

  .bottom {
    margin-top: 5px;
    height: 40px;
    padding-top: 20px;
    border-top: 1px solid $base-border-color;
    text-align: left;
    color: #595959;
  }

  .table {
    width: 100%;
    background-color: #fff;
    color: #666;
    border-collapse: collapse;

    td {
      border-width: 1px;
      border-style: solid;
      border-color: #e6e6e6;
      position: relative;
      padding: 9px 15px;
      min-height: 20px;
      line-height: 20px;
      font-size: 14px;

      &:first-child {
        text-align: right;
        width: 50%;
      }
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
