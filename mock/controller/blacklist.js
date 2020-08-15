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
    excuse: "已原谅",
  },
  {
    name: "玩世不恭丶江小白",
    qq: "1779263221",
    excuse: "睁眼说瞎话",
  },
  {
    name: "福州客家网络科技有限公司（潘芳林等兄弟二人）",
    qq: "1409198410、1778486252",
    excuse:
      "剽窃、破解框架授权并发布到网上还伪装成善人，公开道歉并尊重我的劳动成果可以选择原谅",
  },
  ,
];
export default [
  {
    url: "/blacklist/getList",
    type: "post",
    response() {
      return {
        code: 200,
        msg: "success",
        data,
      };
    },
  },
];
