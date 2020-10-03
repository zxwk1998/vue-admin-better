/**
 * @copyright chuzhixin 1204505056@qq.com
 * @description 公共布局导出，已封装成npm，便于此后在线升级，
 * 当然也存在一定的弊端，给开发者自定义增加了一定的困难，
 * 如果您一定要进行高度自定义，请仔细阅读讨论群文档，layouts本地化篇。
 */
export { default as ColorfullIcon } from "zx-layouts/ColorfullIcon";
export { default as RemixIcon } from "zx-layouts/RemixIcon";
export { default as VabDrag } from "zx-layouts/Drag";
export { default as VabPermissions } from "zx-layouts/Permissions";
export { default as VabQueryForm } from "zx-layouts/VabQueryForm/export";
//本地化logo、默认使用svg，如需变更为png更改logo源码即可
export { default as Logo } from "./Logo";
//本地化头像组件
export { default as Avatar } from "./Avatar";
//本地化广告组件，如不需要全局搜索ad组件删掉即可
export { default as Ad } from "./Ad";
export { default as AppMain } from "zx-layouts/AppMain";
export { default as TabsBar } from "zx-layouts/TabsBar";
export { default as SideBar } from "zx-layouts/SideBar";
export { default as Breadcrumb } from "zx-layouts/Breadcrumb";
export { default as FullScreenBar } from "zx-layouts/FullScreenBar";
export { default as ErrorLog } from "zx-layouts/ErrorLog";
export { default as ThemeBar } from "zx-layouts/ThemeBar";
export { default as TopBar } from "zx-layouts/TopBar";
export { default as NavBar } from "zx-layouts/NavBar";
