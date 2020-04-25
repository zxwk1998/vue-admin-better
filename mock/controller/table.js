import Mock from "mockjs";

const List = [];
const count = 999;
let num = 0;
for (let i = 0; i < count; i++) {
  List.push(
    Mock.mock({
      id: "@id",
      title: "@sentence(10, 20)",
      "status|1": ["published", "draft", "deleted"],
      author: "@cname",
      display_time: "@datetime",
      pageviews: "@integer(300, 5000)",
      img: `https://picsum.photos/200/200?random=${num++}`,
      smalImg: `https://picsum.photos/200/200?random=${num++}`,
      switch: "@boolean",
      percent: "@integer(80,99)",
    })
  );
}

export default [
  {
    url: "/table/list",
    type: "post",
    response: (config) => {
      const { title, pageNo = 1, pageSize = 20 } = config.body;
      let mockList = List.filter((item) => {
        if (title && item.title.indexOf(title) < 0) return false;
        return true;
      });
      const pageList = mockList.filter(
        (item, index) =>
          index < pageSize * pageNo && index >= pageSize * (pageNo - 1)
      );
      return {
        code: 200,
        msg: "success",
        totalCount: count,
        data: pageList,
      };
    },
  },
];
