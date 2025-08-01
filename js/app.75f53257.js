(function() { // webpackBootstrap
var __webpack_modules__ = ({
34669: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getList: function() { return getList; }
});
/* ESM import */var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95508);

function getList() {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'https://api.vuejs-core.cn/getAd',
    method: 'get'
  });
}

}),
9113: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getPublicKey: function() { return getPublicKey; }
});
/* ESM import */var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95508);

function getPublicKey() {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/publicKey',
    method: 'post'
  });
}

}),
74277: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getRouterList: function() { return getRouterList; }
});
/* ESM import */var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95508);

function getRouterList(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/menu/navigate',
    method: 'post',
    data
  });
}

}),
44642: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getUserInfo: function() { return getUserInfo; },
  login: function() { return login; },
  logout: function() { return logout; },
  register: function() { return register; }
});
/* ESM import */var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95508);
/* ESM import */var _utils_encrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10142);
/* ESM import */var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84465);
/* ESM import */var _config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_2__);



async function login(data) {
  if (_config__WEBPACK_IMPORTED_MODULE_2__.loginRSA) {
    data = await (0,_utils_encrypt__WEBPACK_IMPORTED_MODULE_1__.encryptedData)(data);
  }
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/login',
    method: 'post',
    data
  });
}
function getUserInfo(accessToken) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/userInfo',
    method: 'post',
    data: {
      [_config__WEBPACK_IMPORTED_MODULE_2__.tokenName]: accessToken
    }
  });
}
function logout() {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/logout',
    method: 'post'
  });
}
function register() {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/register',
    method: 'post'
  });
}

}),
84465: (function (module, __unused_webpack_exports, __webpack_require__) {
/**
 * @description 3个子配置，通用配置|主题配置|网络配置导出
 */
const setting = __webpack_require__(62493);
const theme = __webpack_require__(6206);
const network = __webpack_require__(93784);
module.exports = Object.assign({}, setting, theme, network);

}),
93784: (function (module) {
/**
 * @description 导出默认网路配置
 **/
const network = {
  // 默认的接口地址 如果是开发环境和生产环境走vab-mock-server，当然你也可以选择自己配置成需要的接口地址
  baseURL:  false ? 0 : '/vab-mock-server',
  //配后端数据的接收方式application/json;charset=UTF-8或者application/x-www-form-urlencoded;charset=UTF-8
  contentType: 'application/json;charset=UTF-8',
  //消息框消失时间
  messageDuration: 3000,
  //最长请求时间
  requestTimeout: 15000,
  //操作正常code，支持String、Array、int多种类型
  successCode: [200, 0],
  //登录失效code
  invalidCode: 402,
  //无权限code
  noPermissionCode: 401
};
module.exports = network;

}),
36928: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* ESM import */var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46846);
/* ESM import */var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47827);
/* ESM import */var core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25004);
/* ESM import */var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(118);
/* ESM import */var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29981);
/* ESM import */var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);
/* ESM import */var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24856);
/* ESM import */var _utils_pageTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70097);
/* ESM import */var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84465);
/* ESM import */var _config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_7__);


/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 路由守卫，目前两种模式：all模式与intelligence模式
 */






nprogress__WEBPACK_IMPORTED_MODULE_4___default().configure({
  easing: 'ease',
  speed: 500,
  trickleSpeed: 200,
  showSpinner: false
});
_router__WEBPACK_IMPORTED_MODULE_2__["default"].beforeResolve(async (to, from, next) => {
  if (_config__WEBPACK_IMPORTED_MODULE_7__.progressBar) nprogress__WEBPACK_IMPORTED_MODULE_4___default().start();
  let hasToken = _store__WEBPACK_IMPORTED_MODULE_3__["default"].getters["user/accessToken"];
  if (!_config__WEBPACK_IMPORTED_MODULE_7__.loginInterception) hasToken = true;
  if (hasToken) {
    if (to.path === '/login') {
      next({
        path: '/'
      });
      if (_config__WEBPACK_IMPORTED_MODULE_7__.progressBar) nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();
    } else {
      const hasPermissions = _store__WEBPACK_IMPORTED_MODULE_3__["default"].getters["user/permissions"] && _store__WEBPACK_IMPORTED_MODULE_3__["default"].getters["user/permissions"].length > 0;
      if (hasPermissions) {
        next();
      } else {
        try {
          let permissions;
          if (!_config__WEBPACK_IMPORTED_MODULE_7__.loginInterception) {
            //settings.js loginInterception为false时，创建虚拟权限
            await _store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch('user/setPermissions', ['admin']);
            permissions = ['admin'];
          } else {
            permissions = await _store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch('user/getUserInfo');
          }
          let accessRoutes = [];
          if (_config__WEBPACK_IMPORTED_MODULE_7__.authentication === 'intelligence') {
            accessRoutes = await _store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch('routes/setRoutes', permissions);
          } else if (_config__WEBPACK_IMPORTED_MODULE_7__.authentication === 'all') {
            accessRoutes = await _store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch('routes/setAllRoutes');
          }
          accessRoutes.forEach(item => {
            _router__WEBPACK_IMPORTED_MODULE_2__["default"].addRoute(item);
          });
          next({
            ...to,
            replace: true
          });
        } catch {
          await _store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch('user/resetAccessToken');
          if (_config__WEBPACK_IMPORTED_MODULE_7__.progressBar) nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();
        }
      }
    }
  } else {
    if (_config__WEBPACK_IMPORTED_MODULE_7__.routesWhiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      if (_config__WEBPACK_IMPORTED_MODULE_7__.recordRoute) {
        next(`/login?redirect=${to.path}`);
      } else {
        next('/login');
      }
      if (_config__WEBPACK_IMPORTED_MODULE_7__.progressBar) nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();
    }
  }
  document.title = (0,_utils_pageTitle__WEBPACK_IMPORTED_MODULE_6__["default"])(to.meta.title);
});
_router__WEBPACK_IMPORTED_MODULE_2__["default"].afterEach(() => {
  if (_config__WEBPACK_IMPORTED_MODULE_7__.progressBar) nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();
});

}),
62493: (function (module) {
/**
 * @description 导出默认通用配置
 */
const setting = {
  // 开发以及部署时的URL
  publicPath: '',
  // 生产环境构建文件的目录名
  outputDir: 'dist',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: 'static',
  // 开发环境每次保存时是否输出为eslint编译警告
  lintOnSave: true,
  // 进行编译的依赖
  transpileDependencies: [],
  //标题 （包括初次加载雪花屏的标题 页面的标题 浏览器的标题）
  title: 'Admin Better',
  //简写
  abbreviation: 'vab',
  //开发环境端口号
  devPort: '8090',
  //copyright
  copyright: 'zxwk1998',
  //是否显示页面底部自定义版权信息
  footerCopyright: true,
  //是否显示顶部进度条
  progressBar: true,
  //缓存路由的最大数量
  keepAliveMaxNum: 99,
  // 路由模式，可选值为 history 或 hash
  routerMode: 'hash',
  //不经过token校验的路由
  routesWhiteList: ['/login', '/register', '/404', '/401'],
  //加载时显示文字
  loadingText: '正在加载中...',
  //token名称
  tokenName: 'accessToken',
  //token在localStorage、sessionStorage存储的key的名称
  tokenTableName: 'vue-admin-better-2024',
  //token存储位置localStorage sessionStorage
  storage: 'localStorage',
  //token失效回退到登录页时是否记录本次的路由
  recordRoute: true,
  //是否显示logo，不显示时设置false，显示时请填写remixIcon图标名称，暂时只支持设置remixIcon
  logo: 'vuejs-fill',
  //是否显示在页面高亮错误
  errorLog: ['development'],
  //是否开启登录拦截
  loginInterception: true,
  //是否开启登录RSA加密
  loginRSA: true,
  //intelligence和all两种方式，前者后端权限只控制permissions不控制view文件的import（前后端配合，减轻后端工作量），all方式完全交给后端前端只负责加载
  authentication: 'intelligence',
  //vertical布局时是否只保持一个子菜单的展开
  uniqueOpened: true,
  //vertical布局时默认展开的菜单path，使用逗号隔开建议只展开一个
  defaultOopeneds: ['/vab'],
  //需要加loading层的请求，防止重复提交
  debounce: ['doEdit'],
  //需要自动注入并加载的模块
  providePlugin: {},
  //代码生成机生成在view下的文件夹名称
  templateFolder: 'project',
  //是否显示终端donation打印
  donation: true
};
module.exports = setting;

}),
6206: (function (module) {
/**
 * @description 导出默认主题配置
 */
const theme = {
  //是否国定头部 固定fixed 不固定noFixed
  header: 'fixed',
  //横纵布局 horizontal vertical
  layout: 'vertical',
  //是否开启主题配置按钮
  themeBar: true,
  //是否显示多标签页
  tabsBar: true
};
module.exports = theme;

}),
73265: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* ESM import */var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55384);
/* ESM import */var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22553);
/* ESM import */var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(118);
/* ESM import */var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25004);
/* ESM import */var _plugins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7710);
/* ESM import */var _layouts_export__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69048);
/* ESM import */var _utils_printInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99837);








/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 生产环境默认都使用mock，如果正式用于生产环境时，记得去掉
 */

// 检测环境变量或默认使用mock
const useMock =  true || 0;
if (useMock) {
  // 使用动态import替代require
  Promise.all(/* import() */ [__webpack_require__.e("757"), __webpack_require__.e("3906")]).then(__webpack_require__.bind(__webpack_require__, 67308)).then(({
    mockXHR
  }) => {
    mockXHR();
    console.log('已启用Mock拦截，所有接口请求将被Mock拦截');
    // 打印layouts/index.js中的信息到控制台
    (0,_utils_printInfo__WEBPACK_IMPORTED_MODULE_5__.printLayoutsInfo)();
    vue__WEBPACK_IMPORTED_MODULE_6__["default"].config.productionTip = false;
    new vue__WEBPACK_IMPORTED_MODULE_6__["default"]({
      el: '#vue-admin-better',
      router: _router__WEBPACK_IMPORTED_MODULE_2__["default"],
      store: _store__WEBPACK_IMPORTED_MODULE_1__["default"],
      render: h => h(_App__WEBPACK_IMPORTED_MODULE_0__["default"])
    });
  });
} else {
  // 未启用Mock时直接打印layouts/index.js中的信息到控制台
  (0,_utils_printInfo__WEBPACK_IMPORTED_MODULE_5__.printLayoutsInfo)();
  vue__WEBPACK_IMPORTED_MODULE_6__["default"].config.productionTip = false;
  new vue__WEBPACK_IMPORTED_MODULE_6__["default"]({
    el: '#vue-admin-better',
    router: _router__WEBPACK_IMPORTED_MODULE_2__["default"],
    store: _store__WEBPACK_IMPORTED_MODULE_1__["default"],
    render: h => h(_App__WEBPACK_IMPORTED_MODULE_0__["default"])
  });
}

}),
95343: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* ESM import */var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55384);
/* ESM import */var element_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89912);
/* ESM import */var element_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var element_ui_lib_theme_chalk_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43980);



vue__WEBPACK_IMPORTED_MODULE_2__["default"].use((element_ui__WEBPACK_IMPORTED_MODULE_0___default()), {
  size: 'small'
});

}),
7710: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* ESM import */var vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55384);
/* ESM import */var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95343);
/* ESM import */var _support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75123);
/* ESM import */var _styles_vab_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65446);
/* ESM import */var _config_permission__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36928);
/* ESM import */var _utils_errorLog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73196);
/* ESM import */var _vabIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17019);
/* ESM import */var layouts_Permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17558);
/* ESM import */var _utils_vab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87288);
/* 公共引入,勿随意修改,修改时需经过确认 */









vue__WEBPACK_IMPORTED_MODULE_8__["default"].use(_utils_vab__WEBPACK_IMPORTED_MODULE_7__["default"]);
vue__WEBPACK_IMPORTED_MODULE_8__["default"].use(layouts_Permissions__WEBPACK_IMPORTED_MODULE_6__["default"]);

}),
75123: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* ESM import */var element_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89912);
/* ESM import */var element_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_0__);

if (!!window.ActiveXObject || 'ActiveXObject' in window) {
  (0,element_ui__WEBPACK_IMPORTED_MODULE_0__.MessageBox)({
    title: '温馨提示',
    message: '自2015年3月起，微软已宣布弃用IE，且不再对IE提供任何更新维护，请<a target="_blank" style="color:blue" href="https://www.microsoft.com/zh-cn/edge/">点击此处</a>访问微软官网更新浏览器，如果您使用的是双核浏览器,请您切换浏览器内核为极速模式',
    type: 'warning',
    showClose: false,
    showConfirmButton: false,
    closeOnClickModal: false,
    closeOnPressEscape: false,
    closeOnHashChange: false,
    dangerouslyUseHTMLString: true
  });
}

}),
17019: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* ESM import */var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55384);
/* ESM import */var vab_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48679);
/* ESM import */var vab_icon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vab_icon__WEBPACK_IMPORTED_MODULE_0__);


vue__WEBPACK_IMPORTED_MODULE_1__["default"].component('VabIcon', (vab_icon__WEBPACK_IMPORTED_MODULE_0___default()));

}),
25004: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  asyncRoutes: function() { return asyncRoutes; },
  constantRoutes: function() { return constantRoutes; },
  resetRouter: function() { return resetRouter; }
});
/* ESM import */var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55384);
/* ESM import */var vue_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45554);
/* ESM import */var _layouts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53706);
/* ESM import */var _layouts_EmptyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67539);
/* ESM import */var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84465);
/* ESM import */var _config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_2__);
/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description router全局配置，如有必要可分文件抽离，其中asyncRoutes只有在intelligence模式下才会用到，vip文档中已提供路由的基础图标与小清新图标的配置方案，请仔细阅读
 */






