/**
 * @description 3个子配置，通用配置|主题配置|网络配置导出
 */
const setting = require('./setting.config')
const theme = require('./theme.config')
const network = require('./net.config')
module.exports = Object.assign({}, setting, theme, network)
