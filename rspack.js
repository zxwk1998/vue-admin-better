#!/usr/bin/env node

// 禁用弃用警告
process.noDeprecation = true

const { rspack } = require('@rspack/core')
const path = require('path')
const fs = require('fs')
// 引入layouts中的donationConsole函数
const { donationConsole } = require('./layouts')

// 在命令行控制台打印信息
donationConsole()

const configPath = path.resolve(__dirname, 'rspack.config.js')
const config = require(configPath)
const mode = process.argv[2] === 'build' ? 'production' : 'development'

// 增强环境变量设置，确保所有编译阶段都使用相同的NODE_ENV值
process.env.NODE_ENV = mode
// 设置webpack特定的环境变量，以避免冲突
process.env.WEBPACK_ENV = mode
process.env.BABEL_ENV = mode
console.log('设置环境变量 NODE_ENV =', process.env.NODE_ENV)

// 读取配置
config.mode = mode

if (mode === 'production') {
  // 生产环境配置
  console.log('正在极速打包中，预计用时5秒，请稍后...')

  // 生产环境下增加额外配置
  config.optimization = {
    ...config.optimization,
    moduleIds: 'deterministic', // 稳定的模块ID以优化长期缓存
    chunkIds: 'deterministic', // 稳定的chunk ID以优化长期缓存
    removeEmptyChunks: true, // 移除空的chunks
  }

  rspack(config).run((err, stats) => {
    if (err) {
      console.error(err.stack || err)
      if (err.details) {
        console.error(err.details)
      }
      process.exit(1)
      return
    }

    const info = stats.toJson()

    if (stats.hasErrors()) {
      console.error(info.errors)
    }

    if (stats.hasWarnings()) {
      console.warn(info.warnings)
    }

    console.log(
      stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
      })
    )
  })
} else {
  // 开发环境配置
  try {
    // 尝试使用rspack的dev server
    const { RspackDevServer } = require('@rspack/dev-server')

    const compiler = rspack(config)

    // 使用rspack.config.js中的所有devServer配置
    const devServerOptions = config.devServer || {}

    // 设置mock服务器
    if (process.env.VUE_APP_MOCK_ENABLE === 'true' && !devServerOptions.setupMiddlewares) {
      devServerOptions.setupMiddlewares = (middlewares, devServer) => {
        if (!devServer) {
          throw new Error('dev-server is not defined')
        }

        const mockServer = require('./mock/index')
        mockServer(devServer.app)

        return middlewares
      }
    }

    const server = new RspackDevServer(devServerOptions, compiler)

    server.start().catch((err) => {
      console.error('启动RspackDevServer失败:', err)
    })
  } catch (error) {
    console.error('加载@rspack/dev-server失败，尝试使用webpack-dev-server:', error)

    // 如果rspack dev server失败，尝试回退到webpack
    try {
      const webpack = require('webpack')
      const WebpackDevServer = require('webpack-dev-server')

      const webpackConfig = {
        ...config,
        // 添加webpack特定配置
        mode: config.mode,
      }

      const compiler = webpack(webpackConfig)
      const devServerOptions = config.devServer || {}

      if (process.env.VUE_APP_MOCK_ENABLE === 'true') {
        const originalBefore = devServerOptions.before
        devServerOptions.before = (app, server) => {
          if (originalBefore) {
            originalBefore(app, server)
          }
          const mockServer = require('./mock/index')
          mockServer(app)
        }
      }

      const server = new WebpackDevServer(devServerOptions, compiler)

      server.start().catch((err) => {
        console.error('启动WebpackDevServer失败:', err)
      })
    } catch (webpackError) {
      console.error('回退到webpack-dev-server也失败:', webpackError)
      process.exit(1)
    }
  }
}