vue__WEBPACK_IMPORTED_MODULE_3__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_4__["default"]);
const constantRoutes = [{
  path: '/login',
  component: () => __webpack_require__.e(/* import() */ "7874").then(__webpack_require__.bind(__webpack_require__, 14062)),
  hidden: true
}, {
  path: '/register',
  component: () => __webpack_require__.e(/* import() */ "3").then(__webpack_require__.bind(__webpack_require__, 59548)),
  hidden: true
}, {
  path: '/401',
  name: '401',
  component: () => __webpack_require__.e(/* import() */ "7972").then(__webpack_require__.bind(__webpack_require__, 23745)),
  hidden: true
}, {
  path: '/404',
  name: '404',
  component: () => __webpack_require__.e(/* import() */ "5519").then(__webpack_require__.bind(__webpack_require__, 25578)),
  hidden: true
}];
const asyncRoutes = [{
  path: '/',
  component: _layouts__WEBPACK_IMPORTED_MODULE_0__["default"],
  redirect: '/index',
  children: [{
    path: 'index',
    name: 'Index',
    component: () => Promise.all(/* import() */ [__webpack_require__.e("3274"), __webpack_require__.e("3067"), __webpack_require__.e("7947"), __webpack_require__.e("3036"), __webpack_require__.e("305"), __webpack_require__.e("4414"), __webpack_require__.e("803"), __webpack_require__.e("3462"), __webpack_require__.e("1145"), __webpack_require__.e("4942"), __webpack_require__.e("2612"), __webpack_require__.e("2609"), __webpack_require__.e("5379"), __webpack_require__.e("2995"), __webpack_require__.e("1424")]).then(__webpack_require__.bind(__webpack_require__, 48695)),
    meta: {
      title: '首页',
      icon: 'home',
      affix: true
    }
  }]
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
        permissions: ["admin"],
      },
    },
  ],
}, */

{
  path: '/vab',
  component: _layouts__WEBPACK_IMPORTED_MODULE_0__["default"],
  redirect: 'noRedirect',
  name: 'Vab',
  alwaysShow: true,
  meta: {
    title: '组件',
    icon: 'box-open'
  },
  children: [{
    path: 'permissions',
    name: 'Permission',
    component: () => __webpack_require__.e(/* import() */ "7639").then(__webpack_require__.bind(__webpack_require__, 37521)),
    meta: {
      title: '角色权限',
      permissions: ['admin', 'editor']
    }
  }, {
    path: 'icon',
    component: _layouts_EmptyLayout__WEBPACK_IMPORTED_MODULE_1__["default"],
    redirect: 'noRedirect',
    name: 'Icon',
    meta: {
      title: '图标',
      permissions: ['admin']
    },
    children: [{
      path: 'awesomeIcon',
      name: 'AwesomeIcon',
      component: () => Promise.all(/* import() */ [__webpack_require__.e("3274"), __webpack_require__.e("3067"), __webpack_require__.e("7947"), __webpack_require__.e("3036"), __webpack_require__.e("305"), __webpack_require__.e("4414"), __webpack_require__.e("803"), __webpack_require__.e("3462"), __webpack_require__.e("1145"), __webpack_require__.e("4942"), __webpack_require__.e("2612"), __webpack_require__.e("2609"), __webpack_require__.e("5379"), __webpack_require__.e("2995"), __webpack_require__.e("5315")]).then(__webpack_require__.bind(__webpack_require__, 13125)),
      meta: {
        title: '常规图标'
      }
    }, {
      path: 'colorfulIcon',
      name: 'ColorfulIcon',
      component: () => Promise.all(/* import() */ [__webpack_require__.e("3274"), __webpack_require__.e("3067"), __webpack_require__.e("7947"), __webpack_require__.e("3036"), __webpack_require__.e("305"), __webpack_require__.e("4414"), __webpack_require__.e("803"), __webpack_require__.e("3462"), __webpack_require__.e("1145"), __webpack_require__.e("4942"), __webpack_require__.e("2612"), __webpack_require__.e("2609"), __webpack_require__.e("5379"), __webpack_require__.e("2995"), __webpack_require__.e("6866")]).then(__webpack_require__.bind(__webpack_require__, 8611)),
      meta: {
        title: '多彩图标'
      }
    }]
  }, {
    path: 'table',
    component: () => __webpack_require__.e(/* import() */ "8648").then(__webpack_require__.bind(__webpack_require__, 11105)),
    name: 'Table',
    meta: {
      title: '表格',
      permissions: ['admin']
    }
  }, {
    path: 'webSocket',
    name: 'WebSocket',
    component: () => __webpack_require__.e(/* import() */ "6665").then(__webpack_require__.bind(__webpack_require__, 29315)),
    meta: {
      title: 'webSocket',
      permissions: ['admin']
    }
  }, {
    path: 'form',
    name: 'Form',
    component: () => __webpack_require__.e(/* import() */ "7305").then(__webpack_require__.bind(__webpack_require__, 52038)),
    meta: {
      title: '表单',
      permissions: ['admin']
    }
  }, {
    path: 'element',
    name: 'Element',
    component: () => __webpack_require__.e(/* import() */ "7235").then(__webpack_require__.bind(__webpack_require__, 77255)),
    meta: {
      title: '常用组件',
      permissions: ['admin']
    }
  }, {
    path: 'tree',
    name: 'Tree',
    component: () => __webpack_require__.e(/* import() */ "2245").then(__webpack_require__.bind(__webpack_require__, 98669)),
    meta: {
      title: '树',
      permissions: ['admin']
    }
  }, {
    path: 'menu1',
    component: () => __webpack_require__.e(/* import() */ "9880").then(__webpack_require__.bind(__webpack_require__, 57707)),
    name: 'Menu1',
    alwaysShow: true,
    meta: {
      title: '嵌套路由 1',
      permissions: ['admin']
    },
    children: [{
      path: 'menu1-1',
      name: 'Menu1-1',
      alwaysShow: true,
      meta: {
        title: '嵌套路由 1-1'
      },
      component: () => __webpack_require__.e(/* import() */ "9170").then(__webpack_require__.bind(__webpack_require__, 56013)),
      children: [{
        path: 'menu1-1-1',
        name: 'Menu1-1-1',
        meta: {
          title: '嵌套路由 1-1-1'
        },
        component: () => __webpack_require__.e(/* import() */ "7979").then(__webpack_require__.bind(__webpack_require__, 62999))
      }]
    }]
  }, {
    path: 'loading',
    name: 'Loading',
    component: () => __webpack_require__.e(/* import() */ "4594").then(__webpack_require__.bind(__webpack_require__, 20779)),
    meta: {
      title: 'loading',
      permissions: ['admin']
    }
  }, {
    path: 'backToTop',
    name: 'BackToTop',
    component: () => __webpack_require__.e(/* import() */ "4854").then(__webpack_require__.bind(__webpack_require__, 33380)),
    meta: {
      title: '返回顶部',
      permissions: ['admin']
    }
  }, {
    path: 'lodash',
    name: 'Lodash',
    component: () => __webpack_require__.e(/* import() */ "1298").then(__webpack_require__.bind(__webpack_require__, 47452)),
    meta: {
      title: 'lodash',
      permissions: ['admin']
    }
  }, {
    path: 'upload',
    name: 'Upload',
    component: () => __webpack_require__.e(/* import() */ "2036").then(__webpack_require__.bind(__webpack_require__, 68453)),
    meta: {
      title: '上传',
      permissions: ['admin']
    }
  }, {
    path: 'log',
    name: 'Log',
    component: () => __webpack_require__.e(/* import() */ "8950").then(__webpack_require__.bind(__webpack_require__, 15802)),
    meta: {
      title: '错误日志模拟',
      permissions: ['admin']
    }
  }, {
    path: 'external-link',
    component: _layouts_EmptyLayout__WEBPACK_IMPORTED_MODULE_1__["default"],
    redirect: 'noRedirect',
    meta: {
      title: '外链'
    },
    children: [{
      path: 'https://github.com/zxwk1998/vue-admin-better/',
      name: 'ExternalLink',
      meta: {
        title: '外链',
        target: '_blank',
        permissions: ['admin', 'editor'],
        badge: 'New'
      }
    }]
  }, {
    path: 'more',
    name: 'More',
    component: () => __webpack_require__.e(/* import() */ "3079").then(__webpack_require__.bind(__webpack_require__, 58764)),
    meta: {
      title: '关于',
      permissions: ['admin']
    }
  }, {
    path: 'chart',
    name: 'Chart',
    component: () => Promise.all(/* import() */ [__webpack_require__.e("3274"), __webpack_require__.e("3067"), __webpack_require__.e("7947"), __webpack_require__.e("3036"), __webpack_require__.e("305"), __webpack_require__.e("4414"), __webpack_require__.e("803"), __webpack_require__.e("3462"), __webpack_require__.e("1145"), __webpack_require__.e("4942"), __webpack_require__.e("2612"), __webpack_require__.e("2609"), __webpack_require__.e("5379"), __webpack_require__.e("2995"), __webpack_require__.e("5061")]).then(__webpack_require__.bind(__webpack_require__, 27991)),
    meta: {
      title: '图表',
      permissions: ['admin']
    }
  }, {
    path: 'tab',
    name: 'Tab',
    component: () => __webpack_require__.e(/* import() */ "6901").then(__webpack_require__.bind(__webpack_require__, 9761)),
    meta: {
      title: '选项卡',
      permissions: ['admin']
    }
  }, {
    path: 'editor',
    name: 'Editor',
    component: () => Promise.all(/* import() */ [__webpack_require__.e("3654"), __webpack_require__.e("8007")]).then(__webpack_require__.bind(__webpack_require__, 15360)),
    meta: {
      title: '编辑器',
      permissions: ['admin']
    }
  }, {
    path: 'qrCode',
    name: 'QrCode',
    component: () => Promise.all(/* import() */ [__webpack_require__.e("374"), __webpack_require__.e("535")]).then(__webpack_require__.bind(__webpack_require__, 22377)),
    meta: {
      title: '二维码',
      permissions: ['admin']
    }
  }]
}, {
  path: '/personnelManagement',
  component: _layouts__WEBPACK_IMPORTED_MODULE_0__["default"],
  redirect: 'noRedirect',
  name: 'PersonnelManagement',
  meta: {
    title: '配置',
    icon: 'users-cog',
    permissions: ['admin']
  },
  children: [{
    path: 'userManagement',
    name: 'UserManagement',
    component: () => __webpack_require__.e(/* import() */ "6198").then(__webpack_require__.bind(__webpack_require__, 60329)),
    meta: {
      title: '用户管理'
    }
  }, {
    path: 'roleManagement',
    name: 'RoleManagement',
    component: () => __webpack_require__.e(/* import() */ "5092").then(__webpack_require__.bind(__webpack_require__, 69909)),
    meta: {
      title: '角色管理'
    }
  }, {
    path: 'menuManagement',
    name: 'MenuManagement',
    component: () => __webpack_require__.e(/* import() */ "846").then(__webpack_require__.bind(__webpack_require__, 13194)),
    meta: {
      title: '菜单管理',
      badge: 'New'
    }
  }]
}, {
  path: '/mall',
  component: _layouts__WEBPACK_IMPORTED_MODULE_0__["default"],
  redirect: 'noRedirect',
  name: 'Mall',
  meta: {
    title: '商城',
    icon: 'shopping-cart',
    permissions: ['admin']
  },
  children: [{
    path: 'pay',
    name: 'Pay',
    component: () => __webpack_require__.e(/* import() */ "9326").then(__webpack_require__.bind(__webpack_require__, 73093)),
    meta: {
      title: '支付',
      noKeepAlive: true
    },
    children: null
  }, {
    path: 'goodsList',
    name: 'GoodsList',
    component: () => __webpack_require__.e(/* import() */ "8140").then(__webpack_require__.bind(__webpack_require__, 93300)),
    meta: {
      title: '商品列表'
    }
  }]
}, {
  path: '/error',
  component: _layouts_EmptyLayout__WEBPACK_IMPORTED_MODULE_1__["default"],
  redirect: 'noRedirect',
  name: 'Error',
  meta: {
    title: '错误页',
    icon: 'bug'
  },
  children: [{
    path: '401',
    name: 'Error401',
    component: () => __webpack_require__.e(/* import() */ "7972").then(__webpack_require__.bind(__webpack_require__, 23745)),
    meta: {
      title: '401'
    }
  }, {
    path: '404',
    name: 'Error404',
    component: () => __webpack_require__.e(/* import() */ "5519").then(__webpack_require__.bind(__webpack_require__, 25578)),
    meta: {
      title: '404'
    }
  }]
}, {
  path: '/external-job',
  component: _layouts__WEBPACK_IMPORTED_MODULE_0__["default"],
  meta: {
    title: '',
    icon: ''
  },
  children: [{
    path: 'https://job.vuejs-core.cn/posts',
    meta: {
      title: '找工作',
      target: '_blank',
      icon: 'horse-head',
      badge: 'New'
    }
  }]
}, {
  path: '*',
  redirect: '/404',
  hidden: true
}];
const router = new vue_router__WEBPACK_IMPORTED_MODULE_4__["default"]({
  base: _config__WEBPACK_IMPORTED_MODULE_2__.publicPath,
  mode: _config__WEBPACK_IMPORTED_MODULE_2__.routerMode,
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
});
function resetRouter() {
  location.reload();
}
/* ESM default export */ __webpack_exports__["default"] = (router);

}),
118: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* ESM import */var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46846);
/* ESM import */var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47827);
/* ESM import */var core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55384);
/* ESM import */var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8507);


/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 导入所有 vuex 模块，自动加入namespaced:true，用于解决vuex命名冲突，请勿修改。
 */



vue__WEBPACK_IMPORTED_MODULE_2__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_3__["default"]);
const files = __webpack_require__(45946);
const modules = {};
files.keys().forEach(key => {
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default;
});
Object.keys(modules).forEach(key => {
  modules[key]['namespaced'] = true;
});
const store = new vuex__WEBPACK_IMPORTED_MODULE_3__["default"].Store({
  modules
});
/* ESM default export */ __webpack_exports__["default"] = (store);

}),
51202: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* ESM import */var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45088);
/* ESM import */var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 异常捕获的状态拦截，请勿修改
 */

const state = () => ({
  errorLogs: []
});
const getters = {
  errorLogs: state => state.errorLogs
};
const mutations = {
  addErrorLog(state, errorLog) {
    state.errorLogs.push(errorLog);
  },
  clearErrorLog: state => {
    state.errorLogs.splice(0);
  }
};
const actions = {
  addErrorLog({
    commit
  }, errorLog) {
    commit('addErrorLog', errorLog);
  },
  clearErrorLog({
    commit
  }) {
    commit('clearErrorLog');
  }
};
/* ESM default export */ __webpack_exports__["default"] = ({
  state,
  getters,
  mutations,
  actions
});

}),
55542: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25004);
/* ESM import */var _api_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74277);
/* ESM import */var _utils_handleRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37981);
/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 路由拦截状态管理，目前两种模式：all模式与intelligence模式
 */



