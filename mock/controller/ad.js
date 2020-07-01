const data = [
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
