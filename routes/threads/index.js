const config = require('../../config')

module.exports = (server) => {
  server.get({ path: config.basePath('/threads'),
    version: '1.0.0' }, require('./v1'))
}
