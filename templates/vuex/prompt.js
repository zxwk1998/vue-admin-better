const { notEmpty } = require("../utils.js");

module.exports = {
  description: "\u521b\u5efa\u0076\u0075\u0065\u0078",
  prompts: [
    {
      type: "input",
      name: "name",
      message:
        "\u8bf7\u8f93\u5165\u0076\u0075\u0065\u0078\u540d\u79f0\u002c\u52ff\u4e0e\u4e4b\u524d\u91cd\u590d\u002c\u7136\u540e\u70b9\u51fb\u56de\u8f66",
      validate: notEmpty("name"),
    },
  ],
  actions: (data) => {
    const name = "{{name}}";
    const actions = [
      {
        type: "add",
        path: `src/store/modules/${name}.js`,
        templateFile: "templates/vuex/index.hbs",
        data: {
          name: name,
        },
      },
    ];

    return actions;
  },
};
