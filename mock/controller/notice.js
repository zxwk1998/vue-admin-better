const data = [
  {
    title:
      "认认真真编程，踏踏实实做人；静坐常思己过，闲谈不论人非；希望使用vue-admin-beautiful框架的每个人，无论过程怎样，结局都是美好的。。。",
    closable: false,
    type: "success",
  },
  {
    title:
      "鸣谢：尤雨溪、饿了么、唐金州、花裤衩、贤心、ivew、uview的开源项目给我带来的很多的灵感，弱小的人才习惯嘲讽与否定，内心强大的人从不吝啬赞美与鼓励，人生在世，得到每个人的认可几乎是痴心妄想，我也只是一条略懂前端的咸鱼，可我仍一直怀揣着改变世界的梦想，希望我们每个人，不管过程怎样，结局都是美好的。",
    closable: false,
    type: "success",
  },
  {
    title:
      "作者寄语：感谢Star，感恩相遇，愿世间美好与我们环环相扣，加油！屏幕前的我们，打破桎梏，坚守初心。。。",
    closable: false,
    type: "success",
  },
  {
    title:
      "其实人生改变命运的机会并没有太多，我们并不是不优秀，我们也并不是一无是处，我们也希望驻足山巅被众人仰望，也许我们缺少的只是一个机会，缺少的只是生命中的导师，我希望这个框架帮助到更多的人，希望有一天，我们面试的时候不再胆怯，希望有一天别人看到的不仅仅是你的努力，还有你的功成名就，出人头地。",
    closable: false,
    type: "success",
  },
];

export default [
  {
    url: "/notice/getList",
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
