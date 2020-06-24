/**
 * @copyright chuzhixin 1204505056@qq.com
 * @description 导入所有 controller 模块，npm run serve时在node环境中自动输出controller文件夹下Mock接口，请勿修改。
 */

import { handleMockArray } from "./utils";
import chalk from "chalk";
import fs from "fs";
import { baseURL, devPort, httpRequestFile } from "../src/config/settings";

const mocks = [];
const mockArray = handleMockArray();

if (httpRequestFile) {
  fs.writeFile("./http/mock.http", "", {}, function (err) {
    if (err) throw err;
  });
}
mockArray.forEach(async (item) => {
  const obj = require(item).default;
  await mocks.push(...obj);
  if (httpRequestFile) {
    obj.forEach((item) => {
      fs.appendFile(
        "./http/mock.http",
        `\r\n###${item.url}###\r\POST http://localhost:${devPort}/${baseURL}${item.url}\r\nContent-Type: application/x-www-form-urlencoded\r\n###\r\n`,
        (error) => {
          if (error)
            return chalk.red(`\n > 追加HTTP Request失败${error.message}`);
        }
      );
    });
  }
});
export default mocks;
