import { mock } from "mockjs";

const data = mock({
  items: [
    {
      src: "https://picsum.photos/200/600?random=1",
      href: "https://www.baidu.com",
      info: "一些图片描述文字",
    },
    {
      src: "https://picsum.photos/100/200?random=2",
      href: "https://www.baidu.com",
      info: "一些图片描述文字",
    },
    {
      src: "https://picsum.photos/150/400?random=3",
      href: "https://www.baidu.com",
      info: "一些图片描述文字",
    },
    {
      src: "https://picsum.photos/150/300?random=4",
      href: "https://www.baidu.com",
      info: "一些图片描述文字",
    },
    {
      src: "https://picsum.photos/450/300?random=5",
      href: "https://www.baidu.com",
      info: "一些图片描述文字",
    },
    {
      src: "https://picsum.photos/200/600?random=6",
      href: "https://www.baidu.com",
      info: "一些图片描述文字",
    },
    {
      src: "https://picsum.photos/100/200?random=7",
      href: "https://www.baidu.com",
      info: "一些图片描述文字",
    },
    {
      src: "https://picsum.photos/150/400?random=8",
      href: "https://www.baidu.com",
      info: "一些图片描述文字",
    },
    {
      src: "https://picsum.photos/150/300?random=9",
      href: "https://www.baidu.com",
      info: "一些图片描述文字",
    },
    {
      src: "https://picsum.photos/450/300?random=10",
      href: "https://www.baidu.com",
      info: "一些图片描述文字",
    },
  ],
});

export default [
  {
    url: "/waterfall/list",
    type: "post",
    response: (config) => {
      const items = data.items;
      return {
        code: 200,
        msg: "success",
        data: items,
      };
    },
  },
];
