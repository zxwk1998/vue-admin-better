/**
 * @description 3个子配置，通用配置|主题配置|网络配置
 */
//默认配置
const { setting, theme, network } = require('./')
module.exports = Object.assign({}, setting, theme, network)
