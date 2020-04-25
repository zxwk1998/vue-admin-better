<template>
  <div class="echarts-container">
    <el-row :gutter="15">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8">
        <el-card shadow="hover">
          <div slot="header">柱状图</div>
          <div>
            <byui-chart autoresize :options="chart1" />
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8">
        <el-card shadow="hover">
          <div slot="header">
            柱状图-竖形(适合横坐标文字过长的情况)
          </div>
          <div>
            <byui-chart
              ref="myLine"
              theme="byui-echarts-theme"
              autoresize
              :options="chart3"
              class="my-line"
            />
          </div>
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8">
        <el-card shadow="hover">
          <div slot="header">环形图</div>
          <div>
            <byui-chart
              ref="myCircle"
              theme="byui-echarts-theme"
              :options="chart4"
              class="my-circle"
            />
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8">
        <el-card shadow="hover">
          <div slot="header">关系图</div>
          <div>
            <byui-chart
              ref="myLine1"
              theme="byui-echarts-theme"
              autoresize
              :options="chart6"
              class="my-line1"
            />
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8">
        <el-card shadow="hover">
          <div slot="header">折线图</div>
          <div>
            <byui-chart
              ref="myLine1"
              theme="byui-echarts-theme"
              autoresize
              :options="chart5"
              class="my-line1"
            />
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8">
        <el-card shadow="hover">
          <div slot="header">饼图</div>
          <div>
            <byui-chart ref="myPie" :options="chart2" class="my-pie" />
            <el-row :gutter="15" style="margin: 0; background: #0f375f;">
              <el-col
                v-for="(item, index) in pieData"
                :key="item.id"
                :span="12"
              >
                <div
                  class="grid-content bg-purple pie-legend"
                  @mouseenter="connectPie(index)"
                  @mouseleave="loseConnect(index)"
                >
                  <i
                    :style="{
                      background: item.itemStyle.color,
                    }"
                  ></i>
                  <span>{{ item.name }}</span>
                  <span>{{ item.value }}</span>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
const myColor = [
  "#eb2100",
  "#eb3600",
  "#d0570e",
  "#d0a00e",
  "#34da62",
  "#00e9db",
  "#00c0e9",
  "#0096f3",
  "#33CCFF",
  "#33FFCC",
];
import ByuiChart from "@/plugins/echarts";

