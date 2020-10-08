const data = [
  {
    id: '1',
    parentId: '0',
    name: 'root',
    title: 'root',
    text: 'root',
    value: '1',
    rank: 1,
    children: [
      {
        id: '32816b88ff72423f960e7d492a386131',
        parentId: '1',
        name: '一级',
        title: '一级',
        text: '一级',
        value: '32816b88ff72423f960e7d492a386131',
        rank: 2,
        children: [
          {
            id: '9e11afc35d55475fb0bd3164b9684cbe',
            parentId: '32816b88ff72423f960e7d492a386131',
            name: '二级',
            title: '二级',
            text: '二级',
            value: '9e11afc35d55475fb0bd3164b9684cbe',
            rank: 3,
            children: [
              {
                id: '4cc1b04635e4444292526c5391699077',
                parentId: '9e11afc35d55475fb0bd3164b9684cbe',
                name: '三级',
                title: '三级',
                text: '三级',
                value: '4cc1b04635e4444292526c5391699077',
                rank: 4,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
]
module.exports = [
  {
    url: '/tree/list',
    type: 'post',
    response() {
      return { code: 200, msg: 'success', data }
    },
  },
]
