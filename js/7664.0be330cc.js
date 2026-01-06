/*!
 * vue-admin-better
 * GitHub: https://github.com/zxwk1998/vue-admin-better
 * Gitee: https://gitee.com/chu1204505056/vue-admin-better
 *
 * 版权所有 (c) 2025 vue-admin-better
 * 本项目使用 MIT 许可证
 * 构建时间: 2026-1-6 09:48:05
 */
"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["7664"], {
84034: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getGskjRealTimeData: function() { return getGskjRealTimeData; }
});
let fixedTodayOpen = null;
let fixedYesterdayClose = null;
function getGskjRealTimeData() {
  return new Promise(resolve => {
    setTimeout(() => {
      if (!fixedYesterdayClose) {
        const basePrice = 15 + Math.random() * 10;
        fixedYesterdayClose = basePrice;
        fixedTodayOpen = parseFloat((basePrice * (0.99 + Math.random() * 0.02)).toFixed(2));
      }
      const yesterdayClose = fixedYesterdayClose;
      const todayOpen = fixedTodayOpen;
      const minChangePercent = -0.05;
      const maxChangePercent = 0.1;
      const changePercent = minChangePercent + Math.random() * (maxChangePercent - minChangePercent);
      const currentPrice = parseFloat((todayOpen * (1 + changePercent)).toFixed(2));
      const priceChangeValue = parseFloat((currentPrice - yesterdayClose).toFixed(2));
      const priceChangePercent = parseFloat((priceChangeValue / yesterdayClose * 100).toFixed(2));
      resolve({
        data: {
          data: {
            currentPrice: currentPrice,
            yesterdayClose: parseFloat(yesterdayClose.toFixed(2)),
            todayOpen: todayOpen,
            price: currentPrice,
            nowPrice: currentPrice,
            closingPriceToday: currentPrice,
            yesterdayClosingPrice: parseFloat(yesterdayClose.toFixed(2)),
            preClose: parseFloat(yesterdayClose.toFixed(2)),
            previousClose: parseFloat(yesterdayClose.toFixed(2)),
            open: todayOpen,
            openingPrice: todayOpen,
            openPrice: todayOpen,
            priceChange: priceChangeValue,
            changePercent: priceChangePercent,
            change: priceChangeValue,
            changeRatio: priceChangePercent,
            changeRate: priceChangePercent
          }
        }
      });
    }, 100);
  });
}

}),
1548: (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_7_1_webpack_5_104_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__rspack_import_0 = __webpack_require__(40015);
/* import */ var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_7_1_webpack_5_104_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_7_1_webpack_5_104_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__rspack_import_0);
/* import */ var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_7_1_webpack_5_104_1_node_modules_css_loader_dist_runtime_api_js__rspack_import_1 = __webpack_require__(84176);
/* import */ var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_7_1_webpack_5_104_1_node_modules_css_loader_dist_runtime_api_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_7_1_webpack_5_104_1_node_modules_css_loader_dist_runtime_api_js__rspack_import_1);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_7_1_webpack_5_104_1_node_modules_css_loader_dist_runtime_api_js__rspack_import_1_default()((_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_7_1_webpack_5_104_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__rspack_import_0_default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".stock-container[data-v-a33b874a]{padding:20px}.stock-card[data-v-a33b874a]{min-height:800px}.stock-info[data-v-a33b874a]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;padding:15px;background-color:#f5f7fa;border-radius:4px}.price-section[data-v-a33b874a]{flex:1}.current-price[data-v-a33b874a]{font-size:24px;margin-bottom:10px}.current-price .price[data-v-a33b874a]{font-weight:bold;margin-right:15px}.current-price .change[data-v-a33b874a]{font-size:16px}.current-price .change.increase[data-v-a33b874a]{color:#f56c6c}.current-price .change.decrease[data-v-a33b874a]{color:#67c23a}.price-details[data-v-a33b874a]{display:flex;gap:30px}.price-details div[data-v-a33b874a]{font-size:14px;color:#606266}.chart-container[data-v-a33b874a]{margin-top:30px;height:400px}.echarts-chart[data-v-a33b874a]{width:100%;height:100%}.disclaimer[data-v-a33b874a]{padding:15px;background-color:#fff3f3;border-radius:4px;border-left:4px solid #f56c6c}.disclaimer .disclaimer-content h4[data-v-a33b874a]{margin-top:10px;color:#f56c6c;margin-bottom:10px;font-size:16px}.disclaimer .disclaimer-content p[data-v-a33b874a]{margin:5px 0;font-size:14px;color:#606266;line-height:1.5}", ""]);
// Exports
/* export default */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


}),
41248: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ views_stock; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.26_css-loader@7.1.2_@rspack+core@1.7.1_webpack@_1aa4f1bbe7085d478bfddd6730367f21/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.26_css-loader@7.1.2_@rspack+core@1.7.1_webpack@_1aa4f1bbe7085d478bfddd6730367f21/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/stock/index.vue?vue&type=template&id=a33b874a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"stock-container"},[_c('el-card',{staticClass:"stock-card",attrs:{"shadow":"never"}},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("国晟科技 - 模拟市值")]),_c('a',{attrs:{"href":"https://data.10jqka.com.cn/market/longhu/","target":"_blank"}},[_c('el-button',{staticStyle:{"margin-left":"10px","padding":"3px 10px"},attrs:{"type":"warning","size":"mini"}},[_vm._v("龙虎榜")])],1),_c('a',{attrs:{"href":"https://search.10jqka.com.cn/unifiedwap/result?w=%E5%9B%BD%E6%99%9F%E7%A7%91%E6%8A%80&querytype=stock&sign=1767691523683","target":"_blank"}},[_c('el-button',{staticStyle:{"margin-left":"10px","padding":"3px 10px"},attrs:{"size":"mini","type":"danger"}},[_vm._v("同花顺")])],1)]),_c('div',{staticClass:"stock-info"},[_c('div',{staticClass:"price-section"},[_c('div',{staticClass:"current-price"},[_c('span',{staticClass:"price"},[_vm._v(_vm._s(_vm.currentPrice))]),_c('span',{staticClass:"change",class:_vm.priceChangeClass},[_vm._v(_vm._s(_vm.priceChange))])]),_c('div',{staticClass:"price-details"},[_c('div',[_vm._v("今日开盘: "+_vm._s(_vm.todayOpen))]),_c('div',[_vm._v("昨日收盘: "+_vm._s(_vm.yesterdayClose))]),_c('div',[_vm._v("当前时间: "+_vm._s(_vm.currentTime))])])])]),_c('div',{staticClass:"chart-container"},[_c('div',{staticClass:"echarts-chart",attrs:{"id":"stockChart"}})]),_c('div',{staticClass:"disclaimer"},[_c('div',{staticClass:"disclaimer-content"},[_c('h4',[_vm._v("温馨提示")]),_c('p',[_vm._v("当前演示页面的股票数据均为mockjs模拟数据，仅用于echarts k线图技术效果演示，不涉及任何投资建议，切勿作为投资依据。")]),_c('p',[_vm._v("所有价格和交易信息均为模拟生成，与实际股票市场无关。")]),_c('p',[_vm._v("投资有风险，入市需谨慎。")])])])])],1)}
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.47.0/node_modules/core-js/modules/es.iterator.constructor.js
var es_iterator_constructor = __webpack_require__(17932);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.47.0/node_modules/core-js/modules/es.iterator.map.js
var es_iterator_map = __webpack_require__(96466);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/index.js + 21 modules
var echarts = __webpack_require__(64049);
// EXTERNAL MODULE: ./src/api/stock.js
var stock = __webpack_require__(84034);
;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@10.0.0_@babel+core@7.28.5_webpack@5.104.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.26_css-loader@7.1.2_@rspack+core@1.7.1_webpack@_1aa4f1bbe7085d478bfddd6730367f21/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/stock/index.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* export default */ var stockvue_type_script_lang_js_ = ({
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
      fixedMockTodayOpen: null
    };
  },
  mounted() {
    this.fetchStockData();
    this.initCharts();
    this.timer = setInterval(() => {
      this.fetchStockData();
    }, 2000);
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    if (this.stockChart) {
      this.stockChart.dispose();
    }
    window.removeEventListener('resize', this.handleResize);
  },
  computed: {
    priceChangeClass() {
      if (this.priceChange && this.priceChange.startsWith('+')) {
        return 'increase';
      } else if (this.priceChange && this.priceChange.startsWith('-')) {
        return 'decrease';
      }
      return '';
    }
  },
  methods: {
    async fetchStockData() {
      try {
        const response = await (0,stock.getGskjRealTimeData)();
        console.log('API Response:', response);
        if (response) {
          let data = response.data || response;
          if (data && (data.data || data.info || data.result)) {
            const stockData = data.data || data.info || data.result;
            const price = parseFloat(stockData.currentPrice || stockData.price || stockData.nowPrice || stockData.closingPriceToday || 0);
            const yesterdayClose = parseFloat(stockData.yesterdayClose || stockData.yesterdayClosingPrice || stockData.preClose || stockData.previousClose || 0);
            const todayOpen = parseFloat(stockData.todayOpen || stockData.open || stockData.openingPrice || stockData.openPrice || 0);
            if (!isNaN(price) && price > 0) {
              const apiYesterdayClose = yesterdayClose > 0 ? yesterdayClose : price / 1.05;
              let priceChangeValue, priceChangePercent;
              if (stockData.priceChange !== undefined || stockData.change !== undefined) {
                priceChangeValue = parseFloat(stockData.priceChange || stockData.change || 0);
                priceChangePercent = parseFloat(stockData.changePercent || stockData.changeRatio || stockData.changeRate || 0);
              } else {
                priceChangeValue = price - apiYesterdayClose;
                priceChangePercent = (priceChangeValue / apiYesterdayClose * 100).toFixed(2);
              }
              const calculatedPrice = parseFloat((apiYesterdayClose * (1 + priceChangePercent / 100)).toFixed(2));
              const calculatedChangeValue = parseFloat((apiYesterdayClose * (priceChangePercent / 100)).toFixed(2));
              console.log('\n=== 价格与涨跌幅关系验证 ===');
              console.log(`昨日收盘价: ${apiYesterdayClose.toFixed(2)}`);
              console.log(`开盘价: ${todayOpen.toFixed(2)}`);
              console.log(`当前价格: ${price.toFixed(2)}`);
              console.log(`涨跌额: ${priceChangeValue.toFixed(2)}`);
              console.log(`涨跌幅: ${priceChangePercent.toFixed(2)}%`);
              console.log(`\n数学关系验证:`);
              console.log(`昨日收盘价 * (1 + 涨跌幅/100) = ${apiYesterdayClose.toFixed(2)} * (1 + ${priceChangePercent.toFixed(2)}%) = ${calculatedPrice.toFixed(2)}`);
              console.log(`昨日收盘价 * (涨跌幅/100) = ${apiYesterdayClose.toFixed(2)} * (${priceChangePercent.toFixed(2)}%) = ${calculatedChangeValue.toFixed(2)}`);
              console.log(`当前价格 - 昨日收盘价 = ${price.toFixed(2)} - ${apiYesterdayClose.toFixed(2)} = ${(price - apiYesterdayClose).toFixed(2)}`);
              this.currentPrice = price.toFixed(2);
              this.priceChange = `${priceChangeValue >= 0 ? '+' : ''}${priceChangeValue.toFixed(2)} (${priceChangePercent.toFixed(2)}%)`;
              this.todayOpen = todayOpen.toFixed(2) || '--';
              this.yesterdayClose = apiYesterdayClose.toFixed(2);
              this.currentTime = new Date().toLocaleString();
              this.updateKLineChart();
            } else {
              console.error('无法解析股票价格数据:', stockData);
              this.generateMockData();
            }
          } else {
            console.error('API响应格式不正确:', data);
            this.generateMockData();
          }
        } else {
          console.error('API响应为空');
          this.generateMockData();
        }
      } catch (error) {
        console.error('获取股票数据失败:', error);
        this.$message.warning('股票数据API调用次数已达上限，正在显示模拟数据。');
        this.generateMockData();
      }
    },
    updateKLineChart() {
      const currentPrice = parseFloat(this.currentPrice) || 15;
      const yesterdayClose = parseFloat(this.yesterdayClose) || currentPrice;
      const mockDataCount = 50;
      this.kLineData = Array.from({
        length: mockDataCount
      }, (_, i) => {
        const date = new Date(Date.now() - (mockDataCount - 1 - i) * 24 * 60 * 60 * 1000);
        const dateStr = date.toISOString().split('T')[0];
        if (i === mockDataCount - 1) {
          const open = parseFloat(this.todayOpen) || currentPrice * 0.99;
          const close = currentPrice;
          const high = Math.max(open, close) * (1 + Math.random() * 0.01);
          const low = Math.min(open, close) * (1 - Math.random() * 0.01);
          return [dateStr, open.toFixed(2), close.toFixed(2), low.toFixed(2), high.toFixed(2)];
        } else {
          const trendFactor = Math.sin(i / 5) * 0.02;
          const randomFactor = (Math.random() - 0.5) * 0.02;
          const prevClose = i > 0 ? parseFloat(this.kLineData[i - 1]?.[2] || yesterdayClose) : yesterdayClose;
          const open = prevClose * (1 + trendFactor + randomFactor * 0.5);
          const closeChange = (Math.random() - 0.48) * 0.02;
          const close = open * (1 + closeChange);
          const high = Math.max(open, close) * (1 + Math.random() * 0.01);
          const low = Math.min(open, close) * (1 - Math.random() * 0.01);
          return [dateStr, open.toFixed(2), close.toFixed(2), low.toFixed(2), high.toFixed(2)];
        }
      });
      if (this.stockChart) {
        const option = {
          title: {
            text: '国晟科技K线图'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          legend: {
            data: ['K线']
          },
          xAxis: {
            type: 'category',
            data: this.kLineData.map(item => item[0])
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            name: 'K线',
            type: 'candlestick',
            data: this.kLineData.map(item => [parseFloat(item[1]), parseFloat(item[2]), parseFloat(item[3]), parseFloat(item[4])]),
            itemStyle: {
              color: '#ef232a',
              color0: '#14b143',
              borderColor: '#ef232a',
              borderColor0: '#14b143'
            }
          }]
        };
        this.stockChart.setOption(option);
      }
    },
    initCharts() {
      this.$nextTick(() => {
        this.stockChart = echarts.init(document.getElementById('stockChart'));
        this.updateKLineChart();
      });
    },
    generateMockData() {
      if (!this.fixedMockYesterdayClose) {
        const basePrice = 15 + Math.random() * 10;
        this.fixedMockYesterdayClose = basePrice;
        this.fixedMockTodayOpen = basePrice * (0.99 + Math.random() * 0.02);
      }
      const volatility = 0.02;
      const yesterdayClose = this.fixedMockYesterdayClose;
      const todayOpen = this.fixedMockTodayOpen;
      const currentPrice = todayOpen * (1 + (Math.random() - 0.48) * volatility);
      const priceChangeValue = currentPrice - yesterdayClose;
      const priceChangePercent = priceChangeValue / yesterdayClose * 100;
      this.currentPrice = currentPrice.toFixed(2);
      this.priceChange = `${priceChangeValue >= 0 ? '+' : ''}${priceChangeValue.toFixed(2)} (${priceChangePercent.toFixed(2)}%)`;
      this.todayOpen = todayOpen.toFixed(2);
      this.yesterdayClose = yesterdayClose.toFixed(2);
      this.currentTime = new Date().toLocaleString();
      this.updateKLineChart();
    },
    handleResize() {
      if (this.stockChart) {
        this.stockChart.resize();
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/views/stock/index.vue?vue&type=script&lang=js&
 /* export default */ var views_stockvue_type_script_lang_js_ = (stockvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.104.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(64812);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.104.1/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(27381);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.104.1/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(51511);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.104.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(12932);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.104.1/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(7296);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.104.1/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(32077);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.7.1_webpack@5.104.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.26_css-loader@7.1.2_@rspack+core@1.7.1_webpack@_1aa4f1bbe7085d478bfddd6730367f21/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.5.2_sass@1.32.13_webpack@5.104.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.26_css-loader@7.1.2_@rspack+core@1.7.1_webpack@_1aa4f1bbe7085d478bfddd6730367f21/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/stock/index.vue?vue&type=style&index=0&id=a33b874a&lang=scss&scoped=true&
var stockvue_type_style_index_0_id_a33b874a_lang_scss_scoped_true_ = __webpack_require__(1548);
;// CONCATENATED MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.104.1/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.7.1_webpack@5.104.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.26_css-loader@7.1.2_@rspack+core@1.7.1_webpack@_1aa4f1bbe7085d478bfddd6730367f21/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.5.2_sass@1.32.13_webpack@5.104.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.26_css-loader@7.1.2_@rspack+core@1.7.1_webpack@_1aa4f1bbe7085d478bfddd6730367f21/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/stock/index.vue?vue&type=style&index=0&id=a33b874a&lang=scss&scoped=true&

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(stockvue_type_style_index_0_id_a33b874a_lang_scss_scoped_true_["default"], options);




       /* export default */ var views_stockvue_type_style_index_0_id_a33b874a_lang_scss_scoped_true_ = (stockvue_type_style_index_0_id_a33b874a_lang_scss_scoped_true_["default"] && stockvue_type_style_index_0_id_a33b874a_lang_scss_scoped_true_["default"].locals ? stockvue_type_style_index_0_id_a33b874a_lang_scss_scoped_true_["default"].locals : undefined);

;// CONCATENATED MODULE: ./src/views/stock/index.vue?vue&type=style&index=0&id=a33b874a&lang=scss&scoped=true&

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.26_css-loader@7.1.2_@rspack+core@1.7.1_webpack@_1aa4f1bbe7085d478bfddd6730367f21/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(30657);
;// CONCATENATED MODULE: ./src/views/stock/index.vue



;


/* normalize component */

var component = (0,componentNormalizer["default"])(
  views_stockvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "a33b874a",
  null
  
)

/* export default */ var views_stock = (component.exports);

}),

}]);