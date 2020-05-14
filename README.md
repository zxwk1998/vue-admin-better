# 介绍

<p align="left">
    <img src="https://img.shields.io/badge/vue-始终基于最新版-brightgreen.svg">
    <img src="https://img.shields.io/badge/vuex-始终基于最新版-brightgreen.svg" >
    <img src="https://img.shields.io/badge/vue--router-始终基于最新版-brightgreen.svg">
    <img src="https://img.shields.io/badge/@vue/cli-始终基于最新版-brightgreen.svg">
    <img src="https://img.shields.io/badge/axios-始终基于最新版-brightgreen.svg">
</p>

## 演示地址

### - [演示地址 1： vue-admin-beautiful （速度快）](http://mpfhrd48.sanxing.uz7.cn/vue-admin-beautiful)

### - [演示地址 2： vue-admin-beautiful （速度较快）](http://chu1204505056.gitee.io/vue-admin-beautiful)

### - [演示地址 3： vue-admin-beautiful （速度慢）](https://chuzhixin.github.io/vue-admin-beautiful)

### - [演示地址 4： vue-admin-beautiful （layuiAdmin 风格）](http://chu1204505056.gitee.io/vue-admin-beautiful-2)

### - [演示地址 5： vue-admin-beautiful （iviewPro 风格）](http://chu1204505056.gitee.io/vue-admin-beautiful-3)

### - [演示地址 6： vue-admin-beautiful （横向布局）](http://chu1204505056.gitee.io/vue-admin-beautiful-4)

## ☝☝☝ 演示地址,在上方直接点击登录即可！

## 感谢

感谢捐赠者 每当看到捐赠入账的时候 都非常的激动 但我不知道你们的名字 谢谢你们的支持 有任何问题您都可以在群里右键添加群主好友，我一定认真回复

## vue-admin-beautiful 前端讨论群-1 972435319

不管您加或者不加 您都可以享受到开源的代码 感谢您的支持 群里的任何问题我都会一一解答 感谢您的信任 群内提供 vue-admin-beautiful-template 基础版本 群内提供详细的基础文档 适合框架快速入门

![img](https://chu1204505056.gitee.io/byui-bookmarks/img/ewm.png)

## 文档

更多文档加群获取

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
  tagsView: true, //是否显示多标签页
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
$base-menu-text: hsla(0, 0%, 100%, 0.95);
$base-menu-text-active: hsla(0, 0%, 100%, 0.95);
$base-title: #fff;

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
  menu-text: $base-menu-text;
  menu-text-active: $base-menu-text-active;
  menu-background: $base-menu-background;
  menu-children-background: $base-menu-children-background;
  menu-background-active: $base-menu-background-active;
  tagviews-background-active: $base-color-blue;
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
