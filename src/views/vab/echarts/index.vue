<template>
  <div class="echarts-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8">
        <el-card shadow="hover">
          <div slot="header">柱状图</div>
          <div>
            <vab-chart autoresize :options="chart1" />
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8">
        <el-card shadow="hover">
          <div slot="header">环形图</div>
          <div>
            <vab-chart
              ref="myCircle"
              theme="vab-echarts-theme"
              :options="chart2"
              class="my-circle"
            />
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8">
        <el-card shadow="hover">
          <div slot="header">关系图</div>
          <div>
            <vab-chart
              ref="myLine1"
              theme="vab-echarts-theme"
              autoresize
              :options="chart3"
              class="my-line1"
            />
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-card class="card" shadow="never">
          <div slot="header">
            <span>中国地图</span>
          </div>
          <vab-chart
            :autoresize="true"
            theme="vab-echarts-theme"
            :options="zgdt"
          />
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-card class="card" shadow="never">
          <div slot="header">
            <span>世界地图</span>
          </div>
          <vab-chart
            :autoresize="true"
            theme="vab-echarts-theme"
            :options="sjdt"
          />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import * as echarts from "echarts";
  import VabChart from "@/plugins/echarts";

  export default {
    name: "Echarts",
    components: {
      VabChart,
    },
    data() {
      return {
        chart1: {
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
            },
          },
          yAxis: [
            {
              type: "value",
              name: "亿元",
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
              },
            },
            {
              type: "value",
              name: "同比",
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
              smooth: true, //平滑曲线显示
              itemStyle: {
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
        chart2: {
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
        chart3: {
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
        //世界地图
        sjdt: {
          title: {
            text: "2099年世界GDP（亿元）",
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
          tooltip: {
            trigger: "item",
            formatter: "{b}",
          },
          series: [
            {
              name: "2099年世界GDP（亿元）",
              type: "map",
              mapType: "world",
              selectedMode: "multiple",
              roam: false,
              label: {
                normal: {
                  show: false,
                },
                emphasis: {
                  show: true,
                },
              },
              data: [{ name: "China", value: 99999, selected: true }],
            },
          ],
        },
      };
    },
    mounted() {},
    methods: {},
  };
</script>

<style lang="scss" scoped>
  .echarts {
    width: 100%;
  }
</style>
