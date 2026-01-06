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
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["1231"], {
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

}]);