export default {
  name: "Echarts",
  components: {
    ByuiChart,
  },
  data() {
    return {
      chart1: {
        title: {
          text: "2019年销售水量和主营业务收入对比",
          textStyle: {
            align: "center",
            color: "#fff",
            fontSize: 20,
          },
          top: "3%",
          left: "10%",
        },
        backgroundColor: "#0f375f",
        grid: {
          top: "25%",
          bottom: "10%",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            label: {
              show: true,
            },
          },
        },
        legend: {
          data: ["销售水量", "主营业务"],
          top: "15%",
          textStyle: {
            color: "#ffffff",
          },
        },
        xAxis: {
          data: [
            "当年完成水量",
            "去年同期水量",
            "滚动目标值水量",
            "全年目标值水量",
            "当年完成金额",
            "去年同期金额",
            "滚动目标金额",
            "全年目标值",
          ],
          axisLine: {
            show: true, //隐藏X轴轴线
          },
          axisTick: {
            show: true, //隐藏X轴刻度
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#ebf8ac", //X轴文字颜色
            },
          },
        },
        yAxis: [
          {
            type: "value",
            name: "亿元",
            nameTextStyle: {
              color: "#ebf8ac",
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: true,
            },
            axisLine: {
              show: true,
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#ebf8ac",
              },
            },
          },
          {
            type: "value",
            name: "同比",
            nameTextStyle: {
              color: "#ebf8ac",
            },
            position: "right",
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              show: true,
              formatter: "{value} %", //右侧Y轴文字显示
              textStyle: {
                color: "#ebf8ac",
              },
            },
          },
          {
            type: "value",
            gridIndex: 0,
            min: 50,
            max: 100,
            splitNumber: 8,
            splitLine: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            splitArea: {
              show: true,
              areaStyle: {
                color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"],
              },
            },
          },
        ],
        series: [
          {
            name: "销售水量",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 10, //标记的大小
            itemStyle: {
              //折线拐点标志的样式
              color: "#058cff",
            },
            lineStyle: {
              color: "#058cff",
            },
            areaStyle: {
              color: "rgba(5,140,255, 0.2)",
            },
            data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5],
          },
          {
            name: "主营业务",
            type: "bar",
            barWidth: 15,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#00FFE3",
                  },
                  {
                    offset: 1,
                    color: "#4693EC",
                  },
                ]),
              },
            },
            data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5],
          },
        ],
      },
      pieData: [
        {
          value: 154,
          name: "刑事",
          itemStyle: {
            color: "#ea9300",
          },
        },
        {
          value: 321,
          name: "治安",
          itemStyle: {
            color: "#0c77df",
          },
        },
        {
          value: 231,
          name: "122警情",
          itemStyle: {
            color: "#749f83",
          },
        },
        {
          value: 562,
          name: "交通事故",
          itemStyle: {
            color: "#c23531",
          },
        },
        {
          value: 442,
          name: "纠纷",
          itemStyle: {
            color: "#61a0a8",
          },
        },
        {
          value: 123,
          name: "群众求助",
          itemStyle: {
            color: "#00ffff",
          },
        },
        {
          value: 386,
          name: "举报违法",
          itemStyle: {
            color: "#f5f488",
          },
        },
        {
          value: 90,
          name: "自定义",
          itemStyle: {
            color: "#c21fff",
          },
        },
      ],
      chart2: {
        backgroundColor: "#0f375f",
        grid: {
          top: 0,
          right: "5%",
        },
        tooltip: {
          trigger: "item",
          backgroundColor: "#011a44",
          borderColor: "#169ef6",
          borderWidth: 1,
          textStyle: {
            color: "#b2e1ff",
            fontSize: "14px",
          },
          padding: 10,
          formatter: "{b} <br>共计： {c} 起<br>占比：{d}%",
        },
        series: [
          {
            type: "pie",
            /* radius: '55%',
                                    center: ['50%', '50%'], */
            radius: [30, 110],
            center: ["50%", "50%"],
            selectedMode: "single",
            roseType: "radius",
            label: {
              normal: {
                show: false,
                position: "center",
              },
            },
            animationType: "scale",
            animationEasing: "elastiocOut",
            animationDelay: function (idx) {
              return Math.random() * 200;
            },
            data: [
              {
                value: 154,
                name: "刑事",
                itemStyle: {
                  color: "#ea9300",
                },
              },
              {
                value: 321,
                name: "治安",
                itemStyle: {
                  color: "#0c77df",
                },
              },
              {
                value: 231,
                name: "122警情",
                itemStyle: {
                  color: "#749f83",
                },
              },
              {
                value: 562,
                name: "交通事故",
                itemStyle: {
                  color: "#c23531",
                },
              },
              {
                value: 442,
                name: "纠纷",
                itemStyle: {
                  color: "#61a0a8",
                },
              },
              {
                value: 123,
                name: "群众求助",
                itemStyle: {
                  color: "#00ffff",
                },
              },
              {
                value: 386,
                name: "举报违法",
                itemStyle: {
                  color: "#f5f488",
                },
              },
              {
                value: 90,
                name: "自定义",
                itemStyle: {
                  color: "#c21fff",
                },
              },
            ],
          },
        ],
        textStyle: {
          color: "#98d7ff",
        },
      },
      chart3: {
        backgroundColor: "#0f375f",
        grid: {
          left: "11%",
          top: "12%",
          right: "5%",
          bottom: "8%",
          containLabel: true,
        },
        xAxis: [
          {
            show: false,
          },
        ],
        yAxis: [
          {
            axisTick: "none",
            axisLine: "none",
            offset: "27",
            axisLabel: {
              textStyle: {
                color: "#ffffff",
                fontSize: "14",
              },
            },
            data: [
              "南昌转运中心",
              "广州转运中心",
              "杭州转运中心",
              "宁夏转运中心",
              "兰州转运中心",
              "南宁转运中心",
              "长沙转运中心",
              "武汉转运中心",
              "合肥转运中心",
              "贵州转运中心",
            ],
          },
          {
            axisTick: "none",
            axisLine: "none",
            axisLabel: {
              textStyle: {
                color: "#ffffff",
                fontSize: "14",
              },
            },
            data: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"],
          },
          {
            name: "分拨延误TOP 10",
            nameGap: "50",
            nameTextStyle: {
              color: "#ffffff",
              fontSize: "14",
            },
            axisLine: {
              lineStyle: {
                color: "rgba(0,0,0,0)",
              },
            },
            data: [],
          },
        ],
        series: [
          {
            name: "条",
            type: "bar",
            yAxisIndex: 0,
            data: [4, 13, 25, 29, 38, 44, 50, 52, 60, 72],
            label: {
              normal: {
                show: true,
                position: "right",
                textStyle: {
                  color: "#ffffff",
                  fontSize: "14",
                },
              },
            },
            barWidth: 18,
            itemStyle: {
              normal: {
                color: function (params) {
                  const num = myColor.length;
                  return myColor[params.dataIndex % num];
                },
                barBorderRadius: 5,
              },
            },
            z: 2,
          },
          {
            name: "白框",
            type: "bar",
            yAxisIndex: 1,
            barGap: "-100%",
            data: [99, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5],
            barWidth: 20,
            itemStyle: {
              normal: {
                color: "#0e2147",
                barBorderRadius: 5,
              },
            },
            z: 1,
          },
        ],
      },
      chart4: {
        backgroundColor: "#0f375f",
        color: ["#4DFFE3", "#4DE0FF", "#4DFF8F", "#ADFF4D"],
        tooltip: {
          show: true,
          formatter: "{b} : {c}",
        },

        legend: {
          show: true,
          icon: "circle",
          top: "10%",
          left: "10%",
          width: 50,
          padding: [0, 5],
          itemGap: 25,
          data: ["已婚已育", "已婚未育", "未婚", "学生"],
          textStyle: {
            color: "#fff",
            align: "right",
            x: "right",
            textAlign: "right",
          },

          selectedMode: true,
          orient: "vertical",
        },
        series: [
          {
            name: "Line 4",
            type: "pie",
            clockWise: true,
            hoverAnimation: false,
            radius: ["65%", "75%"],
            itemStyle: {
              normal: {
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
                // shadowBlur: 15,
                // shadowColor: 'white',
              },
            },

            data: [
              {
                value: 7645434,
                name: "已婚已育",
              },
              {
                value: 3612343,
                name: "总数",
                tooltip: {
                  show: false,
                },
                itemStyle: {
                  normal: {
                    color: "rgba(0,0,0,0)",
                    label: {
                      show: false,
                    },
                    labelLine: {
                      show: false,
                    },
                  },
                  emphasis: {
                    color: "rgba(0,0,0,0)",
                  },
                },
              },
            ],
          },
          {
            name: "Line 3",
            type: "pie",
            clockWise: true,
            radius: ["50%", "60%"],
            itemStyle: {
              normal: {
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
                // shadowBlur: 15,
                // shadowColor: 'white',
              },
            },
            hoverAnimation: false,

            data: [
              {
                value: 2632321,
                name: "已婚未育",
              },
              {
                value: 2212343,
                name: "总数",
                tooltip: {
                  show: false,
                },
                itemStyle: {
                  normal: {
                    color: "rgba(0,0,0,0)",
                    label: {
                      show: false,
                    },
                    labelLine: {
                      show: false,
                    },
                  },
                  emphasis: {
                    color: "rgba(0,0,0,0)",
                  },
                },
              },
            ],
          },
          {
            name: "Line 2",
            type: "pie",
            clockWise: true,
            hoverAnimation: false,
            radius: ["35%", "45%"],
            itemStyle: {
              normal: {
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
                // shadowBlur: 15,
                // shadowColor: 'white',
              },
            },

            data: [
              {
                value: 1823323,
                name: "未婚",
              },
              {
                value: 1812343,
                name: "总数",
                tooltip: {
                  show: false,
                },
                itemStyle: {
                  normal: {
                    color: "rgba(0,0,0,0)",
                    label: {
                      show: false,
                    },
                    labelLine: {
                      show: false,
                    },
                  },
                  emphasis: {
                    color: "rgba(0,0,0,0)",
                  },
                },
              },
            ],
          },
          {
            name: "Line 1",
            type: "pie",
            clockWise: true,

            radius: ["20%", "30%"],
            itemStyle: {
              normal: {
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
                // shadowBlur: 15,
                // shadowColor: 'white',
              },
            },
            hoverAnimation: false,

            data: [
              {
                value: 1342221,
                name: "学生",
              },
              {
                value: 1912343,
                name: "总数",
                tooltip: {
                  show: false,
                },
                itemStyle: {
                  normal: {
                    color: "rgba(0,0,0,0)",
                    label: {
                      show: false,
                    },
                    labelLine: {
                      show: false,
                    },
                  },
                  emphasis: {
                    color: "rgba(0,0,0,0)",
                  },
                },
              },
            ],
          },
        ],
      },
      chart5: {
        backgroundColor: "#0f375f",
        grid: {
          top: 20,
          left: 60,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line",
            lineStyle: {
              color: "#169ef6",
            },
            label: {
              backgroundColor: "#6a7985", //水平线上提示框颜色
              formatter: "{value}",
            },
          },
          backgroundColor: "#011a44",
          borderColor: "#169ef6",
          borderWidth: 1,
          textStyle: {
            color: "#b2e1ff",
            fontSize: "14px",
          },
          padding: 10,
        },
        toolbox: {}, //工具栏
        xAxis: [
          {
            //X轴
            type: "category",
            axisLine: {
              lineStyle: {
                color: "#169ef6",
              },
            },
            splitLine: {
              show: false,
              lineStyle: {
                show: true,
                color: "#169ef6",
                type: "dashed",
              },
            },
            data: ["4/1", "4/5", "4/10", "4/15", "4/20", "4/25", "4/30"],
          },
        ],
        yAxis: [
          {
            //Y轴
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#003280",
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#169ef6",
                type: "dashed",
              },
            },
          },
        ],
        series: [
          {
            type: "line",
            smooth: true, //圆滑效果
            data: [50, 75, 60, 100, 75, 55, 75],
            itemStyle: {
              color: "#ff964b",
            },
            lineStyle: {
              width: 4,
              color: {
                type: "linear",

                colorStops: [
                  {
                    offset: 0,
                    color: "#003BC9", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#02C5C8", // 100% 处的颜色
                  },
                ],
                globalCoord: false, // 缺省为 false
              },
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#7fbbf1", //0%处的颜色
                  },
                  {
                    offset: 1,
                    color: "#05204c", //100%处的颜色
                  },
                ],
                globalCoord: false,
              },
            },
          },
        ],
        textStyle: {
          color: "#98d7ff",
        },
      },
      chart6: {
        series: [
          {
            type: "graph",
            layout: "force",
            symbolSize: 58,
            draggable: true,
            roam: true,
            focusNodeAdjacency: true,
            categories: [
              {
                name: "公司",
                itemStyle: {
                  color: "#006acc",
                },
              },
              {
                name: "董事",
                itemStyle: {
                  color: "#ff7d18",
                },
              },
            ],
            edgeSymbol: ["", "arrow"],
            edgeLabel: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 20,
                },
                formatter(x) {
                  return x.data.name;
                },
              },
            },
            label: {
              show: true,
            },
            force: {
              repulsion: 2000,
              edgeLength: 120,
            },
            data: [
              {
                name: "操作系统集团",
              },
              {
                name: "浏览器有限公司",
              },
              {
                name: "HTML科技",
              },
              {
                name: "JavaScript科技",
              },
              {
                name: "CSS科技",
              },
              {
                name: "Chrome",
              },
              {
                name: "IE",
              },
              {
                name: "Firefox",
              },
              {
                name: "Safari",
              },
            ],
            links: [
              {
                source: "浏览器有限公司",
                target: "操作系统集团",
                name: "参股",
              },
              {
                source: "HTML科技",
                target: "浏览器有限公司",
                name: "参股",
              },
              {
                source: "CSS科技",
                target: "浏览器有限公司",
                name: "参股",
              },
              {
                source: "JavaScript科技",
                target: "浏览器有限公司",
                name: "参股",
              },
              {
                source: "Chrome",
                target: "浏览器有限公司",
                name: "董事",
              },
              {
                source: "IE",
                target: "浏览器有限公司",
                name: "董事",
              },
              {
                source: "Firefox",
                target: "浏览器有限公司",
                name: "董事",
              },
              {
                source: "Safari",
                target: "浏览器有限公司",
                name: "董事",
              },
              {
                source: "Chrome",
                target: "JavaScript科技",
                name: "法人",
              },
            ],
          },
        ],
      },
    };
  },
  mounted() {
    this.pieAnimate();
  },
  methods: {
    /* 饼图的动态效果 */
    pieAnimate() {
      const that = this;
      let currentIndex = -1;
      const myPie = that.$refs.myPie;
      setInterval(function () {
        setTimeout(function () {
          const dataLen = that.pieData.length;
          // 取消之前高亮的图形
          myPie.dispatchAction({
            type: "downplay",
            seriesIndex: 0,
            dataIndex: currentIndex,
          });
          currentIndex = (currentIndex + 1) % dataLen;
          // 高亮当前图形
          myPie.dispatchAction({
            type: "highlight",
            seriesIndex: 0,
            dataIndex: currentIndex,
          });
          $(".pie-legend").eq(currentIndex).focus();
          // 显示 tooltip
          myPie.dispatchAction({
            type: "showTip",
            seriesIndex: 0,
            dataIndex: currentIndex,
          });
        }, 0);
      }, 2000);
    },
    connectPie(index) {
      this.$refs.myPie.dispatchAction({
        //高亮当前图形
        type: "highlight",
        seriesIndex: 0,
        dataIndex: index,
      });
      this.$refs.myPie.dispatchAction({
        type: "showTip",
        seriesIndex: 0,
        dataIndex: index,
      });
    },
    loseConnect(index) {
      this.$refs.myPie.dispatchAction({
        //取消之前高亮的图形
        type: "downplay",
        seriesIndex: 0,
        dataIndex: index,
      });
      this.$refs.myPie.dispatchAction({
        type: "hideTip",
        seriesIndex: 0,
        dataIndex: index,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.echarts {
  width: 100%;
}

.my-pie {
  width: 100%;
}

.pie-legend {
  margin-bottom: 10px;
  height: 34px;
  line-height: 34px;
  border: 1px solid #153b7c;
  color: #b2e1ff;
  text-indent: 5px;
  background-size: 100% 100%;
  cursor: pointer;
  text-align: left;
}

.pie-legend:hover {
  background: rgba(33, 100, 175, 0.8);
}

.pie-legend i {
  display: inline-block;
  width: 6px;
  height: 12px;
  margin-right: 10px;
}

.pie-legend span:last-child {
  float: right;
  display: inline-block;
  font-size: 20px;
  color: #2cffe4;
  font-weight: bold;
  margin-right: 10px;
}
</style>
