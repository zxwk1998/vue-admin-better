const data = [];
export default [
  {
    url: "/upload",
    type: "post",
    response(config) {
      return {
        code: 200,
        msg: "success",
        data: data,
      };
    },
  },
];
