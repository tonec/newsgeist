const bing = require('./bing')

module.exports = () => {
  bing({
    q: 'Top Stories',
    mkt: 'en-gb'
  })
}
