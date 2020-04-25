const tokens = {
  admin: {
    accessToken: "byui-admin-accessToken",
  },
  editor: {
    accessToken: "byui-editor-accessToken",
  },
};

export default [
  {
    url: "/publicKey",
    type: "post",
    response: (config) => {
      return {
        code: 200,
        data: [
          {
            mockServer: true,
          },
        ],
      };
    },
  },
  {
    url: "/login",
    type: "post",
    response: (config) => {
      /*我公司后端只接收form*/
      const { userName } = config.body;
      const accessToken = tokens[userName];
      if (!accessToken) {
        return {
          code: 500,
          msg: "帐户或密码不正确。",
        };
      }
      return {
        code: 200,
        data: [accessToken],
      };
    },
  },

  {
    url: "/user/info",
    type: "post",
    response: (config) => {
      const { accessToken } = config.body;
      let roles = ["editor"];
      let name = "访客";
      if ("byui-admin-accessToken" === accessToken) {
        roles = ["admin"];
        name = "超级管理员";
      }
      return {
        code: 200,
        msg: "success",
        data: [
          {
            roles: roles,
            info: {
              name: name,
              lastLoginTime: null,
            },
          },
        ],
      };
    },
  },

  {
    url: "/logout",
    type: "post",
    response: () => {
      return {
        code: 200,
        msg: "success",
        data: [],
      };
    },
  },
];
