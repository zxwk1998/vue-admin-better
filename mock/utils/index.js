import { Random } from "mockjs";
import { join } from "path";
import fs from "fs";

/**
 * @copyright chuzhixin 1204505056@qq.com
 * @description 随机生成图片url。
 * @param width
 * @param height
 * @returns {string}
 */
export function handleRandomImage(width = 50, height = 50) {
  return `https://picsum.photos/${width}/${height}?random=${Random.guid()}`;
}

/**
 * @copyright chuzhixin 1204505056@qq.com
 * @description 处理所有 controller 模块，npm run serve时在node环境中自动输出controller文件夹下Mock接口，请勿修改。
 * @returns {[]}
 */
export function handleMockArray() {
  const mockArray = [];
  const getFiles = (jsonPath) => {
    const jsonFiles = [];
    const findJsonFile = (path) => {
      const files = fs.readdirSync(path);
      files.forEach((item) => {
        const fPath = join(path, item);
        const stat = fs.statSync(fPath);
        if (stat.isDirectory() === true) findJsonFile(item);
        if (stat.isFile() === true) jsonFiles.push(item);
      });
    };
    findJsonFile(jsonPath);
    jsonFiles.forEach((item) => mockArray.push(`./controller/${item}`));
  };
  getFiles("mock/controller");
  return mockArray;
}
