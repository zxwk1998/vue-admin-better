const data = [
  {
    path: "/",
    component: "Layout",
    redirect: "/index",
    children: [
      {
        path: "index",
        name: "Index",
        component: "index/index",
        meta: {
          title: "首页",
          icon: "home",
          affix: true,
          noCache: true,
        },
      },
    ],
  },
  {
    path: "/test",
    component: "Layout",
    redirect: "noRedirect",
    children: [
      {
        path: "test",
        name: "Test",
        component: "test/index",
        meta: { title: "test", icon: "marker" },
      },
    ],
  },
  {
    path: "/permission",
    component: "Layout",
    redirect: "noRedirect",
    children: [
      {
        path: "permission",
        name: "Permission",
        component: "byui/permission/index",
        meta: { title: "权限控制", icon: "user-shield" },
      },
    ],
  },
  {
    path: "/byui",
    component: "Layout",
    redirect: "noRedirect",
    name: "Byui",
    meta: { title: "组件库", icon: "cloud", roles: ["admin"] },
    children: [
      {
        path: "codeGenerator",
        name: "CodeGenerator",
        component: "byui/codeGenerator/index",
        meta: { title: "代码生成机" },
      },
      {
        path: "news",
        name: "News",
        component: "byui/news/index",
        meta: { title: "新闻" },
      },
      /*{
        path: "markdown",
        name: "Markdown",
        component: "byui/markdown/index",
        meta: { title: "markdown阅读器" },
      },*/
      {
        path: "smallComponents",
        name: "SmallComponents",
        component: "byui/smallComponents/index",
        meta: { title: "小组件" },
      },
      {
        path: "icon",
        name: "Icon",
        component: "byui/icon/index",
        meta: { title: "图标" },
      },
      {
        path: "colorfulIcon",
        name: "ColorfulIcon",
        component: "byui/icon/colorfulIcon",
        meta: { title: "多彩图标" },
      },
      {
        path: "upload",
        name: "Upload",
        component: "byui/upload/index",
        meta: { title: "上传" },
      },
      {
        path: "sticky",
        name: "Sticky",
        component: "byui/sticky/index",
        meta: { title: "sticky吸附" },
      },
      {
        path: "table",
        name: "Table",
        component: "byui/table/index",
        meta: { title: "表格" },
      },
      {
        path: "form",
        name: "Form",
        component: "byui/form/index",
        meta: { title: "表单" },
      },
      {
        path: "tree",
        name: "Tree",
        component: "byui/tree/index",
        meta: { title: "树" },
      },
      {
        path: "card",
        name: "Card",
        component: "byui/card/index",
        meta: { title: "卡片" },
      },
      {
        path: "magnifier",
        name: "Magnifier",
        component: "byui/magnifier/index",
        meta: { title: "放大镜" },
      },
      {
        path: "waterfall",
        name: "Waterfall",
        component: "byui/waterfall/index",
        meta: { title: "瀑布屏", noCache: true },
      },
      {
        path: "echarts",
        name: "Echarts",
        component: "byui/echarts/index",
        meta: { title: "图表" },
      },

      {
        path: "loading",
        name: "Loading",
        component: "byui/loading/index",
        meta: { title: "loading" },
      },
      /*{
        path: "player",
        name: "Player",
        component: "byui/player/index",
        meta: { title: "视频播放器", noCache: true },
      },*/
      {
        path: "editor",
        name: "Editor",
        component: "byui/editor/index",
        meta: { title: "富文本编辑器" },
      },
      {
        path: "qrCode",
        name: "QrCode",
        component: "byui/qrCode/index",
        meta: { title: "二维码" },
      },
      {
        path: "backToTop",
        name: "BackToTop",
        component: "byui/backToTop/index",
        meta: { title: "返回顶部" },
      },
      {
        path: "lodash",
        name: "Lodash",
        component: "byui/lodash/index",
        meta: { title: "lodash" },
      },
      {
        path: "imgComparison",
        name: "ImgComparison",
        component: "byui/imgComparison/index",
        meta: { title: "图像拖拽比对" },
      },
      {
        path: "log",
        name: "Log",
        component: "byui/errorLog/index",
        meta: { title: "错误日志模拟" },
      },
    ],
  },
  {
    path: "/401",
    component: "401",
    meta: { title: "401错误页演示", icon: "bug" },
  },
  {
    path: "/404",
    component: "404",
    meta: { title: "404错误页演示", icon: "bug" },
  },
];
export default [
  {
    url: "/menu/navigate",
    type: "post",
    response: (config) => {
      return { code: 200, msg: "success", data: data };
    },
  },
];
