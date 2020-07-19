const { webpackBarName, webpackBanner } = require("zx-layouts");
const path = require("path");
const {
  publicPath,
  assetsDir,
  outputDir,
  lintOnSave,
  transpileDependencies,
  title,
  abbreviation,
  devPort,
  providePlugin,
  build7z,
} = require("./src/config/settings");
const { version, author } = require("./package.json");
const Webpack = require("webpack");
const WebpackBar = require("webpackbar");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const dayjs = require("dayjs");
const date = new dayjs().format("YYYY_M_D");
const time = new dayjs().format("YYYY-M-D HH:mm:ss");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = ["html", "js", "css", "svg"];
process.env.VUE_APP_TITLE = title || "vue-admin-beautiful";
process.env.VUE_APP_AUTHOR = author || "chuzhixin";
process.env.VUE_APP_UPDATE_TIME = time;
process.env.VUE_APP_VERSION = version;
function resolve(dir) {
  return path.join(__dirname, dir);
}

function mockServer() {
  if (process.env.NODE_ENV === "development") {
    const mockServer = require("./mock/mockServer.js");
    return mockServer;
  } else {
    return "";
  }
}

module.exports = {
  publicPath,
  assetsDir,
  outputDir,
  lintOnSave,
  transpileDependencies,
  devServer: {
    hot: true,
    port: devPort,
    open: true,
    noInfo: false,
    overlay: {
      warnings: true,
      errors: true,
    },
    after: mockServer(),
  },
  configureWebpack() {
    return {
      resolve: {
        alias: {
          "@": resolve("src"),
          "^": resolve("src/components"),
        },
      },
      plugins: [
        new Webpack.ProvidePlugin(providePlugin),
        new WebpackBar({
          name: webpackBarName,
        }),
      ],
    };
  },
  chainWebpack(config) {
    /* config.plugins.delete("preload");
    config.plugins.delete("prefetch"); */
    config.module
      .rule("svg")
      .exclude.add(resolve("src/remixIcon"))
      .add(resolve("src/colorfulIcon"))
      .end();
    config.module
      .rule("remixIcon")
      .test(/\.svg$/)
      .include.add(resolve("src/remixIcon"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({ symbolId: "remix-icon-[name]" })
      .end();
    config.module
      .rule("colorfulIcon")
      .test(/\.svg$/)
      .include.add(resolve("src/colorfulIcon"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({ symbolId: "colorful-icon-[name]" })
      .end();
    config.when(process.env.NODE_ENV === "development", (config) => {
      config.devtool("source-map");
    });
    config.when(process.env.NODE_ENV !== "development", (config) => {
      config.performance.set("hints", false);
      config.devtool("none");
      config.optimization.splitChunks({
        chunks: "all",
        cacheGroups: {
          libs: {
            name: "chunk-libs",
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: "initial",
          },
          elementUI: {
            name: "chunk-elementUI",
            priority: 20,
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/,
          },
          fortawesome: {
            name: "chunk-fortawesome",
            priority: 20,
            test: /[\\/]node_modules[\\/]_?@fortawesome(.*)/,
          },
          commons: {
            name: "chunk-commons",
            test: resolve("src/components"),
            minChunks: 3,
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      });
      config
        .plugin("banner")
        .use(Webpack.BannerPlugin, [`${webpackBanner}${time}`])
        .end();
      config
        .plugin("compression")
        .use(CompressionWebpackPlugin, [
          {
            filename: "[path].gz[query]",
            algorithm: "gzip",
            test: new RegExp(
              "\\.(" + productionGzipExtensions.join("|") + ")$"
            ),
            threshold: 8192,
            minRatio: 0.8,
          },
        ])
        .end();
      config.module
        .rule("images")
        .use("image-webpack-loader")
        .loader("image-webpack-loader")
        .options({
          bypassOnDebug: true,
        })
        .end();
    });

    if (build7z) {
      config.when(process.env.NODE_ENV === "production", (config) => {
        config
          .plugin("fileManager")
          .use(FileManagerPlugin, [
            {
              onEnd: {
                delete: [`./${outputDir}/video`, `./${outputDir}/data`],
                archive: [
                  {
                    source: `./${outputDir}`,
                    destination: `./${outputDir}/${abbreviation}_${outputDir}_${date}.7z`,
                  },
                ],
              },
            },
          ])
          .end();
      });
    }
  },
  runtimeCompiler: true,
  productionSourceMap: false,
  css: {
    requireModuleExtension: true,
    sourceMap: true,
    loaderOptions: {
      scss: {
        /*sass-loader 8.0语法 */
        //prependData: '@import "~@/styles/variables.scss";',

        /*sass-loader 9.0写法，感谢github用户 shaonialife*/
        additionalData(content, loaderContext) {
          const { resourcePath, rootContext } = loaderContext;
          const relativePath = path.relative(rootContext, resourcePath);
          if (
            relativePath.replace(/\\/g, "/") !== "src/styles/variables.scss"
          ) {
            return '@import "~@/styles/variables.scss";' + content;
          }
          return content;
        },
      },
    },
  },
};