const state = () => ({
  routes: [],
  partialRoutes: []
});
const getters = {
  routes: state => state.routes,
  partialRoutes: state => state.partialRoutes
};
const mutations = {
  setRoutes(state, routes) {
    state.routes = _router__WEBPACK_IMPORTED_MODULE_0__.constantRoutes.concat(routes);
  },
  setAllRoutes(state, routes) {
    state.routes = _router__WEBPACK_IMPORTED_MODULE_0__.constantRoutes.concat(routes);
  }
};
const actions = {
  /**
   * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
   * @description intelligence模式设置路由
   * @param {*} { commit }
   * @param {*} permissions
   * @returns
   */
  async setRoutes({
    commit
  }, permissions) {
    //根据permissions做路由筛选
    let accessedRoutes = (0,_utils_handleRoutes__WEBPACK_IMPORTED_MODULE_2__.filterAsyncRoutes)(_router__WEBPACK_IMPORTED_MODULE_0__.asyncRoutes, permissions);
    commit('setRoutes', accessedRoutes);
    return accessedRoutes;
  },
  /**
   * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
   * @description all模式设置路由
   * @param {*} { commit }
   * @returns
   */
  async setAllRoutes({
    commit
  }) {
    try {
      let {
        data
      } = await (0,_api_router__WEBPACK_IMPORTED_MODULE_1__.getRouterList)();
      if (!data || !Array.isArray(data)) {
        console.error('后端返回的路由数据格式不正确', data);
        data = [];
      }
      const accessedRoutes = (0,_utils_handleRoutes__WEBPACK_IMPORTED_MODULE_2__.convertRouter)(data);
      commit('setAllRoutes', accessedRoutes);
      return accessedRoutes;
    } catch (error) {
      console.error('获取路由列表失败', error);
      commit('setAllRoutes', []);
      return [];
    }
  }
};
/* ESM default export */ __webpack_exports__["default"] = ({
  state,
  getters,
  mutations,
  actions
});

}),
2930: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84465);
/* ESM import */var _config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 所有全局配置的状态管理，如无必要请勿修改
 */


const {
  tabsBar,
  logo,
  layout,
  header,
  themeBar
} = (_config__WEBPACK_IMPORTED_MODULE_0___default());
const theme = JSON.parse(localStorage.getItem('vue-admin-better-theme')) || '';
const state = () => ({
  tabsBar: theme.tabsBar || tabsBar,
  logo,
  collapse: false,
  layout: theme.layout || layout,
  header: theme.header || header,
  device: 'desktop',
  themeBar
});
const getters = {
  collapse: state => state.collapse,
  device: state => state.device,
  header: state => state.header,
  layout: state => state.layout,
  logo: state => state.logo,
  tabsBar: state => state.tabsBar,
  themeBar: state => state.themeBar
};
const mutations = {
  changeLayout: (state, layout) => {
    if (layout) state.layout = layout;
  },
  changeHeader: (state, header) => {
    if (header) state.header = header;
  },
  changeTabsBar: (state, tabsBar) => {
    if (tabsBar) state.tabsBar = tabsBar;
  },
  changeCollapse: state => {
    state.collapse = !state.collapse;
  },
  foldSideBar: state => {
    state.collapse = true;
  },
  openSideBar: state => {
    state.collapse = false;
  },
  toggleDevice: (state, device) => {
    state.device = device;
  }
};
const actions = {
  changeLayout({
    commit
  }, layout) {
    commit('changeLayout', layout);
  },
  changeHeader({
    commit
  }, header) {
    commit('changeHeader', header);
  },
  changeTabsBar({
    commit
  }, tabsBar) {
    commit('changeTabsBar', tabsBar);
  },
  changeCollapse({
    commit
  }) {
    commit('changeCollapse');
  },
  foldSideBar({
    commit
  }) {
    commit('foldSideBar');
  },
  openSideBar({
    commit
  }) {
    commit('openSideBar');
  },
  toggleDevice({
    commit
  }, device) {
    commit('toggleDevice', device);
  }
};
/* ESM default export */ __webpack_exports__["default"] = ({
  state,
  getters,
  mutations,
  actions
});

}),
87087: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 代码生成机状态管理
 */

const state = () => ({
  srcCode: ''
});
const getters = {
  srcTableCode: state => state.srcCode
};
const mutations = {
  setTableCode(state, srcCode) {
    state.srcCode = srcCode;
  }
};
const actions = {
  setTableCode({
    commit
  }, srcCode) {
    commit('setTableCode', srcCode);
  }
};
/* ESM default export */ __webpack_exports__["default"] = ({
  state,
  getters,
  mutations,
  actions
});

}),
73643: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* ESM import */var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45088);
/* ESM import */var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46846);
/* ESM import */var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25885);
/* ESM import */var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* ESM import */var core_js_modules_es_iterator_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98337);
/* ESM import */var core_js_modules_es_iterator_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* ESM import */var core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47827);
/* ESM import */var core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4__);





/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description tabsBar多标签页逻辑，前期借鉴了很多开源项目发现都有个共同的特点很繁琐并不符合框架设计的初衷，后来在github用户hipi的启发下完成了重构，请勿修改
 */

const state = () => ({
  visitedRoutes: []
});
const getters = {
  visitedRoutes: state => state.visitedRoutes
};
const mutations = {
  addVisitedRoute(state, route) {
    let target = state.visitedRoutes.find(item => item.path === route.path);
    if (target) {
      if (route.fullPath !== target.fullPath) Object.assign(target, route);
      return;
    }
    state.visitedRoutes.push(Object.assign({}, route));
  },
  delVisitedRoute(state, route) {
    state.visitedRoutes.forEach((item, index) => {
      if (item.path === route.path) state.visitedRoutes.splice(index, 1);
    });
  },
  delOthersVisitedRoute(state, route) {
    state.visitedRoutes = state.visitedRoutes.filter(item => item.meta.affix || item.path === route.path);
  },
  delLeftVisitedRoute(state, route) {
    let index = state.visitedRoutes.length;
    state.visitedRoutes = state.visitedRoutes.filter(item => {
      if (item.name === route.name) index = state.visitedRoutes.indexOf(item);
      return item.meta.affix || index <= state.visitedRoutes.indexOf(item);
    });
  },
  delRightVisitedRoute(state, route) {
    let index = state.visitedRoutes.length;
    state.visitedRoutes = state.visitedRoutes.filter(item => {
      if (item.name === route.name) index = state.visitedRoutes.indexOf(item);
      return item.meta.affix || index >= state.visitedRoutes.indexOf(item);
    });
  },
  delAllVisitedRoutes(state) {
    state.visitedRoutes = state.visitedRoutes.filter(item => item.meta.affix);
  },
  updateVisitedRoute(state, route) {
    state.visitedRoutes.forEach(item => {
      if (item.path === route.path) item = Object.assign(item, route);
    });
  }
};
const actions = {
  addVisitedRoute({
    commit
  }, route) {
    commit('addVisitedRoute', route);
  },
  async delRoute({
    dispatch,
    state
  }, route) {
    await dispatch('delVisitedRoute', route);
    return {
      visitedRoutes: [...state.visitedRoutes]
    };
  },
  delVisitedRoute({
    commit,
    state
  }, route) {
    commit('delVisitedRoute', route);
    return [...state.visitedRoutes];
  },
  async delOthersRoutes({
    dispatch,
    state
  }, route) {
    await dispatch('delOthersVisitedRoute', route);
    return {
      visitedRoutes: [...state.visitedRoutes]
    };
  },
  async delLeftRoutes({
    dispatch,
    state
  }, route) {
    await dispatch('delLeftVisitedRoute', route);
    return {
      visitedRoutes: [...state.visitedRoutes]
    };
  },
  async delRightRoutes({
    dispatch,
    state
  }, route) {
    await dispatch('delRightVisitedRoute', route);
    return {
      visitedRoutes: [...state.visitedRoutes]
    };
  },
  delOthersVisitedRoute({
    commit,
    state
  }, route) {
    commit('delOthersVisitedRoute', route);
    return [...state.visitedRoutes];
  },
  delLeftVisitedRoute({
    commit,
    state
  }, route) {
    commit('delLeftVisitedRoute', route);
    return [...state.visitedRoutes];
  },
  delRightVisitedRoute({
    commit,
    state
  }, route) {
    commit('delRightVisitedRoute', route);
    return [...state.visitedRoutes];
  },
  async delAllRoutes({
    dispatch,
    state
  }, route) {
    await dispatch('delAllVisitedRoutes', route);
    return {
      visitedRoutes: [...state.visitedRoutes]
    };
  },
  delAllVisitedRoutes({
    commit,
    state
  }) {
    commit('delAllVisitedRoutes');
    return [...state.visitedRoutes];
  },
  updateVisitedRoute({
    commit
  }, route) {
    commit('updateVisitedRoute', route);
  }
};
/* ESM default export */ __webpack_exports__["default"] = ({
  state,
  getters,
  mutations,
  actions
});

}),
2278: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* ESM import */var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55384);
/* ESM import */var _api_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44642);
/* ESM import */var _utils_accessToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81085);
/* ESM import */var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25004);
/* ESM import */var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84465);
/* ESM import */var _config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_3__);
/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 登录、获取用户信息、退出登录、清除accessToken逻辑，不建议修改
 */






const state = () => ({
  accessToken: (0,_utils_accessToken__WEBPACK_IMPORTED_MODULE_1__.getAccessToken)(),
  username: '',
  avatar: '',
  permissions: []
});
const getters = {
  accessToken: state => state.accessToken,
  username: state => state.username,
  avatar: state => state.avatar,
  permissions: state => state.permissions
};
const mutations = {
  setAccessToken(state, accessToken) {
    state.accessToken = accessToken;
    (0,_utils_accessToken__WEBPACK_IMPORTED_MODULE_1__.setAccessToken)(accessToken);
  },
  setUsername(state, username) {
    state.username = username;
  },
  setAvatar(state, avatar) {
    state.avatar = avatar;
  },
  setPermissions(state, permissions) {
    state.permissions = permissions;
  }
};
const actions = {
  setPermissions({
    commit
  }, permissions) {
    commit('setPermissions', permissions);
  },
  async login({
    commit
  }, userInfo) {
    const {
      data
    } = await (0,_api_user__WEBPACK_IMPORTED_MODULE_0__.login)(userInfo);
    const accessToken = data[_config__WEBPACK_IMPORTED_MODULE_3__.tokenName];
    if (accessToken) {
      commit('setAccessToken', accessToken);
      const hour = new Date().getHours();
      const thisTime = hour < 8 ? '早上好' : hour <= 11 ? '上午好' : hour <= 13 ? '中午好' : hour < 18 ? '下午好' : '晚上好';
      vue__WEBPACK_IMPORTED_MODULE_4__["default"].prototype.$baseNotify(`欢迎登录${_config__WEBPACK_IMPORTED_MODULE_3__.title}`, `${thisTime}！`);
    } else {
      vue__WEBPACK_IMPORTED_MODULE_4__["default"].prototype.$baseMessage(`登录接口异常，未正确返回${_config__WEBPACK_IMPORTED_MODULE_3__.tokenName}...`, 'error');
    }
  },
  async getUserInfo({
    commit,
    state
  }) {
    const {
      data
    } = await (0,_api_user__WEBPACK_IMPORTED_MODULE_0__.getUserInfo)(state.accessToken);
    if (!data) {
      vue__WEBPACK_IMPORTED_MODULE_4__["default"].prototype.$baseMessage('验证失败，请重新登录...', 'error');
      return false;
    }
    let {
      permissions,
      username,
      avatar
    } = data;
    if (permissions && username && Array.isArray(permissions)) {
      commit('setPermissions', permissions);
      commit('setUsername', username);
      commit('setAvatar', avatar);
      return permissions;
    } else {
      vue__WEBPACK_IMPORTED_MODULE_4__["default"].prototype.$baseMessage('用户信息接口异常', 'error');
      return false;
    }
  },
  async logout({
    dispatch
  }) {
    await (0,_api_user__WEBPACK_IMPORTED_MODULE_0__.logout)(state.accessToken);
    await dispatch('resetAccessToken');
    await (0,_router__WEBPACK_IMPORTED_MODULE_2__.resetRouter)();
  },
  resetAccessToken({
    commit
  }) {
    commit('setPermissions', []);
    commit('setAccessToken', '');
    (0,_utils_accessToken__WEBPACK_IMPORTED_MODULE_1__.removeAccessToken)();
  }
};
/* ESM default export */ __webpack_exports__["default"] = ({
  state,
  getters,
  mutations,
  actions
});

}),
81085: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getAccessToken: function() { return getAccessToken; },
  removeAccessToken: function() { return removeAccessToken; },
  setAccessToken: function() { return setAccessToken; }
});
/* ESM import */var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84465);
/* ESM import */var _config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_0__);


/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 获取accessToken
 * @returns {string|ActiveX.IXMLDOMNode|Promise<any>|any|IDBRequest<any>|MediaKeyStatus|FormDataEntryValue|Function|Promise<Credential | null>}
 */
function getAccessToken() {
  if (_config__WEBPACK_IMPORTED_MODULE_0__.storage) {
    if ('localStorage' === _config__WEBPACK_IMPORTED_MODULE_0__.storage) {
      return localStorage.getItem(_config__WEBPACK_IMPORTED_MODULE_0__.tokenTableName);
    } else if ('sessionStorage' === _config__WEBPACK_IMPORTED_MODULE_0__.storage) {
      return sessionStorage.getItem(_config__WEBPACK_IMPORTED_MODULE_0__.tokenTableName);
    } else {
      return localStorage.getItem(_config__WEBPACK_IMPORTED_MODULE_0__.tokenTableName);
    }
  } else {
    return localStorage.getItem(_config__WEBPACK_IMPORTED_MODULE_0__.tokenTableName);
  }
}

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 存储accessToken
 * @param accessToken
 * @returns {void|*}
 */
function setAccessToken(accessToken) {
  if (_config__WEBPACK_IMPORTED_MODULE_0__.storage) {
    if ('localStorage' === _config__WEBPACK_IMPORTED_MODULE_0__.storage) {
      return localStorage.setItem(_config__WEBPACK_IMPORTED_MODULE_0__.tokenTableName, accessToken);
    } else if ('sessionStorage' === _config__WEBPACK_IMPORTED_MODULE_0__.storage) {
      return sessionStorage.setItem(_config__WEBPACK_IMPORTED_MODULE_0__.tokenTableName, accessToken);
    } else {
      return localStorage.setItem(_config__WEBPACK_IMPORTED_MODULE_0__.tokenTableName, accessToken);
    }
  } else {
    return localStorage.setItem(_config__WEBPACK_IMPORTED_MODULE_0__.tokenTableName, accessToken);
  }
}

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 移除accessToken
 * @returns {void|Promise<void>}
 */
