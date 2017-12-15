const https = require('https')
const keys = require('../../../config/keys')
const queryString = require('../../../utils/queryString')

const key = keys.BING_KEY_1

const host = 'api.cognitive.microsoft.com'
const path = '/bing/v7.0/news/search'

const responseHandler = function (response) {
  let body = ''

  response.on('data', function (d) {
    body += d
  })

  response.on('end', function () {
    for (var header in response.headers) {
      // header keys are lower-cased by Node.js
      if (header.startsWith('bingapis-') || header.startsWith('x-msedge-')) {
        console.log(header + ': ' + response.headers[header])
      }
    }

    body = JSON.stringify(JSON.parse(body), null, '  ')

    console.log('\nJSON Response:\n')
    console.log(body)
  })

  response.on('error', function (e) {
    console.log('Error: ' + e.message)
  })
}

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
    method: 'GET',
    hostname: host,
    path: path + queryString(options),
    headers: {
      'Ocp-Apim-Subscription-Key': key
    }
  }

  let req = https.request(requestParams, responseHandler)
  req.end()
}

module.exports = (searchTerm) => {
  webSearch(searchTerm)
}
