module.exports = {
  //标题
  title: "vue-admin-beautiful",
  //简写
  abbreviation: "vab",
  //开发环境端口号
  devPort: "80",
  //版本号
  version: "V1.0",
  //烦请保留版权 如需去除请联系群主QQ 1204505056 恶意修改发生纠纷及出现任何问题 由修改人自行承担
  copyright: process.env.VUE_APP_AUTHOR,
  //不经过token校验的路由
  routesWhiteList: ["/login", "/404", "/401"],
  //加载时显示文字
  loadingText: "正在加载中...",
  //token名称
  tokenName: "accessToken",
  //token表名
  tokenTableName: "VUE-TABLE",
  //token存储位置
  storage: "localStorage",
  //是否显示logo
  logo: true,
  //是否国定头部 固定fixed 不固定noFixed
  header: "fixed",
  //横纵布局 horizontal vertical
  layout: "vertical",
  //是否开启主题配置按钮
  themeBar: true,
  //是否显示多标签页
  tagsBar: true,
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
  //设置生产环境是否屏蔽f12等开发组工具快捷键
  shieldF12: false,
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
  defaultOopeneds: ["/byui"],
  //需要加loading层的请求，防止重复提交
  debounce: ["doEdit"],
};
