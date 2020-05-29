# 介绍

<p align="left">
    <img src="https://img.shields.io/badge/vue-始终基于最新版-brightgreen.svg">
    <img src="https://img.shields.io/badge/vuex-始终基于最新版-brightgreen.svg" >
    <img src="https://img.shields.io/badge/vue--router-始终基于最新版-brightgreen.svg">
    <img src="https://img.shields.io/badge/@vue/cli-始终基于最新版-brightgreen.svg">
    <img src="https://img.shields.io/badge/axios-始终基于最新版-brightgreen.svg">
</p>

## 演示地址

### - [演示地址 1： vue-admin-beautiful （纵向布局展示，速度最快）](http://beautiful.panm.cn/vue-admin-beautiful)

### - [演示地址 2： vue-admin-beautiful （横向布局展示，新添加功能）](http://beautiful.panm.cn/vue-admin-beautiful-horizonal)

### - [演示地址 3： vue-admin-beautiful （layuiAdmin 风格）](http://chu1204505056.gitee.io/vue-admin-beautiful-2)

### - [演示地址 4： vue-admin-beautiful （iviewPro 风格）](http://chu1204505056.gitee.io/vue-admin-beautiful-3)

### - [演示地址 5： vue-admin-beautiful （横向布局）](http://chu1204505056.gitee.io/vue-admin-beautiful-4)

### - [演示地址 6： vue-admin-clever （常规后台管理布局）](http://mpfhrd48.sanxing.uz7.cn/vue-admin-clever)

## ☝☝☝ 演示地址,在上方直接点击登录即可！

### 全网首家实现 element-ui 横向纵向布局无缝切换，多标签页关闭左侧关闭右侧关闭其他（布局切换效果仿 ant-design-pro，tagsBar 仿谷歌浏览器右键菜单）

