const data = [
  {
    name: "奉/fendou飘逸的梦",
    qq: "812770127",
    excuse: "上来就开骂，不可原谅",
  },
  {
    name: "江荻",
    qq: "2324945654",
    excuse: "上来就开骂，不可原谅",
  },
  {
    name: "Diamond",
    qq: "494904935",
    excuse: "跟我道歉可以选择原谅",
  },
  {
    name: "Mr、无涯",
    qq: "2198457489",
    excuse: "感谢理解",
  },
];
export default [
  {
    url: "/blacklist/getList",
    type: "post",
    response: () => {
      return {
        code: 200,
        msg: "success",
        data,
      };
    },
  },
];
