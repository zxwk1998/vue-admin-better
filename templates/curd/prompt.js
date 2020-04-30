const { notEmpty } = require("../utils.js");

module.exports = {
  description: "\u521b\u5efa\u0063\u0075\u0072\u0064",
  prompts: [
    {
      type: "input",
      name: "name",
      message:
        "\u8bf7\u8f93\u5165\u0076\u0069\u0065\u0077\u540d\u79f0\u002c\u52ff\u4e0e\u4e4b\u524d\u91cd\u590d\u002c\u7136\u540e\u70b9\u51fb\u56de\u8f66",
      validate: notEmpty("name"),
    },
  ],
  actions: (data) => {
    const name = "{{name}}";
    const properCaseName = "{{properCase name}}";
    const actions = [
      {
        type: "add",
        path: `src/views/project/${name}/index.vue`,
        templateFile: "templates/curd/index.hbs",
        data: {
          name: name,
        },
      },
      {
        type: "add",
        path: `src/views/project/${name}/components/${properCaseName}Edit.vue`,
        templateFile: "templates/curd/edit.hbs",
        data: {
          name: name,
        },
      },
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
