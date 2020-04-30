const viewGenerator = require("./templates/view/prompt");
const curdGenerator = require("./templates/curd/prompt");
const componentGenerator = require("./templates/component/prompt");
const mockGenerator = require("./templates/mock/prompt");
const vuexGenerator = require("./templates/vuex/prompt");

module.exports = function (plop) {
  plop.setGenerator("view", viewGenerator);
  plop.setGenerator("curd", curdGenerator);
  plop.setGenerator("component", componentGenerator);
  plop.setGenerator("mock&api", mockGenerator);
  plop.setGenerator("vuex", vuexGenerator);
};
