/**
 * @author https://vuejs-core.cn
 * @description 导入所有 controller 模块，浏览器环境中自动输出controller文件夹下Mock接口，请勿修改。
 */
import Mock from 'mockjs'
import { paramObj } from '@/utils'

const mocks = []
// 使用兼容 rspack 的方式导入 mock 控制器
const files = require.context('../../mock/controller', false, /\.js$/)

files.keys().forEach((key) => {
  mocks.push(...files(key))
})

export function mockXHR() {
  // 设置Mock响应延迟
  Mock.setup({
    timeout: '200-600',
  })

  // 保存原始的XHR send方法
  Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
  Mock.XHR.prototype.send = function () {
    if (this.custom.xhr) {
      this.custom.xhr.withCredentials = this.withCredentials || false

      if (this.responseType) {
        this.custom.xhr.responseType = this.responseType
      }
    }
    this.proxy_send(...arguments)
  }

  function XHRHttpRequst(respond) {
    return function (options) {
      let result
      try {
        if (respond instanceof Function) {
          const { body, type, url } = options
          // 安全解析body
          let parsedBody = {}
          if (body) {
            try {
              parsedBody = JSON.parse(body)
            } catch (e) {
              console.warn('无法解析请求体:', e)
            }
          }

          result = respond({
            method: type,
            body: parsedBody,
            query: paramObj(url),
          })
        } else {
          result = respond
        }
      } catch (error) {
        console.error('Mock处理请求时发生错误:', error)
        // 返回默认错误响应
        result = {
          code: 500,
          message: '服务器内部错误',
        }
      }
      return Mock.mock(result)
    }
  }

  // 注册所有的mock服务
  mocks.forEach((item) => {
    Mock.mock(new RegExp(item.url), item.type || 'get', XHRHttpRequst(item.response))
  })

  // 记录mock设置完成
  console.info(`[Mock] 成功设置 ${mocks.length} 个模拟接口`)
}

// 导出mocks列表，便于调试
export const mockList = mocks
