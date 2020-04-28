const { sh } = require("tasksfile");
const chalk = require("chalk");
const config = require("../vue.config.js");
const publicPath = config.publicPath;
const port = parseInt(config.devServer.port) + 1;
const connect = require("connect");
const serveStatic = require("serve-static");
const app = connect();

sh(`vue-cli-service build --preview --report`);

app.use(
  publicPath,
  serveStatic("./dist", {
    index: ["index.html", "/"],
  })
);

app.listen(port, function () {
  console.log(chalk.green(`> 生产环境：http://localhost:${port}${publicPath}`));
  console.log(
    chalk.green(`> 包分析： http://localhost:${port}${publicPath}/report.html`)
  );
});
