import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layouts";
import EmptyLayout from "@/layouts/EmptyLayout";

Vue.use(VueRouter);

export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },
  {
    path: "/redirect",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/views/redirect/index"),
      },
    ],
  },
];

/*当settings.js里authentication配置的是intelligence时，views引入交给前端配置*/
export const asyncRoutes = [
  {
    path: "/",
    component: Layout,
    redirect: "/index",
    meta: {
      title: "首页",
      icon: "home",
      affix: true,
    },
    children: [
      {
        path: "/index",
        name: "Index",
        component: () => import("@/views/index/index"),
        meta: {
          title: "首页",
          icon: "home",
          affix: true,
        },
      },
    ],
  },
  /* {
    path: "/test",
    component: Layout,
    redirect: "noRedirect",
    children: [
      {
        path: "test",
        name: "Test",
        component: () => import("@/views/test/index"),
        meta: {
          title: "test",
          icon: "marker",
          permissions: ["admin", "test"],
        },
      },
    ],
  }, */

  {
    path: "/byui",
    component: Layout,
    redirect: "noRedirect",
    name: "Byui",
    meta: { title: "组件", icon: "cloud" },
    children: [
      {
        path: "icon",
        component: EmptyLayout,
        redirect: "noRedirect",
        name: "Icon",
        meta: {
          title: "图标",
          permissions: ["admin"],
        },
        children: [
          {
            path: "awesomeIcon",
            name: "AwesomeIcon",
            component: () => import("@/views/byui/icon/index"),
            meta: { title: "常规图标" },
          },
          {
            path: "remixIcon",
            name: "RemixIcon",
            component: () => import("@/views/byui/icon/remixIcon"),
            meta: { title: "小清新图标" },
          },
          {
            path: "colorfulIcon",
            name: "ColorfulIcon",
            component: () => import("@/views/byui/icon/colorfulIcon"),
            meta: { title: "多彩图标" },
          },
        ],
      },
      {
        path: "table",
        component: EmptyLayout,
        redirect: "noRedirect",
        name: "Table",
        meta: {
          title: "表格",
        },
        children: [
          {
            path: "comprehensiveTable",
            name: "ComprehensiveTable",
            component: () => import("@/views/byui/table/index"),
            meta: { title: "综合表格", permissions: ["admin"] },
          },
          {
            path: "inlineEditTable",
            name: "InlineEditTable",
            component: () => import("@/views/byui/table/inlineEditTable"),
            meta: { title: "行内编辑", permissions: ["admin"] },
          },
        ],
      },
      {
        path: "form",
        name: "Form",
        component: () => import("@/views/byui/form/index"),
        meta: { title: "表单", permissions: ["admin"] },
      },
      {
        path: "element",
        name: "Element",
        component: () => import("@/views/byui/element/index"),
        meta: { title: "常用组件", permissions: ["admin"] },
      },
      {
        path: "tree",
        name: "Tree",
        component: () => import("@/views/byui/tree/index"),
        meta: { title: "树", permissions: ["admin"] },
      },
      {
        path: "card",
        name: "Card",
        component: () => import("@/views/byui/card/index"),
        meta: { title: "卡片", permissions: ["admin"] },
      },
      {
        path: "permission",
        name: "Permission",
        component: () => import("@/views/byui/permission/index"),
        meta: {
          title: "权限控制",
          permissions: ["admin", "editor", "test"],
        },
      },
      {
        path: "betterScroll",
        name: "BetterScroll",
        component: () => import("@/views/byui/betterScroll/index"),
        meta: {
          title: "滚动侦测",
          permissions: ["admin"],
        },
      },
      {
        path: "verify",
        name: "Verify",
        component: () => import("@/views/byui/verify/index"),
        meta: { title: "验证码", permissions: ["admin"] },
      },
      {
        path: "menu1",
        component: () => import("@/views/byui/nested/menu1/index"),
        name: "Menu1",
        meta: {
          title: "嵌套路由 1",
          permissions: ["admin"],
        },
        children: [
          {
            path: "menu1-1",
            component: () => import("@/views/byui/nested/menu1/menu1-1/index"),
            name: "Menu1-1",
            meta: { title: "嵌套路由 1-1" },
            children: [
              {
                path: "menu1-1-1",
                component: () =>
                  import("@/views/byui/nested/menu1/menu1-1/menu1-1-1/index"),
                name: "Menu1-1-1",
                meta: { title: "嵌套路由 1-1-1" },
              },
            ],
          },
        ],
      },
      {
        path: "magnifier",
        name: "Magnifier",
        component: () => import("@/views/byui/magnifier/index"),
        meta: { title: "放大镜", permissions: ["admin"] },
      },
      {
        path: "waterfall",
        name: "Waterfall",
        component: () => import("@/views/byui/waterfall/index"),
        meta: {
          title: "瀑布屏",
          noKeepAlive: true,
          permissions: ["admin"],
        },
      },
      {
        path: "echarts",
        name: "Echarts",
        component: () => import("@/views/byui/echarts/index"),
        meta: { title: "图表", permissions: ["admin"] },
      },

      {
        path: "loading",
        name: "Loading",
        component: () => import("@/views/byui/loading/index"),
        meta: { title: "loading", permissions: ["admin"] },
      },
      {
        path: "player",
        name: "Player",
        component: () => import("@/views/byui/player/index"),
        meta: { title: "视频播放器", permissions: ["admin"] },
      },
      {
        path: "markdownEditor",
        name: "MarkdownEditor",
        component: () => import("@/views/byui/markdownEditor/index"),
        meta: { title: "markdown编辑器", permissions: ["admin"] },
      },
      {
        path: "editor",
        name: "Editor",
        component: () => import("@/views/byui/editor/index"),
        meta: { title: "富文本编辑器", permissions: ["admin"] },
      },
      {
        path: "qrCode",
        name: "QrCode",
        component: () => import("@/views/byui/qrCode/index"),
        meta: { title: "二维码", permissions: ["admin"] },
      },
      {
        path: "backToTop",
        name: "BackToTop",
        component: () => import("@/views/byui/backToTop/index"),
        meta: { title: "返回顶部", permissions: ["admin"] },
      },
      {
        path: "lodash",
        name: "Lodash",
        component: () => import("@/views/byui/lodash/index"),
        meta: { title: "lodash", permissions: ["admin"] },
      },
      {
        path: "imgComparison",
        name: "ImgComparison",
        component: () => import("@/views/byui/imgComparison/index"),
        meta: { title: "图像拖拽比对", permissions: ["admin"] },
      },
      {
        path: "codeGenerator",
        name: "CodeGenerator",
        component: () => import("@/views/byui/codeGenerator/index"),
        meta: { title: "代码生成机", permissions: ["admin"] },
      },
      {
        path: "markdown",
        name: "Markdown",
        component: () => import("@/views/byui/markdown/index"),
        meta: { title: "markdown阅读器", permissions: ["admin"] },
      },
      {
        path: "smallComponents",
        name: "SmallComponents",
        component: () => import("@/views/byui/smallComponents/index"),
        meta: { title: "小组件", permissions: ["admin"] },
      },

      {
        path: "upload",
        name: "Upload",
        component: () => import("@/views/byui/upload/index"),
        meta: { title: "上传", permissions: ["admin"] },
      },
      {
        path: "excel",
        component: EmptyLayout,
        redirect: "noRedirect",
        name: "Excel",
        meta: {
          title: "Excel",
          permissions: ["admin"],
        },
        children: [
          {
            path: "exportExcel",
            component: () => import("@/views/byui/excel/exportExcel"),
            name: "ExportExcel",
            meta: { title: "导出Excel" },
          },
          {
            path: "exportSelectedExcel",
            component: () => import("@/views/byui/excel/exportSelectExcel"),
            name: "ExportSelectedExcel",
            meta: { title: "导出选中行" },
          },
          {
            path: "exportMergeHeaderExcel",
            component: () =>
              import("@/views/byui/excel/exportMergeHeaderExcel"),
            name: "ExportMergeHeaderExcel",
            meta: { title: "导出合并" },
          },
          {
            path: "uploadExcel",
            component: () => import("@/views/byui/excel/uploadExcel"),
            name: "UploadExcel",
            meta: { title: "上传Excel" },
          },
        ],
      },
      {
        path: "sticky",
        name: "Sticky",
        component: () => import("@/views/byui/sticky/index"),
        meta: { title: "sticky吸附", permissions: ["admin"] },
      },
      {
        path: "log",
        name: "Log",
        component: () => import("@/views/byui/errorLog/index"),
        meta: { title: "错误日志模拟", permissions: ["admin"] },
      },
      {
        path: "news",
        name: "News",
        component: () => import("@/views/byui/news/index"),
        meta: { title: "新闻", permissions: ["admin"] },
      },
      {
        path: "more",
        name: "More",
        component: () => import("@/views/byui/more/index"),
        meta: { title: "更多组件", permissions: ["admin"] },
      },
    ],
  },
  {
    path: "/mall",
    component: Layout,
    redirect: "noRedirect",
    name: "Mall",
    meta: {
      title: "商城模板",
      icon: "shopping-cart",
      permissions: ["admin"],
    },

    children: [
      {
        path: "pay",
        name: "Pay",
        component: () => import("@/views/mall/pay/index"),
        meta: {
          title: "支付",
          noKeepAlive: true,
        },
        children: null,
      },
      {
        path: "goodsList",
        name: "GoodsList",
        component: () => import("@/views/mall/goodsList/index"),
        meta: {
          title: "商品列表",
        },
      },
      {
        path: "goodsDetail",
        name: "GoodsDetail",
        component: () => import("@/views/mall/goodsDetail/index"),
        meta: {
          title: "商品详情",
        },
      },
    ],
  },
  {
    path: "/error",
    component: EmptyLayout,
    redirect: "noRedirect",
    name: "Error",
    meta: { title: "错误页", icon: "bug" },
    children: [
      {
        path: "/401",
        name: "401",
        component: () => import("@/views/401"),
        meta: { title: "401" },
      },
      {
        path: "/404",
        name: "404",
        component: () => import("@/views/404"),
        meta: { title: "404" },
      },
    ],
  },
  {
    path: "*",
    redirect: "/404",
    hidden: true,
  },
];

const router = new VueRouter({
  mode: "hash",
  scrollBehavior: () => ({
    y: 0,
  }),
  routes: constantRoutes,
});

export function resetRouter() {
  router.matcher = new VueRouter({
    mode: "hash",
    scrollBehavior: () => ({
      y: 0,
    }),
    routes: constantRoutes,
  }).matcher;
}

export default router;
