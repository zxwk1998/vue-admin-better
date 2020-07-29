import { mock } from "mockjs";
const totalCount = 2;
const List = [
  {
    id: "@id",
    permission: "admin",
  },
  {
    id: "@id",
    permission: "editor",
  },
];
export default [
  {
    url: "/roleManagement/getList",
    type: "post",
    response(config) {
      const { title = "", pageNo = 1, pageSize = 20 } = config.body;
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
        totalCount,
        data: pageList,
      };
    },
  },
  {
    url: "/roleManagement/doEdit",
    type: "post",
    response(config) {
      return {
        code: 200,
        msg: "模拟保存成功",
      };
    },
  },
  {
    url: "/roleManagement/doDelete",
    type: "post",
    response(config) {
      return {
        code: 200,
        msg: "模拟删除成功",
      };
    },
  },
];