function removeAccessToken() {
  if (_config__WEBPACK_IMPORTED_MODULE_0__.storage) {
    if ('localStorage' === _config__WEBPACK_IMPORTED_MODULE_0__.storage) {
      return localStorage.removeItem(_config__WEBPACK_IMPORTED_MODULE_0__.tokenTableName);
    } else if ('sessionStorage' === _config__WEBPACK_IMPORTED_MODULE_0__.storage) {
      return sessionStorage.clear();
    } else {
      return localStorage.removeItem(_config__WEBPACK_IMPORTED_MODULE_0__.tokenTableName);
    }
  } else {
    return localStorage.removeItem(_config__WEBPACK_IMPORTED_MODULE_0__.tokenTableName);
  }
}

}),
10142: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  decryptedData: function() { return decryptedData; },
  encryptedData: function() { return encryptedData; }
});
/* ESM import */var jsencrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67468);
/* ESM import */var _api_publicKey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9113);


const privateKey = 'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAMFPa+v52FkSUXvcUnrGI/XzW3EpZRI0s9BCWJ3oNQmEYA5luWW5p8h0uadTIoTyYweFPdH4hveyxlwmS7oefvbIdiP+o+QIYW/R4Wjsb4Yl8MhR4PJqUE3RCy6IT9fM8ckG4kN9ECs6Ja8fQFc6/mSl5dJczzJO3k1rWMBhKJD/AgMBAAECgYEAucMakH9dWeryhrYoRHcXo4giPVJsH9ypVt4KzmOQY/7jV7KFQK3x//27UoHfUCak51sxFw9ek7UmTPM4HjikA9LkYeE7S381b4QRvFuf3L6IbMP3ywJnJ8pPr2l5SqQ00W+oKv+w/VmEsyUHr+k4Z+4ik+FheTkVWp566WbqFsECQQDjYaMcaKw3j2Zecl8T6eUe7fdaRMIzp/gcpPMfT/9rDzIQk+7ORvm1NI9AUmFv/FAlfpuAMrdL2n7p9uznWb7RAkEA2aP934kbXg5bdV0R313MrL+7WTK/qdcYxATUbMsMuWWQBoS5irrt80WCZbG48hpocJavLNjbtrjmUX3CuJBmzwJAOJg8uP10n/+ZQzjEYXh+BszEHDuw+pp8LuT/fnOy5zrJA0dO0RjpXijO3vuiNPVgHXT9z1LQPJkNrb5ACPVVgQJBALPeb4uV0bNrJDUb5RB4ghZnIxv18CcaqNIft7vuGCcFBAIPIRTBprR+RuVq+xHDt3sNXdsvom4h49+Hky1b0ksCQBBwUtVaqH6ztCtwUF1j2c/Zcrt5P/uN7IHAd44K0gIJc1+Csr3qPG+G2yoqRM8KVqLI8Z2ZYn9c+AvEE+L9OQY=';

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description RSA加密
 * @param data
 * @returns {Promise<{param: PromiseLike<ArrayBuffer>}|*>}
 */
async function encryptedData(data) {
  let publicKey = '';
  const res = await (0,_api_publicKey__WEBPACK_IMPORTED_MODULE_1__.getPublicKey)();
  publicKey = res.data.publicKey;
  if (res.data.mockServer) {
    publicKey = '';
  }
  if (publicKey == '') {
    return data;
  }
  const encrypt = new jsencrypt__WEBPACK_IMPORTED_MODULE_0__["default"]();
  encrypt.setPublicKey(`-----BEGIN PUBLIC KEY-----${publicKey}-----END PUBLIC KEY-----`);
  data = encrypt.encrypt(JSON.stringify(data));
  return {
    param: data
  };
}

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description RSA解密
 * @param data
 * @returns {PromiseLike<ArrayBuffer>}
 */
function decryptedData(data) {
  const decrypt = new jsencrypt__WEBPACK_IMPORTED_MODULE_0__["default"]();
  decrypt.setPrivateKey(`-----BEGIN RSA PRIVATE KEY-----${privateKey}-----END RSA PRIVATE KEY-----`);
  data = decrypt.decrypt(JSON.stringify(data));
  return data;
}

}),
73196: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* ESM import */var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55384);
/* ESM import */var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(118);
/* ESM import */var _utils_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36010);
/* ESM import */var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84465);
/* ESM import */var _config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_1__);




const needErrorLog = _config__WEBPACK_IMPORTED_MODULE_1__.errorLog;
const checkNeed = () => {
  const env = "production";
  if ((0,_utils_validate__WEBPACK_IMPORTED_MODULE_2__.isString)(needErrorLog)) {
    return env === needErrorLog;
  }
  if ((0,_utils_validate__WEBPACK_IMPORTED_MODULE_2__.isArray)(needErrorLog)) {
    return needErrorLog.includes(env);
  }
  return false;
};

// 检查是否是Chrome扩展相关错误
const isChromeExtensionError = err => {
  if (!err) return false;

  // 错误消息是字符串
  if (typeof err.message === 'string') {
    return err.message.includes('runtime.lastError') || err.message.includes('message port closed') || err.message.includes('The message port closed');
  }

  // 错误本身是字符串
  if (typeof err === 'string') {
    return err.includes('runtime.lastError') || err.includes('message port closed') || err.includes('The message port closed');
  }
  return false;
};
if (checkNeed()) {
  vue__WEBPACK_IMPORTED_MODULE_3__["default"].config.errorHandler = (err, vm, info) => {
    // 过滤Chrome扩展相关错误
    if (isChromeExtensionError(err)) {
      return;
    }
    console.error('vue-admin-better错误拦截:', err, vm, info);
    const url = window.location.href;
    vue__WEBPACK_IMPORTED_MODULE_3__["default"].nextTick(() => {
      _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch('errorLog/addErrorLog', {
        err,
        vm,
        info,
        url
      });
    });
  };
}

}),
37981: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  convertRouter: function() { return convertRouter; },
  filterAsyncRoutes: function() { return filterAsyncRoutes; }
});
/* ESM import */var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45088);
/* ESM import */var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46846);
/* ESM import */var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25885);
/* ESM import */var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* ESM import */var core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47827);
/* ESM import */var core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* ESM import */var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20429);
/* ESM import */var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* ESM import */var core_js_modules_es_iterator_some_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1547);
/* ESM import */var core_js_modules_es_iterator_some_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_some_js__WEBPACK_IMPORTED_MODULE_5__);






/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description all模式渲染后端返回路由
 * @param constantRoutes
 * @returns {*}
 */
function convertRouter(asyncRoutes) {
  // 处理空值情况
  if (!asyncRoutes || !Array.isArray(asyncRoutes)) {
    console.warn('后端返回的路由格式不正确或为空');
    return [];
  }
  return asyncRoutes.map(route => {
    if (!route) return null;
    if (route.component) {
      if (route.component === 'Layout') {
        route.component = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 53706));
      } else if (route.component === 'EmptyLayout') {
        route.component = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 67539));
      } else {
        try {
          const index = route.component.indexOf('views');
          const path = index > 0 ? route.component.slice(index) : `views/${route.component}`;
          route.component = () => __webpack_require__(88405)(`./${path}`).catch(err => {
            console.error(`路由组件加载失败: @/${path}`, err);
            return __webpack_require__.e(/* import() */ "5519").then(__webpack_require__.bind(__webpack_require__, 25578));
          });
        } catch (err) {
          console.error(`路由组件解析失败: ${route.component}`, err);
          route.component = () => __webpack_require__.e(/* import() */ "5519").then(__webpack_require__.bind(__webpack_require__, 25578));
        }
      }
    }
    if (route.children) {
      if (Array.isArray(route.children) && route.children.length) {
        route.children = convertRouter(route.children);
        // 过滤掉空路由
        route.children = route.children.filter(child => child !== null);
      }
      if (!route.children || route.children.length === 0) delete route.children;
    }
    return route;
  }).filter(route => route !== null); // 过滤掉无效路由
}

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 判断当前路由是否包含权限
 * @param permissions
 * @param route
 * @returns {boolean|*}
 */
function hasPermission(permissions, route) {
  // 确保permissions是数组
  if (!permissions || !Array.isArray(permissions)) {
    return false;
  }
  if (route.meta && route.meta.permissions) {
    return permissions.some(role => route.meta.permissions.includes(role));
  } else {
    return true;
  }
}

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description intelligence模式根据permissions数组拦截路由
 * @param routes
 * @param permissions
 * @returns {[]}
 */
function filterAsyncRoutes(routes, permissions) {
  // 处理无效参数
  if (!routes || !Array.isArray(routes)) {
    return [];
  }
  if (!permissions || !Array.isArray(permissions)) {
    return [];
  }
  const finallyRoutes = [];
  routes.forEach(route => {
    if (!route) return;
    const item = {
      ...route
    };
    if (hasPermission(permissions, item)) {
      if (item.children && Array.isArray(item.children)) {
        item.children = filterAsyncRoutes(item.children, permissions);
      }
      finallyRoutes.push(item);
    }
  });
  return finallyRoutes;
}

}),
70097: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return getPageTitle; }
});
/* ESM import */var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84465);
/* ESM import */var _config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_0__);


/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 设置标题
 * @param pageTitle
 * @returns {string}
 */
function getPageTitle(pageTitle) {
  if (pageTitle) return `${pageTitle}-${_config__WEBPACK_IMPORTED_MODULE_0__.title}`;
  return `${_config__WEBPACK_IMPORTED_MODULE_0__.title}`;
}

}),
99837: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  printLayoutsInfo: function() { return printLayoutsInfo; }
});
/* ESM import */var layouts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14533);
/* ESM import */var layouts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(layouts__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @description 只在控制台打印layouts/index.js中的内容
 */

function printLayoutsInfo() {
  // 只在控制台打印
  (0,layouts__WEBPACK_IMPORTED_MODULE_0__.donationConsole)();
}

}),
95508: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* ESM import */var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45088);
/* ESM import */var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46846);
/* ESM import */var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var core_js_modules_es_iterator_some_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1547);
/* ESM import */var core_js_modules_es_iterator_some_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_some_js__WEBPACK_IMPORTED_MODULE_2__);
/* ESM import */var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55384);
/* ESM import */var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82194);
/* ESM import */var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84465);
/* ESM import */var _config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_3__);
/* ESM import */var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(118);
/* ESM import */var qs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15944);
/* ESM import */var qs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_8__);
/* ESM import */var _router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25004);
/* ESM import */var _utils_validate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36010);










let loadingInstance;

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 处理code异常
 * @param {*} code
 * @param {*} msg
 */
const handleCode = (code, msg) => {
  switch (code) {
    case _config__WEBPACK_IMPORTED_MODULE_3__.invalidCode:
      vue__WEBPACK_IMPORTED_MODULE_6__["default"].prototype.$baseMessage(msg || `后端接口${code}异常`, 'error');
      _store__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch('user/resetAccessToken').catch(() => {});
      if (_config__WEBPACK_IMPORTED_MODULE_3__.loginInterception) {
        location.reload();
      }
      break;
    case _config__WEBPACK_IMPORTED_MODULE_3__.noPermissionCode:
      _router__WEBPACK_IMPORTED_MODULE_5__["default"].push({
        path: '/401'
      }).catch(() => {});
      break;
    default:
      vue__WEBPACK_IMPORTED_MODULE_6__["default"].prototype.$baseMessage(msg || `后端接口${code}异常`, 'error');
      break;
  }
};

// 请求重试配置
const retryConfig = {
  retry: 3,
  // 重试次数
  retryDelay: 1000 // 重试间隔时间
};

// 创建axios实例
const instance = axios__WEBPACK_IMPORTED_MODULE_7__["default"].create({
  baseURL: _config__WEBPACK_IMPORTED_MODULE_3__.baseURL,
  timeout: _config__WEBPACK_IMPORTED_MODULE_3__.requestTimeout,
  headers: {
    'Content-Type': _config__WEBPACK_IMPORTED_MODULE_3__.contentType
  }
});

// 请求重试方法
instance.defaults.retry = retryConfig.retry;
instance.defaults.retryDelay = retryConfig.retryDelay;

// 请求拦截器
instance.interceptors.request.use(config => {
  if (_store__WEBPACK_IMPORTED_MODULE_4__["default"].getters["user/accessToken"]) {
    config.headers[_config__WEBPACK_IMPORTED_MODULE_3__.tokenName] = _store__WEBPACK_IMPORTED_MODULE_4__["default"].getters["user/accessToken"];
  }
  //这里会过滤所有为空、0、false的key，如果不需要请自行注释
  if (config.data) config.data = vue__WEBPACK_IMPORTED_MODULE_6__["default"].prototype.$baseLodash.pickBy(config.data, vue__WEBPACK_IMPORTED_MODULE_6__["default"].prototype.$baseLodash.identity);
  if (config.data && config.headers['Content-Type'] === 'application/x-www-form-urlencoded;charset=UTF-8') config.data = qs__WEBPACK_IMPORTED_MODULE_8___default().stringify(config.data);
  if (_config__WEBPACK_IMPORTED_MODULE_3__.debounce.some(item => config.url.includes(item))) loadingInstance = vue__WEBPACK_IMPORTED_MODULE_6__["default"].prototype.$baseLoading();
  return config;
}, error => {
  return Promise.reject(error);
});

// 响应拦截器
instance.interceptors.response.use(response => {
  if (loadingInstance) loadingInstance.close();
  const {
    data,
    config
  } = response;

  // 判断data是否为undefined或null
  if (data === undefined || data === null) {
    vue__WEBPACK_IMPORTED_MODULE_6__["default"].prototype.$baseMessage('后端接口返回数据为空', 'error');
    return Promise.reject('后端接口返回数据为空');
  }

  // 安全地解构code和msg，避免undefined异常
  const code = data.code !== undefined ? data.code : null;
  const msg = data.msg !== undefined ? data.msg : '未知错误';

  // 操作正常Code数组
  const codeVerificationArray = (0,_utils_validate__WEBPACK_IMPORTED_MODULE_9__.isArray)(_config__WEBPACK_IMPORTED_MODULE_3__.successCode) ? [..._config__WEBPACK_IMPORTED_MODULE_3__.successCode] : [...[_config__WEBPACK_IMPORTED_MODULE_3__.successCode]];

  // 是否操作正常
  if (code !== null && codeVerificationArray.includes(code)) {
    return data;
  } else {
    handleCode(code, msg);
    return Promise.reject(`vue-admin-better请求异常拦截:${JSON.stringify({
      url: config.url,
      code,
      msg
    })}` || 'Error');
  }
}, error => {
  if (loadingInstance) loadingInstance.close();

  // 处理请求重试
  const {
    config
  } = error;
  if (config && config.retry) {
    // 设置当前重试次数
    config.__retryCount = config.__retryCount || 0;

    // 检查是否可以重试
    if (config.__retryCount < config.retry) {
      // 增加重试次数
      config.__retryCount += 1;

      // 创建新的Promise进行重试
      const backoff = new Promise(resolve => {
        setTimeout(() => {
          console.log(`重试请求: ${config.url}, 尝试次数: ${config.__retryCount}`);
          resolve();
        }, config.retryDelay || 1000);
      });

      // 重新发起请求
      return backoff.then(() => instance(config));
    }
  }

  // 处理undefined或无法解析的错误情况
  if (!error) {
    vue__WEBPACK_IMPORTED_MODULE_6__["default"].prototype.$baseMessage('发生未知错误', 'error');
    return Promise.reject('发生未知错误');
  }
  const {
    response,
    message
  } = error;
  if (response && response.data) {
    const {
      status,
      data
    } = response;
    handleCode(status, data.msg || message || '未知错误');
    return Promise.reject(error);
  } else {
    let errorMsg = '后端接口未知异常';
    if (message) {
      if (message === 'Network Error') {
        errorMsg = '后端接口连接异常';
      } else if (message.includes('timeout')) {
        errorMsg = '后端接口请求超时';
      } else if (message.includes('Request failed with status code')) {
        const code = message.substr(message.length - 3);
        errorMsg = `后端接口${code}异常`;
      }
    }
    vue__WEBPACK_IMPORTED_MODULE_6__["default"].prototype.$baseMessage(errorMsg, 'error');
    return Promise.reject(error);
  }
});
/* ESM default export */ __webpack_exports__["default"] = (instance);

}),
87288: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84465);
/* ESM import */var _config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32699);
/* ESM import */var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var element_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89912);
/* ESM import */var element_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_2__);
/* ESM import */var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(118);
/* ESM import */var _utils_accessToken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81085);





