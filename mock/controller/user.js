const accessTokens = {
  admin: "byui-admin-accessToken",
  editor: "byui-editor-accessToken",
  test: "byui-test-accessToken",
};

export default [
  {
    url: "/publicKey",
    type: "post",
    response: (config) => {
      return {
        code: 200,
        msg: "success",
        data: {
          mockServer: true,
        },
      };
    },
  },
  {
    url: "/login",
    type: "post",
    response: (config) => {
      const { userName } = config.body;
      const accessToken = accessTokens[userName];
      if (!accessToken) {
        return {
          code: 500,
          msg: "帐户或密码不正确。",
        };
      }
      return {
        code: 200,
        msg: "success",
        data: { accessToken },
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
      if ("byui-test-accessToken" === accessToken) {
        roles = ["admin", "test", "editor"];
        name = "测试";
      }
      return {
        code: 200,
        msg: "success",
        data: {
          roles: roles,
          name: name,
        },
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
      };
    },
  },
];
