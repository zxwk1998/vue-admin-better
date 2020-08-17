const data = [];
module.exports = [
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
