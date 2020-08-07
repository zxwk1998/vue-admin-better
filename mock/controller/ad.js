const data = [
  {
    title: "vue-admin-beautiful-pro beta版本已发布，点我提前体验",
    url: "http://beautiful.panm.cn/vue-admin-beautiful-pro",
  },
  {
    title:
      "作为一个程序员，我迄今为止最骄傲的事情：2020年7月10日，vue/cli4作者蒋豪群采纳了我的对sass-loader 9.0全局注入变量的文档修改建议，以后全世界都能看到我的名字了，这远比vue-admin-beautiful更让我有成就感，感谢shaonialife的帮助。",
    url: "https://github.com/vuejs/vue-cli/blob/master/docs/zh/guide/css.md",
  },
  {
    title: "vue-admin-beautiful前端讨论群-1：972435319",
    url:
      "//shang.qq.com/wpa/qunwpa?idkey=14f123ac6d4ef3122bbb60d4693f1d8c951a50be2296951efb12d5ab1642f36b",
  },
];
export default [
  {
    url: "/ad/getList",
    type: "get",
    response() {
      return {
        code: 200,
        msg: "success",
        data,
      };
    },
  },
];
