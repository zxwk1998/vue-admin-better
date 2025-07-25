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

// 增加archiver依赖用于创建压缩包
const archiver = require('archiver')
const { promisify } = require('util')
const pipeline = promisify(require('stream').pipeline)

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

  // 在构建前删除dist目录
  const distPath = path.resolve(__dirname, 'dist')
  if (fs.existsSync(distPath)) {
    fs.rmSync(distPath, { recursive: true })
    console.log('已删除旧的dist目录')
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

    // 打包完成后创建压缩包
    createArchive()
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

// 创建压缩包的函数
async function createArchive() {
  const outputPath = path.resolve(__dirname, 'dist')
  // 修改为在dist目录内创建压缩包
  const archivePath = path.resolve(__dirname, 'dist', 'dist.zip')
  
  // 检查dist目录是否存在
  if (!fs.existsSync(outputPath)) {
    console.error('dist目录不存在，请先执行构建')
    return
  }
  
  console.log('正在创建压缩包...')
  
  try {
    // 创建写入流
    const output = fs.createWriteStream(archivePath)
    // 创建archiver实例
    const archive = archiver('zip', {
      zlib: { level: 9 } // 设置压缩级别
    })
    
    // 监听完成事件
    output.on('close', function() {
      console.log(`压缩包创建完成: ${archivePath}`)
      console.log(`压缩包大小: ${(archive.pointer() / 1024 / 1024).toFixed(2)} MB`)
    })
    
    // 监听错误事件
    archive.on('error', function(err) {
      throw err
    })
    
    // 关联archiver和输出流
    archive.pipe(output)
    
    // 添加整个dist目录到压缩包，但排除dist.zip自身
    archive.glob('**/*', {
      cwd: outputPath,
      ignore: 'dist.zip'  // 忽略压缩包自身
    })
    
    // 完成归档
    await archive.finalize()
    
    console.log('打包并压缩完成!')
  } catch (error) {
    console.error('创建压缩包时出错:', error)
  }
}