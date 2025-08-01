<template>
  <div class="chart-container">
    <vab-page-header description="图表组件示例" :icon="['fas', 'chart-bar']" title="图表" />
    <el-card shadow="never">
      <div class="chart-content">
        <el-alert
          title="图表组件 - 展示各种数据可视化图表"
          type="info"
          show-icon
          :closable="false"
        />
        <el-row :gutter="20" class="chart-row">
          <el-col :span="12">
            <div class="chart-wrapper">
              <div ref="barChart" class="chart"></div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="chart-wrapper">
              <div ref="lineChart" class="chart"></div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="chart-row">
          <el-col :span="12">
            <div class="chart-wrapper">
              <div ref="pieChart" class="chart"></div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="chart-wrapper">
              <div ref="radarChart" class="chart"></div>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
  import VabPageHeader from '@/components/VabPageHeader'
  import * as echarts from 'echarts'

  export default {
    name: 'Chart',
    components: {
      VabPageHeader,
    },
    data() {
      return {
        barChart: null,
        lineChart: null,
        pieChart: null,
        radarChart: null,
      }
    },
    mounted() {
      this.initCharts()
    },
    beforeDestroy() {
      if (this.barChart) {
        this.barChart.dispose()
      }
      if (this.lineChart) {
        this.lineChart.dispose()
      }
      if (this.pieChart) {
        this.pieChart.dispose()
      }
      if (this.radarChart) {
        this.radarChart.dispose()
      }
    },
    methods: {
      initCharts() {
        // 初始化柱状图
        this.barChart = echarts.init(this.$refs.barChart)
        this.barChart.setOption({
          title: {
            text: '柱状图示例',
            subtext: '数据展示'
          },
          tooltip: {},
          xAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            name: '销量',
            type: 'bar',
            data: [120, 200, 150, 80, 70, 110, 130],
            itemStyle: {
              color: '#409EFF'
            }
          }]
        })

        // 初始化折线图
        this.lineChart = echarts.init(this.$refs.lineChart)
        this.lineChart.setOption({
          title: {
            text: '折线图示例',
            subtext: '趋势展示'
          },
          tooltip: {},
          xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            name: '访问量',
            type: 'line',
            data: [120, 132, 101, 134, 90, 230],
            itemStyle: {
              color: '#67C23A'
            },
            smooth: true
          }]
        })

        // 初始化饼图
        this.pieChart = echarts.init(this.$refs.pieChart)
        this.pieChart.setOption({
          title: {
            text: '饼图示例',
            subtext: '比例展示'
          },
          tooltip: {},
          series: [{
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '搜索引擎' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }]
        })

        // 初始化雷达图
        this.radarChart = echarts.init(this.$refs.radarChart)
        this.radarChart.setOption({
          title: {
            text: '雷达图示例',
            subtext: '能力分析'
          },
          tooltip: {},
          radar: {
            indicator: [
              { name: '销售', max: 6500 },
              { name: '管理', max: 16000 },
              { name: '信息技术', max: 30000 },
              { name: '客服', max: 38000 },
              { name: '研发', max: 52000 },
              { name: '市场', max: 25000 }
            ]
          },
          series: [{
            name: '预算 vs 开销',
            type: 'radar',
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: '预算分配'
              },
              {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: '实际开销'
              }
            ]
          }]
        })

        // 监听窗口大小变化，自适应图表
        window.addEventListener('resize', this.resizeCharts)
      },
      
      resizeCharts() {
        if (this.barChart) {
          this.barChart.resize()
        }
        if (this.lineChart) {
          this.lineChart.resize()
        }
        if (this.pieChart) {
          this.pieChart.resize()
        }
        if (this.radarChart) {
          this.radarChart.resize()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .chart-container {
    padding: 15px;
    background: $base-color-white;
    
    .chart-content {
      .chart-row {
        margin-bottom: 20px;
      }
      
      .chart-wrapper {
        .chart {
          width: 100%;
          height: 400px;
        }
      }
    }
  }
</style>