<div align="center"><a href="https://www.iviewui.com"><img width="200" src="https://gitee.com/chu1204505056/vue-admin-beautiful/raw/master/src/colorfulIcon/svg/vab.svg"></a><h1> vue-admin-beautiful </h1><h3>一款基于 vue+element-ui 的绝佳的通用型、中后台前端框架</h3></div>

## 演示地址

#### - [🚀 演示地址 1： vue-admin-beautiful （横向纵向布局无缝切换）](http://beautiful.panm.cn/vue-admin-beautiful/)

#### - [🚀 国内备份地址： vue-admin-beautiful](https://chu1204505056.gitee.io/vue-admin-beautiful/)

#### - [🚀 演示地址 2： vue-admin-clever （常规后台管理布局）](http://beautiful.panm.cn/vue-admin-clever/)

## 安装

```bash

# 进入项目目录
cd vue-admin-beautiful
# 安装依赖
cnpm i
# 本地开发 启动项目
cnpm run serve
```

## vue-admin-beautiful 前端讨论群-1 972435319

不管您加或者不加，您都可以享受到开源的代码，感谢您的支持和信任，群内提供 vue-admin-beautiful-template 基础版本和详细的基础使用文档适合框架快速入门

![img](https://chu1204505056.gitee.io/byui-bookmarks/img/ewm.png)

<!-- ## vue-admin-beautiful 前端讨论群-VIP 805808910

群内问题优先回答 群主每周在线授课 提供脚手架搭建在线指导 组件封装方法指导 NPM 发包开发组件指导（需付费 100，帮助你的同时也帮了群主，感谢信任）群内提供专属 VIP 文档 能快速掌握脚手架搭建 开发工具配置的技巧（其实 50%的重复工作都可以靠工具来完成） 如有需要加作者 QQ 1204505056（加作者的前提是您愿意尊重知识，为人谦逊，不糟蹋开原作者的善良，如果你习惯了白嫖，那我尊重不同的声音，如果你觉得贵，请忽略。。。）

![image](https://chu1204505056.gitee.io/byui-bookmarks/img/ewm_vip.png) -->

## 友情链接

#### - [uView 文档（超棒的移动跨端框架，文档详细，上手容易）](https://uviewui.com/)

#### - [uView 开源地址（uView UI，是 uni-app 生态优秀的 UI 框架，全面的组件和便捷的工具会让您信手拈来，如鱼得水）](https://github.com/YanxinNet/uView/)

#### - [Element UI 表单设计及代码生成器（可视化表单设计器，一键生成 element 表单）](https://github.com/JakHuang/form-generator/)

#### - [luch-request（基于 Promise 开发的 uni-app 跨平台、项目级别的请求库，它有更小的体积，易用的 api，方便简单的自定义能力）](https://www.quanzhan.co/luch-request/)

#### - [pl-table 完美解决 element 万级表格数据渲染卡顿问题](https://github.com/livelyPeng/pl-table)

## 捐赠

![img](https://chu1204505056.gitee.io/byui-bookmarks/img/donation.png)

## setting.js 配置

- 说明：这里有好多你会用到的配置项。
- 位置：src/config/settings.js
- 注意：此处可能不是最新代码具体可查看[github 最新的 settings.js 配置](https://github.com/chuzhixin/vue-admin-beautiful/blob/master/src/config/settings.js)
- 示例代码：

```js
/**
 * @copyright chuzhixin 1204505056@qq.com
 * @description 全局变量配置
 */
module.exports = {
  // 开发以及部署时的URL
  publicPath: "",
  // 生产环境构建文件的目录名
  outputDir: "dist",
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: "static",
  // 开发环境每次保存时是否输出为eslint编译警告
  lintOnSave: true,
  // 进行编译的依赖
  transpileDependencies: ["vue-echarts", "resize-detector", "zx-layouts"],
  // 默认的接口地址 如果是开发环境和生产环境走vab-mock-server，当然你也可以选择自己配置成需要的接口地址
  baseURL:
    process.env.NODE_ENV === "development" || process.env.NODE_ENV === "preview"
      ? "vab-mock-server"
      : "http://your.website.com",
  //标题 （包括初次加载雪花屏的标题 页面的标题 浏览器的标题）
  title: "vue-admin-beautiful",
  //简写
  abbreviation: "vab",
  //开发环境端口号
  devPort: "80",
  //版本号
  version: process.env.VUE_APP_VERSION,
  //烦请保留package.json作者信息 保留版权可免费商用
  copyright: process.env.VUE_APP_AUTHOR,
  //是否显示页面底部版权信息，建议您显示，当然您也可以选择不显示，不管您是付费用户还是未付费用户您都有选择显示或者不显示的权利
  footerCopyright: process.env.NODE_ENV !== "development" ? true : false,
  //是否显示右上角github图标
  githubCorner: process.env.NODE_ENV !== "development" ? true : false,
  //是否显示顶部进度条
  progressBar: true,
  //缓存路由的最大数量
  keepAliveMaxNum: 99,
  // 路由模式，可选值为 history 或 hash
  routerMode: "hash",
  //不经过token校验的路由
  routesWhiteList: ["/login", "/register", "/404", "/401"],
  //加载时显示文字
  loadingText: "正在加载中...",
  //token名称
  tokenName: "accessToken",
  //token在localStorage、sessionStorage、cookie存储的key的名称
  tokenTableName: "vue-admin-beautiful",
  //token存储位置localStorage sessionStorage cookie
  storage: "localStorage",
  //token失效回退到登录页时是否记录本次的路由
  recordRoute: true,
  //是否显示logo，不显示时设置false，显示时请填写remixIcon图标名称，暂时只支持设置remixIcon
  logo: "vuejs-fill",
  //是否国定头部 固定fixed 不固定noFixed
  header: "fixed",
  //横纵布局 horizontal vertical
  layout: "vertical",
  //是否开启主题配置按钮
  themeBar: true,
  //是否显示多标签页
  tagsBar: true,
  //是否显示骨架屏
  skeleton: false,
  //配后端数据的接收方式application/json;charset=UTF-8或者application/x-www-form-urlencoded;charset=UTF-8
  contentType: "application/json;charset=UTF-8",
  //消息框消失时间
  messageDuration: 3000,
  //最长请求时间
  requestTimeout: 5000,
  //操作正常code
  successCode: 200,
  //登录失效code
  invalidCode: 402,
  //无权限code
  noPermissionCode: 401,
  //是否显示在页面高亮错误
  errorLog: ["development", "test", "production"],
  //是否开启登录拦截
  loginInterception: true,
  //是否开启登录RSA加密
  loginRSA: false,
  //是否依据mock数据生成webstorm HTTP Request请求文件
  httpRequestFile: false,
  //intelligence和all两种方式，前者后端权限只控制permissions不控制view文件的import（前后端配合，减轻后端工作量），all方式完全交给后端前端只负责加载
  authentication: "intelligence",
  //vertical布局时是否只保持一个子菜单的展开
  uniqueOpened: true,
  //vertical布局时默认展开的菜单path，使用逗号隔开建议只展开一个
  defaultOopeneds: ["/vab"],
  //需要加loading层的请求，防止重复提交
  debounce: ["doEdit"],
  //需要自动注入并加载的模块
  providePlugin: { maptalks: "maptalks", "window.maptalks": "maptalks" },
  //npm run build时是否自动生成7z压缩包
  build7z: false,
  //代码生成机生成在view下的文件夹名称
  templateFolder: "project",
};
```

## variables.scss 配置

- 说明：这里可以修改你项目的配色方案，简单修改即可实现风格大变。
- 位置：src/styles/variables.scss
- 注意：此处可能不是最新代码具体可查看[github 最新的 variables.scss 配置](https://github.com/chuzhixin/vue-admin-beautiful/blob/master/src/styles/variables.scss)

```scss
/**
 * @copyright chuzhixin 1204505056@qq.com
 * @description 全局主题变量配置，VIP文档内提供多种好看的配色方案（ant-design风格、layui风格、iview风格），请查看VIP文档主题配置篇
 */
/* stylelint-disable */
@charset "utf-8";
//框架默认主题色
$base-color-default: #1890ff;
//默认层级
$base-z-index: 999;
//横向布局纵向布局时菜单背景色
$base-menu-background: #001529;
//菜单文字颜色
$base-menu-color: hsla(0, 0%, 100%, 0.95);
//菜单选中文字颜色
$base-menu-color-active: hsla(0, 0%, 100%, 0.95);
//菜单选中背景色
$base-menu-background-active: $base-color-default;
//标题颜色
$base-title-color: #fff;
//字体大小配置
$base-font-size-small: 12px;
$base-font-size-default: 14px;
$base-font-size-big: 16px;
$base-font-size-bigger: 18px;
$base-font-size-max: 22px;
$base-font-color: #606266;
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
$base-border-color: #dcdfe6;
//输入框高度
$base-input-height: 32px;
//默认paddiing
$base-padding: 20px;
//默认阴影
$base-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
//横向布局时top-bar、logo、一级菜单的高度
$base-top-bar-height: 65px;
//纵向布局时logo的高度
$base-logo-height: 75px;
//顶部nav-bar的高度
$base-nav-bar-height: 60px;
//顶部多标签页tags-bar的高度
$base-tags-bar-height: 55px;
//顶部多标签页tags-bar中每一个item的高度
$base-tag-item-height: 34px;
//菜单li标签的高度
$base-menu-item-height: 50px;
//app-main的高度
$base-app-main-height: calc(
  100vh - #{$base-nav-bar-height} - #{$base-tags-bar-height} -
  #{$base-padding} - #{$base-padding} - 55px - 30px
);
//纵向布局时左侧导航未折叠时的宽度
$base-left-menu-width: 230px;
//纵向布局时左侧导航未折叠时右侧内容的宽度
$base-right-content-width: calc(100% - #{$base-left-menu-width});
//纵向布局时左侧导航已折叠时的宽度
$base-left-menu-width-min: 65px;
//纵向布局时左侧导航已折叠时右侧内容的宽度
$base-right-content-width-min: calc(100% - #{$base-left-menu-width-min});
//默认动画
$base-transition: all 0.2s;
//默认动画时长
$base-transition-time: 0.2s;

:export {
  //菜单文字颜色变量导出
  menu-color: $base-menu-color;
  //菜单选中文字颜色变量导出
  menu-color-active: $base-menu-color-active;
  //菜单背景色变量导出
  menu-background: $base-menu-background;
  //菜单选中背景色变量导出
  menu-background-active: $base-menu-background-active;
  //多标签页选中背景色变量导出
  tag-background-active: $base-color-blue;
  //默认按钮背景色变量导出
  button-background: $base-color-blue;
  //分页选中背景色变量导出
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

## 付费学习，付费技术支持，商务合作

### 联系：QQ 1204505056
