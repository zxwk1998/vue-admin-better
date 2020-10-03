const data = [
  {
    path: "/",
    component: "Layout",
    redirect: "index",
    children: [
      {
        path: "index",
        name: "Index",
        component: "@/views/index/index",
        meta: {
          title: "首页",
          icon: "home",
          affix: true,
        },
      },
    ],
  },
  {
    path: "/personnelManagement",
    component: "Layout",
    redirect: "noRedirect",
    name: "PersonnelManagement",
    meta: { title: "人员", icon: "users-cog", permissions: ["admin"] },
    children: [
      {
        path: "userManagement",
        name: "UserManagement",
        component: "@/views/personnelManagement/userManagement/index",
        meta: { title: "用户管理" },
      },
      {
        path: "roleManagement",
        name: "RoleManagement",
        component: "@/views/personnelManagement/roleManagement/index",
        meta: { title: "角色管理" },
      },
      {
        path: "menuManagement",
        name: "MenuManagement",
        component: "@/views/personnelManagement/menuManagement/index",
        meta: { title: "菜单管理", badge: "New" },
      },
    ],
  },
  {
    path: "/vab",
    component: "Layout",
    redirect: "noRedirect",
    name: "Vab",
    alwaysShow: true,
    meta: { title: "组件", icon: "cloud" },
    children: [
      {
        path: "permissions",
        name: "Permission",
        component: "@/views/vab/permissions/index",
        meta: {
          title: "权限控制",
          permissions: ["admin", "editor"],
          badge: "New",
        },
      },
      {
        path: "icon",
        component: "EmptyLayout",
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
            component: "@/views/vab/icon/index",
            meta: { title: "常规图标" },
          },
          {
            path: "remixIcon",
            name: "RemixIcon",
            component: "@/views/vab/icon/remixIcon",
            meta: { title: "小清新图标" },
          },
          {
            path: "colorfulIcon",
            name: "ColorfulIcon",
            component: "@/views/vab/icon/colorfulIcon",
            meta: { title: "多彩图标" },
          },
        ],
      },
      {
        path: "table",
        component: "@/views/vab/table/index",
        name: "Table",
        meta: {
          title: "表格",
          permissions: ["admin"],
        },
      },
      {
        path: "map",
        name: "Map",
        component: "@/views/vab/map/index",
        meta: { title: "地图", permissions: ["admin"], badge: "Pro" },
      },
      {
        path: "webSocket",
        name: "WebSocket",
        component: "@/views/vab/webSocket/index",
        meta: { title: "webSocket", permissions: ["admin"] },
      },
      {
        path: "form",
        name: "Form",
        component: "@/views/vab/form/index",
        meta: { title: "表单", permissions: ["admin"] },
      },
      {
        path: "element",
        name: "Element",
        component: "@/views/vab/element/index",
        meta: { title: "常用组件", permissions: ["admin"] },
      },
      {
        path: "tree",
        name: "Tree",
        component: "@/views/vab/tree/index",
        meta: { title: "树", permissions: ["admin"] },
      },
      {
        path: "card",
        name: "Card",
        component: "@/views/vab/card/index",
        meta: { title: "卡片", permissions: ["admin"] },
      },
      {
        path: "verify",
        name: "Verify",
        component: "@/views/vab/verify/index",
        meta: { title: "验证码", permissions: ["admin"] },
      },
      {
        path: "menu1",
        component: "@/views/vab/nested/menu1/index",
        name: "Menu1",
        alwaysShow: true,
        meta: {
          title: "嵌套路由 1",
          permissions: ["admin"],
        },
        children: [
          {
            path: "menu1-1",
            name: "Menu1-1",
            alwaysShow: true,
            meta: { title: "嵌套路由 1-1" },
            component: "@/views/vab/nested/menu1/menu1-1/index",

            children: [
              {
                path: "menu1-1-1",
                name: "Menu1-1-1",
                meta: { title: "嵌套路由 1-1-1" },
                component: "@/views/vab/nested/menu1/menu1-1/menu1-1-1/index",
              },
            ],
          },
        ],
      },
      {
        path: "magnifier",
        name: "Magnifier",
        component: "@/views/vab/magnifier/index",
        meta: { title: "放大镜", permissions: ["admin"] },
      },
      {
        path: "echarts",
        name: "Echarts",
        component: "@/views/vab/echarts/index",
        meta: { title: "图表", permissions: ["admin"] },
      },

      {
        path: "loading",
        name: "Loading",
        component: "@/views/vab/loading/index",
        meta: { title: "loading", permissions: ["admin"] },
      },
      {
        path: "player",
        name: "Player",
        component: "@/views/vab/player/index",
        meta: { title: "视频播放器", permissions: ["admin"] },
      },
      {
        path: "markdownEditor",
        name: "MarkdownEditor",
        component: "@/views/vab/markdownEditor/index",
        meta: { title: "markdown编辑器", permissions: ["admin"] },
      },
      {
        path: "editor",
        name: "Editor",
        component: "@/views/vab/editor/index",
        meta: { title: "富文本编辑器", permissions: ["admin"], badge: "New" },
      },
      {
        path: "backToTop",
        name: "BackToTop",
        component: "@/views/vab/backToTop/index",
        meta: { title: "返回顶部", permissions: ["admin"] },
      },
      {
        path: "lodash",
        name: "Lodash",
        component: "@/views/vab/lodash/index",
        meta: { title: "lodash", permissions: ["admin"] },
      },
      {
        path: "imgComparison",
        name: "ImgComparison",
        component: "@/views/vab/imgComparison/index",
        meta: { title: "图像拖拽比对", permissions: ["admin"] },
      },
      {
        path: "smallComponents",
        name: "SmallComponents",
        component: "@/views/vab/smallComponents/index",
        meta: { title: "小组件", permissions: ["admin"] },
      },

      {
        path: "upload",
        name: "Upload",
        component: "@/views/vab/upload/index",
        meta: { title: "上传", permissions: ["admin"] },
      },
      {
        path: "log",
        name: "Log",
        component: "@/views/vab/errorLog/index",
        meta: { title: "错误日志模拟", permissions: ["admin"] },
      },
      {
        path: "more",
        name: "More",
        component: "@/views/vab/more/index",
        meta: { title: "关于", permissions: ["admin"] },
      },
    ],
  },
  {
    path: "/mall",
    component: "Layout",
    redirect: "noRedirect",
    name: "Mall",
    meta: {
      title: "商城",
      icon: "shopping-cart",
      permissions: ["admin"],
    },

    children: [
      {
        path: "pay",
        name: "Pay",
        component: "@/views/mall/pay/index",
        meta: {
          title: "支付",
          noKeepAlive: true,
        },
        children: null,
      },
      {
        path: "goodsList",
        name: "GoodsList",
        component: "@/views/mall/goodsList/index",
        meta: {
          title: "商品列表",
        },
      },
    ],
  },
  {
    path: "/error",
    component: "EmptyLayout",
    redirect: "noRedirect",
    name: "Error",
    meta: { title: "错误页", icon: "bug" },
    children: [
      {
        path: "401",
        name: "Error401",
        component: "@/views/401",
        meta: { title: "401" },
      },
      {
        path: "404",
        name: "Error404",
        component: "@/views/404",
        meta: { title: "404" },
      },
    ],
  },
];
module.exports = [
  {
    url: "/menu/navigate",
    type: "post",
    response() {
      return { code: 200, msg: "success", data: data };
    },
  },
];
