var webpack = require('webpack')

/**
 * @param  {object} cooking - add, remove, _userConfig and config
 * @param  {*} options - custom option
 */
module.exports = function (cooking, options) {
  var config = cooking.config.module.loaders.js
  var test = config.test

  cooking.add('loader.js', {
    test: test,
    include: config.include,
    exclude: config.exclude,
    loaders: ['buble-loader'],
    query: {
      objectAssign: 'Object.assign'
    }
  })

  if (!!require('vue-loader')) {
    cooking.add('vue.loaders.js', 'buble-loader?objectAssign=Object.assign')
  }
}