![vue-admin-beautiful](http://mpfhrd48.sanxing.uz7.cn/byui-bookmarks/GIF.gif)

####<font color="#FF0000" >
自 vue-admin-beautiful 开源以来，很感谢大家的支持，在短时间内 github 收获了![social](https://img.shields.io/github/stars/chuzhixin/vue-admin-beautiful?style=social) 个 star，我欣喜万分，我真的把 vue-admin-beautiful 当成了自己的孩子，在此声明 vue-admin-beautiful 除了使用 element-ui 做为 ui 库以外未依赖任何第三方开源 admin 框架，也不是在某某 admin 上进行的二次开发，为了让大家满意经常熬夜到凌晨，看着一个个组件的编写完成，一个个组件提交到 npm 仓库，看到大家的评价，我真的超级高兴，但是事情总不会那么尽如人意，也许是开源触动了某些人的利益，演示网站每日会遭受 2000 余次恶意攻击以及重定向跳转，弄得我实在心力交瘁，但我想对你说你阻止不了我，你阻止不了这个框架的成长，谢谢你让我知道了人心险恶，你攻击或者不攻击，它都在那里[github 开源地址](https://github.com/chuzhixin/vue-admin-beautiful)
</font>

## 感谢

感谢捐赠者 每当看到捐赠入账的时候 都非常的激动 但我不知道你们的名字 谢谢你们的支持 有任何问题您都可以在群里右键添加群主好友，我一定认真回复

## vue-admin-beautiful 前端讨论群-1 972435319

不管您加或者不加 您都可以享受到开源的代码 感谢您的支持 群里的任何问题我都会一一解答 感谢您的信任 群内提供 vue-admin-beautiful-template 基础版本 群内提供详细的基础文档 适合框架快速入门

![img](https://chu1204505056.gitee.io/byui-bookmarks/img/ewm.png)

## 安装

```bash
# 克隆项目
git clone https://github.com/chuzhixin/vue-admin-beautiful.git

# 进入项目目录
cd vue-element-admin-beautiful
# 安装依赖
cnpm i
# 本地开发 启动项目
npm run serve
```

## 安装

```bash

# 进入项目目录
cd vue-element-admin-clever
# 安装依赖
cnpm i
# 本地开发 启动项目
cnpm run serve
```

# 全局配置

## 环境变量配置，用于配置 api 请求地址

```
.env.development    # 在开发环境中被载入
.env.production     # 在生产环境中被载入
.env.test           # 在测试环境中被载入
```

## setting.js 配置

- 说明：这里有好多你会用到的配置项。
- 位置：src/config/settings.js
- 示例代码：

```js
module.exports = {
  title: "vue-admin-beautiful", //标题
  abbreviation: "byui", //简写
  devPort: "80", //开发环境端口号
  version: "V1.0", //版本号
  copyright: process.env.VUE_APP_AUTHOR,
  routesWhiteList: ["/login", "/404", "/401"], //不经过token校验的路由
  loadingText: "正在加载中...", //加载时显示文字
  tokenName: "accessToken", //token名称
  tokenTableName: "BYUI-VUE-TABLE", //token表名
  storage: "localStorage", //token存储位置
  logo: true, //是否显示logo
  header: "fixed", //固定fixed 不固定noFixed
  layout: "vertical", //横纵布局 horizontal vertical
  themeBar: true, //是否开启主题配置按钮
  tagsBar: true, //是否显示多标签页
  contentType: "application/json;charset=UTF-8", //配后端数据的接收方式application/json;charset=UTF-8或者application/x-www-form-urlencoded;charset=UTF-8
  messageDuration: 3000, //消息框消失时间
  requestTimeout: 5000, //最长请求时间
  successCode: 200, //操作正常code
  invalidCode: 402, //登录失效code
  noPermissionCode: 401, //无权限code
  errorLog: ["development", "test", "production"], //是否显示在页面高亮错误
  shieldF12: false, //设置生产环境是否屏蔽f12等开发组工具快捷键
  loginInterception: true, //是否开启登录拦截
  loginRSA: false, //是否开启登录RSA加密
  httpRequestFile: false, //是否依据mock数据生成webstorm HTTP Request请求文件
  authentication: "intelligence", //intelligence和all两种方式，前者后端权限只控制permissions不控制view文件的import（前后端配合，减轻后端工作量），all方式完全交给后端前端只负责加载
};
```

## variables.scss 配置

- 说明：这里可以修改你项目的配色方案，简单修改即可实现风格大变。
- 位置：src/styles/variables.scss

## element-ui 组件尺寸配置

- 说明：这里可以修改你 element-ui 组件尺寸，element-ui 组件的尺寸一共分为 large、default、small 、mini，本项目默认使用的是 small。
- 位置：src/plugins/element.js
- 示例代码：

```js
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/display.css";

import "@/styles/element-variables.scss";

Vue.use(ElementUI, {
  size: "small", // element-ui组件的尺寸一共分为large、default、small 、mini
});
```

# 路由和权限

路由加载实现两种方案：

- 一种是前端进行拦截，角色权限清晰不会随意变更时（小项目建议这种）
- 一种是完全的后端配置，让后端来实现菜单权限（大项目建议第二种）

## 路由配置项

语法与 vue-router 语法一致，具体详见 router.js。

```js
//当设置 true 的时候该路由不会再侧边栏出现
hidden: true; // (默认 false)
//当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
redirect: "noRedirect";
//是否显示根节点
alwaysShow: true;
//设定路由的名字，首字母大写，一定要填写不然使用<keep-alive>时会出现各种问题
name: "Test";
meta: {
  //设置该路由进入的权限，支持多个权限叠加
  permissions: ["admin", "editor", "test"];
  //设置该路由在侧边栏和面包屑中展示的名字
  title: "title";
  //设置该路由的图标,在常规图标中拷贝即可
  icon: "";
  //设置该路由的图标,在小清新图标中拷贝即可，但小清新图标的svg默认未集成到项目需要手动下载并拷贝到根目remixIcon/svg文件夹下
  remixIcon: "";
  //如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
  noKeepAlive: true;
  breadcrumb: false; // 如果设置为false，则不会在breadcrumb面包屑中显示
}
```

## 后端返回权限 前端根据权限拦截路由

settings.js 配置项

```js
authentication: "intelligence";
```

- 代码参考地址： [router](https://github.com/chuzhixin/vue-admin-beautiful/blob/master/src/router/index.js)

## 后端完全控制前端路由

settings.js 配置项

```js
authentication: "all";
```

- 代码参考地址（后端按照 mock 数据返回即可）： [router](https://github.com/chuzhixin/vue-admin-beautiful/blob/master/mock/controller/router.js)
  ::: tip
  注意事项：后端返回的 JSON 格式一定要保证正确，控制台不报红色和黄色证明路由渲染正确，当你配置成后端完全控制前端时，前端会在登陆后多触发一个获取动态菜单的请求
  `/menu/navigate`来处理接口信息，这个接口写起来比较繁琐，当然都是后端的工作，这里一定要仔细仔细再仔细，路由以及文件全部交给后端返回，一定要保证浏览器控制台一个错误都没有，后端稍有不慎，对前端来说都是致命的
  :::

后端完整返回的 json 格式示例，其中 permissions 字段暂时无关紧要，因为是后端完全控制权限，所有建议只在 userIfo 时返回即可，比如按钮级别权限会用到

```json
{
  "code": 200,
  "msg": "success",
  "data": [
    {
      "path": "/",
      "component": "Layout",
      "redirect": "/index",
      "children": [
        {
          "path": "/index",
          "name": "Index",
          "component": "index/index",
          "meta": {
            "title": "首页",
            "icon": "home",
            "affix": true,
            "noKeepAlive": true
          }
        }
      ]
    },
    {
      "path": "/test",
      "component": "Layout",
      "redirect": "noRedirect",
      "children": [
        {
          "path": "test",
          "name": "Test",
          "component": "test/index",
          "meta": {
            "title": "test ",
            "icon": "marker",
            "permissions": ["admin", "test"]
          }
        }
      ]
    },
    {
      "path": "/byui",
      "component": "Layout",
      "redirect": "noRedirect",
      "name": "Byui",
      "meta": { "title": "组件", "icon": "cloud" },
      "alwaysShow": true,
      "children": [
        {
          "path": "permission",
          "name": "Permission",
          "component": "byui/permission/index",
          "meta": {
            "title": "权限控制",
            "permissions": ["admin", "editor", "test"]
          }
        },
        {
          "path": "menu1",
          "component": "byui/nested/menu1/index",
          "name": "Menu1",
          "meta": { "title": "嵌套路由 1", "permissions": ["admin"] },
          "alwaysShow": true,
          "children": [
            {
              "path": "menu1-1",
              "component": "byui/nested/menu1/menu1-1/index",
              "name": "Menu1-1",
              "meta": { "title": "嵌套路由 1-1" },
              "alwaysShow": true,
              "children": [
                {
                  "path": "menu1-1-1-1",
                  "component": "byui/nested/menu1/menu1-1/menu1-1-1/index",
                  "name": "Menu1-1-1",
                  "meta": { "title": "嵌套路由 1-1-1" }
                }
              ]
            }
          ]
        },
        {
          "path": "table",
          "name": "Table",
          "component": "byui/table/index",
          "meta": { "title": "表格", "permissions": ["admin", "editor"] }
        },
        {
          "path": "form",
          "name": "Form",
          "component": "byui/form/index",
          "meta": { "title": "表单", "permissions": ["admin"] }
        },
        {
          "path": "element",
          "name": "Element",
          "component": "byui/element/index",
          "meta": { "title": "常用组件", "permissions": ["admin"] }
        },
        {
          "path": "tree",
          "name": "Tree",
          "component": "byui/tree/index",
          "meta": { "title": "树", "permissions": ["admin"] }
        },
        {
          "path": "card",
          "name": "Card",
          "component": "byui/card/index",
          "meta": { "title": "卡片", "permissions": ["admin"] }
        },
        {
          "path": "magnifier",
          "name": "Magnifier",
          "component": "byui/magnifier/index",
          "meta": { "title": "放大镜", "permissions": ["admin"] }
        },
        {
          "path": "waterfall",
          "name": "Waterfall",
          "component": "byui/waterfall/index",
          "meta": {
            "title": "瀑布屏",
            "noKeepAlive": true,
            "permissions": ["admin"]
          }
        },
        {
          "path": "echarts",
          "name": "Echarts",
          "component": "byui/echarts/index",
          "meta": { "title": "图表", "permissions": ["admin"] }
        },
        {
          "path": "loading",
          "name": "Loading",
          "component": "byui/loading/index",
          "meta": { "title": "loading", "permissions": ["admin"] }
        },
        {
          "path": "player",
          "name": "Player",
          "component": "byui/player/index",
          "meta": {
            "title": "视频播放器",
            "noKeepAlive": true,
            "permissions": ["admin"]
          }
        },
        {
          "path": "editor",
          "name": "Editor",
          "component": "byui/editor/index",
          "meta": { "title": "富文本编辑器", "permissions": ["admin"] }
        },
        {
          "path": "qrCode",
          "name": "QrCode",
          "component": "byui/qrCode/index",
          "meta": { "title": "二维码", "permissions": ["admin"] }
        },
        {
          "path": "backToTop",
          "name": "BackToTop",
          "component": "byui/backToTop/index",
          "meta": { "title": "返回顶部", "permissions": ["admin"] }
        },
        {
          "path": "lodash",
          "name": "Lodash",
          "component": "byui/lodash/index",
          "meta": { "title": "lodash", "permissions": ["admin"] }
        },
        {
          "path": "imgComparison",
          "name": "ImgComparison",
          "component": "byui/imgComparison/index",
          "meta": { "title": "图像拖拽比对", "permissions": ["admin"] }
        },
        {
          "path": "codeGenerator",
          "name": "CodeGenerator",
          "component": "byui/codeGenerator/index",
          "meta": { "title": "代码生成机", "permissions": ["admin"] }
        },
        {
          "path": "markdown",
          "name": "Markdown",
          "component": "byui/markdown/index",
          "meta": { "title": "markdown阅读器", "permissions": ["admin"] }
        },
        {
          "path": "smallComponents",
          "name": "SmallComponents",
          "component": "byui/smallComponents/index",
          "meta": { "title": "小组件", "permissions": ["admin"] }
        },
        {
          "path": "icon",
          "name": "Icon",
          "component": "byui/icon/index",
          "meta": { "title": "常规图标", "permissions": ["admin"] }
        },
        {
          "path": "colorfulIcon",
          "name": "ColorfulIcon",
          "component": "byui/icon/colorfulIcon",
          "meta": { "title": "多彩图标", "permissions": ["admin"] }
        },
        {
          "path": "remixIcon",
          "name": "RemixIcon",
          "component": "byui/icon/remixIcon",
          "meta": {
            "title": "小清新图标(图标过多打开会慢)",
            "permissions": ["admin"]
          }
        },
        {
          "path": "upload",
          "name": "Upload",
          "component": "byui/upload/index",
          "meta": { "title": "上传", "permissions": ["admin"] }
        },
        {
          "path": "sticky",
          "name": "Sticky",
          "component": "byui/sticky/index",
          "meta": { "title": "sticky吸附", "permissions": ["admin"] }
        },
        {
          "path": "log",
          "name": "Log",
          "component": "byui/errorLog/index",
          "meta": { "title": "错误日志模拟", "permissions": ["admin"] }
        },
        {
          "path": "news",
          "name": "News",
          "component": "byui/news/index",
          "meta": { "title": "新闻（可能存在跨域）", "permissions": ["admin"] }
        },
        {
          "path": "more",
          "name": "More",
          "component": "byui/more/index",
          "meta": { "title": "更多组件", "permissions": ["admin"] }
        }
      ]
    },
    {
      "path": "/error",
      "component": "EmptyLayout",
      "redirect": "noRedirect",
      "name": "Error",
      "meta": { "title": "错误页", "icon": "bug" },
      "alwaysShow": true,
      "children": [
        {
          "path": "/401",
          "name": "401",
          "component": "401",
          "meta": { "title": "401" }
        },
        {
          "path": "/404",
          "name": "404",
          "component": "404",
          "meta": { "title": "404" }
        }
      ]
    }
  ]
}
```

## 按钮级权限

思路：获取用户信息时获取 permissions，存到 store 里面，然后页面根据权限进行按钮级控制，具体看下 permission 组件中有示例
代码示例：

```vue
<template>
  <div class="demo-container">
    <el-button v-if="checkPermission(['admin'])" type="primary"
      >按钮级权限
    </el-button>
  </div>
</template>

<script>
import checkPermission from "@/utils/permission";

export default {
  name: "Demo",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    checkPermission,
  },
};
</script>
<style lang="scss" scoped></style>
```

## vue-admin-beautiful 前端讨论群-VIP 805808910

群内问题优先回答 群主每周在线授课 提供脚手架搭建在线指导 组件封装方法指导 NPM 发包开发组件指导（需付费￥ 88，帮助你的同时也帮了群主，感谢信任）群内提供专属 VIP 文档 能快速掌握脚手架搭建 开发工具配置的技巧（其实 50%的重复工作都可以靠工具来完成） 如有需要加作者 QQ 1204505056（加作者的前提是您愿意尊重知识，为人谦逊，不糟蹋开原作者的善良，如果你习惯了白嫖，那我尊重不同的声音，如果你觉得贵，请忽略。。。）

![image](https://chu1204505056.gitee.io/byui-bookmarks/img/ewm_vip.png)

## 捐赠

![img](https://chu1204505056.gitee.io/byui-bookmarks/img/donation.png)

## 安装

```bash
# 克隆项目
git clone https://github.com/chuzhixin/vue-element-admin-beautiful.git

# 进入项目目录
cd vue-element-admin-beautiful
# 安装依赖
npm i
# 本地开发 启动项目
npm run serve
```

# 全局配置

## 环境变量配置，用于配置 api 请求地址

```evn
.env.development    # 在开发环境中被载入
.env.production     # 在生产环境中被载入
.env.test           # 在测试环境中被载入
```

## setting.js 配置

- 说明：这里有好多你会用到的配置项。
- 位置：src/config/settings.js
- 示例代码：

```js
module.exports = {
  title: "vue-admin-beautiful", //标题
  abbreviation: "byui", //简写
  devPort: "80", //开发环境端口号
  version: "V1.0", //版本号
  copyright: "chuzhixin 1204505056@qq.com", //烦请保留版权，如需去除请联系群主
  routesWhiteList: ["/login", "/404", "/401"], //不经过token校验的路由
  loadingText: "正在加载中...", //加载时显示文字
  tokenName: "accessToken", //token名称
  tokenTableName: "BYUI-VUE-TABLE", //token表名
  storage: "localStorage", //token存储位置
  logo: true, //是否显示logo
  header: "fixed", //固定fixed 不固定noFixed
  layout: "vertical", //横纵布局 horizontal vertical
  themeBar: true, //是否开启主题配置按钮
  tagsBar: true, //是否显示多标签页
  contentType: "application/json;charset=UTF-8", //配后端数据的接收方式application/json;charset=UTF-8或者application/x-www-form-urlencoded;charset=UTF-8
  messageDuration: 3000, //消息框消失时间
  requestTimeout: 5000, //最长请求时间
  successCode: 200, //操作正常code
  invalidCode: 402, //登录失效code
  noPermissionCode: 401, //无权限code
  errorLog: ["development", "test", "production"], //是否显示在页面高亮错误
  shieldF12: false, //设置生产环境是否屏蔽f12等开发组工具快捷键
  loginInterception: true, //是否开启登录拦截
  loginRSA: false, //是否开启登录RSA加密
  httpRequestFile: false, //是否依据mock数据生成webstorm HTTP Request请求文件
  authentication: "intelligence", //intelligence和all两种方式，前者后端权限只控制permissions不控制view文件的import（前后端配合，减轻后端工作量），all方式完全交给后端前端只负责加载
};
```

## variables.scss 配置

- 说明：这里可以修改你项目的配色方案，简单修改即可实现风格大变。
- 位置：src/styles/variables.scss
- 示例代码：

```scss
@charset "utf-8";

$base-color-default: #1890ff;
$base-z-index: 999;

$base-menu-background: #001529;
$base-menu-children-background: #000c17;
$base-menu-background-active: $base-color-default;
$base-menu-color: hsla(0, 0%, 100%, 0.95);
$base-menu-color-active: hsla(0, 0%, 100%, 0.95);
$base-title-color: #fff;

$base-font-size-small: 12px;
$base-font-size-default: 14px;
$base-font-size-big: 16px;
$base-font-size-bigger: 18px;
$base-font-size-max: 22px;
$base-color-header: $base-menu-background;
$base-color-blue: $base-color-default;
$base-color-green: #13ce66;
$base-color-white: #fff;
$base-color-black: #000;
$base-color-yellow: #ffba00;
$base-color-orange: #ff6700;
$base-color-red: #ff4d4f;
$base-color-gray: rgba(0, 0, 0, 0.65);
$base-main-width: 1279px;
$base-border-radius: 2px;
$base-border-color: #ebeef5;
$base-form-width: 600px;
$base-input-height: 32px;
$base-pagination-height: 28px;
$base-dialog-title-height: 40px;
$base-padding: 15px;
$base-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
$base-font-color: #606266;
$base-left-menu-width: 220px;
$base-right-content-width: calc(100% - #{$base-left-menu-width});
$base-left-menu-width-min: 65px;
$base-right-content-width-min: calc(100% - #{$base-left-menu-width-min});

/* stylelint-disable */
:export {
  menu-color: $base-menu-color;
  menu-color-active: $base-menu-color-active;
  menu-background: $base-menu-background;
  menu-children-background: $base-menu-children-background;
  menu-background-active: $base-menu-background-active;
  tags-bar-background-active: $base-color-blue;
  button-background: $base-color-blue;
  pagination-background-active: $base-color-blue;
}
```

## element-ui 组件尺寸配置

- 说明：这里可以修改你 element-ui 组件尺寸，element-ui 组件的尺寸一共分为 large、default、small 、mini，本项目默认使用的是 small。
- 位置：src/plugins/element.js
- 示例代码：

```js
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/display.css";

import "@/styles/element-variables.scss";

Vue.use(ElementUI, {
  size: "small", // element-ui组件的尺寸一共分为large、default、small 、mini
});
```
