const { name } = require('./package')
const StyleLintPlugin = require('stylelint-webpack-plugin')

const backEndAddr = 'http://uat.8slan.com'

module.exports = {
  publicPath: '/plutus-vendor/', // 域名下的子目录
  devServer: {
    port: 10000,
    headers: {
      // 解决跨域
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {
      '/api': {
        target: backEndAddr,
        changeOrigin: true,
        ws: true
      }
    }
  },
  configureWebpack: {
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`
    },
    plugins: [new StyleLintPlugin({
      files: ['src/**/*.{vue,html,css,less}'],
      fix: false, // 是否自动修复
      cache: false, // 是否缓存
      emitErrors: true,
      failOnError: false
    })]
  },
  lintOnSave: true // 每次保存进行检测，lint 错误将显示在控制台，而且编译不会失败
}
