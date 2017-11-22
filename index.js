const restify = require('restify')
const jwt = require('restify-jwt-community')
const mongoose = require('mongoose')
const restifyPlugins = require('restify').plugins
const config = require('./config')
const logger = require('./utils/logger')

const MODULE_ID = 'app:main'

logger.info('%s: initializing', MODULE_ID)

/**
 * Initialize server
 */
let server = restify.createServer()

/**
  * Middleware
  */
server.use(restifyPlugins.jsonBodyParser({ mapParams: true }))
server.use(restifyPlugins.acceptParser(server.acceptable))
server.use(restifyPlugins.queryParser({ mapParams: true }))
server.use(restifyPlugins.fullResponse())

// secure all routes. except /ping
server.use(jwt({ secret: config.JWT_SECRET }).unless({
  path: [
    config.basePath('/ping'),
    config.basePath('/todos')
  ]
}))

// Serve
server.listen(config.PORT, () => {
  // establish connection to mongodb
  mongoose.Promise = global.Promise
  mongoose.connect(config.db.uri, { useMongoClient: true })

  const db = mongoose.connection

  db.on('error', (err) => {
    console.error(err)
    process.exit(1)
  })

  db.once('open', () => {
    // Routes
    require('./routes')(server)

    // Log when ready
    logger.info(`${MODULE_ID} ready. listening on PORT ${config.PORT}`)
  })
})

module.exports = server
