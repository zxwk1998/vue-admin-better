const path = require('path')
const { Configuration, DefinePlugin } = require('@rspack/core')
const HtmlRspackPlugin = require('html-rspack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const { publicPath, assetsDir, outputDir, title, devPort } = require('./src/config')
const dayjs = require('dayjs')
const time = dayjs().format('YYYY-M-D HH:mm:ss')
const fs = require('fs-extra')

// 设置环境变量
process.env.VUE_APP_TITLE = title || 'vue-admin-better'
process.env.VUE_APP_UPDATE_TIME = time
process.env.BASE_URL = publicPath
// 删除这一行，避免覆盖rspack.js中设置的值
// process.env.NODE_ENV = process.env.NODE_ENV || 'development'
process.env.VUE_APP_MOCK_ENABLE = 'true' // 启用mock
process.env.VUE_APP_AUTHOR = 'vue-admin-better' // 设置作者

const resolve = (dir) => path.join(__dirname, dir)
// 定义一个模式变量，避免冲突
const mode = process.env.NODE_ENV || 'development'

/**
 * @type {Configuration}
 */
module.exports = {
  mode: mode,
  context: __dirname,
  entry: {
    app: './src/main.js',
  },
  output: {
    path: resolve(outputDir),
    publicPath: publicPath,
    filename: 'js/[name].[contenthash:8].js',
    chunkFilename: 'js/[name].[contenthash:8].js',
    assetModuleFilename: `${assetsDir}/[name].[hash][ext][query]`,
  },
  // 增加性能提示配置
  performance: {
    // 提高阈值以减少警告
    maxEntrypointSize: 3000000, // 3MB
    maxAssetSize: 1000000, // 1MB
    // 只在生产环境显示性能警告
    hints: mode === 'production' ? 'warning' : false,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false,
              },
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@vue/cli-plugin-babel/preset'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              additionalData: (content, loaderContext) => {
                const { resourcePath, rootContext } = loaderContext
                const relativePath = path.relative(rootContext, resourcePath)
                if (relativePath.replace(/\\/g, '/') !== 'src/styles/variables.scss') {
                  return `@import "~@/styles/variables.scss";${content}`
                }
                return content
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 10KB
          },
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024, // 增加到30KB
          },
        },
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
      vue$: 'vue/dist/vue.esm.js',
      path: 'path-browserify',
      fs: false,
    },
    fallback: {
      path: require.resolve('path-browserify'),
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new DefinePlugin({
      // 完全移除可能引起冲突的NODE_ENV定义，让rspack.js来处理
      'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL),
      'process.env.VUE_APP_TITLE': JSON.stringify(process.env.VUE_APP_TITLE),
      'process.env.VUE_APP_MOCK_ENABLE': JSON.stringify(process.env.VUE_APP_MOCK_ENABLE),
      'process.env.VUE_APP_AUTHOR': JSON.stringify(process.env.VUE_APP_AUTHOR),
      'process.env.VUE_APP_UPDATE_TIME': JSON.stringify(process.env.VUE_APP_UPDATE_TIME),
    }),
    new HtmlRspackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      title: title || 'vue-admin-better',
      inject: 'body',
      templateParameters: {
        BASE_URL: publicPath,
        VUE_APP_TITLE: process.env.VUE_APP_TITLE,
        VUE_APP_AUTHOR: process.env.VUE_APP_AUTHOR,
      },
      minify:
        mode === 'production'
          ? {
              removeComments: true,
              collapseWhitespace: true,
              removeAttributeQuotes: true,
              collapseBooleanAttributes: true,
              removeScriptTypeAttributes: true,
            }
          : false,
    }),
    // 添加CopyPlugin功能，将public目录下除index.html外的文件复制到dist目录
    {
      apply(compiler) {
        compiler.hooks.afterEmit.tap('CopyPublicFolderPlugin', (compilation) => {
          // 确保目标目录存在
          const targetPath = path.resolve(__dirname, 'dist');
          fs.ensureDirSync(targetPath);
          
          // 复制public目录下的所有文件（除了index.html）
          fs.copySync(
            path.resolve(__dirname, 'public'),
            targetPath,
            {
              filter: (src) => {
                // 不复制index.html文件，因为HtmlRspackPlugin会处理它
                return !src.endsWith('index.html');
              }
            }
          );
        });
      }
    }
  ],
  optimization: {
    splitChunks: {
      automaticNameDelimiter: '-',
      chunks: 'all',
      // 增加maxInitialRequests以允许更多的初始化块
      maxInitialRequests: 6,
      // 减小最小块大小，允许更细粒度的分割
      minSize: 20000,
      cacheGroups: {
        chunk: {
          name: 'vab-chunk',
          test: /[\\/]node_modules[\\/]/,
          minSize: 131072,
          maxSize: 524288,
          chunks: 'async',
          minChunks: 2,
          priority: 10,
        },
        vue: {
          name: 'vue',
          test: /[\\/]node_modules[\\/](vue(.*)|core-js)[\\/]/,
          chunks: 'initial',
          priority: 20,
        },
        elementUI: {
          name: 'element-ui',
          test: /[\\/]node_modules[\\/]element-ui(.*)[\\/]/,
          priority: 30,
        },
        // 单独拆分常用工具库
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/](lodash|axios|qs|dayjs)[\\/]/,
          chunks: 'all',
          priority: 35,
        },
        // 拆分样式资源
        styles: {
          name: 'styles',
          test: /\.(css|scss)$/,
          chunks: 'all',
          enforce: true,
          priority: 40,
        },
        extra: {
          name: 'vab-layouts',
          test: resolve('src/layouts'),
          priority: 40,
        },
      },
    },
    // 添加压缩配置
    minimize: mode === 'production',
    // 如果是生产环境，增加tree shaking
    usedExports: mode === 'production',
  },
  devServer: {
    hot: true,
    // 修改端口，避免冲突
    port: 8090,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    open: {
      target: ['http://localhost:8090'],
    },
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error('dev-server is not defined')
      }

      if (process.env.VUE_APP_MOCK_ENABLE === 'true') {
        const mockServer = require('./mock/index')
        mockServer(devServer.app)
      }

      return middlewares
    },
  },
}