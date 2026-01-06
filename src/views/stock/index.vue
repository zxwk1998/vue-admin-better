<template>
  <div class="stock-container">
    <el-card class="stock-card" shadow="never">
      <div slot="header" class="clearfix">
        <span>国晟科技 - 模拟市值</span>
        <a href="https://data.10jqka.com.cn/market/longhu/" target="_blank">
          <el-button type="warning" size="mini" style="margin-left: 10px; padding: 3px 10px">龙虎榜</el-button>
        </a>
        <a
          href="https://search.10jqka.com.cn/unifiedwap/result?w=%E5%9B%BD%E6%99%9F%E7%A7%91%E6%8A%80&querytype=stock&sign=1767691523683"
          target="_blank"
        >
          <el-button size="mini" style="margin-left: 10px; padding: 3px 10px" type="danger">同花顺</el-button>
        </a>
      </div>

      <div class="stock-info">
        <div class="price-section">
          <div class="current-price">
            <span class="price">{{ currentPrice }}</span>
            <span class="change" :class="priceChangeClass">{{ priceChange }}</span>
          </div>
          <div class="price-details">
            <div>今日开盘: {{ todayOpen }}</div>
            <div>昨日收盘: {{ yesterdayClose }}</div>
            <div>当前时间: {{ currentTime }}</div>
          </div>
        </div>
      </div>

      <div class="chart-container">
        <div id="stockChart" class="echarts-chart"></div>
      </div>

      <div class="disclaimer">
        <div class="disclaimer-content">
          <h4>温馨提示</h4>
          <p>当前演示页面的股票数据均为mockjs模拟数据，仅用于echarts k线图技术效果演示，不涉及任何投资建议，切勿作为投资依据。</p>
          <p>所有价格和交易信息均为模拟生成，与实际股票市场无关。</p>
          <p>投资有风险，入市需谨慎。</p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
  import * as echarts from 'echarts'
  import { getGskjRealTimeData } from '@/api/stock'

  export default {
    name: 'Stock',
    data() {
      return {
        currentPrice: '--',
        priceChange: '--',
        todayOpen: '--',
        yesterdayClose: '--',
        currentTime: '--',
        stockChart: null,
        kLineData: [],
        fixedMockYesterdayClose: null,
        fixedMockTodayOpen: null,
      }
    },
    mounted() {
      this.fetchStockData()
      this.initCharts()
      this.timer = setInterval(() => {
        this.fetchStockData()
      }, 2000)
      window.addEventListener('resize', this.handleResize)
    },
    beforeDestroy() {
      if (this.timer) {
        clearInterval(this.timer)
      }
      if (this.stockChart) {
        this.stockChart.dispose()
      }
      window.removeEventListener('resize', this.handleResize)
    },
    computed: {
      priceChangeClass() {
        if (this.priceChange && this.priceChange.startsWith('+')) {
          return 'increase'
        } else if (this.priceChange && this.priceChange.startsWith('-')) {
          return 'decrease'
        }
        return ''
      },
    },
    methods: {
      async fetchStockData() {
        try {
          const response = await getGskjRealTimeData()

          console.log('API Response:', response)

          if (response) {
            let data = response.data || response

            if (data && (data.data || data.info || data.result)) {
              const stockData = data.data || data.info || data.result

              const price = parseFloat(stockData.currentPrice || stockData.price || stockData.nowPrice || stockData.closingPriceToday || 0)

              const yesterdayClose = parseFloat(
                stockData.yesterdayClose || stockData.yesterdayClosingPrice || stockData.preClose || stockData.previousClose || 0
              )

              const todayOpen = parseFloat(stockData.todayOpen || stockData.open || stockData.openingPrice || stockData.openPrice || 0)

              if (!isNaN(price) && price > 0) {
                const apiYesterdayClose = yesterdayClose > 0 ? yesterdayClose : price / 1.05

                let priceChangeValue, priceChangePercent

                if (stockData.priceChange !== undefined || stockData.change !== undefined) {
                  priceChangeValue = parseFloat(stockData.priceChange || stockData.change || 0)
                  priceChangePercent = parseFloat(stockData.changePercent || stockData.changeRatio || stockData.changeRate || 0)
                } else {
                  priceChangeValue = price - apiYesterdayClose
                  priceChangePercent = ((priceChangeValue / apiYesterdayClose) * 100).toFixed(2)
                }

                const calculatedPrice = parseFloat((apiYesterdayClose * (1 + priceChangePercent / 100)).toFixed(2))
                const calculatedChangeValue = parseFloat((apiYesterdayClose * (priceChangePercent / 100)).toFixed(2))

                console.log('\n=== 价格与涨跌幅关系验证 ===')
                console.log(`昨日收盘价: ${apiYesterdayClose.toFixed(2)}`)
                console.log(`开盘价: ${todayOpen.toFixed(2)}`)
                console.log(`当前价格: ${price.toFixed(2)}`)
                console.log(`涨跌额: ${priceChangeValue.toFixed(2)}`)
                console.log(`涨跌幅: ${priceChangePercent.toFixed(2)}%`)
                console.log(`\n数学关系验证:`)
                console.log(
                  `昨日收盘价 * (1 + 涨跌幅/100) = ${apiYesterdayClose.toFixed(2)} * (1 + ${priceChangePercent.toFixed(
                    2
                  )}%) = ${calculatedPrice.toFixed(2)}`
                )
                console.log(
                  `昨日收盘价 * (涨跌幅/100) = ${apiYesterdayClose.toFixed(2)} * (${priceChangePercent.toFixed(
                    2
                  )}%) = ${calculatedChangeValue.toFixed(2)}`
                )
                console.log(
                  `当前价格 - 昨日收盘价 = ${price.toFixed(2)} - ${apiYesterdayClose.toFixed(2)} = ${(price - apiYesterdayClose).toFixed(
                    2
                  )}`
                )

                this.currentPrice = price.toFixed(2)
                this.priceChange = `${priceChangeValue >= 0 ? '+' : ''}${priceChangeValue.toFixed(2)} (${priceChangePercent.toFixed(2)}%)`
                this.todayOpen = todayOpen.toFixed(2) || '--'
                this.yesterdayClose = apiYesterdayClose.toFixed(2)
                this.currentTime = new Date().toLocaleString()

                this.updateKLineChart()
              } else {
                console.error('无法解析股票价格数据:', stockData)
                this.generateMockData()
              }
            } else {
              console.error('API响应格式不正确:', data)
              this.generateMockData()
            }
          } else {
            console.error('API响应为空')
            this.generateMockData()
          }
        } catch (error) {
          console.error('获取股票数据失败:', error)
          this.$message.warning('股票数据API调用次数已达上限，正在显示模拟数据。')
          this.generateMockData()
        }
      },
      updateKLineChart() {
        const currentPrice = parseFloat(this.currentPrice) || 15
        const yesterdayClose = parseFloat(this.yesterdayClose) || currentPrice
        const mockDataCount = 50

        this.kLineData = Array.from({ length: mockDataCount }, (_, i) => {
          const date = new Date(Date.now() - (mockDataCount - 1 - i) * 24 * 60 * 60 * 1000)
          const dateStr = date.toISOString().split('T')[0]

          if (i === mockDataCount - 1) {
            const open = parseFloat(this.todayOpen) || currentPrice * 0.99
            const close = currentPrice
            const high = Math.max(open, close) * (1 + Math.random() * 0.01)
            const low = Math.min(open, close) * (1 - Math.random() * 0.01)

            return [dateStr, open.toFixed(2), close.toFixed(2), low.toFixed(2), high.toFixed(2)]
          } else {
            const trendFactor = Math.sin(i / 5) * 0.02
            const randomFactor = (Math.random() - 0.5) * 0.02

            const prevClose = i > 0 ? parseFloat(this.kLineData[i - 1]?.[2] || yesterdayClose) : yesterdayClose
            const open = prevClose * (1 + trendFactor + randomFactor * 0.5)

            const closeChange = (Math.random() - 0.48) * 0.02
            const close = open * (1 + closeChange)

            const high = Math.max(open, close) * (1 + Math.random() * 0.01)
            const low = Math.min(open, close) * (1 - Math.random() * 0.01)

            return [dateStr, open.toFixed(2), close.toFixed(2), low.toFixed(2), high.toFixed(2)]
          }
        })

        if (this.stockChart) {
          const option = {
            title: {
              text: '国晟科技K线图',
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
              },
            },
            legend: {
              data: ['K线'],
            },
            xAxis: {
              type: 'category',
              data: this.kLineData.map((item) => item[0]),
            },
            yAxis: {
              type: 'value',
            },
            series: [
              {
                name: 'K线',
                type: 'candlestick',
                data: this.kLineData.map((item) => [parseFloat(item[1]), parseFloat(item[2]), parseFloat(item[3]), parseFloat(item[4])]),
                itemStyle: {
                  color: '#ef232a',
                  color0: '#14b143',
                  borderColor: '#ef232a',
                  borderColor0: '#14b143',
                },
              },
            ],
          }
          this.stockChart.setOption(option)
        }
      },
      initCharts() {
        this.$nextTick(() => {
          this.stockChart = echarts.init(document.getElementById('stockChart'))

          this.updateKLineChart()
        })
      },
      generateMockData() {
        if (!this.fixedMockYesterdayClose) {
          const basePrice = 15 + Math.random() * 10
          this.fixedMockYesterdayClose = basePrice
          this.fixedMockTodayOpen = basePrice * (0.99 + Math.random() * 0.02)
        }

        const volatility = 0.02
        const yesterdayClose = this.fixedMockYesterdayClose
        const todayOpen = this.fixedMockTodayOpen
        const currentPrice = todayOpen * (1 + (Math.random() - 0.48) * volatility)
        const priceChangeValue = currentPrice - yesterdayClose
        const priceChangePercent = (priceChangeValue / yesterdayClose) * 100

        this.currentPrice = currentPrice.toFixed(2)
        this.priceChange = `${priceChangeValue >= 0 ? '+' : ''}${priceChangeValue.toFixed(2)} (${priceChangePercent.toFixed(2)}%)`
        this.todayOpen = todayOpen.toFixed(2)
        this.yesterdayClose = yesterdayClose.toFixed(2)
        this.currentTime = new Date().toLocaleString()

        this.updateKLineChart()
      },
      handleResize() {
        if (this.stockChart) {
          this.stockChart.resize()
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  .stock-container {
    padding: 20px;
  }

  .stock-card {
    min-height: 800px;
  }

  .stock-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 15px;
    background-color: #f5f7fa;
    border-radius: 4px;
  }

  .price-section {
    flex: 1;
  }

  .current-price {
    font-size: 24px;
    margin-bottom: 10px;

    .price {
      font-weight: bold;
      margin-right: 15px;
    }

    .change {
      font-size: 16px;

      &.increase {
        color: #f56c6c;
      }

      &.decrease {
        color: #67c23a;
      }
    }
  }

  .price-details {
    display: flex;
    gap: 30px;

    div {
      font-size: 14px;
      color: #606266;
    }
  }

  .chart-container {
    margin-top: 30px;
    height: 400px;
  }

  .echarts-chart {
    width: 100%;
    height: 100%;
  }

  .disclaimer {
    padding: 15px;
    background-color: #fff3f3;
    border-radius: 4px;
    border-left: 4px solid #f56c6c;

    .disclaimer-content {
      h4 {
        margin-top: 10px;
        color: #f56c6c;
        margin-bottom: 10px;
        font-size: 16px;
      }

      p {
        margin: 5px 0;
        font-size: 14px;
        color: #606266;
        line-height: 1.5;
      }
    }
  }
</style>
