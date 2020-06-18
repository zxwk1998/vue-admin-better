const data = [
  {
    path: "/",
    component: "Layout",
    redirect: "index",
    children: [
      {
        path: "index",
        name: "Index",
        component: "index/index",
        meta: {
          title: "首页",
          icon: "home",
          affix: true,
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
        meta: {
          title: "test",
          icon: "marker",
          permissions: ["admin", "test"],
        },
      },
    ],
  },
  {
    path: "/vab",
    component: "Layout",
    redirect: "noRedirect",
    name: "Vab",
    meta: { title: "组件", icon: "cloud" },
    alwaysShow: true,
    children: [
      {
        path: "permission",
        name: "Permission",
        component: "vab/permission/index",
        meta: {
          title: "权限控制",
          permissions: ["admin", "editor", "test"],
        },
      },
      {
        path: "menu1",
        component: "vab/nested/menu1/index",
        name: "Menu1",
        meta: {
          title: "嵌套路由 1",
          permissions: ["admin"],
        },
        alwaysShow: true,
        children: [
          {
            path: "menu1-1",
            component: "vab/nested/menu1/menu1-1/index",
            name: "Menu1-1",
            meta: { title: "嵌套路由 1-1" },
            alwaysShow: true,
            children: [
              {
                path: "menu1-1-1-1",
                component: "vab/nested/menu1/menu1-1/menu1-1-1/index",
                name: "Menu1-1-1",
                meta: { title: "嵌套路由 1-1-1" },
              },
            ],
          },
        ],
      },
      {
        path: "icon",
        name: "Icon",
        component: "vab/icon/index",
        meta: { title: "常规图标", permissions: ["admin"] },
      },
      {
        path: "remixIcon",
        name: "RemixIcon",
        component: "vab/icon/remixIcon",
        meta: { title: "小清新图标", permissions: ["admin"] },
      },
      {
        path: "colorfulIcon",
        name: "ColorfulIcon",
        component: "vab/icon/colorfulIcon",
        meta: { title: "多彩图标", permissions: ["admin"] },
      },
      {
        path: "table",
        name: "Table",
        component: "vab/table/index",
        meta: { title: "表格", permissions: ["admin", "editor"] },
      },
      {
        path: "form",
        name: "Form",
        component: "vab/form/index",
        meta: { title: "表单", permissions: ["admin"] },
      },
      {
        path: "element",
        name: "Element",
        component: "vab/element/index",
        meta: { title: "常用组件", permissions: ["admin"] },
      },
      {
        path: "tree",
        name: "Tree",
        component: "vab/tree/index",
        meta: { title: "树", permissions: ["admin"] },
      },
      {
        path: "card",
        name: "Card",
        component: "vab/card/index",
        meta: { title: "卡片", permissions: ["admin"] },
      },
      {
        path: "magnifier",
        name: "Magnifier",
        component: "vab/magnifier/index",
        meta: { title: "放大镜", permissions: ["admin"] },
      },
      {
        path: "waterfall",
        name: "Waterfall",
        component: "vab/waterfall/index",
        meta: { title: "瀑布屏", noKeepAlive: true, permissions: ["admin"] },
      },
      {
        path: "echarts",
        name: "Echarts",
        component: "vab/echarts/index",
        meta: { title: "图表", permissions: ["admin"] },
      },

      {
        path: "loading",
        name: "Loading",
        component: "vab/loading/index",
        meta: { title: "loading", permissions: ["admin"] },
      },
      {
        path: "player",
        name: "Player",
        component: "vab/player/index",
        meta: {
          title: "视频播放器",
          noKeepAlive: true,
          permissions: ["admin"],
        },
      },
      {
        path: "editor",
        name: "Editor",
        component: "vab/editor/index",
        meta: { title: "富文本编辑器", permissions: ["admin"] },
      },
      {
        path: "qrCode",
        name: "QrCode",
        component: "vab/qrCode/index",
        meta: { title: "二维码", permissions: ["admin"] },
      },
      {
        path: "backToTop",
        name: "BackToTop",
        component: "vab/backToTop/index",
        meta: { title: "返回顶部", permissions: ["admin"] },
      },
      {
        path: "lodash",
        name: "Lodash",
        component: "vab/lodash/index",
        meta: { title: "lodash", permissions: ["admin"] },
      },
      {
        path: "imgComparison",
        name: "ImgComparison",
        component: "vab/imgComparison/index",
        meta: { title: "图像拖拽比对", permissions: ["admin"] },
      },
      {
        path: "codeGenerator",
        name: "CodeGenerator",
        component: "vab/codeGenerator/index",
        meta: { title: "代码生成机", permissions: ["admin"] },
      },
      {
        path: "markdown",
        name: "Markdown",
        component: "vab/markdown/index",
        meta: { title: "markdown阅读器", permissions: ["admin"] },
      },
      {
        path: "smallComponents",
        name: "SmallComponents",
        component: "vab/smallComponents/index",
        meta: { title: "小组件", permissions: ["admin"] },
      },

      {
        path: "upload",
        name: "Upload",
        component: "vab/upload/index",
        meta: { title: "上传", permissions: ["admin"] },
      },
      {
        path: "sticky",
        name: "Sticky",
        component: "vab/sticky/index",
        meta: { title: "sticky吸附", permissions: ["admin"] },
      },
      {
        path: "log",
        name: "Log",
        component: "vab/errorLog/index",
        meta: { title: "错误日志模拟", permissions: ["admin"] },
      },
      {
        path: "news",
        name: "News",
        component: "vab/news/index",
        meta: { title: "新闻（可能存在跨域）", permissions: ["admin"] },
      },
      {
        path: "more",
        name: "More",
        component: "vab/more/index",
        meta: { title: "更多组件", permissions: ["admin"] },
      },
    ],
  },
  {
    path: "/error",
    component: "EmptyLayout",
    redirect: "noRedirect",
    name: "Error",
    meta: { title: "错误页", icon: "bug" },
    alwaysShow: true,
    children: [
      {
        path: "/401",
        name: "401",
        component: "401",
        meta: { title: "401" },
      },
      {
        path: "/404",
        name: "404",
        component: "404",
        meta: { title: "404" },
      },
    ],
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