const accessToken = _store__WEBPACK_IMPORTED_MODULE_3__["default"].getters["user/accessToken"];
const layout = _store__WEBPACK_IMPORTED_MODULE_3__["default"].getters["settings/layout"];
const install = Vue => {
  /* 全局accessToken */
  Vue.prototype.$baseAccessToken = () => {
    return accessToken || (0,_utils_accessToken__WEBPACK_IMPORTED_MODULE_4__.getAccessToken)();
  };
  /* 全局标题 */
  Vue.prototype.$baseTitle = (() => {
    return _config__WEBPACK_IMPORTED_MODULE_0__.title;
  })();
  /* 全局加载层 */
  Vue.prototype.$baseLoading = (index, text) => {
    let loading;
    if (!index) {
      loading = element_ui__WEBPACK_IMPORTED_MODULE_2__.Loading.service({
        lock: true,
        text: text || _config__WEBPACK_IMPORTED_MODULE_0__.loadingText,
        background: 'hsla(0,0%,100%,.8)'
      });
    } else {
      loading = element_ui__WEBPACK_IMPORTED_MODULE_2__.Loading.service({
        lock: true,
        text: text || _config__WEBPACK_IMPORTED_MODULE_0__.loadingText,
        spinner: `vab-loading-type${index}`,
        background: 'hsla(0,0%,100%,.8)'
      });
    }
    return loading;
  };
  /* 全局多彩加载层 */
  Vue.prototype.$baseColorfullLoading = (index, text) => {
    let loading;
    if (!index) {
      loading = element_ui__WEBPACK_IMPORTED_MODULE_2__.Loading.service({
        lock: true,
        text: text || _config__WEBPACK_IMPORTED_MODULE_0__.loadingText,
        spinner: 'dots-loader',
        background: 'hsla(0,0%,100%,.8)'
      });
    } else {
      switch (index) {
        case 1:
          index = 'dots';
          break;
        case 2:
          index = 'gauge';
          break;
        case 3:
          index = 'inner-circles';
          break;
        case 4:
          index = 'plus';
          break;
      }
      loading = element_ui__WEBPACK_IMPORTED_MODULE_2__.Loading.service({
        lock: true,
        text: text || _config__WEBPACK_IMPORTED_MODULE_0__.loadingText,
        spinner: `${index}-loader`,
        background: 'hsla(0,0%,100%,.8)'
      });
    }
    return loading;
  };
  /* 全局Message */
  Vue.prototype.$baseMessage = (message, type) => {
    (0,element_ui__WEBPACK_IMPORTED_MODULE_2__.Message)({
      offset: 60,
      showClose: true,
      message: message,
      type: type,
      dangerouslyUseHTMLString: true,
      duration: _config__WEBPACK_IMPORTED_MODULE_0__.messageDuration
    });
  };

  /* 全局Alert */
  Vue.prototype.$baseAlert = (content, title, callback) => {
    element_ui__WEBPACK_IMPORTED_MODULE_2__.MessageBox.alert(content, title || '温馨提示', {
      confirmButtonText: '确定',
      dangerouslyUseHTMLString: true,
      callback: () => {
        if (callback) {
          callback();
        }
      }
    });
  };

  /* 全局Confirm */
  Vue.prototype.$baseConfirm = (content, title, callback1, callback2) => {
    element_ui__WEBPACK_IMPORTED_MODULE_2__.MessageBox.confirm(content, title || '温馨提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      closeOnClickModal: false,
      type: 'warning'
    }).then(() => {
      if (callback1) {
        callback1();
      }
    }).catch(() => {
      if (callback2) {
        callback2();
      }
    });
  };

  /* 全局Notification */
  Vue.prototype.$baseNotify = (message, title, type, position) => {
    (0,element_ui__WEBPACK_IMPORTED_MODULE_2__.Notification)({
      title: title,
      message: message,
      position: position || 'top-right',
      type: type || 'success',
      duration: _config__WEBPACK_IMPORTED_MODULE_0__.messageDuration
    });
  };

  /* 全局TableHeight */
  Vue.prototype.$baseTableHeight = formType => {
    let height = window.innerHeight;
    let paddingHeight = 400;
    const formHeight = 50;
    if (layout === 'vertical') {
      paddingHeight = 365;
    }
    if ('number' == typeof formType) {
      height = height - paddingHeight - formHeight * formType;
    } else {
      height = height - paddingHeight;
    }
    return height;
  };

  /* 全局lodash */
  Vue.prototype.$baseLodash = lodash__WEBPACK_IMPORTED_MODULE_1__;
  /* 全局事件总线 */
  Vue.prototype.$baseEventBus = new Vue();
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
/* ESM default export */ __webpack_exports__["default"] = (install);

}),
36010: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  isArray: function() { return isArray; },
  isExternal: function() { return isExternal; },
  isPassword: function() { return isPassword; },
  isPhone: function() { return isPhone; },
  isString: function() { return isString; }
});
/**
 * @author zxwk1998  （不想保留author可删除）
 * @description 判读是否为外链
 * @param path
 * @returns {boolean}
 */
function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 校验密码是否小于6位
 * @param str
 * @returns {boolean}
 */
function isPassword(str) {
  return str.length >= 6;
}

/**
 * @author zxwk1998  （不想保留author可删除）
 * @description 判断是否是字符串
 * @param str
 * @returns {boolean}
 */
function isString(str) {
  return typeof str === 'string' || str instanceof String;
}

/**
 * @author zxwk1998  （不想保留author可删除）
 * @description 判断是否是数组
 * @param arg
 * @returns {arg is any[]|boolean}
 */
function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]';
  }
  return Array.isArray(arg);
}

/**
 * @author zxwk1998  （不想保留author可删除）
 * @description 判断是否是手机号
 * @param str
 * @returns {boolean}
 */
function isPhone(str) {
  const reg = /^1\d{10}$/;
  return reg.test(str);
}

}),
22553: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ App; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.11_webpack_e74202fe94519cb18203d881d7737545/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.11_webpack_e74202fe94519cb18203d881d7737545/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=0607e7a4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"vue-admin-better"}},[_c('router-view')],1)}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@10.0.0_@babel+core@7.23.3_webpack@5.100.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.11_webpack_e74202fe94519cb18203d881d7737545/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* ESM default export */ var Appvue_type_script_lang_js_ = ({
  name: 'App',
  mounted() {}
});
;// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* ESM default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.11_webpack_e74202fe94519cb18203d881d7737545/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(74712);
;// CONCATENATED MODULE: ./src/App.vue





