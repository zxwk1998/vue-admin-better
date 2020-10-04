/**
 * @author chuzhixin 1204505056@qq.com
 * @description 全局变量配置
 */
module.exports = {
  //开发以及部署时的URL，hash模式时在不确定二级目录名称的情况下建议使用""代表相对路径或者"/二级目录/"，history模式默认使用"/"或者"/二级目录/"
  publicPath: "",
  //生产环境构建文件的目录名
  outputDir: "dist",
  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: "static",
  //开发环境每次保存时是否输出为eslint编译警告
  lintOnSave: true,
  //进行编译的依赖
  transpileDependencies: [],
  //默认的接口地址 如果是开发环境和生产环境走vab-mock-server，当然你也可以选择自己配置成需要的接口地址
  baseURL:
    process.env.NODE_ENV === "development"
      ? "vab-mock-server"
      : "vab-mock-server",
  //是否显示logo，不显示时设置false，显示时请填写remixIcon图标名称，暂时只支持设置remixIcon
  logo: "vuejs-fill",
  //标题 （包括初次加载雪花屏的标题 页面的标题 浏览器的标题）
  title: "vue-admin-beautiful-antdv",
  //标题分隔符
  titleSeparator: " - ",
  //标题是否反转 如果为false:"page - title"，如果为ture:"title - page"
  titleReverse: false,
  //简写
  abbreviation: "vab-pro",
  //开发环境端口号
  devPort: "9999",
  //版本号
  version: process.env.VUE_APP_VERSION,
  //pro版本copyright可随意修改
  copyright: "chuzhixin 1204505056@qq.com",
  //不经过token校验的路由
  routesWhiteList: ["/login", "/register", "/callback", "/404", "/401"],
  //token名称
  tokenName: "accessToken",
  //token在localStorage、sessionStorage、cookie存储的key的名称
  tokenTableName: "vue-admin-beautiful-accessToken",
  //token存储位置localStorage sessionStorage cookie
  storage: "localStorage",
  //token失效回退到登录页时是否记录本次的路由
  recordRoute: true,
  //配后端数据的接收方式application/json;charset=UTF-8或者application/x-www-form-urlencoded;charset=UTF-8
  contentType: "application/json;charset=UTF-8",
  //消息框消失时间
  messageDuration: 3000,
  //最长请求时间
  requestTimeout: 10000,
  //操作正常code，支持String、Array、int多种类型
  successCode: [200, 0],
  //登录失效code
  invalidCode: 402,
  //无角色code
  noRoleCode: 401,
  //是否开启登录拦截
  loginInterception: true,
  //intelligence（前端导出路由）和all（后端导出路由）两种方式
  authentication: "intelligence",
  //是否开启roles字段进行角色权限控制（如果是all模式后端完全处理角色并进行json组装，可设置false不处理路由中的roles字段）
  rolesControl: true,
  //需要加loading层的请求，防止重复提交
  debounce: ["doEdit"],
  //需要自动注入并加载的模块
  providePlugin: {},
  //npm run build时是否自动生成7z压缩包
  build7z: false,
  //是否显示终端donation打印
  donation: false,
};
