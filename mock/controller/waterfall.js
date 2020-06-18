import { mock } from "mockjs";
import { handleRandomImage } from "../utils";

const data = [];
const count = 20;
for (let i = 0; i < count; i++) {
  data.push(
    mock({
      uuid: "@uuid",
      src: handleRandomImage(
        Math.floor(Math.random() * 600 + 200),
        Math.floor(Math.random() * 600 + 200)
      ),
      href: "https://www.baidu.com",
      info: "一些图片描述文字",
    })
  );
}

export default [
  {
    url: "/waterfall/list",
    type: "post",
    response: (config) => {
      return {
        code: 200,
        msg: "success",
        data,
      };
    },
  },
];
