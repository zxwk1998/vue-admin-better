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
  {
    name: "willina",
    qq: "405522648",
    excuse:
      "上来就开骂道：You and your git submit are just a rubbish，不可原谅",
  },
  {
    name: "7(赵海鹏)",
    qq: "252334666",
    excuse: "欺骗两个善良的小姑娘，做完项目不付70%的尾款，强烈抵制",
  },
  {
    name: "生活，一半记忆.一半继续",
    qq: "252667193",
    excuse: "30多岁，不学无术，造谣抹黑，不可原谅",
  },
  {
    name: "AIRLOO",
    qq: "5971794",
    excuse: "已原谅",
  },
  {
    name: "master Z",
    qq: "1832819123",
    excuse: "不尊重别人的劳动成果，认为开源就得无偿替他服务，不可原谅",
  },
  {
    name: "想象中。。。",
    qq: "329492979",
    excuse: "不尊重别人的劳动成果，认为开源就得无偿替他服务，不可原谅",
  },
  {
    name: "苏潍—菏泽微智科技",
    qq: "328580081",
    excuse: "无言以对",
  },
];
module.exports = [
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
