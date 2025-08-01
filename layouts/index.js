/**
 * @description Vue Admin Better 项目配置
 */

const webpackBarName = 'vue-admin-better'
const webpackBanner = (time) => 
`vue-admin-better
GitHub: https://github.com/zxwk1998/vue-admin-better
Gitee: https://gitee.com/chu1204505056/vue-admin-better

版权所有 (c) 2025 vue-admin-better
本项目使用 MIT 许可证
构建时间: ${time}`

/**
 * @description 在控制台打印项目信息
 */
function donationConsole() {
  const chalk = require('chalk')
  console.log(
    chalk.green(
      `> 欢迎使用vue-admin-better，github开源地址：https://github.com/zxwk1998/vue-admin-better`
    )
  )
  console.log(
    chalk.green(
      `> 欢迎使用vue-admin-better，码云开源地址：https://gitee.com/chu1204505056/vue-admin-better`
    )
  )

  console.log(chalk.green(`> pro版演示地址：http://vuejs-core.cn/admin-pro`))

  console.log(chalk.green(`> plus版演示地址：http://vuejs-core.cn/admin-plus`))

  console.log(chalk.green(`> shop版演示地址：http://vuejs-core.cn/shop-vite`))

  console.log(
    chalk.green(
      `> 找好工作就到【好工作就业参考网】查看就业避坑指南：https://job.vuejs-core.cn/`
    )
  )

  console.log(
    chalk.green(
      `> 使用中出现任何问题可加QQ群反馈，获取基础版、文档，请我们喝杯咖啡（如若情况不允许，请勿勉强）：https://gitee.com/chu1204505056/vue-admin-better#-%E5%89%8D%E7%AB%AF%E8%AE%A8%E8%AE%BA-qq-%E7%BE%A4`
    )
  )

  console.log(chalk.green(`> 如果您不希望显示以上信息，可在config中配置关闭`))
  console.log('\n')
}

module.exports = {
  webpackBarName,
  webpackBanner,
  donationConsole,
}