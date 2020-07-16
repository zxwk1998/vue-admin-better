const data = [
  {
    title:
      "作为一个程序员，我迄今为止最骄傲的事情：2020年7月10日，vue/cli4作者蒋豪群采纳了我的对sass-loader 9.0全局注入变量的文档修改建议，以后全世界都能看到我的名字了，这远比vue-admin-beautiful更让我有成就感，感谢shaonialife的帮助。",
    url: "https://github.com/vuejs/vue-cli/blob/master/docs/zh/guide/css.md",
  },
  {
    title:
      "近日发现有人打着福州客家网络科技的名义发布了一款名为芊雅admin的项目，不仅完全照搬了vab基础版并对授权文件进行破解并进行二次改造二次收费，将vab的作者信息完全替换，同时也将框架原来存在的bug完整的拷贝了过去",
    url:
      "//shang.qq.com/wpa/qunwpa?idkey=14f123ac6d4ef3122bbb60d4693f1d8c951a50be2296951efb12d5ab1642f36b",
  },
  {
    title:
      "近日发现一个名为OKMG芒果源码的网站公然出售vue-admin-beautiful的开源代码，在此向大家说明，框架开源版本永久免费，请勿上当受骗。",
    url:
      "//shang.qq.com/wpa/qunwpa?idkey=14f123ac6d4ef3122bbb60d4693f1d8c951a50be2296951efb12d5ab1642f36b",
  },
  {
    title: "uView UI：全面的组件和便捷的工具会让您信手拈来，如鱼得水。",
    url: "https://uviewui.com/",
  },
  {
    title:
      "认认真真编程，踏踏实实做人；静坐常思己过，闲谈不论人非；希望使用vue-admin-beautiful框架的每个人，无论过程怎样，结局都是美好的。",
    url:
      "//shang.qq.com/wpa/qunwpa?idkey=14f123ac6d4ef3122bbb60d4693f1d8c951a50be2296951efb12d5ab1642f36b",
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
    response: () => {
      return {
        code: 200,
        msg: "success",
        data,
      };
    },
  },
];
