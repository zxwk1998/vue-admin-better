import Mock from "mockjs";
import { param2Obj } from "../src/utils";

const mocks = [];

const controllerFiles = require.context("./controller", true, /\.js$/);
const controller = controllerFiles
  .keys()
  .reduce((controller, controllerPath) => {
    const controllerName = controllerPath.replace(/^\.\/(.*)\.\w+$/, "$1");
    const value = controllerFiles(controllerPath);
    const obj = value.default;
    mocks.push(...obj);
  }, {});

export function mockXHR() {
  Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send;
  Mock.XHR.prototype.send = function () {
    if (this.custom.xhr) {
      this.custom.xhr.withCredentials = this.withCredentials || false;

      if (this.responseType) {
        this.custom.xhr.responseType = this.responseType;
      }
    }
    this.proxy_send(...arguments);
  };

  function XHR2ExpressReqWrap(respond) {
    return function (options) {
      let result = null;
      if (respond instanceof Function) {
        const { body, type, url } = options;
        result = respond({
          method: type,
          body: JSON.parse(body),
          query: param2Obj(url),
        });
      } else {
        result = respond;
      }
      return Mock.mock(result);
    };
  }

  for (const i of mocks) {
    Mock.mock(
      new RegExp(i.url),
      i.type || "get",
      XHR2ExpressReqWrap(i.response)
    );
  }
}
