const bing = require('./bing')

module.exports = () => {
  return bing({
    q: 'Top Stories',
    mkt: 'en-gb'
  })
}
