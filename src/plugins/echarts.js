import "echarts";
import "echarts/map/js/china";
import "echarts/map/js/world";

import "echarts-wordcloud";

import VabChart from "vue-echarts";
import theme from "./vab-echarts-theme.json";

VabChart.registerTheme("vab-echarts-theme", theme);
export default VabChart;
