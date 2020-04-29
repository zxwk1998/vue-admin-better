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
    children: [
      {
        path: "/index",
        name: "Index",
        component: () => import("@/views/index/index"),
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
    component: Layout,
    redirect: "noRedirect",
    children: [
      {
        path: "test",
        name: "Test",
        component: () => import("@/views/test/index"),
        meta: {
          title: "test ",
          icon: "marker",
          roles: ["admin", "test"],
        },
      },
    ],
  },
  {
    path: "/byui",
    component: Layout,
    redirect: "noRedirect",
    name: "Byui",
    meta: { title: "组件", icon: "cloud" },
    alwaysShow: true,
    children: [
      {
        path: "permission",
        name: "Permission",
        component: () => import("@/views/byui/permission/index"),
        meta: {
          title: "权限控制",
          roles: ["admin", "editor", "test"],
        },
      },
      {
        path: "menu1",
        component: () => import("@/views/byui/nested/menu1/index"),
        name: "Menu1",
        meta: {
          title: "嵌套路由 1",
          roles: ["admin"],
        },
        alwaysShow: true,
        children: [
          {
            path: "menu1-1",
            component: () => import("@/views/byui/nested/menu1/menu1-1/index"),
            name: "Menu1-1",
            meta: { title: "嵌套路由 1-1" },
            alwaysShow: true,
            children: [
              {
                path: "menu1-1-1-1",
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
        path: "table",
        name: "Table",
        component: () => import("@/views/byui/table/index"),
        meta: { title: "表格", roles: ["admin", "editor"] },
      },
      {
        path: "form",
        name: "Form",
        component: () => import("@/views/byui/form/index"),
        meta: { title: "表单", roles: ["admin"] },
      },
      {
        path: "element",
        name: "Element",
        component: () => import("@/views/byui/element/index"),
        meta: { title: "常用组件", roles: ["admin"] },
      },
      {
        path: "tree",
        name: "Tree",
        component: () => import("@/views/byui/tree/index"),
        meta: { title: "树", roles: ["admin"] },
      },
      {
        path: "card",
        name: "Card",
        component: () => import("@/views/byui/card/index"),
        meta: { title: "卡片", roles: ["admin"] },
      },
      {
        path: "magnifier",
        name: "Magnifier",
        component: () => import("@/views/byui/magnifier/index"),
        meta: { title: "放大镜", roles: ["admin"] },
      },
      {
        path: "waterfall",
        name: "Waterfall",
        component: () => import("@/views/byui/waterfall/index"),
        meta: { title: "瀑布屏", noCache: true, roles: ["admin"] },
      },
      {
        path: "echarts",
        name: "Echarts",
        component: () => import("@/views/byui/echarts/index"),
        meta: { title: "图表", roles: ["admin"] },
      },

      {
        path: "loading",
        name: "Loading",
        component: () => import("@/views/byui/loading/index"),
        meta: { title: "loading", roles: ["admin"] },
      },
      {
        path: "player",
        name: "Player",
        component: () => import("@/views/byui/player/index"),
        meta: { title: "视频播放器", noCache: true, roles: ["admin"] },
      },
      {
        path: "editor",
        name: "Editor",
        component: () => import("@/views/byui/editor/index"),
        meta: { title: "富文本编辑器", roles: ["admin"] },
      },
      {
        path: "qrCode",
        name: "QrCode",
        component: () => import("@/views/byui/qrCode/index"),
        meta: { title: "二维码", roles: ["admin"] },
      },
      {
        path: "backToTop",
        name: "BackToTop",
        component: () => import("@/views/byui/backToTop/index"),
        meta: { title: "返回顶部", roles: ["admin"] },
      },
      {
        path: "lodash",
        name: "Lodash",
        component: () => import("@/views/byui/lodash/index"),
        meta: { title: "lodash", roles: ["admin"] },
      },
      {
        path: "imgComparison",
        name: "ImgComparison",
        component: () => import("@/views/byui/imgComparison/index"),
        meta: { title: "图像拖拽比对", roles: ["admin"] },
      },
      {
        path: "codeGenerator",
        name: "CodeGenerator",
        component: () => import("@/views/byui/codeGenerator/index"),
        meta: { title: "代码生成机", roles: ["admin"] },
      },
      {
        path: "markdown",
        name: "Markdown",
        component: () => import("@/views/byui/markdown/index"),
        meta: { title: "markdown阅读器", roles: ["admin"] },
      },
      {
        path: "smallComponents",
        name: "SmallComponents",
        component: () => import("@/views/byui/smallComponents/index"),
        meta: { title: "小组件", roles: ["admin"] },
      },
      {
        path: "icon",
        name: "Icon",
        component: () => import("@/views/byui/icon/index"),
        meta: { title: "常规图标", roles: ["admin"] },
      },
      {
        path: "colorfulIcon",
        name: "ColorfulIcon",
        component: () => import("@/views/byui/icon/colorfulIcon"),
        meta: { title: "多彩图标", roles: ["admin"] },
      },
      {
        path: "remixicon",
        name: "Remixicon",
        component: () => import("@/views/byui/icon/remixicon"),
        meta: { title: "小清新图标(图标过多打开会慢)", roles: ["admin"] },
      },
      {
        path: "upload",
        name: "Upload",
        component: () => import("@/views/byui/upload/index"),
        meta: { title: "上传", roles: ["admin"] },
      },
      {
        path: "sticky",
        name: "Sticky",
        component: () => import("@/views/byui/sticky/index"),
        meta: { title: "sticky吸附", roles: ["admin"] },
      },
      {
        path: "log",
        name: "Log",
        component: () => import("@/views/byui/errorLog/index"),
        meta: { title: "错误日志模拟", roles: ["admin"] },
      },
      {
        path: "news",
        name: "News",
        component: () => import("@/views/byui/news/index"),
        meta: { title: "新闻（可能存在跨域）", roles: ["admin"] },
      },
      {
        path: "more",
        name: "More",
        component: () => import("@/views/byui/more/index"),
        meta: { title: "更多组件", roles: ["admin"] },
      },
    ],
  },
  {
    path: "/error",
    component: EmptyLayout,
    redirect: "noRedirect",
    name: "Error",
    meta: { title: "错误页", icon: "bug" },
    alwaysShow: true,
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
