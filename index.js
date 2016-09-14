/**
 * @param  {object} cooking - add, remove, _userConfig and config
 * @param  {*} options - custom option
 */
module.exports = function (cooking, options) {
  cooking.add('loader.js', {
    test: /\.(jsx?|babel|es6)$/,
    include: process.cwd(),
    exclude: /node_modules|bower_components/,
    loaders: ['buble-loader'],
    query: {
      objectAssign: 'Object.assign'
    }
  })
};
