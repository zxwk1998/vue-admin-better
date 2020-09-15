const data = [
  {
    title: "vue-admin-beautiful-pro beta版本已发布，点我提前体验",
    url: "https://chu1204505056.gitee.io/vue-admin-beautiful-pro/#/index",
  },
];
module.exports = [
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