/* normalize component */
;
var component = (0,componentNormalizer["default"])(
  src_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* ESM default export */ var App = (component.exports);

}),
42553: (function (module, __unused_webpack_exports, __webpack_require__) {
var map = {
  "./VabAd/index.vue": "34672",
  "./VabAppMain/index.vue": "76333",
  "./VabAvatar/index.vue": "19516",
  "./VabBreadcrumb/index.vue": "42288",
  "./VabColorfullIcon/index.vue": "36878",
  "./VabErrorLog/index.vue": "74153",
  "./VabFullScreen/index.vue": "49876",
  "./VabGithubCorner/index.vue": "34839",
  "./VabLogo/index.vue": "85331",
  "./VabNav/index.vue": "37129",
  "./VabQueryForm/VabQueryFormBottomPanel.vue": "10377",
  "./VabQueryForm/VabQueryFormLeftPanel.vue": "78121",
  "./VabQueryForm/VabQueryFormRightPanel.vue": "77297",
  "./VabQueryForm/VabQueryFormTopPanel.vue": "64431",
  "./VabQueryForm/index.vue": "57832",
  "./VabSide/components/VabMenuItem.vue": "78135",
  "./VabSide/components/VabSideItem.vue": "52516",
  "./VabSide/components/VabSubmenu.vue": "34877",
  "./VabSide/index.vue": "7761",
  "./VabTabs/index.vue": "74578",
  "./VabTheme/index.vue": "85749",
  "./VabTop/index.vue": "63385"
};


function webpackContext(req) {
  var id = webpackContextResolve(req);
  return __webpack_require__(id);
}
function webpackContextResolve(req) {
  if(!__webpack_require__.o(map, req)) {
    var e = new Error("Cannot find module '" + req + "'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
  }
  return map[req];
}
webpackContext.keys = function webpackContextKeys() {
  return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 42553;


}),
45946: (function (module, __unused_webpack_exports, __webpack_require__) {
var map = {
  "./errorLog.js": "51202",
  "./routes.js": "55542",
  "./settings.js": "2930",
  "./table.js": "87087",
  "./tabsBar.js": "73643",
  "./user.js": "2278"
};


function webpackContext(req) {
  var id = webpackContextResolve(req);
  return __webpack_require__(id);
}
function webpackContextResolve(req) {
  if(!__webpack_require__.o(map, req)) {
    var e = new Error("Cannot find module '" + req + "'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
  }
  return map[req];
}
webpackContext.keys = function webpackContextKeys() {
  return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 45946;


}),
51035: (function (module, __unused_webpack_exports, __webpack_require__) {
var map = {
  "./default.scss": "1204"
};


function webpackContext(req) {
  var id = webpackContextResolve(req);
  return __webpack_require__(id);
}
function webpackContextResolve(req) {
  if(!__webpack_require__.o(map, req)) {
    var e = new Error("Cannot find module '" + req + "'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
  }
  return map[req];
}
webpackContext.keys = function webpackContextKeys() {
  return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 51035;


}),
88405: (function (module, __unused_webpack_exports, __webpack_require__) {
var map = {
  "./layouts/components/VabAd": [
    "34672",
    9
  ],
  "./layouts/components/VabQueryForm/VabQueryFormBottomPanel.vue": [
    "10377",
    9
  ],
  "./styles/themes/default.scss": [
    "1204",
    9
  ],
  "./views/vab/webSocket/index.vue": [
    "29315",
    9,
    "6665"
  ],
  "./store/": [
    "118",
    9
  ],
  "./layouts/components/VabSide": [
    "7761",
    9
  ],
  "./views/vab/table/index.vue": [
    "11105",
    9,
    "8648"
  ],
  "./assets/vuejs-fill.svg": [
    "32467",
    1,
    "2704"
  ],
  "./config": [
    "84465",
    7
  ],
  "./views/vab/errorLog": [
    "15802",
    9,
    "8950"
  ],
  "./views/register/index.vue": [
    "59548",
    9,
    "3"
  ],
  "./views/vab/table/": [
    "11105",
    9,
    "8648"
  ],
  "./layouts/components/VabAvatar": [
    "19516",
    9
  ],
  "./views/vab/errorLog/components/ErrorTest.vue": [
    "10263",
    9,
    "8258"
  ],
  "./api/personalCenter.js": [
    "90215",
    9,
    "5179"
  ],
  "./components/VabUpload": [
    "30729",
    9,
    "3172"
  ],
  "./layouts/components/VabAppMain/index": [
    "76333",
    9
  ],
  "./layouts/components/VabSide/": [
    "7761",
    9
  ],
  "./layouts/components/VabSide/index": [
    "7761",
    9
  ],
  "./views/personnelManagement/userManagement/index.vue": [
    "60329",
    9,
    "6198"
  ],
  "./views/vab/chart/": [
    "27991",
    9,
    "3274",
    "3067",
    "7947",
    "3036",
    "305",
    "4414",
    "803",
    "3462",
    "1145",
    "4942",
    "2612",
    "2609",
    "5379",
    "2995",
    "5061"
  ],
  "./views/mall/goodsList": [
    "93300",
    9,
    "8140"
  ],
  "./views/vab/nested/menu1": [
    "57707",
    9,
    "9880"
  ],
  "./views/vab/tab": [
    "9761",
    9,
    "6901"
  ],
  "./views/register/index": [
    "59548",
    9,
    "3"
  ],
  "./api/ad.js": [
    "34669",
    9
  ],
  "./views/personnelManagement/roleManagement/index.vue": [
    "69909",
    9,
    "5092"
  ],
  "./views/register/": [
    "59548",
    9,
    "3"
  ],
  "./api/icon": [
    "9825",
    9,
    "7264"
  ],
  "./components/VabProfile/index.vue": [
    "24434",
    9,
    "8572"
  ],
  "./views/personnelManagement/roleManagement/index": [
    "69909",
    9,
    "5092"
  ],
  "./plugins": [
    "7710",
    9
  ],
  "./layouts/components/VabGithubCorner": [
    "34839",
    9
  ],
  "./layouts/components/VabAppMain/": [
    "76333",
    9
  ],
  "./views/vab/tab/index": [
    "9761",
    9,
    "6901"
  ],
  "./utils/validate.js": [
    "36010",
    9
  ],
  "./layouts/components/VabBreadcrumb": [
    "42288",
    9
  ],
  "./layouts/components/VabLogo/index": [
    "85331",
    9
  ],
  "./views/vab/loading/": [
    "20779",
    9,
    "4594"
  ],
  "./layouts/components/VabAd/": [
    "34672",
    9
  ],
  "./api/user.js": [
    "44642",
    9
  ],
  "./components/SelectTree/index": [
    "2095",
    9,
    "5662"
  ],
  "./views/mall/goodsList/index.vue": [
    "93300",
    9,
    "8140"
  ],
  "./styles/spinner/inner-circles.css": [
    "26754",
    9,
    "6212"
  ],
  "./layouts/components/VabTop/index.vue": [
    "63385",
    9
  ],
  "./layouts/components/VabColorfullIcon/": [
    "36878",
    9
  ],
  "./components/SelectTree": [
    "2095",
    9,
    "5662"
  ],
  "./views/vab/nested/menu1/menu1-1/": [
    "56013",
    9,
    "9170"
  ],
  "./layouts/components/VabFullScreen": [
    "49876",
    9
  ],
  "./views/vab/tree/": [
    "98669",
    9,
    "2245"
  ],
  "./layouts/components/VabErrorLog/": [
    "74153",
    9
  ],
  "./layouts/components/VabSide/components/VabMenuItem.vue": [
    "78135",
    9
  ],
  "./views/vab/chart": [
    "27991",
    9,
    "3274",
    "3067",
    "7947",
    "3036",
    "305",
    "4414",
    "803",
    "3462",
    "1145",
    "4942",
    "2612",
    "2609",
    "5379",
    "2995",
    "5061"
  ],
  "./utils/encrypt.js": [
    "10142",
    9
  ],
  "./layouts": [
    "53706",
    9
  ],
  "./utils/handleRoutes.js": [
    "37981",
    9
  ],
  "./views/vab/permissions": [
    "37521",
    9,
    "7639"
  ],
  "./store/modules/tabsBar.js": [
    "73643",
    9
  ],
  "./views/index": [
    "48695",
    9,
    "3274",
    "3067",
    "7947",
    "3036",
    "305",
    "4414",
    "803",
    "3462",
    "1145",
    "4942",
    "2612",
    "2609",
    "5379",
    "2995",
    "1424"
  ],
  "./views/personnelManagement/userManagement/": [
    "60329",
    9,
    "6198"
  ],
  "./plugins/echarts": [
    "14845",
    9,
    "3274",
    "3067",
    "7947",
    "3036",
    "305",
    "4414",
    "803",
    "3462",
    "1145",
    "4942",
    "2612",
    "2609",
    "5379",
    "2995",
    "1514"
  ],
  "./views/personnelManagement/userManagement/index": [
    "60329",
    9,
    "6198"
  ],
  "./views/vab/backToTop": [
    "33380",
    9,
    "4854"
  ],
  "./views/vab/chart/index": [
    "27991",
    9,
    "3274",
    "3067",
    "7947",
    "3036",
    "305",
    "4414",
    "803",
    "3462",
    "1145",
    "4942",
    "2612",
    "2609",
    "5379",
    "2995",
    "5061"
  ],
  "./views/vab/qrCode": [
    "22377",
    9,
    "374",
    "535"
  ],
  "./views/vab/tab/": [
    "9761",
    9,
    "6901"
  ],
  "./views/mall/pay/components/Step2.vue": [
    "30436",
    9,
    "3106"
  ],
  "./views/vab/table/components/TableEdit.vue": [
    "13077",
    9,
    "9305"
  ],
  "./layouts/components/VabErrorLog/index": [
    "74153",
    9
  ],
  "./layouts/components/VabSide/components/VabSubmenu.vue": [
    "34877",
    9
  ],
  "./views/mall/pay/components/Step3": [
    "37479",
    9,
    "8217"
  ],
  "./config/setting.config": [
    "62493",
    7
  ],
  "./views/personnelManagement/menuManagement/components/MenuManagementEdit": [
    "9836",
    9,
    "6645"
  ],
  "./views/personnelManagement/roleManagement/components/RoleManagementEdit": [
    "46476",
    9,
    "7418"
  ],
  "./api/table.js": [
    "62147",
    9,
    "6082"
  ],
  "./views/mall/pay/index": [
    "73093",
    9,
    "9326"
  ],
  "./config/index": [
    "84465",
    7
  ],
  "./api/markdown": [
    "43761",
    9,
    "2380"
  ],
  "./layouts/components/VabQueryForm/": [
    "57832",
    9
  ],
  "./views/vab/element/index.vue": [
    "77255",
    9,
    "7235"
  ],
  "./layouts/components/VabQueryForm": [
    "57832",
    9
  ],
  "./views/vab/nested/menu1/": [
    "57707",
    9,
    "9880"
  ],
  "./config/index.js": [
    "84465",
    7
  ],
  "./layouts/EmptyLayout": [
    "67539",
    9
  ],
  "./layouts/components/VabTheme/": [
    "85749",
    9
  ],
  "./components/SelectTree/index.vue": [
    "2095",
    9,
    "5662"
  ],
  "./api/icon.js": [
    "9825",
    9,
    "7264"
  ],
  "./layouts/components/VabLogo": [
    "85331",
    9
  ],
  "./utils/pageTitle.js": [
    "70097",
    9
  ],
  "./assets/zfb_kf.jpg": [
    "2797",
    1,
    "6951"
  ],
  "./store/modules/table.js": [
    "87087",
    9
  ],
  "./views/index/": [
    "48695",
    9,
    "3274",
    "3067",
    "7947",
    "3036",
    "305",
    "4414",
    "803",
    "3462",
    "1145",
    "4942",
    "2612",
    "2609",
    "5379",
    "2995",
    "1424"
  ],
  "./views/index/index": [
    "48695",
    9,
    "3274",
    "3067",
    "7947",
    "3036",
    "305",
    "4414",
    "803",
    "3462",
    "1145",
    "4942",
    "2612",
    "2609",
    "5379",
    "2995",
    "1424"
  ],
  "./components/VabPageHeader/index": [
    "19979",
    9,
    "1923"
  ],
  "./views/personnelManagement/userManagement": [
    "60329",
    9,
    "6198"
  ],
  "./plugins/index": [
    "7710",
    9
  ],
  "./views/index/components/VersionInformation": [
    "89256",
    9,
    "2344"
  ],
  "./api/roleManagement.js": [
    "44277",
    9,
    "2825"
  ],
  "./views/vab/upload/index.vue": [
    "68453",
    9,
    "2036"
  ],
  "./assets/error_images/cloud.png": [
    "24307",
    1,
    "1662"
  ],
  "./layouts/components/VabSide/components/VabSideItem.vue": [
    "52516",
    9
  ],
  "./layouts/components/VabQueryForm/VabQueryFormRightPanel.vue": [
    "77297",
    9
  ],
  "./utils/index": [
    "94621",
    9,
    "2452"
  ],
  "./utils/static": [
    "67308",
    9,
    "757",
    "3906"
  ],
  "./views/personalCenter/": [
    "77",
    9,
    "8292"
  ],
  "./layouts/components/VabErrorLog": [
    "74153",
    9
  ],
  "./views/vab/element/": [
    "77255",
    9,
    "7235"
  ],
  "./utils/request": [
    "95508",
    9
  ],
  "./utils/request.js": [
    "95508",
    9
  ],
  "./views/mall/pay/components/Step2": [
    "30436",
    9,
    "3106"
  ],
  "./assets/comparison/right.jpg": [
    "92332",
    1,
    "9683"
  ],
  "./views/vab/more/index.vue": [
    "58764",
    9,
    "3079"
  ],
  "./layouts/components/VabNav/index.vue": [
    "37129",
    9
  ],
  "./store/index": [
    "118",
    9
  ],
  "./store/modules/errorLog.js": [
    "51202",
    9
  ],
  "./store/modules/user": [
    "2278",
    9
  ],
  "./store/modules/user.js": [
    "2278",
    9
  ],
  "./layouts/components/VabQueryForm/index": [
    "57832",
    9
  ],
  "./styles/spinner/dots.css": [
    "82770",
    9,
    "6212"
  ],
  "./layouts/components/VabTheme/index.vue": [
    "85749",
    9
  ],
  "./api/personalCenter": [
    "90215",
    9,
    "5179"
  ],
  "./views/index/index.vue": [
    "48695",
    9,
    "3274",
    "3067",
    "7947",
    "3036",
    "305",
    "4414",
    "803",
    "3462",
    "1145",
    "4942",
    "2612",
    "2609",
    "5379",
    "2995",
    "1424"
  ],
  "./views/mall/pay/index.vue": [
    "73093",
    9,
    "9326"
  ],
  "./views/test/index": [
    "90841",
    9,
    "6900"
  ],
  "./views/vab/icon/index.vue": [
    "13125",
    9,
    "3274",
    "3067",
    "7947",
    "3036",
    "305",
    "4414",
    "803",
    "3462",
    "1145",
    "4942",
    "2612",
    "2609",
    "5379",
    "2995",
    "5315"
  ],
  "./layouts/components/VabQueryForm/VabQueryFormLeftPanel": [
    "78121",
    9
  ],
  "./styles/transition.scss": [
    "32223",
    9,
    "6212"
  ],
  "./views/personalCenter/index.vue": [
    "77",
    9,
    "8292"
  ],
  "./views/personnelManagement/roleManagement/components/RoleManagementEdit.vue": [
    "46476",
    9,
    "7418"
  ],
  "./utils/encrypt": [
    "10142",
    9
  ],
  "./main.js": [
    "73265",
    9
  ],
  "./api/roleManagement": [
    "44277",
    9,
    "2825"
  ],
  "./components/SelectTree/": [
    "2095",
    9,
    "5662"
  ],
  "./layouts/components/VabLogo/index.vue": [
    "85331",
    9
  ],
  "./views/index/components/VersionInformation.vue": [
    "89256",
    9,
    "2344"
  ],
  "./plugins/element": [
    "95343",
    9
  ],
  "./utils/validate": [
    "36010",
    9
  ],
  "./utils/handleRoutes": [
    "37981",
    9
  ],
  "./layouts/components/VabQueryForm/VabQueryFormTopPanel.vue": [
    "64431",
    9
  ],
  "./plugins/support": [
    "75123",
    9
  ],
  "./api/publicKey.js": [
    "9113",
    9
  ],
  "./utils/accessToken.js": [
    "81085",
    9
  ],
  "./assets/comparison/left.jpg": [
    "15674",
    1,
    "1341"
  ],
  "./views/401.vue": [
    "23745",
    9,
    "7972"
  ],
  "./views/vab/upload/index": [
    "68453",
    9,
    "2036"
  ],
  "./layouts/components/VabLogo/": [
    "85331",
    9
  ],
  "./utils/vab.js": [
    "87288",
    9
  ],
  "./views/vab/more": [
    "58764",
    9,
    "3079"
  ],
  "./components/VabSnow/": [
    "38317",
    9,
    "1527"
  ],
  "./plugins/support.js": [
    "75123",
    9
  ],
  "./plugins/vabIcon.js": [
    "17019",
    9
  ],
  "./api/colorfulIcon.js": [
    "67077",
    9,
    "4565"
  ],
  "./layouts/components/VabQueryForm/index.vue": [
    "57832",
    9
  ],
  "./styles/spinner/plus.css": [
    "14482",
    9,
    "6212"
  ],
  "./assets/ewm.png": [
    "7253",
    1,
    "5731"
  ],
  "./utils/": [
    "94621",
    9,
    "2452"
  ],
  "./utils/clipboard": [
    "88768",
    9,
    "3274",
    "3067",
    "7947",
    "3036",
    "305",
    "4414",
    "803",
    "3462",
    "1145",
    "4942",
    "2612",
    "2609",
    "5379",
    "2995",
    "7261"
  ],
  "./views/vab/table/components/TableEdit": [
    "13077",
    9,
    "9305"
  ],
  "./store/modules/errorLog": [
    "51202",
    9
  ],
  "./config/settings.js": [
    "61698",
    7,
    "6814"
  ],
  "./views/vab/more/": [
    "58764",
    9,
    "3079"
  ],
  "./views/vab/icon/": [
    "13125",
    9,
    "3274",
    "3067",
    "7947",
    "3036",
    "305",
    "4414",
    "803",
    "3462",
    "1145",
    "4942",
    "2612",
    "2609",
    "5379",
    "2995",
    "5315"
  ],
  "./views/personnelManagement/menuManagement/": [
    "13194",
    9,
    "846"
  ],
  "./components/VabUpload/": [
    "30729",
    9,
    "3172"
  ],
  "./views/login/index.vue": [
    "14062",
    9,
    "7874"
  ],
  "./components/VabProfile/index": [
    "24434",
    9,
    "8572"
  ],
  "./config/net.config.js": [
    "93784",
    7
  ],
  "./store/modules/tabsBar": [
    "73643",
    9
  ],
  "./utils/vab": [
    "87288",
    9
  ],
  "./store/modules/table": [
    "87087",
    9
  ],
  "./api/router.js": [
    "74277",
    9
  ],
  "./layouts/components/VabAppMain": [
    "76333",
    9
  ],
  "./layouts/export": [
    "69048",
    9
  ],
  "./api/userManagement.js": [
    "25279",
    9,
    "9626"
  ],
  "./views/mall/pay": [
    "73093",
    9,
    "9326"
  ],
  "./views/test/index.vue": [
    "90841",
    9,
    "6900"
  ],
  "./views/vab/chart/index.vue": [
    "27991",
    9,
    "3274",
    "3067",
    "7947",
    "3036",
    "305",
    "4414",
    "803",
    "3462",
    "1145",
    "4942",
    "2612",
    "2609",
    "5379",
    "2995",
    "5061"
  ],
  "./api/markdown.js": [
    "43761",
    9,
    "2380"
  ],
  "./layouts/index.vue": [
    "53706",
    9
  ],
  "./views/mall/pay/components/Step1.vue": [
    "74801",
    9,
    "7470"
  ],
  "./layouts/components/VabQueryForm/VabQueryFormLeftPanel.vue": [
    "78121",
    9
  ],
  "./layouts/components/VabAvatar/": [
    "19516",
    9
  ],
  "./layouts/components/VabQueryForm/VabQueryFormBottomPanel": [
    "10377",
    9
  ],
  "./plugins/element.js": [
    "95343",
    9
  ],
  "./components/VabSnow/index.vue": [
    "38317",
    9,
    "1527"
  ],
  "./layouts/": [
    "53706",
    9
  ],
  "./layouts/components/VabTabs/index": [
    "74578",
    9
  ],
  "./utils/index.js": [
    "94621",
    9,
    "2452"
  ],
  "./styles/normalize.scss": [
    "95013",
    9,
    "6212"
  ],
  "./views/vab/errorLog/index": [
    "15802",
    9,
    "8950"
  ],
  "./views/vab/nested/menu1/menu1-1/menu1-1-1": [
    "62999",
    9,
    "7979"
  ],
  "./views/login": [
    "14062",
    9,
    "7874"
  ],
  "./views/vab/tree/index": [
    "98669",
    9,
    "2245"
  ],
  "./assets/error_images/404.png": [
    "46829",
    1,
    "8818"
  ],
  "./layouts/components/VabAppMain/index.vue": [
    "76333",
    9
  ],
  "./utils/permission.js": [
    "8618",
    9,
    "9622"
  ],
  "./views/personalCenter/index": [
    "77",
    9,
    "8292"
  ],
  "./views/vab/tree/index.vue": [
    "98669",
    9,
    "2245"
  ],
  "./api/userManagement": [
    "25279",
    9,
    "9626"
  ],
  "./layouts/components/VabTop/index": [
    "63385",
    9
  ],
  "./config/theme.config.js": [
    "6206",
    7
  ],
  "./views/vab/nested/menu1/menu1-1/index.vue": [
    "56013",
    9,
    "9170"
  ],
  "./views/vab/tab/index.vue": [
    "9761",
    9,
    "6901"
  ],
  "./views/personnelManagement/userManagement/components/UserManagementEdit": [
    "80806",
    9,
    "9025"
  ],
  "./views/vab/errorLog/index.vue": [
    "15802",
    9,
    "8950"
  ],
  "./views/vab/nested/menu1/index": [
    "57707",
    9,
    "9880"
  ],
  "./utils/accessToken": [
    "81085",
    9
  ],
  "./views/mall/goodsList/index": [
    "93300",
    9,
    "8140"
  ],
  "./views/mall/goodsList/": [
    "93300",
    9,
    "8140"
  ],
  "./components/VabCharge/index.vue": [
    "71616",
    9,
    "8735"
  ],
  "./views/vab/lodash/index.vue": [
    "47452",
    9,
    "1298"
  ],
  "./views/vab/icon/colorfulIcon": [
    "8611",
    9,
    "3274",
    "3067",
    "7947",
    "3036",
    "305",
    "4414",
    "803",
    "3462",
    "1145",
    "4942",
    "2612",
    "2609",
    "5379",
    "2995",
    "6866"
  ],
  "./views/vab/backToTop/": [
    "33380",
    9,
    "4854"
  ],
  "./views/vab/nested/menu1/menu1-1/menu1-1-1/": [
    "62999",
    9,
    "7979"
  ],
  "./views/vab/nested/menu1/menu1-1/menu1-1-1/index.vue": [
    "62999",
    9,
    "7979"
  ],
  "./styles/variables.scss": [
    "38785",
    9
  ],
  "./views/vab/lodash/index": [
    "47452",
    9,
    "1298"
  ],
  "./views/vab/permissions/": [
    "37521",
    9,
    "7639"
  ],
  "./layouts/components/VabFullScreen/": [
    "49876",
    9
  ],
  "./views/mall/pay/": [
    "73093",
    9,
    "9326"
  ],
  "./views/vab/form": [
    "52038",
    9,
    "7305"
  ],
  "./config/theme.config": [
    "6206",
    7
  ],
  "./views/register": [
    "59548",
    9,
    "3"
  ],
  "./assets/error_images/401.png": [
    "35993",
    1,
    "2505"
  ],
  "./layouts/components/VabSide/components/VabMenuItem": [
    "78135",
    9
  ],
  "./store/modules/routes.js": [
    "55542",
    9
  ],
  "./layouts/components/VabColorfullIcon": [
    "36878",
    9
  ],
  "./api/notice.js": [
    "47795",
    9,
    "5485"
  ],
  "./layouts/components/VabBreadcrumb/index": [
    "42288",
    9
  ],
  "./layouts/components/VabBreadcrumb/index.vue": [
    "42288",
    9
  ],
  "./main": [
    "73265",
    9
  ],
  "./styles/loading.scss": [
    "74134",
    9,
    "6212"
  ],
  "./layouts/components/VabTabs/": [
    "74578",
    9
  ],
  "./views/personnelManagement/roleManagement/": [
    "69909",
    9,
    "5092"
  ],
  "./views/vab/editor": [
    "15360",
    9,
    "3654",
    "8007"
  ],
  "./utils/static.js": [
    "67308",
    9,
    "757",
    "3906"
  ],
  "./views/personnelManagement/menuManagement/components/MenuManagementEdit.vue": [
    "9836",
    9,
    "6645"
  ],
  "./views/vab/errorLog/": [
    "15802",
    9,
    "8950"
  ],
  "./views/vab/icon": [
    "13125",
    9,
    "3274",
    "3067",
    "7947",
    "3036",
    "305",
    "4414",
    "803",
    "3462",
    "1145",
    "4942",
    "2612",
    "2609",
    "5379",
    "2995",
    "5315"
  ],
  "./views/vab/icon/colorfulIcon.vue": [
    "8611",
    9,
    "3274",
    "3067",
    "7947",
    "3036",
    "305",
    "4414",
    "803",
    "3462",
    "1145",
    "4942",
    "2612",
    "2609",
    "5379",
    "2995",
    "6866"
  ],
  "./views/vab/nested/menu1/menu1-1/index": [
    "56013",
    9,
    "9170"
  ],
  "./api/github": [
    "79446",
    9,
    "745"
  ],
  "./views/vab/lodash/": [
    "47452",
    9,
    "1298"
  ],
  "./views/vab/loading/index": [
    "20779",
    9,
    "4594"
  ],
  "./views/test": [
    "90841",
    9,
    "6900"
  ],
  "./layouts/components/VabSide/index.vue": [
    "7761",
    9
  ],
  "./components/VabProfile": [
    "24434",
    9,
    "8572"
  ],
  "./utils/errorLog.js": [
    "73196",
    9
  ],
  "./views/vab/editor/index.vue": [
    "15360",
    9,
    "3654",
    "8007"
  ],
  "./utils": [
    "94621",
    9,
    "2452"
  ],
  "./api/table": [
    "62147",
    9,
    "6082"
  ],
  "./api/publicKey": [
    "9113",
    9
  ],
  "./components/VabSnow/index": [
    "38317",
    9,
    "1527"
  ],
  "./views/401": [
    "23745",
    9,
    "7972"
  ],
  "./store/modules/settings.js": [
    "2930",
    9
  ],
  "./views/vab/backToTop/index": [
    "33380",
    9,
    "4854"
  ],
  "./views/404": [
    "25578",
    9,
    "5519"
  ],
  "./views/vab/form/index.vue": [
    "52038",
    9,
    "7305"
  ],
  "./views/vab/upload/": [
    "68453",
    9,
    "2036"
  ],
  "./layouts/components/VabFullScreen/index.vue": [
    "49876",
    9
  ],
  "./layouts/components/VabTop": [
    "63385",
    9
  ],
  "./layouts/index": [
    "53706",
    9
  ],
  "./plugins/index.js": [
    "7710",
    9
  ],
  "./views/personnelManagement/roleManagement": [
    "69909",
    9,
    "5092"
  ],
  "./views/vab/form/": [
    "52038",
    9,
    "7305"
  ],
  "./views/vab/nested/menu1/menu1-1/menu1-1-1/index": [
    "62999",
    9,
    "7979"
  ],
  "./components/VabUpload/index.vue": [
    "30729",
    9,
    "3172"
  ],
  "./components/VabSnow": [
    "38317",
    9,
    "1527"
  ],
  "./config/permission.js": [
    "36928",
    9
  ],
  "./components/VabUpload/index": [
    "30729",
    9,
    "3172"
  ],
  "./utils/errorLog": [
    "73196",
    9
  ],
  "./config/settings": [
    "61698",
    7,
    "6814"
  ],
  "./layouts/components/VabColorfullIcon/index": [
    "36878",
    9
  ],
  "./api/github.js": [
    "79446",
    9,
    "745"
  ],
  "./views/vab/qrCode/index.vue": [
    "22377",
    9,
    "374",
    "535"
  ],
  "./utils/printInfo": [
    "99837",
    9
  ],
  "./components/VabPageHeader": [
    "19979",
    9,
    "1923"
  ],
  "./api/notice": [
    "47795",
    9,
    "5485"
  ],
  "./layouts/EmptyLayout.vue": [
    "67539",
    9
  ],
  "./layouts/components/VabBreadcrumb/": [
    "42288",
    9
  ],
  "./views/vab/element/index": [
    "77255",
    9,
    "7235"
  ],
  "./layouts/components/VabAd/index": [
    "34672",
    9
  ],
  "./router": [
    "25004",
    9
  ],
  "./views/404.vue": [
    "25578",
    9,
    "5519"
  ],
  "./App": [
    "22553",
    9
  ],
  "./store": [
    "118",
    9
  ],
  "./views/vab/nested/menu1/index.vue": [
    "57707",
    9,
    "9880"
  ],
  "./assets/qr_logo/lqr_logo.png": [
    "54151",
    1,
    "9980"
  ],
  "./api/ad": [
    "34669",
    9
  ],
  "./views/vab/nested/menu1/menu1-1": [
    "56013",
    9,
    "9170"
  ],
  "./layouts/components/VabAvatar/index": [
    "19516",
    9
  ],
  "./layouts/components/VabGithubCorner/index": [
    "34839",
    9
  ],
  "./layouts/components/VabErrorLog/index.vue": [
    "74153",
    9
  ],
  "./views/vab/webSocket": [
    "29315",
    9,
    "6665"
  ],
  "./store/index.js": [
    "118",
    9
  ],
  "./config/": [
    "84465",
    7
  ],
  "./layouts/export.js": [
    "69048",
    9
  ],
  "./layouts/components/VabGithubCorner/index.vue": [
    "34839",
    9
  ],
  "./layouts/components/VabTabs/index.vue": [
    "74578",
    9
  ],
  "./views/test/": [
    "90841",
    9,
    "6900"
  ],
  "./components/VabProfile/": [
    "24434",
    9,
    "8572"
  ],
  "./views/login/index": [
    "14062",
    9,
    "7874"
  ],
  "./api/router": [
    "74277",
    9
  ],
  "./components/VabCharge": [
    "71616",
    9,
    "8735"
  ],
  "./views/vab/form/index": [
    "52038",
    9,
    "7305"
  ],
  "./views/vab/more/index": [
    "58764",
    9,
    "3079"
  ],
  "./api/goodsList": [
    "48151",
    9,
    "5252"
  ],
  "./components/VabPageHeader/": [
    "19979",
    9,
    "1923"
  ],
  "./plugins/": [
    "7710",
    9
  ],
  "./views/vab/permissions/index.vue": [
    "37521",
    9,
    "7639"
  ],
  "./styles/vab.scss": [
    "65446",
    9
  ],
  "./router/index.js": [
    "25004",
    9
  ],
  "./views/mall/pay/components/Step3.vue": [
    "37479",
    9,
    "8217"
  ],
  "./views/vab/lodash": [
    "47452",
    9,
    "1298"
  ],
  "./views/vab/table": [
    "11105",
    9,
    "8648"
  ],
  "./views/vab/webSocket/index": [
    "29315",
    9,
    "6665"
  ],
  "./layouts/components/VabGithubCorner/": [
    "34839",
    9
  ],
  "./views/vab/qrCode/index": [
    "22377",
    9,
    "374",
    "535"
  ],
  "./router/index": [
    "25004",
    9
  ],
  "./views/personnelManagement/menuManagement/index.vue": [
    "13194",
    9,
    "846"
  ],
  "./api/tree": [
    "57492",
    9,
    "9461"
  ],
  "./views/vab/tree": [
    "98669",
    9,
    "2245"
  ],
  "./components/VabCharge/": [
    "71616",
    9,
    "8735"
  ],
  "./layouts/components/VabNav": [
    "37129",
    9
  ],
  "./config/setting.config.js": [
    "62493",
    7
  ],
  "./layouts/components/VabColorfullIcon/index.vue": [
    "36878",
    9
  ],
  "./views/mall/pay/components/Step1": [
    "74801",
    9,
    "7470"
  ],
  "./views/vab/table/index": [
    "11105",
    9,
    "8648"
  ],
  "./views/vab/webSocket/": [
    "29315",
    9,
    "6665"
  ],
  "./views/vab/permissions/index": [
    "37521",
    9,
    "7639"
  ],
  "./layouts/components/VabTheme/index": [
    "85749",
    9
  ],
  "./store/modules/settings": [
    "2930",
    9
  ],
  "./plugins/echarts.js": [
    "14845",
    9,
    "3274",
    "3067",
    "7947",
    "3036",
    "305",
    "4414",
    "803",
    "3462",
    "1145",
    "4942",
    "2612",
    "2609",
    "5379",
    "2995",
    "1514"
  ],
  "./views/vab/loading": [
    "20779",
    9,
    "4594"
  ],
  "./layouts/components/VabNav/index": [
    "37129",
    9
  ],
  "./views/vab/loading/index.vue": [
    "20779",
    9,
    "4594"
  ],
  "./utils/pageTitle": [
    "70097",
    9
  ],
  "./api/remixIcon": [
    "77208",
    9,
    "211"
  ],
  "./config/net.config": [
    "93784",
    7
  ],
  "./layouts/components/VabFullScreen/index": [
    "49876",
    9
  ],
  "./layouts/components/VabQueryForm/VabQueryFormTopPanel": [
    "64431",
    9
  ],
  "./layouts/components/VabSide/components/VabSubmenu": [
    "34877",
    9
  ],
  "./layouts/components/VabTop/": [
    "63385",
    9
  ],
  "./utils/clipboard.js": [
    "88768",
    9,
    "3274",
    "3067",
    "7947",
    "3036",
    "305",
    "4414",
    "803",
    "3462",
    "1145",
    "4942",
    "2612",
    "2609",
    "5379",
    "2995",
    "7261"
  ],
  "./plugins/vabIcon": [
    "17019",
    9
  ],
  "./views/login/": [
    "14062",
    9,
    "7874"
  ],
  "./views/vab/backToTop/index.vue": [
    "33380",
    9,
    "4854"
  ],
  "./App.vue": [
    "22553",
    9
  ],
  "./config/permission": [
    "36928",
    9
  ],
  "./views/personnelManagement/menuManagement": [
    "13194",
    9,
    "846"
  ],
  "./views/vab/editor/": [
    "15360",
    9,
    "3654",
    "8007"
  ],
  "./api/tree.js": [
    "57492",
    9,
    "9461"
  ],
  "./api/remixIcon.js": [
    "77208",
    9,
    "211"
  ],
  "./views/vab/upload": [
    "68453",
    9,
    "2036"
  ],
  "./api/menuManagement.js": [
    "61953",
    9,
    "1167"
  ],
  "./components/VabCharge/index": [
    "71616",
    9,
    "8735"
  ],
  "./layouts/components/VabAvatar/index.vue": [
    "19516",
    9
  ],
  "./layouts/components/VabQueryForm/VabQueryFormRightPanel": [
    "77297",
    9
  ],
  "./utils/printInfo.js": [
    "99837",
    9
  ],
  "./views/personalCenter": [
    "77",
    9,
    "8292"
  ],
  "./views/personnelManagement/menuManagement/index": [
    "13194",
    9,
    "846"
  ],
  "./views/vab/element": [
    "77255",
    9,
    "7235"
  ],
  "./views/vab/icon/index": [
    "13125",
    9,
    "3274",
    "3067",
    "7947",
    "3036",
    "305",
    "4414",
    "803",
    "3462",
    "1145",
    "4942",
    "2612",
    "2609",
    "5379",
    "2995",
    "5315"
  ],
  "./api/menuManagement": [
    "61953",
    9,
    "1167"
  ],
  "./api/user": [
    "44642",
    9
  ],
  "./assets/login_images/background.jpg": [
    "31464",
    1,
    "6440"
  ],
  "./components/VabPageHeader/index.vue": [
    "19979",
    9,
    "1923"
  ],
  "./layouts/components/VabAd/index.vue": [
    "34672",
    9
  ],
  "./layouts/components/VabSide/components/VabSideItem": [
    "52516",
    9
  ],
  "./layouts/components/VabTabs": [
    "74578",
    9
  ],
  "./store/modules/routes": [
    "55542",
    9
  ],
  "./styles/spinner/gauge.css": [
    "63789",
    9,
    "6212"
  ],
  "./router/": [
    "25004",
    9
  ],
  "./utils/permission": [
    "8618",
    9,
    "9622"
  ],
  "./views/vab/editor/index": [
    "15360",
    9,
    "3654",
    "8007"
  ],
  "./views/vab/qrCode/": [
    "22377",
    9,
    "374",
    "535"
  ],
  "./views/vab/errorLog/components/ErrorTest": [
    "10263",
    9,
    "8258"
  ],
  "./api/colorfulIcon": [
    "67077",
    9,
    "4565"
  ],
  "./layouts/components/VabNav/": [
    "37129",
    9
  ],
  "./layouts/components/VabTheme": [
    "85749",
    9
  ],
  "./api/goodsList.js": [
    "48151",
    9,
    "5252"
  ],
  "./views/personnelManagement/userManagement/components/UserManagementEdit.vue": [
    "80806",
    9,
    "9025"
  ]
};
function webpackAsyncContext(req) {
  if(!__webpack_require__.o(map, req)) {
    return Promise.resolve().then(function() {
      var e = new Error("Cannot find module '" + req + "'");
      e.code = 'MODULE_NOT_FOUND';
      throw e;
    });
  }

  var ids = map[req], id = ids[0];
  return Promise.all(ids.slice(2).map(__webpack_require__.e)).then(function() {
    return __webpack_require__.t(id, ids[1] | 16);
  });
}

webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 88405;
module.exports = webpackAsyncContext;


}),
92477: (function (module) {
"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==";

}),
69295: (function () {
"use strict";
/* (ignored) */

}),

});
/************************************************************************/
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
id: moduleId,
loaded: false,
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);

// Flag the module as loaded
module.loaded = true;
// Return the exports of the module
return module.exports;

}

// expose the modules object (__webpack_modules__)
__webpack_require__.m = __webpack_modules__;

/************************************************************************/
// webpack/runtime/compat_get_default_export
!function() {
// getDefaultExport function for compatibility with non-ESM modules
__webpack_require__.n = function(module) {
	var getter = module && module.__esModule ?
		function() { return module['default']; } :
		function() { return module; };
	__webpack_require__.d(getter, { a: getter });
	return getter;
};

}();
// webpack/runtime/create_fake_namespace_object
!function() {
var getProto = Object.getPrototypeOf ? function(obj) { return Object.getPrototypeOf(obj); } : function(obj) { return obj.__proto__; };
var leafPrototypes;
// create a fake namespace object
// mode & 1: value is a module id, require it
// mode & 2: merge all properties of value into the ns
// mode & 4: return value when already ns object
// mode & 16: return value when it's Promise-like
// mode & 8|1: behave like require
__webpack_require__.t = function(value, mode) {
	if(mode & 1) value = this(value);
	if(mode & 8) return value;
	if(typeof value === 'object' && value) {
		if((mode & 4) && value.__esModule) return value;
		if((mode & 16) && typeof value.then === 'function') return value;
	}
	var ns = Object.create(null);
  __webpack_require__.r(ns);
	var def = {};
	leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
	for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
		Object.getOwnPropertyNames(current).forEach(function(key) { def[key] = function() { return value[key]; } });
	}
	def['default'] = function() { return value; };
	__webpack_require__.d(ns, def);
	return ns;
};
}();
// webpack/runtime/define_property_getters
!function() {
__webpack_require__.d = function(exports, definition) {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
}();
// webpack/runtime/ensure_chunk
!function() {
__webpack_require__.f = {};
// This file contains only the entry chunk.
// The chunk loading function for additional chunks
__webpack_require__.e = function(chunkId) {
	return Promise.all(
		Object.keys(__webpack_require__.f).reduce(function(promises, key) {
			__webpack_require__.f[key](chunkId, promises);
			return promises;
		}, [])
	);
};
}();
// webpack/runtime/get javascript chunk filename
!function() {
// This function allow to reference chunks
__webpack_require__.u = function(chunkId) {
  // return url for filenames not based on template
  
  // return url for filenames based on template
  return "js/" + ({"1145": "vab-chunk-8","2609": "vab-chunk-11","2612": "vab-chunk-10","2995": "vab-chunk-13","3036": "vab-chunk-3","305": "vab-chunk-4","3067": "vab-chunk-1","3274": "vab-chunk-0","3462": "vab-chunk-7","4414": "vab-chunk-5","4942": "vab-chunk-9","5379": "vab-chunk-12","7947": "vab-chunk-2","803": "vab-chunk-6",}[chunkId] || chunkId) + "." + {"1145": "9dafa3cc","1167": "dbf806c6","1298": "7705681e","1341": "26a18590","1424": "a72298a5","1514": "5006966a","1527": "89814053","1662": "052b3167","1923": "bee1e453","2036": "b8e7991c","211": "bb7ed892","2245": "c8182125","2344": "7abd44da","2380": "1f0d176b","2452": "f3e9a792","2505": "b619b10b","2609": "010047ee","2612": "d41f52ad","2704": "ea31b58c","2825": "196e3b00","2995": "1c5ddeaa","3": "65c72dec","3036": "10dabdb7","305": "dc24446a","3067": "fe2e6d92","3079": "b949dd7e","3106": "ee43a21a","3172": "4c2e84f6","3274": "ff04dee2","3462": "1611dccf","3654": "5da6d6f0","374": "c743a671","3906": "7cfa7c33","4414": "1890eab8","4565": "642a9dc6","4594": "21899bf9","4854": "a9ad88a9","4942": "a4efbbe1","5061": "8ed23156","5092": "bb33e90a","5179": "0b2f0116","5252": "cb3ca338","5315": "5d72bfc1","535": "fce97a64","5379": "77bfeebb","5485": "85830c73","5519": "f849cd33","5662": "94ad219f","5731": "986fff56","6082": "967fed72","6198": "4fc9d0b9","6440": "7e796c94","6645": "6af2df69","6665": "4d97987a","6814": "4e488841","6866": "caba68b0","6900": "2a940bb0","6901": "812f18f6","6951": "5e3d3570","7235": "25e90e77","7261": "ea349537","7264": "cacf1ca4","7305": "64716d9f","7418": "ecf2f001","745": "c239f1f6","7470": "68cbd3f4","757": "a440efde","7639": "59887f9e","7874": "0a8c76ed","7947": "6a4499ea","7972": "bb0ca758","7979": "2f8499ac","8007": "0cd96177","803": "ec558191","8140": "97090d60","8217": "f4e35e13","8258": "7ae65415","8292": "246a7a2e","846": "6a748f80","8572": "f94d438f","8648": "b1d47046","8735": "b5a38c5f","8818": "eadf88df","8950": "c1af67b8","9025": "ca4aabd2","9170": "705fb34f","9305": "20e33ba5","9326": "3e9dd272","9461": "7ce47156","9622": "4e30d611","9626": "05f69d8f","9683": "dc2f15a6","9880": "106359ec","9980": "1035d93d",}[chunkId] + ".js"
}
}();
// webpack/runtime/global
!function() {
__webpack_require__.g = (function() {
	if (typeof globalThis === 'object') return globalThis;
	try {
		return this || new Function('return this')();
	} catch (e) {
		if (typeof window === 'object') return window;
	}
})();
}();
// webpack/runtime/has_own_property
!function() {
__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
}();
// webpack/runtime/load_script
!function() {
var inProgress = {};

var dataWebpackPrefix = "vue-admin-better:";
// loadScript function to load a script via script tag
__webpack_require__.l = function (url, done, key, chunkId) {
	if (inProgress[url]) {
		inProgress[url].push(done);
		return;
	}
	var script, needAttach;
	if (key !== undefined) {
		var scripts = document.getElementsByTagName("script");
		for (var i = 0; i < scripts.length; i++) {
			var s = scripts[i];
			if (s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) {
				script = s;
				break;
			}
		}
	}
	if (!script) {
		needAttach = true;
		
    script = document.createElement('script');
    
		script.charset = 'utf-8';
		script.timeout = 120;
		if (__webpack_require__.nc) {
			script.setAttribute("nonce", __webpack_require__.nc);
		}
		script.setAttribute("data-webpack", dataWebpackPrefix + key);
		
		script.src = url;
		
    
	}
	inProgress[url] = [done];
	var onScriptComplete = function (prev, event) {
		script.onerror = script.onload = null;
		clearTimeout(timeout);
		var doneFns = inProgress[url];
		delete inProgress[url];
		script.parentNode && script.parentNode.removeChild(script);
		doneFns &&
			doneFns.forEach(function (fn) {
				return fn(event);
			});
		if (prev) return prev(event);
	};
	var timeout = setTimeout(
		onScriptComplete.bind(null, undefined, {
			type: 'timeout',
			target: script
		}),
		120000
	);
	script.onerror = onScriptComplete.bind(null, script.onerror);
	script.onload = onScriptComplete.bind(null, script.onload);
	needAttach && document.head.appendChild(script);
};

}();
// webpack/runtime/make_namespace_object
!function() {
// define __esModule on exports
__webpack_require__.r = function(exports) {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};
}();
// webpack/runtime/node_module_decorator
!function() {
__webpack_require__.nmd = function(module) {
  module.paths = [];
  if (!module.children) module.children = [];
  return module;
};
}();
// webpack/runtime/nonce
!function() {
__webpack_require__.nc = undefined;
}();
// webpack/runtime/on_chunk_loaded
!function() {
var deferred = [];
__webpack_require__.O = function(result, chunkIds, fn, priority) {
	if (chunkIds) {
		priority = priority || 0;
		for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--)
			deferred[i] = deferred[i - 1];
		deferred[i] = [chunkIds, fn, priority];
		return;
	}
	var notFulfilled = Infinity;
	for (var i = 0; i < deferred.length; i++) {
		var chunkIds = deferred[i][0];
var fn = deferred[i][1];
var priority = deferred[i][2];
		var fulfilled = true;
		for (var j = 0; j < chunkIds.length; j++) {
			if (
				(priority & (1 === 0) || notFulfilled >= priority) &&
				Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })
			) {
				chunkIds.splice(j--, 1);
			} else {
				fulfilled = false;
				if (priority < notFulfilled) notFulfilled = priority;
			}
		}
		if (fulfilled) {
			deferred.splice(i--, 1);
			var r = fn();
			if (r !== undefined) result = r;
		}
	}
	return result;
};

}();
// webpack/runtime/public_path
!function() {
__webpack_require__.p = "";
}();
// webpack/runtime/rspack_version
!function() {
__webpack_require__.rv = function() { return "1.4.11"; }
}();
// webpack/runtime/jsonp_chunk_loading
!function() {
__webpack_require__.b = document.baseURI || self.location.href;

      // object to store loaded and loading chunks
      // undefined = chunk not loaded, null = chunk preloaded/prefetched
      // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
      var installedChunks = {"9387": 0,};
      
        __webpack_require__.f.j = function (chunkId, promises) {
          // JSONP chunk loading for javascript
var installedChunkData = __webpack_require__.o(installedChunks, chunkId)
	? installedChunks[chunkId]
	: undefined;
if (installedChunkData !== 0) {
	// 0 means "already installed".

	// a Promise means "currently loading".
	if (installedChunkData) {
		promises.push(installedChunkData[2]);
	} else {
		if (true) {
			// setup Promise in chunk cache
			var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
			promises.push((installedChunkData[2] = promise));

			// start chunk loading
			var url = __webpack_require__.p + __webpack_require__.u(chunkId);
			// create error before stack unwound to get useful stacktrace later
			var error = new Error();
			var loadingEnded = function (event) {
				if (__webpack_require__.o(installedChunks, chunkId)) {
					installedChunkData = installedChunks[chunkId];
					if (installedChunkData !== 0) installedChunks[chunkId] = undefined;
					if (installedChunkData) {
						var errorType =
							event && (event.type === 'load' ? 'missing' : event.type);
						var realSrc = event && event.target && event.target.src;
						error.message =
							'Loading chunk ' +
							chunkId +
							' failed.\n(' +
							errorType +
							': ' +
							realSrc +
							')';
						error.name = 'ChunkLoadError';
						error.type = errorType;
						error.request = realSrc;
						installedChunkData[1](error);
					}
				}
			};
			__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
		} 
	}
}

        }
        __webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
// install a JSONP callback for chunk loading
var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
	var chunkIds = data[0];
var moreModules = data[1];
var runtime = data[2];
	// add "moreModules" to the modules object,
	// then flag all "chunkIds" as loaded and fire callback
	var moduleId, chunkId, i = 0;
	if (chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
		for (moduleId in moreModules) {
			if (__webpack_require__.o(moreModules, moduleId)) {
				__webpack_require__.m[moduleId] = moreModules[moduleId];
			}
		}
		if (runtime) var result = runtime(__webpack_require__);
	}
	if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
	for (; i < chunkIds.length; i++) {
		chunkId = chunkIds[i];
		if (
			__webpack_require__.o(installedChunks, chunkId) &&
			installedChunks[chunkId]
		) {
			installedChunks[chunkId][0]();
		}
		installedChunks[chunkId] = 0;
	}
	return __webpack_require__.O(result);
};

var chunkLoadingGlobal = self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || [];
chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));

}();
// webpack/runtime/rspack_unique_id
!function() {
__webpack_require__.ruid = "bundler=rspack@1.4.11";

}();
/************************************************************************/
// startup
// Load entry module and return exports
// This entry module depends on other loaded chunks and execution need to be delayed
var __webpack_exports__ = __webpack_require__.O(undefined, ["6212", "4769", "1192", "577", "7454", "6874"], function() { return __webpack_require__(73265) });
__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})()
;