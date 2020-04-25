import fs from "fs";
import { join } from "path";
import chalk from "chalk";
import dotenv from "dotenv";
import { devPort, httpRequestFile } from "../src/config/settings";

const array = [];

const getFiles = (jsonPath) => {
  const jsonFiles = [];
  const findJsonFile = (path) => {
    const files = fs.readdirSync(path);
    files.forEach((item, index) => {
      const fPath = join(path, item);
      const stat = fs.statSync(fPath);
      if (stat.isDirectory() === true) findJsonFile(item);
      if (stat.isFile() === true) jsonFiles.push(item);
    });
  };
  findJsonFile(jsonPath);
  jsonFiles.forEach((item, index) => array.push(`./controller/${item}`));
};
getFiles("mock/controller");
const mocks = [];
if (httpRequestFile) {
  fs.writeFile("./http/mock.http", "", {}, function (err) {
    if (err) throw err;
  });
}
array.forEach(async (item, index) => {
  const obj = require(item).default;
  const envConfig = dotenv.parse(fs.readFileSync(".env.development"));
  const mockUrl = envConfig["VUE_APP_BASE_API"];
  await mocks.push(...obj);
  if (httpRequestFile) {
    obj.forEach((item, index) => {
      fs.appendFile(
        "./http/mock.http",
        `\r\n###${item.url}###\r\POST http://localhost:${devPort}/${mockUrl}${item.url}\r\nContent-Type: application/x-www-form-urlencoded\r\n###\r\n`,
        (error) => {
          if (error)
            return chalk.magentaBright(
              `\n > 追加HTTP Request失败${error.message}`
            );
        }
      );
    });
  }
});
export default mocks;
