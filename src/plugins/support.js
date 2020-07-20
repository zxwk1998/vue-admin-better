import { MessageBox } from "element-ui";
import { donation } from "@/config/settings";
import { repository, dependencies } from "../../package.json";
if (!!window.ActiveXObject || "ActiveXObject" in window) {
  MessageBox({
    title: "温馨提示",
    message:
      '自2015年3月起，微软已宣布弃用IE，且不再对IE提供任何更新维护，请<a target="_blank" style="color:blue" href="https://www.microsoft.com/zh-cn/edge/">点击此处</a>访问微软官网更新浏览器，如果您使用的是双核浏览器,请您切换浏览器内核为极速模式',
    type: "warning",
    showClose: false,
    showConfirmButton: false,
    closeOnClickModal: false,
    closeOnPressEscape: false,
    closeOnHashChange: false,
    dangerouslyUseHTMLString: true,
  });
}
if (process.env.NODE_ENV !== "development" && donation) {
  document.writeln(
    '<script>console.log("vue-admin-beautiful推广信息，如果您不愿意保留可在配置中关闭：' +
      repository.url.slice(4) +
      '");</script>'
  );
}
if (!dependencies["zx-icon"] || !dependencies["zx-layouts"]) {
  document.body.innerHTML = "";
}
