const { request } = require('../../../modules/helpers')
const keys = require('../../../config/keys')
const queryString = require('../../../utils/queryString')

const key = keys.BING_KEY_1

const host = 'api.cognitive.microsoft.com'
const path = '/bing/v7.0/news/search'

const webSearch = function (opts) {
  const defaults = {
    count: 10,
    offset: 0,
    mkt: 'en-us'
  }

  let options = Object.assign({}, defaults, opts)

  if (opts.searchTerm) {
    options.q = opts.searchTerm
  }

  let requestParams = {
    type: 'https:',
    method: 'GET',
    hostname: host,
    path: path + queryString(options),
    headers: {
      'Ocp-Apim-Subscription-Key': key
    }
  }

  return request(requestParams)
}

module.exports = (searchTerm) => {
  return webSearch(searchTerm)
}
