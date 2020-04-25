const chokidar = require("chokidar");
const bodyParser = require("body-parser");
const chalk = require("chalk");
const path = require("path");
const Mock = require("mockjs");

const mockDir = path.join(process.cwd(), "mock");

/**
 *
 * @param app
 * @returns {{mockStartIndex: number, mockRoutesLength: number}}
 */
function registerRoutes(app) {
  let mockLastIndex;
  const { default: mocks } = require("./index.js");
  const mocksForServer = mocks.map((route) => {
    return responseFake(route.url, route.type, route.response);
  });
  for (const mock of mocksForServer) {
    app[mock.type](mock.url, mock.response);
    mockLastIndex = app._router.stack.length;
  }
  const mockRoutesLength = Object.keys(mocksForServer).length;
  return {
    mockRoutesLength: mockRoutesLength,
    mockStartIndex: mockLastIndex - mockRoutesLength,
  };
}

/**
 *
 * @param url
 * @param type
 * @param respond
 * @returns {{response(*=, *=): void, type: (*|string), url: RegExp}}
 */
const responseFake = (url, type, respond) => {
  return {
    url: new RegExp(`${process.env.VUE_APP_BASE_API}${url}`),
    type: type || "get",
    response(req, res) {
      console.log(chalk.magentaBright(`\n >请求mock接口地址: ${req.path}`));
      res.json(
        Mock.mock(respond instanceof Function ? respond(req, res) : respond)
      );
    },
  };
};
/**
 *
 * @param app
 */
module.exports = (app) => {
  require("@babel/register");
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

  const mockRoutes = registerRoutes(app);
  let mockRoutesLength = mockRoutes.mockRoutesLength;
  let mockStartIndex = mockRoutes.mockStartIndex;
  chokidar
    .watch(mockDir, {
      ignored: /mock-server/,
      ignoreInitial: true,
    })
    .on("all", (event, path) => {
      if (event === "change" || event === "add") {
        try {
          app._router.stack.splice(mockStartIndex, mockRoutesLength);

          Object.keys(require.cache).forEach((i) => {
            if (i.includes(mockDir)) {
              delete require.cache[require.resolve(i)];
            }
          });

          const mockRoutes = registerRoutes(app);
          mockRoutesLength = mockRoutes.mockRoutesLength;
          mockStartIndex = mockRoutes.mockStartIndex;

          console.log(chalk.magentaBright(`\n > Mock服务热更新成功  ${path}`));
        } catch (error) {
          console.log(chalk.redBright(error));
        }
      }
    });
};
