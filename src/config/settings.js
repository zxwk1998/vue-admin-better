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
      : "vab-mock-server",
  //标题 （包括初次加载雪花屏的标题 页面的标题 浏览器的标题）
  title: "vue-admin-beautiful",
  //简写
  abbreviation: "vab",
  //开发环境端口号
  devPort: "80",
  //版本号
  version: process.env.VUE_APP_VERSION,
  //烦请保留package.json作者信息 保留版权可免费商用 如需去除并自定义为自己企业的版权请联系群主QQ 1204505056 需支付299元 恶意修改发生纠纷及出现任何问题 由修改人自行承担
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
  //操作正常code，支持String、Array两种方式
  successCode: [200, 0],
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
