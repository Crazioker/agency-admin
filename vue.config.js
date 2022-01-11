const webpack = require("webpack");
const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const publicPath = process.env.VUE_APP_PUBLIC_PATH + '/'
const cdn = {
  css: [
  ],
  js: [
    publicPath + 'cdn/vue.min.js',
    publicPath + 'cdn/echarts.min.js',
    publicPath + 'cdn/elementui.min.js',
    publicPath + 'cdn/jquery.min.js',
  ]
}

module.exports = {
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  outputDir: "agency-admin",
  productionSourceMap: false,
  devServer: {
    port: '9090',
    // proxy: {}
  },
  css: {
    extract: true,
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-pxtorem")({
            // 把px单位换算成rem单位
            rootValue: 16, // 换算的基数(设计图750的根字体为32)
            propList: ["*"],
          }),
        ],
      },
    },
  },
  configureWebpack: (config) => {
    config.externals = {
      'vue': 'Vue',
      'echarts': 'echarts',
      'element-ui': 'ELEMENT',
      'jquery': 'jQuery',
    }
    config.plugins.push(
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 5,
      })
    );
    config.plugins.push(
      new UglifyJsPlugin(
        {
          uglifyOptions: {
            //生产环境自动删除console
            compress: {
              drop_debugger: true,
              drop_console: true,
              pure_funcs: ['console.log']
            }
          },
          parallel: true,
          cache: true
        })
    );
    //启用gizp压缩
    config.plugins.push(
      new CompressionPlugin({
        filename: '[path].gz[query]', // 提示compression-webpack-plugin@3.0.0的话asset改为filename
        algorithm: 'gzip',
        test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      })
    );
  },
  chainWebpack: (config) => {
    // svg-sprite-loader配置
    const svgRule = config.module.rule('svg')
    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear()
    svgRule
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, './src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
    const fileRule = config.module.rule('file')
    fileRule.uses.clear()
    fileRule
      .test(/\.svg$/)
      .exclude.add(path.resolve(__dirname, './src/icons'))
      .end()
      .use('file-loader')
      .loader('file-loader');

    config.plugin('html')
      .tap(args => {
        args[0].cdn = cdn;
        return args;
      });
  },
};
