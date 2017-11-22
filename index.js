const jwt = require('restify-jwt-community')
const restify = require('restify')
const plugins = require('restify').plugins
const config = require('./config')
const logger = require('./utils/logger')

const MODULE_ID = 'app:main'

logger.info('%s: initializing', MODULE_ID)

let server = restify.createServer()
server.use(plugins.bodyParser())

let jwtConfig = {
  secret: config.JWT_SECRET
}

// secure all routes. except /ping
server.use(jwt(jwtConfig).unless({
  path: [
    config.basePath('/ping'),
    config.basePath('/register')
  ]
}))

// Routes
require('./routes')(server)

// Serve
server.listen(config.PORT)
logger.info('%s: ready. listening on PORT ', MODULE_ID, config.PORT)

module.exports = server
