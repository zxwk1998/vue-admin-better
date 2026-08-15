const chokidar = require('chokidar')
const bodyParser = require('body-parser')
const chalk = require('chalk')
const path = require('path')
const { mock } = require('mockjs')
const { baseURL } = require('../src/config')
const mockDir = path.join(process.cwd(), 'mock')
const { handleMockArray } = require('./utils')

/**
 *
 * @returns {{mockStartIndex: number, mockRoutesLength: number}}
 */
const registerRoutes = () => {
  const mocks = []
  const mockArray = handleMockArray()
  mockArray.forEach((item) => {
    const obj = require(item)
    mocks.push(...obj)
  })
  const mocksForServer = mocks.map((route) => {
    return responseFake(route.url, route.type, route.response)
  })
  return {
    mockRoutesLength: mocksForServer.length,
    mocksForServer,
  }
}

/**
 *
 * @param url
 * @param type
 * @param respond
 * @returns {{response(*=, *=): void, type: (*|string), url: RegExp}}
 */
const responseFake = (url, type, respond) => {
  // 处理baseURL和url，确保不会出现双斜杠
  const base = baseURL.endsWith('/') ? baseURL.slice(0, -1) : baseURL
  const apiUrl = url.startsWith('/') ? url : `/${url}`
  return {
    url: new RegExp(`${base}${apiUrl}`),
    type: (type || 'get').toLowerCase(),
    response(req, res) {
      res.setHeader('Content-Type', 'application/json; charset=utf-8')
      if (JSON.stringify(req.body) !== '{}' && req.body !== undefined) {
        console.log(chalk.green(`> 请求地址：${req.url}`))
        console.log(chalk.green(`> 请求参数：${JSON.stringify(req.body)}\n`))
      } else {
        console.log(chalk.green(`> 请求地址：${req.url}\n`))
      }
      res.end(
        JSON.stringify(
          mock(respond instanceof Function ? respond(req, res) : respond)
        )
      )
    },
  }
}
/**
 *
 * @param app
 */
module.exports = (app) => {
  app.use(bodyParser.json())
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )

  // connect 风格的 dev-server 没有 app.get()/app.post()，统一通过 app.use() 注册中间件
  let mockRoutes = registerRoutes()
  const mockMiddleware = (req, res, next) => {
    const method = (req.method || 'get').toLowerCase()
    // 去掉query部分再匹配
    const reqUrl = (req.url || '').split('?')[0]
    const matched = mockRoutes.mocksForServer.find(
      (route) => route.type === method && route.url.test(reqUrl)
    )
    if (matched) {
      matched.response(req, res)
    } else {
      next()
    }
  }
  app.use(mockMiddleware)

  chokidar
    .watch(mockDir, {
      ignored: /mock-server/,
      ignoreInitial: true,
    })
    .on('all', (event) => {
      if (event === 'change' || event === 'add') {
        try {
          Object.keys(require.cache).forEach((item) => {
            if (item.includes(mockDir)) {
              delete require.cache[require.resolve(item)]
            }
          })
          mockRoutes = registerRoutes()
        } catch (error) {
          console.log(chalk.red(error))
        }
      }
    })
}
