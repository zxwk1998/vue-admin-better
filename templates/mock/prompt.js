const { notEmpty } = require("../utils.js");

module.exports = {
  description: "\u521b\u5efa\u006d\u006f\u0063\u006b\u0026\u0061\u0070\u0069",
  prompts: [
    {
      type: "input",
      name: "name",
      message:
        "\u8bf7\u8f93\u5165\u006d\u006f\u0063\u006b\u540d\u79f0\u002c\u52ff\u4e0e\u4e4b\u524d\u91cd\u590d\u002c\u7136\u540e\u70b9\u51fb\u56de\u8f66",
      validate: notEmpty("name"),
    },
  ],
  actions: (data) => {
    const name = "{{name}}";
    const actions = [
      {
        type: "add",
        path: `mock/controller/${name}.js`,
        templateFile: "templates/mock/index.hbs",
        data: {
          name: name,
        },
      },
      {
        type: "add",
        path: `src/api/${name}.js`,
        templateFile: "templates/api/index.hbs",
        data: {
          name: name,
        },
      },
    ];

    return actions;
  },
};
