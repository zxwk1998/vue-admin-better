const data = [
  {
    id: "1",
    parentId: "0",
    name: "vue-admin-beautiful科技有限公司",
    title: "vue-admin-beautiful科技有限公司",
    text: "vue-admin-beautiful科技有限公司",
    value: "1",
    rank: 1,
    children: [
      {
        id: "32816b88ff72423f960e7d492a386131",
        parentId: "1",
        name: "1103工作室",
        title: "1103工作室",
        text: "1103工作室",
        value: "32816b88ff72423f960e7d492a386131",
        rank: 2,
        children: [
          {
            id: "9e11afc35d55475fb0bd3164b9684cbe",
            parentId: "32816b88ff72423f960e7d492a386131",
            name: "前端牛逼plus小组",
            title: "前端牛逼plus小组",
            text: "前端牛逼plus小组",
            value: "9e11afc35d55475fb0bd3164b9684cbe",
            rank: 3,
            children: [
              {
                id: "4cc1b04635e4444292526c5391699077",
                parentId: "9e11afc35d55475fb0bd3164b9684cbe",
                name: "组员chuzhixin",
                title: "组员chuzhixin",
                text: "组员chuzhixin",
                value: "4cc1b04635e4444292526c5391699077",
                rank: 4,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
];
export default [
  {
    url: "/tree/list",
    type: "post",
    response() {
      return { code: 200, msg: "success", data };
    },
  },
];
