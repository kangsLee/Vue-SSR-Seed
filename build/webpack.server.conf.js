const webpack = require('webpack')
const base = require('./webpack.base.conf')

const config = Object.assign({}, base, {
  target: 'node',
  devtool: false,
  entry: './src/server-entry.js',
  resolve: {
    alias: Object.assign({}, base.resolve.alias, {
      // apiで利用するモジュールをserver側とclient側で切り分ける
      'create-api': './create-api-server.js'
    })
  },
  output: Object.assign({}, base.output, {
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2'
  }),
  externals: Object.keys(require('../package.json').dependencies),
  plugins: base.plugins.concat([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    })
  ])
})

module.exports = config
