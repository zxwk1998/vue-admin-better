exports.notEmpty = (name) => {
  return (v) => {
    if (!v || v.trim === "") {
      return `${name}\u4e3a\u5fc5\u586b\u9879`;
    } else {
      return true;
    }
  };
};
