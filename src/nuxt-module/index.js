const defaultOptions = require('./options')
const path = require('path')

export default function (moduleOptions = {}) {
  const options = Object.assign({}, defaultOptions, this.options.share, moduleOptions)

  this.addPlugin({
    src: path.resolve(__dirname, 'nuxt.share.plugin.js'),
    fileName: 'share.plugin.js',
    options
  })
}
