var webpack = require('webpack')
var isNextWebpack = false
try {
  isNextWebpack = require('cooking/util/check').isNextWebpack
} catch(_) {}

/**
 * @param  {object} cooking - add, remove, _userConfig and config
 * @param  {*} options - custom option
 */
module.exports = function (cooking, options) {
  if (!isNextWebpack) throw Error('[cooking-buble] need webpack 2');

  var config = cooking.config.module.loaders.js
  var test = config.test
  var loader = {
    test: test,
    include: config.include,
    exclude: config.exclude,
    loaders: ['buble-loader'],
    query: {
      objectAssign: 'Object.assign'
    }
  }


  if (!!require('vue-loader')) {
    cooking.add('vue.loaders.js', 'buble-loader?objectAssign=Object.assign&jsx=h')
    loader.query.jsx='h'
  }
  cooking.add('loader.js', loader)
}
