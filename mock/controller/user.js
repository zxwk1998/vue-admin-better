import { handleRandomImage } from "../utils";
const accessTokens = {
  admin: "admin-accessToken",
  editor: "editor-accessToken",
  test: "test-accessToken",
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
    url: "/register",
    type: "post",
    response: (config) => {
      return {
        code: 200,
        msg: "模拟注册成功",
      };
    },
  },
  {
    url: "/user/info",
    type: "post",
    response: (config) => {
      const { accessToken } = config.body;
      let permissions = ["admin"];
      let userName = "admin";
      if ("admin-accessToken" === accessToken) {
        permissions = ["admin"];
        userName = "admin";
      }
      if ("editor-accessToken" === accessToken) {
        permissions = ["editor"];
        userName = "editor";
      }
      if ("test-accessToken" === accessToken) {
        permissions = ["admin", "editor"];
        userName = "test";
      }
      return {
        code: 200,
        msg: "success",
        data: {
          permissions,
          userName,
          avatar: handleRandomImage(50, 50),
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
