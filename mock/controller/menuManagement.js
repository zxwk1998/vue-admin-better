module.exports = [
  {
    url: "/menuManagement/getTree",
    type: "post",
    response(config) {
      return {
        code: 200,
        msg: "success",
        totalCount: 999,
        data: [
          {
            id: "root",
            label: "全部角色",
            children: [
              {
                id: "@id",
                permission: "admin",
                label: "admin角色",
              },
              {
                id: "@id",
                permission: "editor",
                label: "editor角色",
              },
            ],
          },
        ],
      };
    },
  },
  {
    url: "/menuManagement/doEdit",
    type: "post",
    response(config) {
      return {
        code: 200,
        msg: "模拟保存成功",
      };
    },
  },
  {
    url: "/menuManagement/doDelete",
    type: "post",
    response(config) {
      return {
        code: 200,
        msg: "模拟删除成功",
      };
    },
  },
];
