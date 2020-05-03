import { title } from "@/config/settings";

/**
 * @description 设置标题
 * @param pageTitle
 * @returns {string}
 */
export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${title}-${pageTitle}`;
  }
  return `${title}`;
}
