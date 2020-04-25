const { run } = require("runjs");
const chalk = require("chalk");
const config = require("../vue.config.js");
const rawArgv = process.argv.slice(2);
const args = rawArgv.join(" ");
const { devPort } = require("../src/config/settings");
if (process.env.npm_config_preview || rawArgv.includes("--preview")) {
  const report = rawArgv.includes("--report");

  run(`vue-cli-service build ${args}`);

  const port = parseInt(devPort) + 1;
  const publicPath = config.publicPath;

  let connect = require("connect");
  let serveStatic = require("serve-static");
  const app = connect();

  app.use(
    publicPath,
    serveStatic("./dist", {
      index: ["index.html", "/"],
    })
  );

  app.listen(port, function () {
    console.log(
      chalk.green(`> 生产环境：http://localhost:${port}${publicPath}`)
    );
    if (report) {
      console.log(
        chalk.green(
          `> 包分析： http://localhost:${port}${publicPath}/report.html`
        )
      );
    }
  });
} else {
  run(`vue-cli-service build ${args}`);
}
