const chokidar = require('chokidar')
const bodyParser = require('body-parser')
const chalk = require('chalk')
const path = require('path')
const Mock = require('mockjs')
const { baseURL } = require('../src/config/settings')
const mockDir = path.join(process.cwd(), 'mock')

/**
 *
 * @param app
 * @returns {{mockStartIndex: number, mockRoutesLength: number}}
 */
const registerRoutes = (app) => {
  let mockLastIndex
  const { mocks } = require('./index.js')
  const mocksForServer = mocks.map((route) => {
    return responseFake(route.url, route.type, route.response)
  })
  for (const mock of mocksForServer) {
    app[mock.type](mock.url, mock.response)
    mockLastIndex = app._router.stack.length
  }
  const mockRoutesLength = Object.keys(mocksForServer).length
  return {
    mockRoutesLength: mockRoutesLength,
    mockStartIndex: mockLastIndex - mockRoutesLength,
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
  return {
    url: new RegExp(`${baseURL}${url}`),
    type: type || 'get',
    response(req, res) {
      res.status(200)
      if (JSON.stringify(req.body) !== '{}') {
        console.log(chalk.green(`> 请求地址：${req.path}`))
        console.log(chalk.green(`> 请求参数：${JSON.stringify(req.body)}\n`))
      } else {
        console.log(chalk.green(`> 请求地址：${req.path}\n`))
      }
      res.json(
        Mock.mock(respond instanceof Function ? respond(req, res) : respond)
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

  const mockRoutes = registerRoutes(app)
  let mockRoutesLength = mockRoutes.mockRoutesLength
  let mockStartIndex = mockRoutes.mockStartIndex
  chokidar
    .watch(mockDir, {
      ignoreInitial: true,
    })
    .on('all', (event) => {
      if (event === 'change' || event === 'add') {
        try {
          app._router.stack.splice(mockStartIndex, mockRoutesLength)

          Object.keys(require.cache).forEach((item) => {
            if (item.includes(mockDir)) {
              delete require.cache[require.resolve(item)]
            }
          })
          const mockRoutes = registerRoutes(app)
          mockRoutesLength = mockRoutes.mockRoutesLength
          mockStartIndex = mockRoutes.mockStartIndex
        } catch (error) {
          console.log(chalk.red(error))
        }
      }
    })
}
